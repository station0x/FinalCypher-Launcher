// build.js
const exe = require('@angablue/exe');

const build = exe({
    entry: './dist/server.js',
    out: './src-tauri/binaries/fc-core.exe',
    // pkg: ['-C', 'GZip'], // Specify extra pkg arguments
    version: '1.0.0',
    target: 'latest-win-x64',
    icon: './src-tauri/icons/core/icon.ico', // Application icons must be in .ico format
    properties: {
        FileDescription: 'FinalCypher Launcher Core',
        ProductName: 'FinalCypher Launcher Core',
        LegalCopyright: 'Station Zero X'
    }
});

build.then(() => console.log('Packaging completed!'));