<template>
    <section class="grid h-screen place-items-center bg-[#121212]">
        <div class="w-full h-full uploader-bg">
            <div class="absolute bottom-[18px] flex-1 w-[465px] h-[50px]">
                <div class="flex justify-between col-span-2 flex-row px-[20px] py-[20px]">
                    <div class="font-bold font-Konnect text-xl text-white drop-shadow-xl">
                        <svg class="inline mr-2 w-5 h-5 -mt-1 text-gray-200 animate-spin dark:text-neutral-600 fill-brand-cold-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        Updating..
                    </div>
                </div>
            </div>
            <!-- <div data-tauri-drag-region class="titlebar">
                <div @click="minimizeWindow" class="titlebar-button" id="titlebar-minimize">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
                </div>
            </div> -->
            <!-- <img class="relative z-0 left-0" src="../assets/img/updater.png" />
            <div class="absolute bottom-[28px] flex-1 w-[465px] h-[50px]">
                <div class="flex justify-between col-span-2 flex-row px-[20px] py-[20px]">
                    <div class="font-bold font-Konnect text-xl text-white">
                        <svg class="inline mr-2 w-5 h-5 -mt-1 text-gray-200 animate-spin dark:text-neutral-600 fill-brand-cold-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                        </svg>
                        Updating
                    </div>
                </div>
            </div> -->
        </div>
    </section>
</template>

<script>
import { appWindow } from '@tauri-apps/api/window'
import { emit } from '@tauri-apps/api/event'
import { listen } from '@tauri-apps/api/event'
import { relaunch } from '@tauri-apps/api/process'

export default {
    methods: {
        minimizeWindow() {
            appWindow.minimize()
        }
    },
    async created() {
        listen('tauri://update-status', async function (res) {
            console.log('New status: ', res)
            if(true) // some condition
            {
                await invoke('resize', { w: 465 , h: 590 })
                await relaunch()

            }
        })
        emit('tauri://update-install')
    }
}
</script>

<style scoped>
.titlebar {
  height: 30px;
  /* background: #329ea3; */
  user-select: none;
  display: flex;
  justify-content: flex-end;
  /* position: fixed; */
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-color: #121212;
}
.titlebar-button, .titlebar-button-red {
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 30px;
  cursor: pointer;
  color: rgba(255,255,255,.85);
}
.titlebar-button:hover {
  background: rgba(255,255,255,.1);
}
.titlebar-button-red:hover {
  background: rgb(212, 77, 77);
}
.uploader-bg {
    background-image: url('../assets/img/updater.png');
    background-position: center;
    background-repeat: no-repeat;
}
</style>