// const { hashElement } = require('folder-hash');

// // const options = {
// //   folders: { exclude: ['.*', 'node_modules', 'test_coverage'] },
// //   files: { include: ['*.Fbx', '*.json', 'png', 'jpg'] },
// // };

// console.log('Creating a hash over the current folder:');
// hashElement('../src-tauri/Windows')
//   .then(hash => {
//     console.log(hash.toString());
//     console.log('hello')
//   })
//   .catch(error => {
//     return console.error('hashing failed:', error);
//   });"use strict";
// 6210-6221 unassigned ports
const serverPort = 3000;
const express = require("express");
const http = require("http");
const WebSocket = require("ws");

const app = express();
const server = http.createServer(app);
const websocketServer = new WebSocket.Server({ server });

websocketServer.on("connection", (webSocketClient) => {
  // send feedback to the incoming connection
  webSocketClient.send("The time is: ");
  setInterval(() => {
    let time = new Date();
    webSocketClient.send("The time is: " + time.toTimeString() + '/');
  }, 1000);
});

//start the web server
server.listen(serverPort, () => {
  console.log("Websocket server started on port 3000");
});