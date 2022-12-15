<template>
    <div>
        <div class="grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-10 ml-10">
            <div :class="preparing ? 'w-60' : 'w-[420px]'" class="flex mt-7 items-center flex-wrap px-10 bg-neutral-900 shadow-xl rounded-full h-20">
                <div class="flex items-center justify-center -m-6 overflow-hidden bg-neutral-800 rounded-full">
                    <svg class="w-16 h-16 transform translate-x-1 translate-y-1" x-cloak aria-hidden="true">
                    <circle
                        class="text-neutral-700"
                        stroke-width="6"
                        stroke="currentColor"
                        fill="transparent"
                        r="25"
                        cx="28"
                        cy="28"
                        />
                    <circle
                        v-if="preparing"
                        class="text-brand-cold rotate-target-svg animate-spin"
                        id="rotate-circle-90"
                        stroke-width="6"
                        :stroke-dasharray="circumference"
                        :stroke-dashoffset="120"
                        stroke-linecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="25"
                        cx="28"
                        cy="28"
                    />
                    <circle
                        v-else
                        class="text-brand-cold rotate-90-svg"
                        id="rotate-circle-90"
                        stroke-width="6"
                        :stroke-dasharray="circumference"
                        :stroke-dashoffset="dashOffset"
                        stroke-linecap="round"
                        stroke="currentColor"
                        fill="transparent"
                        r="25"
                        cx="28"
                        cy="28"
                    />
                    </svg>
                    <svg v-if="preparing" class="absolute text-base text-brand-cold-500 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span v-else class="absolute text-base font-bold text-brand-cold-500 ml-[2px] mt-[3px]">{{ Math.floor(percentage) }}<span class="ml-[-2px]" style="font-size: 12px; font-weight: 100"> %</span></span>
                </div>
                <div>
                    <p class="ml-10 font-bold text-xl font-Konnect text-white text-opacity-90">{{ preparing ? 'Updating' : `${formatBytes(speed)} / s` }}</p>
                    <p v-if="!preparing" class="ml-10 font-normal text-sm tracking-wider font-Konnect text-white text-opacity-30 uppercase">{{ isUpdating ? 'Updating' : 'Installing' }}</p>
                </div>
                <span v-if="!preparing" class="ml-auto -mr-3 text-base font-medium font-Konnect text-brand-cold-500">{{ secondsToHms(eta) }}</span>
            </div>
        </div>
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
            lastRecordedBytes: 0,
            speedFeed: []
        }
    },
    props: [
        'timeRemaining', 'percent'
    ],
    created() {
        // console.log(this.$store.state.gameMerkleTree)
    },
    computed: {
        speed() {
            return (this.speedFeed.reduce((pv, cv) => pv + cv, 0)/this.speedFeed.length)
        },
        eta() {
            if(this.$store.state.clientTotalDownloaded) {
                console.log()
                return (this.$store.state.clientTotalSize - this.$store.state.clientTotalDownloaded) / this.speed
            } else return 0
            
        },
        dashOffset() {
            return this.circumference - this.percentage / 100 * this.circumference
        },
        percentage() {
            if(this.$store.state.clientTotalSize) {
                return ((this.$store.state.clientTotalDownloaded / this.$store.state.clientTotalSize) * 100)

            } else return 0
        },
        preparing() {
            if(this.$store.state.clientTotalSize) {
                return this.$store.state.clientTotalDownloaded === 0 ? true : false
            } else return true
        },
        isUpdating() {
            if(this.$store.state.clientTotalSize) {
                return this.$store.state.isUpdating
            }
        },
        ...mapGetters([
            'clientTotalSize',
            'clientTotalDownloaded'
        ])
    },
    // watch: {
    //     'clientTotalSize'(newVal) {
    //         if(newVal) {
    //             this.modal.hide()
    //         } else {
    //             this.modal.show()
    //         }
    //     },
    //     'clientTotalDownloaded'
    //   },
    created() {
        const self = this
        this.dateInterval = setInterval(function () {
            if(self.$store.state.clientTotalDownloaded) {
                let speedLocal = [...self.speedFeed]
                let speed = self.$store.state.clientTotalDownloaded - self.lastRecordedBytes
                // if more than taiwan's internet speed dont push it
                if(speed < 85020000) {
                    speedLocal.push(speed)
                }
                // speedLocal.push((self.$store.state.clientTotalDownloaded - dirSize) - (self.lastRecordedBytes - dirSize))
                self.speedFeed = speedLocal
                self.lastRecordedBytes = self.$store.state.clientTotalDownloaded
            }
        }, 1000)
    },
    methods: {
        formatBytes(bytes, decimals = 2) {
            if (!+bytes) return '0 Bytes'
            const k = 1024
            const dm = decimals < 0 ? 0 : decimals
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
            const i = Math.floor(Math.log(bytes) / Math.log(k))
            return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`
        },
        secondsToHms(d) {
            d = Number(d);
            var h = Math.floor(d / 3600);
            var m = Math.floor(d % 3600 / 60);
            var s = Math.floor(d % 3600 % 60);

            var hDisplay = h > 0 ? h + (h == 1 ? " hr " : " hrs, ") : "";
            var mDisplay = m > 0 ? m + (m == 1 ? " min " : " mins, ") : "";
            var sDisplay = s > 0 ? s + (s == 1 ? " sec" : " secs") : "";
            return hDisplay + mDisplay + sDisplay; 
        }
    }
}

</script>

<style>
svg .rotate-90-svg {
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(-90deg);
}
svg .rotate-target-svg {
  transform-box: fill-box;
  transform-origin: center;
  transform: rotate(0deg);
}
</style>