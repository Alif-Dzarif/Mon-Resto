<template>
  <div v-if="urel.path === '/'" class="max-w-sm w-full lg:max-w-full lg:flex drop-shadow-xl cursor-pointer" @click.prevent="seeDetail(item.id)">
  <div class="h-60 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" :style="{backgroundImage: 'url(' + this.item.imgUrl + ')' }" >
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-slate-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="text-gray-900 font-bold text-xl mb-2">{{ item.name }}</div>
      <p class="text-gray-700 text-base w-60">{{ item.description }}</p>
    </div>
  </div>
</div>
<div v-if="urel.path === '/favorites-user'" class="max-w-sm w-full lg:max-w-full lg:flex drop-shadow-xl cursor-pointer">
  <div class="h-60 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden" :style="{backgroundImage: 'url(' + this.item.Cuisine.imgUrl + ')' }" >
  </div>
  <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-slate-100 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
    <div class="mb-8">
      <div class="text-gray-900 font-bold text-xl mb-2">{{ item.Cuisine.name }}</div>
      <p class="text-gray-700 text-base w-60">{{ item.Cuisine.description }}</p>
    </div>
  </div>
</div>
</template>

<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  name: 'Card',
  props: ['item'],
  data() {
    return {
      urel: this.$router.currentRoute
    }
  },
  methods: {
    ...mapActions(useCounterStore, ['getDetail']),
    seeDetail(value){
      this.getDetail(value)
      this.$router.push(`/detail-cuisine/${value}`)
    }
  }
}
</script>