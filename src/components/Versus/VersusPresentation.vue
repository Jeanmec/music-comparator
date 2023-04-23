<template>
  <div class="flex items-center" v-if="searchedArtists && searchedArtists.length > 0">
    <div class="flex flex-col items-center gap-y-4 w-1/2" v-if="searchedArtists[0]">
      <img :src="searchedArtists[0].picture" class="rounded-full w-24" />
      <span class="text-3xl font-medium text-gray-900 dark:text-white">{{
        searchedArtists[0].name
      }}</span>
    </div>
    <span class="text-4xl font-extrabold text-gray-900 dark:text-white">Vs</span>
    <div class="flex flex-col items-center gap-y-4 w-1/2" v-if="searchedArtists[1]">
      <img :src="searchedArtists[1].picture" class="rounded-full w-24" />
      <span class="text-3xl font-medium text-gray-900 dark:text-white">{{
        searchedArtists[1].name
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['searchedArtists']
}
</script>

<style></style>
