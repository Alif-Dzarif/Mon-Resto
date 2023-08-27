<template>
<div class="flex">
  <input @change.prevent="getCategory($event)" :value="item.id" type="radio" name="hs-radio-vertical-group" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="hs-radio-vertical-group-1">
  <label for="hs-radio-vertical-group-1" class="text-sm ml-2">{{ item.name }}</label>
</div>
</template>

<script>
export default {
    name: 'FilterBox',
    props: ['item', 'filterCategory', 'clickCategory'],
    methods: {
      getCategory(event) {
        this.filterCategory(event)
      },
      clickThis(value){
        this.clickCategory(value)
      }
    }
}
</script>