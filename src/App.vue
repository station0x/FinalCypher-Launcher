<template>
  <div>
    <Titlebar/>
    <!-- <Auth/> -->
    <h1 style="color: red">{{ logs }}</h1>\
    <h2 style="color: red">{{time}}</h2>
    <router-view></router-view>

    <!-- <div class="row">
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo vite" alt="Vite logo" />
      </a>
      <a href="https://tauri.app" target="_blank">
        <img src="/tauri.svg" class="logo tauri" alt="Tauri logo" />
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
      </a>
    </div>

    <p>Click on the Tauri, Vite, and Vue logos to learn more.</p>

    <p>
      Recommended IDE setup:
      <a href="https://code.visualstudio.com/" target="_blank">VS Code</a>
      +
      <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
      +
      <a href="https://github.com/tauri-apps/tauri-vscode" target="_blank"
        >Tauri</a
      >
      +
      <a href="https://github.com/rust-lang/rust-analyzer" target="_blank"
        >rust-analyzer</a
      >
    </p>

    <Greet /> -->
    <!-- verification modal -->
    <div v-show="user && !user.emailVerified" ref="verifyModal" id="popup-modal" tabindex="-1" class="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 md:inset-0 h-modal md:h-full">
      <div class="relative p-4 w-full max-w-lg h-full md:h-auto">
          <div class="relative bg-white rounded-lg shadow dark:bg-neutral-800">
              <!-- <button type="button" class="absolute top-3 right-2.5 text-neutral-400 bg-transparent hover:bg-neutral-200 hover:text-neutral-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-neutral-800 dark:hover:text-white" data-modal-toggle="popup-modal">
                  <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                  <span class="sr-only">Close modal</span>
              </button> -->
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
</template>

<script>
  // This starter template is using Vue 3 <script setup> SFCs
  // Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
  import Titlebar from "./components/Titlebar.vue"
  import { sendEmailVerification } from 'firebase/auth'
  import { mapGetters } from "vuex"
  import { localDataDir, resourceDir } from '@tauri-apps/api/path'
  import { readDir, BaseDirectory, exists, readBinaryFile } from "@tauri-apps/api/fs"
  import { checkUpdate, installUpdate } from '@tauri-apps/api/updater'
  import { listen, TauriEvent } from "@tauri-apps/api/event";
  import { Command } from "@tauri-apps/api/shell";
  // import 'filehash';
  // var { hashElement } = require('folder-hash')
// const child = await command.spawn();
// await child.write('message');
// await child.write([0, 1, 2, 3, 4, 5]);
// Reads the `Desktop` directory recursively
// const downloadDirPath = await downloadDir();

  export default {
    data() {
      return {
        modal: undefined,
        verificationLoader: false,
        spamAlert: false,
        logs: '',
        time: undefined
      }
    },
    components: {
      Titlebar
    },
    computed: {
      user() {
        if(this.$store.state.user) {
          return this.$store.state.user
        }
        else return undefined
      },
      ...mapGetters([
        'isVerified'
      ])
      
    },
    watch: {
      'user.emailVerified'(newVal) {
        console.log(newVal)
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
      }
    },
    async mounted() {
      let connection = new WebSocket('ws://localhost:3000/');
      connection.url
      console.log(connection, connection.url)
      connection.onmessage = (event) => {
        // Vue data binding means you don't need any extra work to
        // update your UI. Just set the `time` and Vue will automatically
        // update the `<h2>`.
        this.time = event.data;
      }
      const targetEl = this.$refs.verifyModal
      const options = {
        placement: 'center',
        backdropClasses: 'bg-neutral-900 bg-opacity-50 dark:bg-opacity-70 fixed inset-0 z-40'
      }
      this.modal = new Modal(targetEl, options)

      // buggy behaviour that weirdly works (wrong dir.formatting revert to executable path)
      // const entries = await readDir("", {
      //   dir: localDataDir,
      //   recursive: true,
      // });
      // this.logs = entries

      const resourceDirPath = await resourceDir();
      console.log(resourceDirPath)
      this.logs = resourceDirPath

      try {
        const { shouldUpdate, manifest } = await checkUpdate()
        console.log(shouldUpdate, manifest)
        // if (shouldUpdate) {
        //   // display dialog
        //   await installUpdate()
        //   // install complete, restart the app
        //   await relaunch()
        // }
      } catch (error) {
        console.log(error)
      }

      // let merkleTree = await invoke('get_merkle_tree')
      // console.log(merkleTree)
      // Check client version and update accordingly
      // 1. create local merkle tree

      // readDir("Windows", { dir: localDataDir, recursive: true}).then((entries) => {
      //   // windows folder found
      //     console.log(entries)
      //     async function processEntries(entries) {
      //     for (const entry of entries) {
      //       // console.log(entry)
      //       // let file = await readBinaryFile(entry.path)
      //       // console.log(file)
      //       // console.log(`Entry: ${entry.path}`);
      //       // Filehash.hash(file).then((digest) => {
      //       //   console.log('digest: ', digest)
      //       // })
      //       if (entry.children) {
      //         console.log(entry)
      //         // processEntries(entry.children);
      //       } else {
      //         let reader = new FileReader()
      //         // let file = await readBinaryFile(entry.path)
      //         console.log(entry.path)
      //         reader.readAsDataURL(entry.path)
      //         console.log(file)
      //         Filehash.hash(file).then((digest) => {
      //           console.log('digest: ', digest)
      //         })
      //       }
      //     }
      //   }
      //   processEntries(entries)
      // }).catch((error) => {
      //   // windows folder not found
      //   console.log(error)
      // })
    },
    created() {
      /**
      * Running NodeJS process as a sidecar
      */
      const cmd = Command.sidecar('binaries/app');

      cmd.spawn().then((child) => {
        console.log(child.pid)
        /**
         * Killing server process when window is closed. Probably won't
         * work for multi window application
         */
        listen(TauriEvent.WINDOW_DESTROYED, function () {
          child.kill();
        })
      });
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
