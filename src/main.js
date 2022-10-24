import { createApp } from "vue"
import App from "./App.vue"
import router from './router'
import { invoke } from '@tauri-apps/api/tauri'


// tailwind
import './index.css'
import 'flowbite'
// custom css
import "./style.css"

// disable right click
// document.addEventListener('contextmenu', event => event.preventDefault());

// dark mode
document.documentElement.classList.add('dark')

// With the Tauri global script:
// const invoke = window.__TAURI__.invoke

document.addEventListener('DOMContentLoaded', async () => {
    await invoke("close_splashscreen");
})

const app = createApp(App)
app.use(router)
app.mount('#app')



// splash screen logic
// {
//     "fullscreen": false,
//     "height": 800,
//     "resizable": false,
//     "title": "FinalCypher",
//     "width": 1500,
//     "decorations": false,
//     "center": true,
//     "visible": false
//   },
//   {
//     "width": 465,
//     "height": 590,
//     "decorations": false,
//     "center": true,
//     "resizable": false,
//     "url": "splashscreen.html",
//     "label": "splashscreen"
//   }