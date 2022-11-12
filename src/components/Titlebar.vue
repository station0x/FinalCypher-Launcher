<template>
    <div data-tauri-drag-region class="titlebar">
      <div @click="minimizeWindow" class="titlebar-button" id="titlebar-minimize">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 12H4"></path></svg>
      </div>
      <div @click="closeWindow" class="titlebar-button-red" id="titlebar-close">
        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path></svg>
      </div>
    </div>
</template>

<script>
import { appWindow } from '@tauri-apps/api/window'

    export default {
        methods: {
            minimizeWindow() {
              appWindow.minimize()
            },
            closeWindow() {
              appWindow.close()
            }
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
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
}</style>