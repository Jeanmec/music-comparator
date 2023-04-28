<template>
  <div class="flex items-center">
    <template v-for="(artist, index) in searchedArtists" :key="index">
      <div class="flex flex-col items-center gap-y-4 w-1/2">
        <img :src="artist.data.picture" class="rounded-full w-24" />
        <a
          :href="'/artist/' + artist.data.id"
          class="text-3xl flex items-center gap-x-1 font-bold text-gray-900"
          >{{ artist.data.name }} <LinkVariant class="text-green-500"
        /></a>
      </div>

      <span
        v-if="index == 0"
        class="text-4xl font-extrabold text-gray-900 absolute m-auto my-0 left-0 right-0 w-fit"
        >Vs</span
      >
    </template>
  </div>
</template>

<script>
import { LinkVariant } from 'mdue'
export default {
  props: ['searchedArtists'],
  components: { LinkVariant }
}
</script>
