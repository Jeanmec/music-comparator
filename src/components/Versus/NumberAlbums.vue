<template>
  <!-- The main container for the list of artists -->
  <div class="flex items-center">
    <!-- Loop through the "searchedArtists" array and display each artist -->
    <div
      class="flex flex-col items-center gap-y-4 w-1/2 my-6"
      v-for="(artist, index) in searchedArtists"
      :key="index"
    >
      <!-- Display the number of albums for the current artist -->
      <span
        class="text-3xl font-medium text-gray-900 dark:text-white"
        :class="{ 'bg-green-200 py-2 px-4 rounded-3xl': isHighest(artist.data.nb_album) }"
        >{{ artist.data.nb_album }} album(s)</span
      >
    </div>
  </div>
</template>
<script>
export default {
  // Component receives a "searchedArtists" prop that contains the artist data
  props: ['searchedArtists'],

  methods: {
    // Method to check if the artist has the highest number of albums in the list
    isHighest(nbAlbum) {
      // Use "Math.max()" to find the highest number of albums in the array
      return nbAlbum === Math.max(...this.searchedArtists.map((artist) => artist.data.nb_album))
    }
  }
}
</script>
