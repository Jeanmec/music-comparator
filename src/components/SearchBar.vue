<template>
  <div class="w-6/12 mx-auto my-4">
    <div class="relative">
      <input
        type="search"
        id="default-search"
        class="block w-full border-2 focus:outline-none p-4 text-sm text-gray-900 border-gray-300 rounded-lg bg-slate-50 focus:border-green-400 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-green-500 dark:focus:border-green-500"
        placeholder="50 cent, Eminem, Ice Cube..."
        v-model="query"
        required
      />
      <button
        type="submit"
        @click="search"
        class="text-white flex absolute right-2.5 bottom-2.5 bg-green-500 hover:bg-green-600 focus:ring-green-300 font-medium rounded-md text-sm px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800 items-center gap-x-1"
      >
        Search <Magnify />
      </button>
    </div>
    <span v-if="error" class="text-red-500">{{ error }}</span>
  </div>
</template>

<script>
import { Magnify } from 'mdue'

export default {
  components: { Magnify },
  props: ['error'],
  data() {
    return {
      query: ''
    }
  },
  methods: {
    async search() {
      if (this.query) {
        this.$emit('searchArtist', this.query)
        this.query = ''
      }
    }
  }
}
</script>

<style scoped>
div {
  scroll-margin-top: 20px;
}
svg {
  transform: scaleX(-1);
}
</style>
