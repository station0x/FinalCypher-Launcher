# FinalCypher Launcher Monorepo

Tauri-based cross-native launcher for FinalCypher game. Front-end using Vue/Firebase with Rust back-end. Features includes CI/CD using github actions, Auto-updating using vercel and github releases and Game integrity checks using merkle-hash library. 

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) + [Tauri](https://marketplace.visualstudio.com/items?itemName=tauri-apps.tauri-vscode) + [rust-analyzer](https://marketplace.visualstudio.com/items?itemName=rust-lang.rust-analyzer)

# For best development experience
Run `server/index.cjs` using nodemon `npx nodemon .\index.cjs\` first and then launch the tauri app using `yarn tauri dev`. You should see `Client connected` prompt with the date in the console logger. This allow logging and live reload.
