<template>
  <div
    v-if="searchedArtists && searchedArtists.length > 0"
    class="flex flex-col items-center my-4 gap-y-2 animation-appear"
  >
    <span class="font-bold text-4xl">Select your artist</span>
    <div class="flex flex-wrap justify-center gap-2 my-3 mx-20">
      <div v-for="(artist, index) in searchedArtists" :key="artist" class="artist">
        <span
          @click="selectArtist(artist)"
          class="text-xs inline-flex items-center font-bold leading-sm px-3 py-1 rounded-full bg-white text-gray-700 border cursor-pointer gap-3 ga"
        >
          <img :src="artist.picture_small" class="w-10 h-10 rounded-full" /> {{ artist.name }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['searchedArtists'],
  methods: {
    selectArtist(artist) {
      this.$emit('selectedArtist', artist)
    }
  }
}
</script>

<style lang="scss" scoped>
.artist {
  &:hover {
    transition: 0.2s;
    span {
      border: 1px solid #22c55e;
      transition: 0.2s;
      color: #22c55e;
    }
  }
}
</style>
