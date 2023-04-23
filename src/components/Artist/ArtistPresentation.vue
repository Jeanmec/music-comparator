<template>
  <div class="flex flex-col">
    <img :src="artistData.picture_big" class="rounded-full w-48 h-48 border-4 border-emerald-500" />
    <span class="text-4xl font-black text-gray-900 dark:text-white">{{ artistData.name }}</span>
    <span>{{ artistData.nb_fan }} fans</span>
  </div>
</template>

<script>
export default {
  props: ['artistData']
}
</script>

<style></style>
