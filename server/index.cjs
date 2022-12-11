// 6210-6221 unassigned ports
const http = require("http");
const WebSocket = require("ws");
let app = require('./http-server.cjs');
var request = require('request');
var progress = require('request-progress');
const { Octokit } = require("@octokit/rest");
const octokit = new Octokit()

const serverPort = 6212;
const websocketPort = 6213;
const server = http.createServer();
const websocketServer = new WebSocket.Server({ server });
// server.on('request', app);

websocketServer.on("connection", (webSocketClient) => {
    // send feedback to the incoming connection
    webSocketClient.on('message', async (message) => {
            message = "" + message // weird, but works!
            if(message == 'downloadClient') {
                let assets = (await getClientReleaseAssets()).data.assets
                let totalSize = 0
                let assetsURL = []
                for(let asset in assets) {
                    totalSize += assets[asset].size
                    assetsURL.push(assets[asset].browser_download_url)
                }
                
                webSocketClient.send(JSON.stringify({ assetsURL, totalSize }))
            // setInterval(() => {
            //   let time = new Date();
            //   webSocketClient.send("The time is: " + time.toTimeString() + ' --- ' + process.cwd());
            // }, 1000);
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