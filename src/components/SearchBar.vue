<template>
  <div>
    <label
      for="default-search"
      class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
      >Search</label
    >
    <div class="relative">
      <input
        type="search"
        id="default-search"
        class="block w-full p-4 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-emerald-500 focus:border-emerald-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="50 cent, Eminem, Ice Cube..."
        v-model="query.text"
        required
      />
      <button
        type="submit"
        @click="search"
        class="text-white flex absolute right-2.5 bottom-2.5 bg-emerald-700 hover:bg-emerald-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-emerald-600 dark:hover:bg-emerald-700 dark:focus:ring-emerald-800 items-center gap-x-1"
      >
        Search <Magnify />
      </button>
    </div>
  </div>
</template>

<script>
import { Magnify } from 'mdue'
import axios from 'axios'

export default {
  components: { Magnify },
  data() {
    return {
      tracks: [],
      query: {
        text: '',
        type: ''
      },
      searchResult: []
    }
  },
  methods: {
    async search() {
      if (this.query.text) {
        const res = await axios.get('https://api.deezer.com/search/artist?q=' + this.query.text)
        if (res.data.data.length > 0) {
          for (let i = 0; i < res.data.data.length; i++) {
            const element = res.data.data[i]
            this.searchResult.push({
              id: element.id,
              name: element.name,
              pic: element.picture_medium
            })
          }
          this.$emit('searchResult', this.searchResult)
        }
      }
    }
  }
}
</script>

<style scoped>
svg {
  transform: scaleX(-1);
}
</style>
