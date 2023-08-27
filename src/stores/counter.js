import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = 'https://restaurant-api.alifdzarif.xyz/'

export const useCounterStore = defineStore('counter', {
  state: () => ({
    cuisines: [],
    categories: [],
    pages: 0,
    page: 1,
    search: null,
    isLogin: false,
    detail: {},
    detailId: null,
    favorite: [],
    getAccess: localStorage.access_token
  }),
  getters: {

  },
  actions: {
    async changePage(value) {
      try {
        this.$patch({ page: value });
        await this.fetchCuisines();
      } catch (err) {
        console.log(err);
      }
    },

    isLogged() {
      try {
        this.$patch({ isLogin: false });
      } catch (err) {
        console.log(err);
      }
    },

    async searchCategory(value) {
      try {
        if (value === 'all') this.$patch({ search: null })
        else {
          this.$patch({ search: +value })
        }
        await this.fetchCuisines();
      } catch (err) {
        console.log(err);
      }
    },

    async signInUser(value) {
      try {
        const { data } = await axios({
          url: baseUrl + 'user/login',
          method: 'post',
          data: {
            email: value.email,
            password: value.password
          }
        })

        localStorage.access_token = data.token
        this.$patch({ isLogin: true })
        this.$router.push('/')
      } catch (err) {
        console.log(err);
      }
    },

    async googleSignInUser(value) {
      try {
        const { data } = await axios({
          url: baseUrl + 'user/google-login',
          method: 'post',
          headers: {
            google_token: value
          }
        })

        localStorage.access_token = data.access_token
        this.$patch({ isLogin: true })
        this.$router.push('/')
      } catch (err) {
        console.log(err);
      }
    },

    async signUpUser(value) {
      try {
        await axios({
          url: baseUrl + 'user/register',
          method: 'post',
          data: {
            email: value.email,
            password: value.password
          }
        })

        this.$router.push('/login')
      } catch (err) {
        console.log(err);
      }
    },

    async fetchCuisines() {
      try {
        const { data } = await axios({
          url: baseUrl + 'user/cuisines',
          method: 'GET',
          params: {
            page: this.page,
            search: this.search
          }
        })

        this.cuisines = data.rows;
        this.pages = data.count
      } catch (err) {
        console.log(err);
      }
    },

    async fetchCategories() {
      try {
        const { data } = await axios({
          url: baseUrl + 'user/categories',
          method: 'GET',
        })

        this.categories = data;
      } catch (err) {
        console.log(err);
      }
    },

    async fetchFavorites() {
      try {
        const { data } = await axios({
          url: baseUrl + 'user/favorites',
          method: 'GET',
          headers: {
            access_token: localStorage.access_token
          }
        })

        this.favorite = data;
      } catch (err) {
        console.log(err);
      }
    },

    async addFavorite(value) {
      try {
        await axios({
          url: baseUrl + `user/favorites`,
          method: 'POST',
          headers: {
            access_token: localStorage.access_token
          },
          data: {
            id: value
          }
        })

        this.$router.push(`/detail-cuisine/${value}`)
      } catch (err) {
        console.log(err);
      }
    },
    async getDetail(value) {
      try {
        const { data } = await axios({
          url: baseUrl + `user/cuisines/${value}`,
          method: 'GET',
        })

        this.detail = data;
      } catch (err) {
        console.log(err);
      }
    },

    async createQr(value) {
      try {
        const data = await axios({
          url: 'https://api.qr-code-generator.com/v1/create?access-token=A4jMsxtaC1wRa0x-levJOF2Ko_iTCLorK7YcmfziJUIXe1xrCtwhWNLWcEzI_LF7',
          method: 'POST',
          data: {
            frame_name: "no-frame",
            qr_code_text: "https://mon-resto-fb055.web.app/detail-cuisine/" + value,
            image_format: "SVG",
            qr_code_logo: "scan-me-square"
          }
        })

        console.log(data);
      } catch (err) {
        console.log(err);
      }
    }
  },
})