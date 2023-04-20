<template>
  <div>
    <h1>Top 10 des chansons d'Eminem sur Deezer</h1>
    <ul>
      <li v-for="(track, index) in tracks" :key="index">
        {{ track.title }} - {{ track.album.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      tracks: []
    }
  },
  mounted() {
    this.getTopTracks()
  },
  methods: {
    async getTopTracks() {
      const res = await axios.get('https://api.deezer.com/artist/13/top?limit=5')
      this.tracks = res.data.data
    }
  }
}
</script>
