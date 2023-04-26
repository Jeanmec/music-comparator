<template>
  <header
    class="rounded-br-full rounded-bl-full flex h-12 justify-center items-center bg-emerald-200 border-b-4 border-r-4 border-l-4 border-emerald-500 gap-x-40 w-6/12"
  >
    <nav>
      <RouterLink to="/">Home</RouterLink>
    </nav>
  </header>

  <RouterView />

  <TheFooter />
</template>

<script lang="ts">
import TheFooter from './components/TheFooter.vue'
export default {
  components: { TheFooter }
}
</script>

<style lang="scss" scoped>
header {
  align-self: center;
  nav {
    display: flex;
    align-self: center;
    column-gap: 15px;
  }
}
.container {
  width: 80%;
}
</style>
