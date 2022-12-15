<template>
    <div>
        <button id="play-btn" class="text-[rgba(0,0,0,.7)] mt-8 ml-24 justify-center w-[160px] h-[64px] text-3xl font-Konnect font-bold bg-brand-cold-700 hover:bg-brand-cold-800 focus:ring-4 focus:outline-none focus:ring-brand-cold-300 rounded-xl px-5 py-4 text-center inline-flex items-center dark:bg-brand-cold-600 dark:hover:bg-brand-cold-700 dark:focus:ring-brand-cold-800">
            Play
            <svg id="play-icon" class="ml-2 -mr-1 w-14 h-14" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clip-rule="evenodd"></path></svg>
        </button>
   </div>
</template>


<script>
  import { mapGetters } from "vuex"
export default {
    data() {
        return {
            backgrounds: [
                "atropa",
                "zodwa"
            ],
            circumference: 25 * 2 * Math.PI,
            percentage: 50
        }
    },
    created() {
        // console.log(this.$store.state.gameMerkleTree)
    },
    computed: {
        dashOffset() {
            return this.circumference - this.percentage / 100 * this.circumference
        },
        ...mapGetters([
            'gameMerkleTree'
        ])
    },
    watch: {
    //   'gameMerkleTree'(newVal, oldVal) {
    //     console.log(newVal, oldVal)
    //     // if(newVal) {
    //     //   console.log(newVal)
    //     // } else {
    //     //     console.log(newVal)
    //     // }
    //   }
    },
    methods: {
        // signOut() {
        //     this.$store.dispatch('logOut')
        //     window.open('/', '_self')
        // },
        // async close() {
        //     await appWindow.close()
        // },
        // randCover() {
        //     return `background-image: url('/cover-${this.backgrounds[Math.floor(Math.random()*this.backgrounds.length)]}.png')`
        // },
        // async openFC() {
        //     let IdToken = ''
        //     auth.currentUser.getIdToken(true).then(function(idToken) {
        //         IdToken = idToken
        //         let authCommand = 'authToken=' + IdToken
        //         new Command('fc-start', [authCommand]).execute()
        //     }).catch(function(error) {
        //         console.log(error)
        //     });
        // }
    }
}

</script>

<style>

</style>