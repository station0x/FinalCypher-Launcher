import { createApp } from "vue"
import App from "./App.vue"
import router from './router'
import store from './store'
import { invoke } from '@tauri-apps/api/tauri'
import { auth } from '../firebaseConfig'
let isProd = import.meta.env.MODE == "development" ? false : true
// tailwind
import './index.css'
import 'flowbite'
// custom css
import "./style.css"

// dark mode
document.documentElement.classList.add('dark')

// With the Tauri global script:
// const invoke = window.__TAURI__.invoke

// disable dev mode
if(isProd) {
    // disable conext-menu and reloads
    // document.addEventListener('contextmenu', event => event.preventDefault());
    // document.addEventListener('keydown', (e) => {
    //     e = e || window.event;
    //     if(e.keyCode == 116 || (e.ctrlKey && e.keyCode == 82)){
    //         e.preventDefault();
    //     }
    // });
}
// document.addEventListener('DOMContentLoaded', async () => {
//     await invoke("close_splashscreen");
// })

// auth.onAuthStateChanged

auth.onAuthStateChanged(user => {
    if(user) {
        window.localStorage.setItem('user', user)
        store.commit('SET_USER', user)
        if(user.emailVerified) {
            store.commit('SET_VERIFIED', true)
            router.push({ name: 'FinalCypher' })
        } else {
            let polling = setInterval(() => {
                user.reload()
                user.getIdToken(true)
                console.log(user.emailVerified)
                if(user.emailVerified) {
                    clearInterval(polling)
                    window.localStorage.setItem('user', user)
                    store.commit('SET_USER', user)
                    store.commit('SET_VERIFIED', true)
                    window.open('/', "_self")
                    router.push({ name: 'FinalCypher' })
                }
            }, 1000)
        }
    } else {
        window.localStorage.removeItem('user')
        store.commit('SET_USER', null)
        router.push({ name: 'Auth' })
    }
    // store.dispatch("fetchUser", user);
});

const app = createApp(App)
app.use(router)
app.use(store)
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