import { createStore } from 'vuex'
import { auth, functions } from '../../firebaseConfig'
import { httpsCallable } from 'firebase/functions'
import { 
    createUserWithEmailAndPassword, 
    signOut, 
    sendEmailVerification,
    updateProfile,
    verifyBeforeUpdateEmail
} from 'firebase/auth'

const store = createStore({
    state: {
        user: window.localStorage.getItem('user'),
        isVerified: false,
        gameMerkleTree: undefined,
        clientTotalSize: undefined,
        clientTotalDownloaded: undefined,
        isDownloading: false,
        isUpdating: false,
        downloadingFilename: '',
        fcDirSize: 0,
        readyToPlay: false,
        clicked: 0,
        clientVersion: undefined,
        launcherVersion: undefined,
        isSplash: true
    },
    mutations: {
        // SET_LOGGED_IN(state, value) {
        //   state.user.loggedIn = value;
        // },
        SET_USER(state, data) {
          state.user = data;
        },
        SET_VERIFIED(state, bool) {
            state.isVerified = bool
        },
        SET_MERKLE_TREE(state, tree) {
            state.gameMerkleTree = tree
        },
        SET_TOTAL_SIZE(state, totalSize) {
            state.clientTotalSize = totalSize
        },
        SET_TOTAL_DOWNLOADED(state, totalDownloaded) {
            state.clientTotalDownloaded = totalDownloaded
        },
        SET_UPDATING(state, isUpdating) {
            state.isUpdating = isUpdating
        },
        SET_DOWNLOADING_FILENAME(state, filename) {
            state.downloadingFilename = filename
        },
        SET_FC_DIR_SIZE(state, size) {
            state.fcDirSize = size
        },
        SET_READY_TO_PLAY(state, bool) {
            state.readyToPlay = bool
        },
        clicked(state, n) {
            if(n === 0) state.clicked = n
            else state.clicked += 1  
        },
        SET_CLIENT_VERSION(state, version) {
            state.clientVersion = version
        },
        SET_LAUNCHER_VERSION(state, version) {
            state.launcherVersion = version
        },
        SET_IS_SPLASH(state, bool) {
            state.isSplash = bool
        }
    },
    getters: {
        user(state){
          return JSON.parse(JSON.stringify(state.user))
        },
        userVerified(state) {
            return state.isVerified
        },
        gameMerkleTree(state) {
            return state.gameMerkleTree
        }
    },
    actions: {
        async register(context, { email, password, name }){
            // context.commit('SET_USER', { email, password, name })
            // context.commit('SET_LOGGED_IN', true)
            let response = await createUserWithEmailAndPassword(auth, email, password)
            .then(async (res) => {
                await sendEmailVerification(res.user)
                await updateProfile(res.user, { displayName: name })
            })
            // if (response) {
            //         const setDisplayNameClient = httpsCallable(functions, 'setDisplayNameClient')
            //         setDisplayNameClient({ displayName: name })
            //         .then((result) => {
            //             console.log(result)
            //         })
            // } else {
            //         throw new Error('Unable to register user')
            // }
        },
        async logIn(context, { email, password }){
            const response = await signInWithEmailAndPassword(auth, email, password)
            if (!response) {
                throw new Error('login failed')
            }
        },
        async logOut(context){
                await signOut(auth)
                context.commit('SET_USER', null)
                context.commit('SET_VERIFIED', false)
        },
        async fetchUser(context ,user) {
                context.commit("SET_LOGGED_IN", user !== null);
                if (user) {
                context.commit("SET_USER", {
                    displayName: user.displayName,
                    email: user.email
                });
                } else {
                context.commit("SET_USER", null);
                }
            }
        }
})

// export the store
export default store