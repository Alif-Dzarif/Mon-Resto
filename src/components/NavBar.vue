<template>
    <div class="bg-stone-900 h-20 flex items-center justify-between">
        <div class="p-5 text-xl font-black text-slate-100 cursor-pointer">
            <h1 style="font-family: 'Lucida Console';" @click.prevent="goBackHome">Mon Resto</h1>
        </div>
        <div>
            <ul class="flex text-slate-100">
                <li class="mr-6" v-if="!isLogin && !getAccess">
                    <a class=" hover:text-blue-800 cursor-pointer" @click.prevent="loginClick">Login</a>
                </li>
                <li class="mr-6" v-if="!isLogin && !getAccess">
                    <a class="hover:text-blue-800 cursor-pointer" @click.prevent="registerClick">Register</a>
                </li>
                <li class="mr-6" v-if="isLogin || getAccess">
                    <a class="hover:text-blue-800 cursor-pointer"  @click.prevent="favoriteClick">Favorite</a>
                </li>
                <li class="mr-6" v-if="isLogin || getAccess">
                    <a class="hover:text-blue-800 cursor-pointer"  @click.prevent="logoutClick">Logout</a>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import { useCounterStore } from '../stores/counter'

export default {
    name: 'NavBar',
    methods: {
        ...mapActions(useCounterStore, ['isLogged']),
        loginClick() {
            this.$router.push('/login')
        },
        logoutClick() {
            this.isLogged()
            localStorage.clear()
            this.$router.push('/')
        },
        registerClick() {
            this.$router.push('/register')

        },
        favoriteClick() {
            this.$router.push('/favorites-user')

        },
        goBackHome(){
            this.$router.push('/')
        }
    },
    computed: {
        ...mapState(useCounterStore, ['isLogin']),
        ...mapState(useCounterStore, ['getAccess']),
    },
}
</script>