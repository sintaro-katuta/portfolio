<template>
  <header class="w-full bg-blue-800 p-2">
    <div class="grid grid-flow-col">
      <NuxtLink to="/"
        class="w-fit font-robotoSlab text-xl font-bold text-white border-2 border-white p-1 rounded-lg hover:bg-blue-600">
        {{ name }}
      </NuxtLink>
      <div class="flex items-center justify-center gap-6 max-md:hidden md:inline-flex">
        <NuxtLink :to="'/' + link.toLowerCase()" v-for="link in links"
          class="w-fit font-shipporiAntique text-md font-light text-white hover:bg-blue-600 p-2 rounded-lg">
          {{ link }}
        </NuxtLink>
      </div>
      <UIcon name="mi-menu" @click="toggleMenu" class="w-8 h-8 justify-self-end hover:bg-blue-600 p-2 rounded-lg max-md:block md:hidden" />

      <div v-if="onMenu" class="top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10 transition duration-300 ease-in-out">
        <div class="absolute top-0 right-0 w-1/2 h-full bg-blue-900 p-4">
          <UIcon name="mi-close" @click="closeMenu" class="w-8 h-8 flex justify-self-end hover:bg-blue-600 p-2 rounded-lg" />
          <div class="flex flex-col gap-4 mt-4">
            <NuxtLink :to="'/' + link.toLocaleLowerCase()" v-for="link in links"
              class="w-fit font-shipporiAntique text-md font-light text-white hover:bg-blue-600 p-2 rounded-lg">
              {{ link }}
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
const name = ref("Shintaro");
const links = ref(["Profile", "Works", "Blog"]);

const onMenu = ref(false);
const toggleMenu = () => {
	onMenu.value = !onMenu.value;
};
const closeMenu = () => {
	onMenu.value = false;
};
</script>
