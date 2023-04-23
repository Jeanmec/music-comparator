<template>
  <div>
    <slot name="presentation"></slot>
    <slot name="number-albums"></slot>
    <slot name="albums-preview"></slot>
  </div>
</template>

<script>
export default {
  props: ['searchedArtists']
}
</script>

<style></style>
