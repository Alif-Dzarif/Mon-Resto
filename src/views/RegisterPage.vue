<template>
  <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0 bg-no-repeat bg-cover" style="height: 89.8vh; background-image: url('https://img.freepik.com/free-photo/bread-slices-with-topping-tomato-cheese-olives-white-table_23-2148194999.jpg');">
        <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-slate-900  dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
                <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                    Create your account
                </h1>
                <form class="space-y-4 md:space-y-6" @submit.prevent="registerForm">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input v-model="email" type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required="">
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                        <input v-model="password" type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required="">
                    </div>
                    <div class="flex items-center justify-between">
                    </div>
                    <button type="submit" class="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign Up</button>
                    <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                        Already have an account ? <a @click="loginUser" class="font-medium text-primary-600 hover:underline dark:text-primary-500 cursor-pointer text-white">Sign in</a>
                    </p>
                </form>
            </div>
        </div>
      </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter.js'

export default {
  name: 'RegisterPage',
  data() {
    return {
        email: '',
        password: ''
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['signUpUser']),
    loginUser() {
        this.$router.push('/login')
    },
    async registerForm(){
        try {
            const value = {
                email: this.email,
                password: this.password
            }
            await this.signUpUser(value)
        } catch (err) {
            console.log(err);
        }
    }
  }
}
</script>
