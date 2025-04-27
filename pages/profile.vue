<template>
  <Header />
  <UContainer class="w-full h-full">
    <div class="w-full h-full flex gap-6 p-5">
      <div class="side-bar w-[256px] rounded-lg">
        <UAvatar src="/icon.png" size="full" class="hover:animate-pulse" />
        <div class="flex flex-col gap-3">
          <p class="font-appleSystem font-bold text-xl text-center p-2 rounded-lg">{{ name }}</p>
          <p class="font-appleSystem text-xl text-center p-2 rounded-lg hover:bg-gray-700">📍{{ address }}</p>
          <p class="font-appleSystem text-xl text-center p-2 rounded-lg hover:bg-gray-700">🧑‍💻{{ work }}</p>
          <div class="flex justify-center items-center gap-3">
            <NuxtLink
              v-for="icon in icons"
              :key="icon.name"
              :to="icon.url"
              class="w-fit font-appleSystem text-md font-light text-white hover:bg-gray-700 p-2 rounded-lg"
            >
              <img :src="icon.icon" :alt="icon.name" class="w-8 h-8 rounded-full hover:animate-pulse" />
            </NuxtLink>
          </div>
        </div>
      </div>
          <div class="main w-full border rounded-lg p-4">
        <div class="flex flex-col gap-6 font-appleSystem text-lg">
          <p>🎁生年月日 {{ birthday }}</p>
          <p class="text-xl">趣味</p>
          <p v-for="hobby in hobbies" class="pl-5">{{ hobby }}</p>
          <p class="text-xl">得意な言語</p>
          <p v-for="language in languages" class="pl-5">{{ language }}</p>
        </div>
      </div>
  </div>
  </UContainer>
</template>

<script setup>
const name = ref("勝田紳太郎");
const birthday = ref("2002/8/25");
const work = ref("WebDev");
const address = ref("Japan,Osaka");
const hobbies = ref(["🧸コレクション", "🎮ゲーム", "⌨ガジェット"]);
const languages = ref(["Javascript / Typescript", "Python"]);
const icons = ref([
  { name: "Qiita", icon: "/images/qiita-icon.png", url: "https://qiita.com/sintaro-katuta" },
  { name: "Github", icon: "/images/github-mark.png", url: "https://github.com/sintaro-katuta" },
])
</script>

