<script>
export default {
  props: ['tracks']
}
</script>

<template>
  <div>
    <h3 class="font-bold text-2xl mb-5">Top Tracks</h3>
    <ul class="flex flex-col gap-5">
      <li v-for="(track, i) in tracks" :key="i" class="flex flex-row items-center">
        <span class="h-max">{{ i + 1 }}</span>
        <img class="mx-5 w-10 h-10 rounded" :src="track.album.cover" alt="cover" />
        <!-- Titre -->
        <span>{{ track.title }}</span>
        <!-- Durée -->
        <span class="ml-auto">{{
          track.duration.toString().replace(/(\d{1,2})(\d{2})$/, '$1:$2')
        }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
