// 6210-6221 unassigned ports
const http = require("http");
const WebSocket = require("ws");
const fs = require('fs');
const https = require('https')
let app = require('./http-server.cjs');
var request = require('request');
var progress = require('request-progress');
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit()

const serverPort = 6212;
const server = http.createServer(app);
const websocketServer = new WebSocket.Server({ server });
server.on('request', app);

websocketServer.on("connection", (webSocketClient) => {
    // send feedback to the incoming connection

    webSocketClient.on('message', async (message) => {
        message = "" + message // weird, but works!
        if(message == 'downloadClient') {
            let assets = (await getClientReleaseAssets()).data.assets
            let totalSize = 0
            let assetsURL = []
            let totalReceived = 0
            for(let asset in assets) {
                totalSize += assets[asset].size
                assetsURL.push(assets[asset].browser_download_url)
            }

            for(let url in assetsURL) {
                let name = assetsURL[url].split('/')
                name = name[name.length-1].split('%40').join('/')
                console.log(name)
                try {
                    await download(assets[url], `${process.cwd()}/Client/${name}`)
                } catch(err) {
                    console.log(err)
                }
                /**
                 * Download a resource from `url` to `dest`.
                 * @param {string} url - Valid URL to attempt download of resource
                 * @param {string} dest - Valid path to save the file.
                 * @returns {Promise<void>} - Returns asynchronously when successfully completed download
                 */
                function download(url, dest) {
                    return new Promise((resolve, reject) => {
                    // Check file does not exist yet before hitting network
                    fs.access(dest, fs.constants.F_OK, (err) => {
                        // if (err === null) reject('File already exists');
                
                        const request = https.get(url, response => {
                            if (response.statusCode === 200) {
                                const file = fs.createWriteStream(dest, { flags: 'w' });
                
                                file.on('finish', () => resolve());
                                file.on('error', err => {
                                    file.close();
                                    if (err.code === 'EEXIST') reject('File already exists');
                                    else fs.unlink(dest, () => reject(err.message)); // Delete temp file
                                });
                                // file.on('progress', callback)
                                response.pipe(file);
                                } else if (response.statusCode === 302 || response.statusCode === 301) {
                                //Recursively follow redirects, only a 200 will resolve.
                                download(response.headers.location, dest).then(() => resolve());
                            } else {
                                reject(`Server responded with ${response.statusCode}: ${response.statusMessage}`);
                            }
                            });
                        
                            request.on('error', err => {
                                reject(err.message);
                            });
                        });
                    });
                }
                // function callback(state) {
                //     console.log(state)
                //     totalReceived += state.received
                //     webSocketClient.send(JSON.stringify({ totalSize, totalReceived, percent: state.percent }))
                // } 
                
                // setInterval(() => {
                //   let time = new Date();
                //   webSocketClient.send("The time is: " + time.toTimeString() + ' --- ' + process.cwd());
                // }, 1000);
            }
        }
    });

});


//start the web server
server.listen(serverPort, () => {
    console.log(`Websocket/HTTPs server started on port ${serverPort}`);
});


async function getClientReleaseAssets() {
    return (await octokit.rest.repos.getLatestRelease({
        owner: 'station0x',
        repo: 'FC-Client-Binaries'
    }))
}


// const options = {
//   folders: { exclude: ['.*', 'node_modules', 'test_coverage'] },
//   files: { include: ['*.Fbx', '*.json', 'png', 'jpg'] },
// };

// hashElement('../src-tauri/Windows')
//   .then(hash => {
//     console.log(hash.toString());
//     console.log('hello')
//   })
//   .catch(error => {
//     return console.error('hashing failed:', error);
//   });"use strict";