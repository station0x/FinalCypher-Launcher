<template>
    <div>
      <div>
        <!-- <Loader/> -->
      </div>
      <div>
        <Titlebar v-if="isApp"/>
        <!-- <h2 style="color: red" class="bg-neutral-800">{{time}}</h2>
        <h2 style="color: red" class="bg-neutral-800">{{wsError}}</h2>
        <h2 style="color: red" class="bg-neutral-800">{{logs}}</h2> -->
        <router-view></router-view>
        <!-- verification modal -->
        <div v-show="user && !user.emailVerified" ref="verifyModal" id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
          <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
              <div class="relative bg-white rounded-lg shadow dark:bg-neutral-800">
                <div class="p-6 text-center">
                  <svg class="mx-auto mb-4 w-14 h-14 text-neutral-400 dark:text-neutral-200" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clip-rule="evenodd"></path></svg>
                  <h1 class="text-white text-2xl font-Konnect font-bold">Verify Your Email</h1>
                  <h3 class="mb-5 text-base font-normal text-neutral-500 dark:text-neutral-400">An activation link sent to {{ user ? user.email : '' }}. <br/> Check your email & click the link to activate your account.</h3>
                  <button @click="resendVerify" data-modal-toggle="popup-modal" type="button" class="text-black font-semibold bg-brand-cold-500 hover:bg-brand-cold-300 focus:ring-4 focus:outline-none focus:ring-brand-cold-300 dark:focus:ring-brand-cold-800 rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    <span v-if="verificationLoader">
                      <svg class="inline mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg> 
                    </span>
                    Resend Activation Link
                  </button>
                  <button @click="logout()" data-modal-toggle="popup-modal" type="button" class="text-neutral-500 bg-white hover:bg-neutral-100 focus:ring-4 focus:outline-none focus:ring-neutral-200 rounded-lg border border-neutral-200 text-sm font-medium px-5 py-2.5 hover:text-neutral-900 focus:z-10 dark:bg-neutral-700 dark:text-neutral-300 dark:border-neutral-500 dark:hover:text-white dark:hover:bg-neutral-600 dark:focus:ring-neutral-600">Sign Out</button>
                  <h3 class="text-xs mt-5 font-normal text-neutral-500 dark:text-neutral-400">
                    <span>
                      <svg class="inline mr-2 w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-brand-cold-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                          <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                      </svg>
                    </span>
                    Waiting for your confirmation, will sign you in automatically.</h3>
                    <h3 v-if="spamAlert" class="text-xs mt-5 font-normal text-red-500 dark:text-red-400">
                    Too many requests, wait for 30 seconds and request another link.</h3>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
    // This starter template is using Vue 3 <script setup> SFCs
    // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
    import Titlebar from "./components/Titlebar.vue"
    import Loader from "./components/Loader.vue"
    import { sendEmailVerification } from 'firebase/auth'
    import { mapGetters } from "vuex"
    import { appCacheDir } from '@tauri-apps/api/path';
    import { checkUpdate, installUpdate } from '@tauri-apps/api/updater'
    import { listen, TauriEvent } from "@tauri-apps/api/event";
    import { Command } from "@tauri-apps/api/shell";
    import axios from 'axios'

  
    export default {
      data() {
          return {
            modal: undefined,
            verificationLoader: false,
            spamAlert: false,
            logs: '',
            totalSize: 1000,
            totalDownloaded: 500,
            isApp: true,
            connection: undefined,
            downloadSize: undefined,
            time: undefined,
            wsError: undefined,
          }
      },
      components: {
          Titlebar,
          Loader
      },
      computed: {
          user() {
              if(this.$store.state.user) {
                  return this.$store.state.user
              } else return undefined
          },
          ...mapGetters([
              'isVerified'
          ])
      },
      watch: {
        'user.emailVerified'(newVal) {
          if(newVal) {
              this.modal.hide()
          } else {
              this.modal.show()
          }
        }
      },
      methods: {
        logout() {
              this.modal.hide()
              this.$store.dispatch('logOut')
        },
        async resendVerify() {
              this.verificationLoader = true
              try {
              await sendEmailVerification(this.user)
              } catch(err) {
              let self = this
              self.spamAlert = true
              setTimeout(() => {
                  this.spamAlert = false
              }, 5000)
              }
              this.verificationLoader = false
        },
        formatBytes(bytes, decimals = 2) {
              if (!+bytes) return '0 Bytes'
              const k = 1024
              const dm = decimals < 0 ? 0 : decimals
              const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
              const i = Math.floor(Math.log(bytes) / Math.log(k))
              return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
          }
      },
      async mounted() {
            this.connection = new WebSocket('ws://localhost:6213/');
            // get local cache directory 
            const appCacheDirPath = await appCacheDir()

            this.connection.onopen = async () => {
                console.log('WS connected and opened.')

                let clientExists = (await axios.get('http://localhost:6212/clientExists')).data.exists
                let { clientVersion, launcherVersion } = (await axios.get('http://localhost:6212/getVersions')).data
                this.$store.commit('SET_CLIENT_VERSION', clientVersion)
                this.$store.commit('SET_LAUNCHER_VERSION', launcherVersion)

                // this.logs = clientExists
                if(!clientExists){
                    this.connection.send(JSON.stringify({ 
                      message: 'downloadClient',
                      cacheDir: appCacheDirPath
                    }));
                } else {
                    try {
                      let { synced, 
                        remoteMapping, 
                        assetsMapping, 
                        localDiffs, 
                        releaseAssets,
                        remoteBatchVersion
                       } = (await axios.get('http://localhost:6212/isSynced', {
                        params: {
                          cacheDir: appCacheDirPath
                        }
                       })).data

                      console.log({ synced, 
                      remoteMapping, 
                      assetsMapping, 
                      localDiffs, 
                      releaseAssets })

                      if(synced) {
                        this.$store.commit('SET_READY_TO_PLAY', true)
                      } else {
                        console.log(this.connection)
                        this.connection.send(JSON.stringify({ 
                          message: 'updateClient',
                          remoteMapping, 
                          assetsMapping, 
                          localDiffs, 
                          releaseAssets,
                          cacheDir: appCacheDirPath,
                          remoteBatchVersion
                         }))
                      }
                    } catch(err) {
                      console.log(err)
                    }
                }
            }
            // console.log(tree)
            // this.connection.send('updateC')
            this.connection.onmessage = async (event) => {
                let message = JSON.parse(event.data);
                // console.log(message)
                this.$store.commit('SET_TOTAL_SIZE', message.totalSize)
                this.$store.commit('SET_TOTAL_DOWNLOADED', message.totalDownloaded)
                this.$store.commit('SET_UPDATING', message.isUpdating)
                this.$store.commit('SET_DOWNLOADING_FILENAME', message.name)
                this.$store.commit('SET_FC_DIR_SIZE', message.dirSize)
                this.$store.commit('SET_READY_TO_PLAY', message.readyToPlay)

                this.time = `${this.formatBytes(message.totalDownloaded)} / ${this.formatBytes(message.totalSize)}`
                if(message.error) this.wsError = message.error
            }

            const targetEl = this.$refs.verifyModal
            const options = {
                placement: 'center',
                backdropClasses: 'bg-neutral-900 bg-opacity-50 dark:bg-opacity-70 fixed inset-0 z-40'
            }
            this.modal = new Modal(targetEl, options)
    },
    async created() {
        const cmd = Command.sidecar('binaries/fc-core');
        cmd.spawn().then((child) => {
            console.log(child.pid)
            listen(TauriEvent.WINDOW_DESTROYED, function () {
              child.kill();
            })
        })
    }
}
</script>
  
  
  <style scoped>
  .logo.vite:hover {
    filter: drop-shadow(0 0 2em #747bff);
  }
  
  .logo.vue:hover {
    filter: drop-shadow(0 0 2em #249b73);
  }
  
  </style>
  