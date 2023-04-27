<template>
  <div class="flex items-center my-6">
    <div
      v-for="(artist, index) in searchedArtists"
      :key="index"
      class="flex flex-col items-center gap-y-4 w-1/2"
    >
      <div class="text-3xl font-bold text-gray-900 dark:text-white flex flex-col items-center">
        <span class="flex" :class="compareRadio(artist) ? 'bg-green-200 py-2 px-4 rounded-3xl' : ''"
          ><RadioTower /> Radio</span
        >
        <CheckBold class="text-green-500" v-if="artist.radio" />
        <CloseThick class="text-red-500" v-else />
      </div>
    </div>
  </div>
</template>

<script>
import { CheckBold, CloseThick, RadioTower } from 'mdue'
export default {
  props: ['searchedArtists'],
  components: {
    CheckBold,
    CloseThick,
    RadioTower
  },
  computed: {
    compareRadio() {
      return (artist) => {
        const filteredArtists = this.searchedArtists.filter((a) => a.radio)
        return filteredArtists.length === 1 && filteredArtists[0].id === artist.id
      }
    }
  }
}
</script>

<style></style>
