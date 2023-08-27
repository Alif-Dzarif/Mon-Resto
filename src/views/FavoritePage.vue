<template>
  <div>
    <Card v-for="(item, index) in favorite" :key="index" :item="item"/>
  </div>
</template>
<script>
import Card from '../components/Card.vue';
import { mapActions, mapState } from 'pinia';
import { useCounterStore } from '../stores/counter';

export default {
  name: 'FavoritePage',
  data() {
    return {}
  },
  components: {
    Card
  },
  methods: {
    ...mapActions(useCounterStore, ['fetchFavorites']),
  },
  
  computed: {
    ...mapState(useCounterStore, ['favorite'])    
  },

  created(){
    this.fetchFavorites()
  }
}
</script>
