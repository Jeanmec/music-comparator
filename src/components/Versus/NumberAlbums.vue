<template>
  <div class="flex items-center" v-if="searchedArtists && searchedArtists.length > 0">
    <div
      class="flex flex-col items-center gap-y-4 w-1/2"
      v-for="(artist, index) in searchedArtists"
      :key="index"
    >
      <span
        class="text-3xl font-medium text-gray-900 dark:text-white"
        :class="{ 'bg-green-200 py-2 px-4 rounded-3xl': isHighest(artist.nb_album) }"
        >{{ artist.nb_album }} album(s)</span
      >
    </div>
  </div>
</template>

<script>
export default {
  props: ['searchedArtists'],
  methods: {
    isHighest(albumCount) {
      // Vérifie si cet artiste a le nombre d'albums le plus élevé
      return albumCount === Math.max(...this.searchedArtists.map((artist) => artist.nb_album))
    }
  }
}
</script>

<style>
.bg-green-500 {
  background-color: #34d399;
}
</style>
