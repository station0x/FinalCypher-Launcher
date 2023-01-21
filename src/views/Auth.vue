<template>
    <section class="bg-white dark:bg-neutral-900">
        <div class="grid h-screen grid-cols-10">
            <!-- Sign in -->
            <div class="flex flex-col col-span-3 mt-28 items-center justify-center px-10 py-6 lg:py-0 sm:px-0">
                <form class="w-full px-14 max-w-md space-y-4 md:space-y-6 xl:max-w-xl" action="#">
                    <a href="#" class="flex top-16 absolute text-2xl font-semibold text-white">
                        <img class="w-[150px]" src="./../assets/img/fc.svg" />
                    </a>
                    <!-- <div class="items-center space-x-0 space-y-3 sm:flex sm:space-x-4 sm:space-y-0">
                        <a href="#" class="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-neutral-900 focus:outline-none bg-white rounded-lg border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 focus:z-10 focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-600 dark:hover:text-white dark:hover:bg-neutral-700">
                            <svg class="w-5 h-5 mr-2" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_13183_10121)"><path d="M20.3081 10.2303C20.3081 9.55056 20.253 8.86711 20.1354 8.19836H10.7031V12.0492H16.1046C15.8804 13.2911 15.1602 14.3898 14.1057 15.0879V17.5866H17.3282C19.2205 15.8449 20.3081 13.2728 20.3081 10.2303Z" fill="#3F83F8"/><path d="M10.7019 20.0006C13.3989 20.0006 15.6734 19.1151 17.3306 17.5865L14.1081 15.0879C13.2115 15.6979 12.0541 16.0433 10.7056 16.0433C8.09669 16.0433 5.88468 14.2832 5.091 11.9169H1.76562V14.4927C3.46322 17.8695 6.92087 20.0006 10.7019 20.0006V20.0006Z" fill="#34A853"/><path d="M5.08857 11.9169C4.66969 10.6749 4.66969 9.33008 5.08857 8.08811V5.51233H1.76688C0.348541 8.33798 0.348541 11.667 1.76688 14.4927L5.08857 11.9169V11.9169Z" fill="#FBBC04"/><path d="M10.7019 3.95805C12.1276 3.936 13.5055 4.47247 14.538 5.45722L17.393 2.60218C15.5852 0.904587 13.1858 -0.0287217 10.7019 0.000673888C6.92087 0.000673888 3.46322 2.13185 1.76562 5.51234L5.08732 8.08813C5.87733 5.71811 8.09302 3.95805 10.7019 3.95805V3.95805Z" fill="#EA4335"/></g><defs><clipPath id="clip0_13183_10121"><rect width="20" height="20" fill="white" transform="translate(0.5)"/></clipPath></defs>
                            </svg>                            
                            Sign in with Google
                        </a>
                        <a href="#" class="w-full inline-flex items-center justify-center py-2.5 px-5 text-sm font-medium text-neutral-900 focus:outline-none bg-white rounded-lg border border-neutral-200 hover:bg-neutral-100 hover:text-neutral-900 focus:z-10 focus:ring-4 focus:ring-neutral-200 dark:focus:ring-neutral-700 dark:bg-neutral-800 dark:text-neutral-400 dark:border-neutral-600 dark:hover:text-white dark:hover:bg-neutral-700">
                            <svg class="w-5 h-5 mr-2 text-neutral-900 dark:text-white" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clip-path="url(#clip0_13183_29163)"><path d="M18.6574 15.5863C18.3549 16.2851 17.9969 16.9283 17.5821 17.5196C17.0167 18.3257 16.5537 18.8838 16.1969 19.1936C15.6439 19.7022 15.0513 19.9627 14.4168 19.9775C13.9612 19.9775 13.4119 19.8479 12.7724 19.585C12.1308 19.3232 11.5412 19.1936 11.0021 19.1936C10.4366 19.1936 9.83024 19.3232 9.18162 19.585C8.53201 19.8479 8.00869 19.985 7.60858 19.9985C7.00008 20.0245 6.39356 19.7566 5.78814 19.1936C5.40174 18.8566 4.91842 18.2788 4.33942 17.4603C3.71821 16.5863 3.20749 15.5727 2.80738 14.4172C2.37887 13.1691 2.16406 11.9605 2.16406 10.7904C2.16406 9.45009 2.45368 8.29407 3.03379 7.32534C3.4897 6.54721 4.09622 5.9334 4.85533 5.4828C5.61445 5.03219 6.43467 4.80257 7.31797 4.78788C7.80129 4.78788 8.4351 4.93738 9.22273 5.2312C10.0081 5.52601 10.5124 5.67551 10.7335 5.67551C10.8988 5.67551 11.4591 5.5007 12.4088 5.15219C13.3069 4.82899 14.0649 4.69517 14.6859 4.74788C16.3685 4.88368 17.6327 5.54699 18.4734 6.74202C16.9685 7.65384 16.2241 8.93097 16.2389 10.5693C16.2525 11.8454 16.7154 12.9074 17.6253 13.7506C18.0376 14.1419 18.4981 14.4444 19.0104 14.6592C18.8993 14.9814 18.7821 15.29 18.6574 15.5863V15.5863ZM14.7982 0.400358C14.7982 1.40059 14.4328 2.3345 13.7044 3.19892C12.8254 4.22654 11.7623 4.82035 10.6093 4.72665C10.5947 4.60665 10.5861 4.48036 10.5861 4.34765C10.5861 3.38743 11.0041 2.3598 11.7465 1.51958C12.1171 1.09416 12.5884 0.740434 13.16 0.458257C13.7304 0.18029 14.2698 0.0265683 14.7772 0.000244141C14.7921 0.133959 14.7982 0.267682 14.7982 0.400345V0.400358Z" fill="currentColor"/></g><defs><clipPath id="clip0_13183_29163"><rect width="20" height="20" fill="white" transform="translate(0.5)"/></clipPath></defs>
                            </svg>                            
                            Sign in with Apple
                        </a>
                    </div> -->
                    <!-- <div class="flex items-center">
                        <div class="w-full h-0.5 bg-neutral-200 dark:bg-neutral-700"></div>
                        <div class="px-5 text-center text-neutral-500 dark:text-neutral-400">or</div>
                        <div class="w-full h-0.5 bg-neutral-200 dark:bg-neutral-700"></div>
                    </div> -->
                    <h1 class="text-4xl font-Konnect font-bold not-italic text-gray-900 dark:text-white">Sign In</h1>
                    <!-- <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300">Password</label>

                        <input type="email" name="email" id="email" class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white" placeholder="Email" required="true">
                    </div>-->
                    <div class="relative z-0 my-6 w-full group">
                        <input type="email" name="floating_email" id="floating_username" class="block pt-6 h-[50px] w-full text-base dark:bg-neutral-800 border dark:border-neutral-600 text-gray-900 rounded-lg border-gray-300 appearance-none dark:text-white dark:focus:border-brand-cold focus:outline-none focus:ring-0 focus:border-brand-cold  peer" placeholder=" " required 
                        v-model="email" />
                        <label for="floating_email" class="peer-focus:font-medium pl-4 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 peer-focus:top-7 peer-empty:top-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div class="relative z-0 my-6 w-full group">
                        <input type="password" name="floating_email" id="floating_email" class="block pt-6 h-[50px] w-full text-base dark:bg-neutral-800 border dark:border-neutral-600 text-gray-900 rounded-lg  border-gray-300 appearance-none dark:text-white dark:focus:border-brand-cold  focus:outline-none focus:ring-0 focus:border-brand-cold  peer" placeholder=" " required 
                        v-model="password" />
                        <label for="floating_email" class="peer-focus:font-medium pl-4 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 peer-focus:top-7 peer-empty:top-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border bg-brand-cold border-neutral-300 rounded focus:ring-3 focus:ring-brand-cold-300 dark:bg-neutral-700 dark:border-neutral-600 dark:focus:ring-brand-cold-600 dark:ring-offset-neutral-800" required="true">
                            </div>
                            <div class="ml-3 text-sm">
                            <label for="remember" class="text-neutral-500 dark:text-neutral-300">Remember me</label>
                            </div>
                        </div>
                    </div>
                    <button @click.prevent="auth" class="text-black font-bold bg-brand-cold-700 text-lg hover:bg-brand-cold-800 focus:ring-4 focus:outline-none focus:ring-brand-cold-300 rounded-lg w-full sm:w-auto px-5 p-3 text-center dark:bg-brand-cold-500 dark:hover:bg-brand-cold-400 dark:focus:ring-brand-cold-800">
                        <span v-if="loader">
                            <svg class="inline mr-2 w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                        </span>
                        Continue
                        <svg v-if="!loader" class="inline w-5 h-5 ml-2" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 6.99984H1.5H16.5Z" fill="#030507"/>
                        <path d="M10.6667 1.1665L16.5 6.99984M16.5 6.99984L10.6667 12.8332M16.5 6.99984H1.5" stroke="#111928" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>

                    <div class="flex items-center py-10">
                        <div class="w-full h-0.5 bg-gray-200 dark:bg-neutral-800"></div>
                        <div class="px-5 text-center text-gray-500 dark:text-neutral-700">or</div>
                        <div class="w-full h-0.5 bg-gray-200 dark:bg-neutral-800"></div>
                    </div>
                    <p @click="toggleAuth()" class="font-Konnect cursor-pointer hover:dark:text-brand-cold capitalize text-neutral-500 dark:text-white">
                        Create new Account
                    </p>
                    <p style="margin-top: 10px" class="font-Konnect mt-0 cursor-pointer hover:dark:text-brand-cold capitalize text-neutral-500 dark:text-white">
                        Reset Password
                    </p>
                </form>
                <div class="h-full w-full flex flex-col gap-1 justify-end  mb-4 px-14 text-center">
                    <div v-if="$store.state.launcherVersion" class="text-xs text-white text-opacity-20 tracking-normal hover:text-opacity-40">Launcher Version v{{ $store.state.launcherVersion.split('v')[1] }}</div>
                    <div v-if="$store.state.clientVersion" class="text-xs text-white text-opacity-20 tracking-normal hover:text-opacity-40">Client Version {{ $store.state.clientVersion }}</div>
                </div>
            </div> 
            <div id="right-section" class="flex items-center col-span-7 justify-center px-4 py-6 bg-primary-600 lg:py-0 sm:px-0">
                <div class="max-w-md xl:max-w-xl">
                    <!-- <a href="#" class="flex items-center mb-4 text-2xl font-semibold text-white">
                        <img class="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo">
                        Flowbite    
                    </a>
                    <h1 class="mb-4 text-3xl font-extrabold leading-none tracking-tight text-white xl:text-5xl">Explore the world’s leading design portfolios.</h1>
                    <p class="mb-4 font-light text-primary-200 lg:mb-8">Millions of designers and agencies around the world showcase their portfolio work on Flowbite - the home to the world’s best design and creative professionals.</p>
                    <div class="flex items-center divide-x divide-primary-500">
                        <div class="flex pr-3 -space-x-4 sm:pr-5">
                            <img class="w-10 h-10 border-2 border-white rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/bonnie-green.png" alt="bonnie avatar">
                            <img class="w-10 h-10 border-2 border-white rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png" alt="jese avatar">
                            <img class="w-10 h-10 border-2 border-white rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/roberta-casas.png" alt="roberta avatar">
                            <img class="w-10 h-10 border-2 border-white rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/thomas-lean.png" alt="thomas avatar">
                        </div>
                        <a href="#" class="pl-3 text-white sm:pl-5 dark:text-white">
                            <span class="text-sm text-primary-200">Over <span class="font-medium text-white">15.7k</span> Happy Customers</span>                       
                        </a> 
                    </div> -->
                </div>
            </div>
            <div class="absolute right-5 bottom-5">
                <InstallProgress/>
            </div>         
        </div>
    </section>
</template>

<script>
    import { auth } from '../../firebaseConfig'
    import InstallProgress from '../components/InstallProgress.vue'
    import { 
        signInWithEmailAndPassword
    } from 'firebase/auth'
    export default {
    data() {
        return {
            isSignIn: true,
            email: '',
            password: '',
            loader: false
        };
    },
    components: {
        InstallProgress
    },
    methods: {
        toggleAuth() {
            this.$router.push({ name: "Register" });
        },
        async auth() {
            this.loader = true
            await signInWithEmailAndPassword(auth, this.email, this.password)
            .finally(() => {
                this.loader = false
            })
        }
    }
}
</script>

<style>
#right-section {
    background-image: url('./../assets/img/fc-cover.svg');
    background-position: center;
    background-size: cover;
}
</style>