<template>
  <div class="flex flex-col align-center justify-center">
    <!-- Photo de l'artiste -->
    <img
      :src="artist.picture_big"
      class="m-auto rounded-full w-48 h-48 border-4 border-emerald-500"
    />
    <!-- Nom -->
    <span class="text-4xl font-black text-gray-900 text-center mt-5">{{ artist.name }}</span>
    <!-- Nombre de fan -->
    <span class="text-center">{{ artist.nb_fan }} fans</span>
  </div>
</template>

<script>
export default {
  props: ['artist']
}
</script>
