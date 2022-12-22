<template>
    <div>
        <Logo v-if="splash"/>
        <section v-show="!splash" id="fc-home" :style="randCover()" class="h-screen dark:bg-neutral-900">
            <div class="grid h-5/6 grid-cols-10">
                <!-- Create account -->
                <div class="flex col-span-7 mt-20 px-10 items-center justify-left ml-24 mb-24 py-6 lg:py-0 sm:px-0">
                    <div class="absolute top-16 mb-6 cursor-pointer hover:bg-neutral-700  w-[45px] h-[45px] bg-neutral-800 rounded-lg p-2.5">
                        <svg class="text-neutral-400 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path></svg>
                    </div>
                    <a href="#" class="flex text-2xl font-semibold text-white">
                        <img class="w-[300px]" src="./../../assets/img/fc.svg" />
                    </a>
                </div> 
                <div class="flex col-span-3 items-center justify-center px-4 py-6 bg-primary-600 lg:py-0 sm:px-0">
                    <!-- <div class="max-w-md xl:max-w-xl"> -->
                        <div class="grid w-full h-screen grid-cols-10">
                            <div class="flex col-span-8"></div>
                            <div class="grid grid-rows-10 gap-4 col-span-2 justify-center">
                                <div class="row-span-1 self-start relative top-16">
                                    <div @click="toggleDropdown" class="cursor-pointer hover:bg-neutral-700 w-[45px] h-[45px] bg-neutral-800 rounded-lg p-2.5">
                                        <svg class="text-neutral-400 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clip-rule="evenodd"></path></svg>
                                    </div>
                                </div>
                                <div class="row-span-7 self-center">
                                </div>
                                <div class="row-span-1 self-center top-16 relative">
                                    <div class="mb-6 cursor-pointer hover:bg-neutral-700  w-[45px] h-[45px] bg-neutral-800 rounded-lg p-2.5">
                                        <svg class="text-neutral-400 w-6 h-6" fill="currentColor" width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.1367 8.62109C19.8398 8.09375 20.4727 7.46094 20.9648 6.72266C20.332 7.00391 19.5938 7.21484 18.8555 7.28516C19.6289 6.82812 20.1914 6.125 20.4727 5.24609C19.7695 5.66797 18.9609 5.98438 18.1523 6.16016C17.4492 5.42188 16.5 5 15.4453 5C13.4062 5 11.7539 6.65234 11.7539 8.69141C11.7539 8.97266 11.7891 9.25391 11.8594 9.53516C8.80078 9.35938 6.05859 7.88281 4.23047 5.66797C3.91406 6.19531 3.73828 6.82812 3.73828 7.53125C3.73828 8.79688 4.37109 9.92188 5.39062 10.5898C4.79297 10.5547 4.19531 10.4141 3.70312 10.1328V10.168C3.70312 11.9609 4.96875 13.4375 6.65625 13.7891C6.375 13.8594 6.02344 13.9297 5.70703 13.9297C5.46094 13.9297 5.25 13.8945 5.00391 13.8594C5.46094 15.3359 6.83203 16.3906 8.44922 16.4258C7.18359 17.4102 5.60156 18.0078 3.87891 18.0078C3.5625 18.0078 3.28125 17.9727 3 17.9375C4.61719 18.9922 6.55078 19.5898 8.66016 19.5898C15.4453 19.5898 19.1367 14 19.1367 9.11328C19.1367 8.9375 19.1367 8.79688 19.1367 8.62109Z" fill="#A3A3A3"/>
                                        </svg>
                                    </div>
                                    <div class="mb-6 cursor-pointer hover:bg-neutral-700  w-[45px] h-[45px] bg-neutral-800 rounded-lg p-2.5">
                                        <svg class="text-neutral-400 w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.5374 11.8277C13.5374 15.5984 10.5069 18.6552 6.76884 18.6552C3.03073 18.6552 0 15.5977 0 11.8277C0 8.05767 3.0305 5 6.76884 5C10.5072 5 13.5374 8.05698 13.5374 11.8277Z" fill="#A3A3A3"/>
                                        <path d="M20.9627 11.8277C20.9627 15.377 19.4474 18.2554 17.5783 18.2554C15.7091 18.2554 14.1938 15.377 14.1938 11.8277C14.1938 8.27834 15.7089 5.3999 17.578 5.3999C19.4472 5.3999 20.9625 8.27742 20.9625 11.8277" fill="#A3A3A3"/>
                                        <path d="M24 11.8276C24 15.0069 23.4672 17.5858 22.8097 17.5858C22.1522 17.5858 21.6196 15.0076 21.6196 11.8276C21.6196 8.64758 22.1525 6.06934 22.8097 6.06934C23.467 6.06934 24 8.64735 24 11.8276Z" fill="#A3A3A3"/>
                                        </svg>
                                    </div>
                                    <div class="mb-6 cursor-pointer hover:bg-neutral-700  w-[45px] h-[45px] bg-neutral-800 rounded-lg p-2.5">
                                        <svg class="text-neutral-400 w-6 h-6" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M20.317 4.15557C18.7873 3.45369 17.147 2.93658 15.4319 2.6404C15.4007 2.63469 15.3695 2.64897 15.3534 2.67754C15.1424 3.05276 14.9087 3.54225 14.7451 3.927C12.9004 3.65083 11.0652 3.65083 9.25832 3.927C9.09465 3.5337 8.85248 3.05276 8.64057 2.67754C8.62449 2.64992 8.59328 2.63564 8.56205 2.6404C6.84791 2.93563 5.20756 3.45275 3.67693 4.15557C3.66368 4.16129 3.65233 4.17082 3.64479 4.18319C0.533392 8.83155 -0.31895 13.3657 0.0991801 17.8436C0.101072 17.8655 0.11337 17.8864 0.130398 17.8997C2.18321 19.4073 4.17171 20.3225 6.12328 20.9291C6.15451 20.9386 6.18761 20.9272 6.20748 20.9015C6.66913 20.2711 7.08064 19.6063 7.43348 18.9073C7.4543 18.8664 7.43442 18.8178 7.39186 18.8016C6.73913 18.554 6.1176 18.2521 5.51973 17.9093C5.47244 17.8816 5.46865 17.814 5.51216 17.7816C5.63797 17.6873 5.76382 17.5893 5.88396 17.4902C5.90569 17.4721 5.93598 17.4683 5.96153 17.4797C9.88928 19.273 14.1415 19.273 18.023 17.4797C18.0485 17.4674 18.0788 17.4712 18.1015 17.4893C18.2216 17.5883 18.3475 17.6873 18.4742 17.7816C18.5177 17.814 18.5149 17.8816 18.4676 17.9093C17.8697 18.2588 17.2482 18.554 16.5945 18.8006C16.552 18.8168 16.533 18.8664 16.5538 18.9073C16.9143 19.6054 17.3258 20.2701 17.7789 20.9005C17.7978 20.9272 17.8319 20.9386 17.8631 20.9291C19.8241 20.3225 21.8126 19.4073 23.8654 17.8997C23.8834 17.8864 23.8948 17.8664 23.8967 17.8445C24.3971 12.6676 23.0585 8.17064 20.3482 4.18414C20.3416 4.17082 20.3303 4.16129 20.317 4.15557ZM8.02002 15.117C6.8375 15.117 5.86313 14.0313 5.86313 12.6981C5.86313 11.3648 6.8186 10.2791 8.02002 10.2791C9.23087 10.2791 10.1958 11.3743 10.1769 12.6981C10.1769 14.0313 9.22141 15.117 8.02002 15.117ZM15.9947 15.117C14.8123 15.117 13.8379 14.0313 13.8379 12.6981C13.8379 11.3648 14.7933 10.2791 15.9947 10.2791C17.2056 10.2791 18.1705 11.3743 18.1516 12.6981C18.1516 14.0313 17.2056 15.117 15.9947 15.117Z" fill="#A3A3A3"/>
                                        </svg>
                                    </div>
                                </div>  
                            </div>
                        </div>
                    <!-- </div> -->
                </div>              
            </div>
            <!-- <div id="main-footer" class="flex w-screen h-1/6 justify-left items-center">
                <PlayBtn @click="openFC" />
            </div> -->
            <div id="main-footer" class="w-full h-1/6">
                <PlayBtn v-if="$store.state.readyToPlay" @click="openFC" />
                <InstallProgress v-else/>
                <!-- <div class="bg-brand-cold relative top-0 bg-opacity-30 text-xs font-medium text-blue-100 text-center h-full animate-pulse" style="width: 25%"></div> -->
                <!-- <div class="text-xs font-medium text-blue-100 text-left p-0.5" style="width: 100%"> 25%</div> -->
            </div>
            <!-- Dropdown -->
            <div :class="isDropdownOpen ? '' : 'hidden'" class="absolute top-16  right-20 z-10 w-44 bg-white rounded divide-y divide-neutral-200 shadow dark:bg-neutral-800 dark:divide-neutral-700">
                <div class="py-3 px-4 text-sm uppercase text-neutral-900 dark:text-neutral-400">
                <div class="truncate">{{ user.displayName }}</div>
                </div>
                <ul class="text-sm tracking-wide text-neutral-700 dark:text-neutral-400" aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton">
                <li>
                    <a class="block cursor-pointer uppercase py-2.5 px-4 hover:bg-neutral-100 dark:hover:bg-neutral-700  dark:hover:text-white">Report a bug</a>
                </li>
                <!-- <li>
                    <a href="#" class="block py-2 px-4 hover:bg-neutral-100 dark:hover:bg-[rgba(0,0,0,.15)] dark:hover:text-white">Settings</a>
                </li>
                <li>
                    <a href="#" class="block py-2 px-4 hover:bg-neutral-100 dark:hover:bg-[rgba(0,0,0,.15)] dark:hover:text-white">Earnings</a>
                </li> -->
                </ul>
                <div class="">
                <a @click="signOut" class="block cursor-pointer py-2.5 px-4 uppercase text-sm text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700  dark:text-neutral-400 dark:hover:text-white">Sign out</a>
                <a @click="close" class="block cursor-pointer py-2.5 px-4 uppercase text-sm text-neutral-700 hover:bg-neutral-100 dark:hover:bg-neutral-700  dark:text-neutral-400 dark:hover:text-white">Exit</a>
                </div>
            </div>
        </section>
    </div>

</template>

<script>
import { appWindow } from '@tauri-apps/api/window'
import { Command, open } from '@tauri-apps/api/shell'
import { invoke } from '@tauri-apps/api/tauri'
import { auth } from '../../../firebaseConfig'
import PlayBtn from '../../components/PlayBtn.vue'
import InstallProgress from '../../components/InstallProgress.vue'
import axios from 'axios'
import { checkUpdate, installUpdate } from '@tauri-apps/api/updater'
import { relaunch } from '@tauri-apps/api/process'
import Logo from '../Logo.vue'
// import { getAuth } from '@firebase/auth'

export default {
    data() {
        return {
            backgrounds: [
                "atropa",
                "zodwa"
            ],
            isDropdownOpen: false,
            splash: true
        }
    },
    components: {
        PlayBtn,
        InstallProgress,
        Logo
    },
    computed: {
        user() {
            if(this.$store.state.user) return this.$store.state.user
        },
        clicks() {
            return this.$store.state.clicked
        },
    },
    methods: {
        signOut() {
            this.$store.dispatch('logOut')
            window.open('/', '_self')
        },
        async close() {
            await appWindow.close()
        },
        randCover() {
            return `background-image: url('/cover-${this.backgrounds[Math.floor(Math.random()*this.backgrounds.length)]}.png')`
        },
        async openFC() {
            let IdToken = ''
            let { fcDir } = (await axios.get('http://localhost:6212/clientExists')).data
            auth.currentUser.getIdToken().then(async function(idToken) {
                IdToken = idToken
                let execCommand = `${fcDir}/FinalCypher.exe`
                let authCommand = 'authToken=' + IdToken
                console.log(execCommand, idToken)
                // new Command('fc-start', [authCommand]).execute()
                // await open(``);
                try {
                    invoke('open_exe', { exePath: execCommand, authToken: authCommand })
                } catch(err) {
                    console.log(er)
                }

            }).catch(function(error) {
                console.log(error)
            });
        },
        toggleDropdown() {
                if(this.isDropdownOpen) {
                    this.isDropdownOpen = false
                } else {
                    this.isDropdownOpen = true
                    this.$store.commit("clicked", 0)
                }
            },
        onClickApp() {
            this.$store.commit("clicked")                
        },
        zeroClicks() {
            this.$store.commit("clicked", 0) 
        }
    },
    watch: {
        clicks() {
            if(this.isDropdownOpen && this.$store.state.clicked === 2) this.isDropdownOpen = false
        }
    },
    async created() {
        window.addEventListener('click', this.onClickApp)
        try {
            const { shouldUpdate, manifest } = await checkUpdate()
            if (shouldUpdate) {
            // display dialog
            console.log(manifest)
            await invoke('resize', { w: 465 , h: 590 })
            this.$router.push({ name: 'Updater' })
            //   await installUpdate()
            // install complete, restart the app
            //   await relaunch()
            } else {
                let self = this
                setTimeout(()=> {
                    self.splash = false
                }, 4000)
            }
        } catch (error) {
            console.log(error)
        }
    },
    destroyed() {
        window.removeEventListener('click', this.onClickApp)
    },
}

</script>

<style>
#fc-home {
    /* background-color: rgb(23,23,23); */
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat !important;
}
#main-footer {
    background: linear-gradient(107.35deg, rgba(14, 14, 14, 0.405) 15.06%, rgba(41, 41, 41, 0.5) 100.35%);
}
#play-btn {
    background: linear-gradient(99.85deg, #19e9a0 1.39%, rgba(71, 255, 194, 0.568) 112.45%);
    filter: drop-shadow(0 0em 2em #19e9a081);
}
#play-btn:hover {
    background: linear-gradient(99.85deg, #58ffc5 1.39%, rgba(71, 255, 194, 0.4) 112.45%);  
    filter: drop-shadow(0 0em 1.5em #01E898);
}
#play-icon {
    color: rgba(0,0,0,.9);
}
/* #play-btn:hover #play-icon {
    width: 38px;
    height: 38px;
    color: black;
} */
#dropdownAvatarName {
    text-transform: uppercase;
}
</style>