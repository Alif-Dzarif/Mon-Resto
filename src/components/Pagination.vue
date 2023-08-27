<template>
  <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-center">
    <div class="bg-slate-100 p-4 flex items-center flex-wrap">
  <nav aria-label="Page navigation">
	<ul class="inline-flex">
    <div v-for="(item, index) in Math.ceil(pages / 9)" :key="index">
      <li><button class="h-10 px-5 duration-150 focus:shadow-outline hover:bg-slate-200" @click.prevent="pageValue(item)">{{ item }}</button></li>
    </div>
	</ul>
  </nav>
</div>
  </div>
</template>

<script>
import { mapActions } from 'pinia';
import { useCounterStore } from '../stores/counter.js'

export default {
  name: 'Pagination',
  props: ['pages'],
  methods: {
    ...mapActions(useCounterStore, ['changePage']),
    async pageValue(value) {
      await this.changePage(value)
    }
  },
}
</script>