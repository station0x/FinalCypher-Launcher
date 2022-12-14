'use strict';
require('dotenv').config()
const { hashElement } = require('./folder-hash.cjs')
let express = require('express');
var cors = require('cors')

const { Octokit } = require("@octokit/rest");
const octokit = new Octokit()

const fs = require('fs');
const path = require('path');
const os = require("os");
const https = require('https')
const { execa, execaNode } = require("execa");

const root = (os.platform == "win32") ? process.cwd().split(path.sep)[0] : "/"
const szxDir = root + `\\Station Zero X Games`
const fcDir = szxDir + `\\FinalCypher`

let app = express();
app.use(cors({
    origin: ['http://localhost:1420', 'http://127.0.0.1:1420']
}))
// let bodyParser = require('body-parser');
// app.use(bodyParser.json());


// Let's create the regular HTTP request and response
app.get('/', (req, res) => {
    return res.status(200).json({ success: true })
});

app.get('/szxDir', async (req, res) => {
    if(!fs.existsSync(szxDir)) {
        fs.mkdirSync(szxDir, { recursive: true });
    }
    res.status(200).json({ szxDir })
})

app.get('/clientExists', (req, res) => {
    console.log('/clientExists')
    let exists = false
    if (fs.existsSync(fcDir)) {
        exists = true
    }
    return res.status(200).json({ exists })
})

app.get('/getClientTree', async (req, res) => {    
    try {
        // let path = process.cwd()
        // path.split('\\').join('/')
        // basePath = basePath.split('\\').join('/')
        // binary = binary.split('\\').join('/')
        // let { stdout } = await execa('../modules/node-folder-hash/bin/folder-hash', [
        //     fcDir
        // ])
        // console.log(stdout)
        // console.log(`${basePath}/modules/node-folder-hash/bin/folder-hash`, `${basePath}/Client/`)
            // Constructing Local Merkle Tree
        let merkleTree = await constructMerkleTree()
        res.status(200).json({ exists: true, cwd: process.cwd(), tree: merkleTree })
    } catch(err) {
        console.log(err)
        res.status(200).json({ success: false, err, binary })
    }
    // fs.writeFileSync(`localMerkle.json`, tree, "utf-8");
})

// app.get('/isSynced', async (req, res)  => {
//     // Get Release Assets IDs 
//     let respArray = await Promise.all([
//         hashElement('../src-tauri/Windows'),
//         getClientReleaseAssets()
//     ])
//     let latestReleaseData = respArray[1]
//     let releaseAssets = latestReleaseData.data.assets
//     let releaseId = latestReleaseData.data.id
//     let assetsMapping = {}
//     for (let asset in releaseAssets) {
//         assetsMapping[`${releaseAssets[asset].name}`] = releaseAssets[asset].id
//     }
//     // Downloading Remote Merkle Tree  and Read to memory
//     let remoteMerkleTreeURL = (await getReleaseAsset(assetsMapping['merkle.json'])).data.browser_download_url
//     await download(remoteMerkleTreeURL, `${process.cwd()}/remoteMerkle.json`)
//     let remoteTree = JSON.parse(fs.readFileSync(`${process.cwd()}/remoteMerkle.json`, "utf8"))
//     let localTree = respArray[0]
//     // Comparing Local with Remote master hashes
//     let remoteMasterHash = remoteTree.hash
//     let localMasterHash = localTree.hash
//     let synced = false
//     if(remoteMasterHash === localMasterHash) synced = true
//     return res.json({ synced })
// })

/*
* Internal Functions
*/

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


async function getClientReleaseAssets() {
    return (await octokit.rest.repos.getLatestRelease({
        owner: 'station0x',
        repo: 'FC-Client-Binaries'
    }))
}

async function getReleaseAsset(asset_id) {
    return (await octokit.rest.repos.getReleaseAsset({
        owner: 'station0x',
        repo: 'FC-Client-Binaries',
        asset_id
    }))
}

async function constructMerkleTree() {
    return hashElement(fcDir)
}

module.exports = app;