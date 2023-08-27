<template>
  <div class="m-5 border p-3 border-stone-800">
    <div class="flex">
      <img :src="detail.imgUrl" class="h-60 border rounded-lg shadow-lg w-80">    
      <div class=" text-xl p-4">
        <div class="flex w-80">
          <h1 class="font-black mb-1 mr-3">{{ detail.name }}</h1>
          <div class="h-6 mt-1 border border-lime-500 bg-lime-700 rounded-full px-2 shadow-lg mb-2">
            <p class="text-sm text-white">{{ detail.Category ? detail.Category.name : '' }}</p>
          </div>
        </div>
        <p class="mb-1 mr-3 text-blue-600">Rp. {{ new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(detail.price) }}</p>
        <div class="pr-40">
          <p class="whitespace-normal">{{ detail.description }}</p>
        </div>
      </div>
      <div class="flex justify-end w-full py-5">
        <div class=" pl-50 mr-10">
          <div>
            <button v-if="isLogin" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" @click.prevent="addToFavorite(detail.id)">Add to Favorite</button>
          </div>
        </div>
      </div>
    </div>
    </div>
</template>

<script>
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  name: 'DetailPage',
  methods: {
    ...mapActions(useCounterStore, ['getDetail']),
    ...mapActions(useCounterStore, ['addFavorite']),
    addToFavorite(value){
      this.addFavorite(value)
    }
  },
  computed: {
    ...mapState(useCounterStore, ['detail']),
    ...mapState(useCounterStore, ['isLogin'])
  },
  mounted() {
    this.getDetail(this.$route.params.id)
  }
}
</script>
