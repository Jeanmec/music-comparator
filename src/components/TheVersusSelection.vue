<template>
  <div
    v-if="searchedArtists && searchedArtists.length > 0"
    class="flex flex-col items-center my-4 gap-y-2"
  >
    <span class="font-bold text-4xl">Select your artist</span>
    <div class="flex flex-wrap justify-center gap-2 my-3 mx-20">
      <div v-for="(result, index) in searchedArtists" :key="result" class="result">
        <span
          @click="selectArtist(result)"
          class="text-xs inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full bg-white text-gray-700 border cursor-pointer gap-3"
        >
          <img :src="result.picture_small" class="w-10 h-10 rounded-full" /> {{ result.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['searchedArtists'],
  methods: {
    selectArtist(result) {
      this.$emit('selectedArtist', result)
      this.removeItemFromArrayById(this.searchedArtists, result.id)
    },
    removeItemFromArrayById(arr, id) {
      let index = arr.findIndex((item) => item.id === id)
      while (index !== -1) {
        arr.splice(index, 1)
        index = arr.findIndex((item) => item.id === id)
      }
    }
  }
}
</script>

<style lang="scss">
.result {
  &:hover {
    transition: 0.2s;
    span {
      border: 1px solid green;
      transition: 0.2s;
      color: green;
    }
  }
}
</style>
