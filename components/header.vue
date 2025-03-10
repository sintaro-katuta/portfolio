<template>
  <header class="w-full bg-blue-800 p-2">
    <div class="grid grid-flow-col">
      <NuxtLink to="/"
        class="w-fit font-robotoSlab text-xl font-bold text-white border-2 border-white p-1 rounded-lg hover:bg-blue-600">
        {{ name }}
      </NuxtLink>
      <div class="flex items-center justify-center gap-6 xs:hidden md:inline-flex">
        <NuxtLink :to="'/' + link.toLowerCase()" v-for="link in links"
          class="w-fit font-shipporiAntique text-md font-light text-white hover:bg-blue-600 p-2 rounded-lg">
          {{ link }}
        </NuxtLink>
      </div>
      <UIcon name="mi-menu" class="w-8 h-8 justify-self-end hover:bg-blue-600 p-2 rounded-lg xs:block md:hidden" />
    </div>
  </header>
</template>

<script setup>
const name = ref("Shintaro");
const links = ref(["Profile", "Works", "Blog"]);
</script>
