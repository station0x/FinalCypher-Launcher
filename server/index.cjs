// 6210-6221 unassigned ports
require('dotenv').config()
let app = require('./http-server.cjs');
const WebSocket = require("ws");

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit()

const path = require('path');
const os = require("os");
const fs = require('fs');
const http = require("http");


const serverPort = 6212;
const websocketPort = 6213;
const server = http.createServer();
const websocketServer = new WebSocket.Server({ server });
const Downloader = require("nodejs-file-downloader");

const root = (os.platform == "win32") ? process.cwd().split(path.sep)[0] : "/"
const szxDir = root + `\\Station Zero X Games`
const fcDir = szxDir + `\\FinalCypher`

if(!fs.existsSync(szxDir)) {
    fs.mkdirSync(szxDir, { recursive: true });
}

websocketServer.on("connection", (webSocketClient) => {
    console.log(`Client connected at ${new Date}`)
    // send feedback to the incoming connection
    webSocketClient.on('message', async (message) => {
            message = "" + message // weird, but works!
            if(message == 'downloadClient') {
                console.log('downloadClient')
                let assets = (await getClientReleaseAssets()).data.assets
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
                                webSocketClient.send(JSON.stringify({ totalSize, totalDownloaded }))
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
                        webSocketClient.send(JSON.stringify({ error}))
                    }
                }
                webSocketClient.send(JSON.stringify({ assetsURL, totalSize }))
            } else if(message == 'updateClient') {
                
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
