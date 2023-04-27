<template>
  <TheHeader />
  <RouterView />
  <TheFooter />
</template>

<script lang="ts">
import TheFooter from './components/layout/TheFooter.vue'
import TheHeader from './components/layout/TheHeader.vue'
export default { components: { TheFooter, TheHeader } }
</script>
