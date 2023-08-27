
<template>
  <div class="bg-slate-100">
    <NavBar />
    <RouterView />
      <footer class="mt-10">
      <div class="bg-stone-900 h-50 flex">
          <div class="p-5 text-slate-100">
              <h1 class="text-white">Created By Alif-Dzarif</h1>
          </div>
      </div>
    </footer>
  </div>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';

export default {
  components: {
    NavBar
  },
}
</script>