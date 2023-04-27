<template>
  <header
    class="rounded-br-full rounded-bl-full flex h-12 justify-center items-center bg-emerald-200 border-b-4 border-r-4 border-l-4 border-emerald-500 gap-x-40 w-fit px-24"
  >
    <nav class="flex items-center">
      <RouterLink to="/"
        ><Home class="text-4xl text-emerald-500 hover:text-emerald-600" />
      </RouterLink>
    </nav>
  </header>
</template>

<script>
import { Home } from 'mdue'
export default { components: { Home } }
</script>
