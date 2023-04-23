<template>
  <div class="flex gap-x-12" v-if="hasAlbums">
    <div
      class="flex w-1/2 flex-wrap gap-1 h-fit"
      v-for="(albums, index) in albumsOfSelectedArtist"
      :key="index"
    >
      <div
        v-for="(album, albumIndex) in albums"
        :key="albumIndex"
        v-show="showAlbums[index] || albumIndex < 5"
      >
        <a :href="album.link" target="_blank">
          <img :src="album.cover" class="w-16" />
        </a>
      </div>
      <button @click="toggleShowAlbums(index)" v-show="!showAlbums[index]">Show albums</button>
    </div>
  </div>
</template>
<script>
export default {
  props: ['albumsOfSelectedArtist'],
  computed: {
    hasAlbums() {
      return (
        this.albumsOfSelectedArtist &&
        this.albumsOfSelectedArtist.some((albums) => albums.length > 0)
      )
    }
  },
  data: function () {
    return {
      showAlbums: [false, false]
    }
  },
  methods: {
    toggleShowAlbums(index) {
      this.showAlbums[index] = !this.showAlbums[index]
    }
  }
}
</script>
<style></style>
