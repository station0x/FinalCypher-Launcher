<template>
    <section class="bg-white dark:bg-neutral-900">
        <div class="grid h-screen grid-cols-10">
            <!-- Create account -->
            <div class="flex col-span-3 mt-20 px-10 items-center justify-center py-6 lg:py-0 sm:px-0">
                <form class="w-full px-14 max-w-md space-y-4 md:space-y-6 xl:max-w-xl" action="#">
                    <a href="#" class="flex top-16 absolute text-2xl font-semibold text-white">
                        <img class="w-[150px]" src="./../assets/img/fc.svg" />
                    </a>
                    <h1 class="text-4xl font-Konnect font-bold not-italic text-gray-900 dark:text-white">Create Account</h1>
                    <!-- <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-neutral-900 dark:text-neutral-300">Password</label>

                        <input type="email" name="email" id="email" class="bg-neutral-50 border border-neutral-300 text-neutral-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-neutral-700 dark:border-neutral-600 dark:placeholder-neutral-400 dark:text-white" placeholder="Email" required="true">
                    </div>-->
                    <div class="relative z-0 my-6 w-full group">
                        <input type="email" name="floating_email" id="floating_username" class="block pt-6 h-[50px] w-full text-base dark:bg-neutral-800 border dark:border-neutral-600 text-gray-900 rounded-lg border-gray-300 appearance-none dark:text-white dark:focus:border-brand-cold focus:outline-none focus:ring-0 focus:border-brand-cold  peer" placeholder=" "
                        value="" />
                        <label for="floating_username" class="peer-focus:font-medium pl-4 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 peer-focus:top-7 peer-empty:top-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Username</label>
                    </div>
                    <div class="relative z-0 my-6 w-full group">
                        <input type="email" name="floating_email" id="floating_email" class="block pt-6 h-[50px] w-full text-base dark:bg-neutral-800 border dark:border-neutral-600 text-gray-900 rounded-lg border-gray-300 appearance-none dark:text-white dark:focus:border-brand-cold focus:outline-none focus:ring-0 focus:border-brand-cold  peer" placeholder=" " required 
                        v-model="email" />
                        <label for="floating_email" class="peer-focus:font-medium pl-4 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 peer-focus:top-7 peer-empty:top-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
                    </div>
                    <div class="relative z-0 my-6 w-full group">
                        <input type="password" name="floating_email" id="floating_password" class="block pt-6 h-[50px] w-full text-base dark:bg-neutral-800 border dark:border-neutral-600 text-gray-900 rounded-lg  border-gray-300 appearance-none dark:text-white dark:focus:border-brand-cold  focus:outline-none focus:ring-0 focus:border-brand-cold  peer" placeholder=" " required 
                        v-model="password" />
                        <label for="floating_password" class="peer-focus:font-medium pl-4 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 peer-focus:top-7 peer-empty:top-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
                    </div>
                    <div class="relative z-0 my-6 w-full group">
                        <input type="password" name="floating_email" id="floating_confirm" class="block pt-6 h-[50px] w-full text-base dark:bg-neutral-800 border dark:border-neutral-600 text-gray-900 rounded-lg  border-gray-300 appearance-none dark:text-white dark:focus:border-brand-cold  focus:outline-none focus:ring-0 focus:border-brand-cold  peer" placeholder=" " 
                        value="" />
                        <label for="floating_confirm" class="peer-focus:font-medium pl-4 absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-3 scale-75 peer-focus:top-7 peer-empty:top-4 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Confirm Password</label>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-start">
                            <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" type="checkbox" class="w-4 h-4 border bg-brand-cold border-neutral-300 rounded focus:ring-3 focus:ring-brand-cold-300 dark:bg-neutral-700 dark:border-neutral-600 dark:focus:ring-brand-cold-600 dark:ring-offset-neutral-800">
                            </div>
                            <div class="ml-3 text-sm">
                            <label for="remember" class="text-neutral-500 dark:text-neutral-300">Remember me</label>
                            </div>
                        </div>
                    </div>
                    <button @click.prevent="register" class="text-black font-bold bg-brand-cold-700 text-lg hover:bg-brand-cold-800 focus:ring-4 focus:outline-none focus:ring-brand-cold-300 rounded-lg w-full sm:w-auto px-5 p-3 text-center dark:bg-brand-cold-500 dark:hover:bg-brand-cold-400 dark:focus:ring-brand-cold-800">Continue
                        <svg class="inline w-5 h-5 ml-2" width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.5 6.99984H1.5H16.5Z" fill="#030507"/>
                        <path d="M10.6667 1.1665L16.5 6.99984M16.5 6.99984L10.6667 12.8332M16.5 6.99984H1.5" stroke="#111928" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </button>

                    <div class="flex items-center pt-5">
                        <div class="w-full h-0.5 bg-gray-200 dark:bg-neutral-800"></div>
                        <div class="px-5 text-center text-gray-500 dark:text-neutral-700">or</div>
                        <div class="w-full h-0.5 bg-gray-200 dark:bg-neutral-800"></div>
                    </div>
                    <p class="dark:text-neutral-500 font-Konnect text-base">
                        Already a user? <span  @click="toggleAuth()" class="ml-1 font-Konnect cursor-pointer hover:dark:text-brand-cold capitalize text-neutral-500 dark:text-white">Sign In</span>
                    </p>
                </form>
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
        </div>
    </section>
</template>

<script>
// import { auth } from '../../firebaseConfig'
    export default {
       data() {
        return {
            isSignIn: true,
            email:'',
            password:''
        }
       },
       methods: {
        toggleAuth() {
            // console.log(this.isSignIn)
            this.$router.push({name: 'Auth'})
        },
        async register() {
            // console.log(await auth)
            console.log(this.email, this.password)
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