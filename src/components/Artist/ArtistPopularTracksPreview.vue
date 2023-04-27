<template>
  <div>
    <ul class="flex flex-col gap-4">
      <li v-for="(track, index) in artist.tracks" :key="index">
        <div class="flex items-center" :id="index">
          <span class="text-xl font-bold mx-6">#{{ index + 1 }}</span>
          <div class="flex flex-col gap-y-2">
            <div
              class="flex gap-x-2 cursor-pointer flex-wrap track"
              @click="toogleVisibility(index)"
            >
              <!-- Show an explicit label if track has explicit content -->
              <span
                v-show="track.explicit_content_lyrics && trackInfoVisibility[index]"
                class="animation-appear text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 bg-red-200 text-red-700 rounded-full"
              >
                Explicit lyrics
              </span>
              <!-- Display the track duration -->
              <span
                class="flex items-center gap-x-1 text-xs font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border"
                ><ClockTimeEightOutline />{{
                  new Date(track.duration * 1000).toTimeString().slice(3, 9)
                }}
              </span>
              <!-- Display the track title and show/hide icons -->
              <span class="font-bold flex items-center gap-x-2"
                >{{ track.title }} <Eye v-if="!trackInfoVisibility[index]" /><EyeOff
                  v-if="trackInfoVisibility[index]"
                />
              </span>
            </div>

            <!-- Show an audio player if the track is currently visible -->
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
import { ClockTimeEightOutline, Eye, EyeOff } from 'mdue'

export default {
  components: { ClockTimeEightOutline, Eye, EyeOff },
  props: ['artist'],
  data() {
    // Set initial visibility state for each track to false
    return {
      trackInfoVisibility: []
    }
  },
  methods: {
    // Toggle the visibility state of the clicked track
    toogleVisibility(index) {
      this.trackInfoVisibility[index] = !this.trackInfoVisibility[index]
    }
  }
}
</script>

<style lang="scss" scoped>
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
