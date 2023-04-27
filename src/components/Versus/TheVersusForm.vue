<template>
  <div>
    <slot name="presentation"></slot>
    <slot name="number-albums"></slot>
    <slot name="albums-preview"></slot>
    <slot name="radio-presence"></slot>
    <slot name="chart-fans"></slot>
    <slot name="tracks-preview"></slot>
  </div>
</template>

<script>
export default {
  props: ['searchedArtists']
}
</script>
