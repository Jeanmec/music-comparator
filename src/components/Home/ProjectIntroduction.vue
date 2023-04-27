<template>
  <span class="block text-center my-10 text-3xl">
    Introducing our new artist comparison tool based on
    <span class="font-bold">Deezer</span> statistics!
    <span class="block text-2xl">
      Easily compare and contrast the popularity and streaming statistics of your favorite artists,
      filter and sort by various metrics, and see which songs and albums are performing the best.
    </span>
  </span>
  <div class="flex items-center justify-center">
    <button
      type="button"
      class="text-white border-4 border-green-300 bg-green-500 hover:bg-green-600 font-medium rounded-full text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700"
    >
      <span @click="gotoComparator" class="text-1xl flex items-center gap-x-1 text-xl"
        >Go to comparator <CompareHorizontal class="text-2xl"
      /></span>
    </button>
  </div>
</template>

<script>
import { CompareHorizontal } from 'mdue'
export default {
  components: {
    CompareHorizontal
  },
  methods: {
    gotoComparator() {
      document.getElementById('search-bar').scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>
