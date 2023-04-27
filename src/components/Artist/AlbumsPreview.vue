<template>
  <div class="flex gap-x-12 my-6 items-center">
    <div
      class="flex w-1/2 flex-wrap gap-1 h-fit justify-center"
      v-for="(artist, index) in searchedArtists"
      :key="index"
    >
      <!-- Loop through each album of the current artist and display its cover image -->
      <div v-for="(album, index) in artist.albums" :key="index">
        <span :style="'filter: blur(' + index + 'px)'">
          <img :src="album.cover" class="w-16" />
        </span>
      </div>
      <a
        target="_blank"
        :href="artist.data.link"
        v-if="artist.albums.length > 0"
        class="transition-smooth flex items-center gap-x-1 absolute top-1/2 left-2/4 text-center show-more bg-green-100 px-3 py-1 rounded-full hover:bg-green-200 hover:text-black"
        >Voir la discographie complete <PlaylistMusic
      /></a>
    </div>
  </div>
</template>
<script>
import { PlaylistMusic } from 'mdue'
export default {
  props: ['searchedArtists'],
  components: { PlaylistMusic }
}
</script>
<style>
.show-more {
  transform: translateX(-50%) translateY(-50%);
}
</style>
