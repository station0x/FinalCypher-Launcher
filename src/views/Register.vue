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
                        v-model="name" />
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
                    <button @click.prevent="register" class="text-black font-bold bg-brand-cold-700 text-lg hover:bg-brand-cold-800 focus:ring-4 focus:outline-none focus:ring-brand-cold-300 rounded-lg w-full sm:w-auto px-5 p-3 text-center dark:bg-brand-cold-500 dark:hover:bg-brand-cold-400 dark:focus:ring-brand-cold-800">
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
            <div id="right-section" class="flex col-span-7 items-center justify-center px-4 py-6 bg-primary-600 lg:py-0 sm:px-0">
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
import { auth } from '../../firebaseConfig'
import { 
    createUserWithEmailAndPassword, 
    signOut, 
    sendEmailVerification,
    updateProfile,
    verifyBeforeUpdateEmail
} from 'firebase/auth'
    export default {
       data() {
        return {
            isSignIn: true,
            name:'elrakabawi',
            email:'mselrakabawi@gmail.com',
            password:'delete2013',
            loader: false
        }
       },
       methods: {
        toggleAuth() {
            this.$router.push({name: 'Auth'})
        },
        async register() {
            // console.log(*)
            this.loader = true
            await createUserWithEmailAndPassword(auth, this.email, this.password)
            .then(async (res) => {
                await sendEmailVerification(res.user)
                await updateProfile(res.user, { displayName: this.name })
            })
            // this.$store.dispatch('register', {
            //     name: this.name,
            //     email: this.email,
            //     password: this.password
            // })
            .finally(() => {
                this.loader = false
            })
            
        }
       },
       computed: {
        // stateLoading() {
        //     if(this.$store.state.stateLoading) return this.$store.state.stateLoading
        //     else return false
        // }
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