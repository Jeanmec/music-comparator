<template>
  <div class="flex items-center">
    <template v-for="(artist, index) in searchedArtists" :key="index">
      <div class="flex flex-col items-center gap-y-4 w-1/2">
        <img :src="artist.picture" class="rounded-full w-24" />
        <span class="text-3xl font-bold text-gray-900 dark:text-white">{{ artist.name }}</span>
      </div>

      <span
        v-if="index == 0"
        class="text-4xl font-extrabold text-gray-900 dark:text-white absolute m-auto my-0 left-0 right-0 w-fit"
        >Vs</span
      >
    </template>
  </div>
</template>

<script>
export default {
  props: ['searchedArtists']
}
</script>

<style></style>
