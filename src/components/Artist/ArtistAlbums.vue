<script>
export default {
  props: ['artist']
}
</script>

<template>
  <div class="flex flex-col justify-center">
    <h3 class="font-bold text-2xl mb-5">Albums - {{ artist.nb_album }}</h3>

    <div class="flex flex-row flex-wrap gap-5 justify-between">
      <div v-for="(album, i) in artist.albums" :key="i" class="w-36">
        <div class="w-full overflow-hidden text-ellipsis">
          <img class="rounded w-full h-36 mb-2" :src="album.cover" alt="cover" />
          <span class="whitespace-nowrap text-base">{{ album.title }}</span>
          <br />
          <span class="text-xs">{{ album.release_date.split('-')[0] }}</span>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="mt-10 mx-auto w-max text-white bg-green-700 hover:bg-green-800 focus:outline-none font-medium rounded-full text-sm px-5 py-2.5 text-center"
      @click="$emit('fetch-more-albums-event')"
      :disabled="artist.albums.length == artist.nb_album"
      :class="{ disabled: artist.albums.length == artist.nb_album }"
    >
      Afficher plus
    </button>
  </div>
</template>

<style lang="scss" scoped>
.disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
