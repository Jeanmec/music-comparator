<template>
  <div
    class="rounded-tr-full mt-10 gap-y-2 rounded-tl-full flex flex-col h-20 justify-center items-center bg-emerald-100 border-t-4 border-r-4 border-l-4 border-emerald-300 w-full"
  >
    <a
      class="flex items-center gap-x-1 underline text-base"
      href="https://developers.deezer.com/api"
      target="_blank"
      ><Api />Data from Deezer AI</a
    >
    <div class="flex gap-x-10">
      <span class="text-sm flex items-center gap-x-1"><DevTo /> CLAVERIE Jean</span>
      <span class="text-sm flex items-center gap-x-1"><DevTo /> DESCAMPS Clémentin</span>
    </div>
  </div>
</template>

<script>
import { DevTo, Api } from 'mdue'
export default { components: { DevTo, Api } }
</script>
