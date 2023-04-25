<script>
export default {
  props: ['artist']
}
</script>

<template>
  <div class="flex flex-col">
    <img :src="artist.picture_big" class="rounded-full w-48 h-48 border-4 border-emerald-500" />
    <span class="text-4xl font-black text-gray-900 dark:text-white">{{ artist.name }}</span>
    <span>{{ artist.nb_fan }} fans</span>
  </div>
</template>
