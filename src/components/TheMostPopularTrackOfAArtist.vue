<template>
  <div>
    <h1>Top 5 des chansons d'Eminem sur Deezer</h1>
    <ul class="flex flex-col gap-4">
      <li v-for="(track, index) in tracks" :key="index">
        <div class="flex items-center" :id="index">
          <span class="text-xl font-bold mx-6">#{{ index + 1 }}</span>
          <div class="flex flex-col gap-y-2">
            <div class="flex gap-x-2 cursor-pointer track" @click="toogleVisibility(index)">
              <span
                v-show="track.explicit_content_lyrics && trackInfoVisibility[index]"
                class="animation-appear text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full"
              >
                Explicit lyrics
              </span>
              <span
                class="flex items-center gap-x-1 text-xs font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"
                ><ClockTimeEightOutline />{{
                  new Date(track.duration * 1000).toTimeString().slice(3, 9)
                }}
              </span>
              <span class="font-bold flex items-center gap-x-2"
                >{{ track.title }} <Eye v-if="!trackInfoVisibility[index]" /><EyeOff
                  v-if="trackInfoVisibility[index]"
                />
              </span>
            </div>

            <audio
              v-show="trackInfoVisibility[index]"
              class="animation-appear"
              controls
              :src="track.preview"
            ></audio>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
import { ClockTimeEightOutline, Eye, EyeOff } from 'mdue'

export default {
  components: { ClockTimeEightOutline, Eye, EyeOff },
  data() {
    return {
      tracks: [],
      infoVisible: false,
      trackInfoVisibility: []
    }
  },
  mounted() {
    this.getTopTracks()
  },
  methods: {
    async getTopTracks() {
      const res = await axios.get('https://api.deezer.com/artist/14/top?limit=5')
      this.tracks = res.data.data
      this.tracks.forEach((track) => {
        this.trackInfoVisibility
      })
    },
    toogleVisibility(index) {
      this.trackInfoVisibility[index] = !this.trackInfoVisibility[index]
    }
  }
}
</script>

<style lang="scss" scoped>
.animation-appear {
  animation: show 600ms 100ms cubic-bezier(0.38, 0.97, 0.56, 0.76) forwards;

  // Prestate
  opacity: 0;
  // remove transform for just a fade-in
  transform: rotateX(-90deg);
  transform-origin: top center;
}

@keyframes show {
  100% {
    opacity: 1;
    transform: none;
  }
}

.track {
  span svg {
    color: #cbd5e1;
    transition: 0.2s;
  }
  &:hover {
    span svg {
      transition: 0.2s;
      color: rgb(52 211 153);
    }
  }
}
</style>
