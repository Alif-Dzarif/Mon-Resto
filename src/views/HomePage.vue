
<template>
  <div class="h-1100">
    <div class="rounded-10">
      <div class="flex justify-center align-center h-80 bg-no-repeat bg-center bg-cover" style="background-image: url('https://media.istockphoto.com/id/1191443089/photo/food-background-with-traditional-ingredients-for-mediterranean-cuisine-over-dark-background.jpg?s=612x612&w=0&k=20&c=Ar0XycRitGFVY8wo8nYjdM6Ibn8VEbNbqjAb1A1Uxo4=');">
        <h1 class="mt-10 text-white text-5xl font-bold drop-shadow align-middle text-center whitespace-normal w-3/4">In every plate, we blend tradition with innovation, crafting an unforgettable dining experience.</h1>
      </div>
    </div>
    <div class="flex mt-10">
      <div class="mx-4">
        <div class="h-65 w-60 border-4 p-4 rounded-xl border-double border-black bg-slate-100 drop-shadow-xl">
          <div class="flex flex-col gap-y-3"> 
            <p>Filter by Category</p>
            <div class="flex">
              <input @change="filterCategory($event)" :value="'all'" type="radio" name="hs-radio-vertical-group" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-vertical-group-1" checked>
              <label for="hs-radio-vertical-group-1" class="text-sm ml-2">All</label>
            </div>
            <FilterBox v-for="(item, index) in categories" :key="index" :item="item" :filterCategory="filterCategory" :clickCategory="clickCategory"/>
          </div>
        </div>
      </div>
      <div class="px-10">
        <div class="grid grid-cols-3 gap-4">
          <Card v-for="(item, index) in cuisines" :key="index" :item="item"/>
        </div>
      </div>
    </div>
  </div>
  <div class="relative h-40 w-full">
    <div class="absolute inset-x-0 bottom-0 h-16">
      <Pagination :pages="pages"/>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';
import FilterBox from '../components/FilterBox.vue';
import Pagination from '../components/Pagination.vue';
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter.js';

export default {
  name: 'HomePage',
  data() {
    return {
    }
  },
  components: {
    Card,
    FilterBox,
    Pagination
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchCuisines']),
    ...mapActions(useCounterStore, ['fetchCategories']),
    ...mapActions(useCounterStore, ['searchCategory']),
    async filterCategory(event) {
      const id = event.target.value
      await this.searchCategory(id)
    },
    async clickCategory(value) {
      await this.searchCategory(value)
    }
  },
  computed: {
    ...mapState(useCounterStore, ['cuisines']),
    ...mapState(useCounterStore, ['categories']),
    ...mapState(useCounterStore, ['pages']),
  },

  created(){
    this.fetchCuisines()
    this.fetchCategories()
  }
}
</script>