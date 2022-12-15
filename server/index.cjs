// 6210-6221 unassigned ports
require('dotenv').config()
let app = require('./http-server.cjs');
const WebSocket = require("ws");

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit({ auth: process.env.FAKE_PAT })

const du = require('du')

const path = require('path');
const os = require("os");
const fs = require('fs');
const http = require("http");

const serverPort = 6212;
const websocketPort = 6213;
const server = http.createServer();
const websocketServer = new WebSocket.Server({ server });
const Downloader = require("nodejs-file-downloader");

console.log('Initialized')
const root = (os.platform == "win32") ? process.cwd().split(path.sep)[0] : "/"
const szxDir = root + `\\Station Zero X Games`
const fcDir = szxDir + `\\FinalCypher`

if(!fs.existsSync(szxDir)) {
    console.log('Home directory not found at root partition, creating one...')
    fs.mkdirSync(szxDir, { recursive: true });
}

websocketServer.on("connection", (webSocketClient) => {
    console.log(`Client connected at ${new Date}`)
    // send feedback to the incoming connection
    webSocketClient.on('message', async (data) => {
            let { message } = JSON.parse(data)
            if(message == 'downloadClient') {
                console.log('downloadClient')

                let { cacheDir } = JSON.parse(data)
                let releaseBody = (await getClientReleaseAssets()).data
                
                let { assets } = releaseBody
                let { name: remoteBatchVersion } = releaseBody
                console.log(remoteBatchVersion)

                // create cached remote version
                if(!fs.existsSync(`${cacheDir}/batchVersionCache.json`)) {
                    fs.writeFileSync(`${cacheDir}/batchVersionCache.json`, JSON.stringify({
                        localVersion: remoteBatchVersion
                    }), "utf-8");
                }

                let totalSize = 0
                let assetsURL = []
                let time = Date.now()

                for(let asset in assets) {
                    totalSize += assets[asset].size
                    let assetArr = []
                    assetArr.push(assets[asset].browser_download_url)
                    assetArr.push(assets[asset].name)
                    assetArr.push(assets[asset].size)
                    assetsURL.push(assetArr)
                }

                let totalDownloaded = 0
                let totalSwap = 0

                for(let asset in assetsURL) {
                    // some crazy fucking string manipulation to format name and pathX
                    let url = assetsURL[asset][0]
                    let name = assetsURL[asset][1]
                    let size = assetsURL[asset][2]
                    name = name.split('@').join('\\')
                    // let basePath = process.cwd() ====================> production
                    let pathX = `${fcDir}\\${name}`
                    console.log(pathX)
                    name = name.split('\\')
                    name = name[name.length-1]
                    pathX = pathX.split('\\')
                    pathX.pop()
                    pathX = pathX.join('\\')
                    let fileDownloaded = 0
                    const downloader = new Downloader({
                        url,
                        directory: pathX,
                        fileName: name,
                        cloneFiles: false,
                        maxAttempts: 3, // failed download repeats
                        onProgress: function (percentage, chunk, remainingSize) {
                            if(remainingSize === 0) {
                                totalDownloaded += totalSwap
                            } else {
                                fileDownloaded = (size - remainingSize)
                                totalSwap = fileDownloaded
                            }
                            let now = Date.now()
                            if(now - time > 1000) {
                                console.log('time now is ', now)
                                console.table(["size", size], ["remainingSize", remainingSize], ["fileDownloaded", fileDownloaded], ["totalSwap", totalSwap])
                                //Gets called with each chunk.
                                console.log("% ", percentage);
                                console.log("Current chunk of data: ", chunk);
                                console.log("Remaining bytes: ", remainingSize);
                                webSocketClient.send(JSON.stringify({ 
                                    totalSize, 
                                    totalDownloaded, 
                                    isUpdating: false,
                                    readyToPlay: false
                                }))
                                time = now
                            }
                            
                        },
                        onError: function (error) {
                            console.log("Error from attempt ", error);
                        },
                    })
                    try {
                        await downloader.download();
                    } catch (error) {
                        console.log(error);
                        webSocketClient.send(JSON.stringify({ error }))
                    }
                }
                webSocketClient.send(JSON.stringify({ assetsURL, totalSize }))
            } else if(message == 'updateClient') {
                console.log('Server-Websocket Handshake Succeeded')
                let { remoteMapping, assetsMapping, localDiffs, releaseAssets, cacheDir, remoteBatchVersion } = JSON.parse(data)
                 
                // check cached remote version
                let localVersionCacheFile = ""
                if(!fs.existsSync(`${cacheDir}/batchVersionCache.json`)) {
                    fs.writeFileSync(`${cacheDir}/batchVersionCache.json`, JSON.stringify({
                        localVersion: remoteBatchVersion
                    }), "utf-8");
                } else {
                    localVersionCacheFile = fs.readFileSync(`${cacheDir}/batchVersionCache.json`)
                }
                let localVersion = (JSON.parse(localVersionCacheFile)).localVersion
                let isUpdating = localVersion === remoteBatchVersion ? false : true
                // console.log(localVersionCacheFile)
                let diffIds = []
                for(let diff in localDiffs) {
                    let diffPath = remoteMapping[localDiffs[diff]]
                    let diffId = assetsMapping[diffPath]
                    diffIds.push(diffId)
                }

                let totalSize = 0
                let time = Date.now()
                let assetsURL = []

                for(let asset in releaseAssets) {
                    asset = releaseAssets[asset]
                    totalSize += asset.size
                    if(diffIds.includes(asset.id)) {
                        let assetArr = []
                        assetArr.push(asset.browser_download_url)
                        assetArr.push(asset.name)
                        assetArr.push(asset.size)
                        assetsURL.push(assetArr)
                    }
                }

                let totalDownloaded = 0
                let dirSize = 0
                if(!isUpdating) {
                    dirSize = await du(fcDir)
                    totalDownloaded += dirSize
                    // totalSize += dirSize
                } 
                let totalSwap = 0

                for(let asset in assetsURL) {
                    // some crazy fucking string manipulation to format name and pathX
                    let url = assetsURL[asset][0]
                    let name = assetsURL[asset][1]
                    let size = assetsURL[asset][2]
                    name = name.split('@').join('\\')
                    // let basePath = process.cwd() ====================> production
                    let pathX = `${fcDir}\\${name}`
                    console.log(pathX)
                    name = name.split('\\')
                    name = name[name.length-1]
                    pathX = pathX.split('\\')
                    pathX.pop()
                    pathX = pathX.join('\\')
                    let fileDownloaded = 0
                    console.log(url)
                    const diffDownloader = new Downloader({
                        url,
                        directory: pathX,
                        fileName: name,
                        cloneFiles: false,
                        maxAttempts: 3, // failed download repeats
                        onProgress: function (percentage, chunk, remainingSize) {
                            if(remainingSize === 0) {
                                totalDownloaded += totalSwap
                            } else {
                                fileDownloaded = (size - remainingSize)
                                totalSwap = fileDownloaded
                            }
                            let now = Date.now()
                            if(now - time > 1000) {
                                console.log('time now is ', now)
                                console.table(["size", size], ["remainingSize", remainingSize], ["fileDownloaded", fileDownloaded], ["totalSwap", totalSwap])
                                //Gets called with each chunk.
                                console.log("% ", percentage);
                                console.log("Current chunk of data: ", chunk);
                                console.log("Remaining bytes: ", remainingSize);
                                webSocketClient.send(JSON.stringify({ 
                                    totalSize, 
                                    totalDownloaded : totalDownloaded + totalSwap,
                                    name,
                                    isUpdating,
                                    dirSize,
                                    readyToPlay: false
                                 }))
                                time = now
                            }
                        },
                        onError: function (error) {
                            console.log("Error from attempt ", error);
                        },
                    })
                    
                    // console.log(diffDownloader)
                    try {
                        await diffDownloader.download();
                    } catch (error) {
                        console.log(error);
                        webSocketClient.send(JSON.stringify({ error }))
                    }
                }
                webSocketClient.send(JSON.stringify({ readyToPlay: true }))
            }
    });

});


//start the web server
app.listen(serverPort, () => {
    console.log(`HTTP server started on port ${serverPort}`);
});

server.listen(websocketPort, () => {
    console.log(`WS server started on port ${websocketPort}`);
})


async function getClientReleaseAssets() {
    return (await octokit.rest.repos.getLatestRelease({
        owner: 'station0x',
        repo: 'FC-Client-Binaries'
    }))
}
