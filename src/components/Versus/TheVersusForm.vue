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
//This component will allow to determine a fixed visual order of the child components to be displayed.
export default {
  props: ['searchedArtists']
}
</script>
