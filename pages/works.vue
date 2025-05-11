
<template>
  <Header />
  <p id="title" class="font-appleSystem font-medium text-3xl text-center p-4">🌟 Works 💻</p>
  <UContainer class="w-full grid sm:grid-cols-3 max-sm:grid-cols-2 gap-4 py-8">
    <UCard hover v-for="repo in repos" :key="repo.id" class="app w-full h-full">
      <template #header>
        <div class="flex justify-between items-center">
          <h3 class="app-name text-lg font-semibold">{{ repo.name }}</h3>
        </div>
      </template>

      <p class="truncate">{{ repo.description }}</p>
      <p class="text-sm text-gray-500">言語: {{ repo.language }}</p>
      <p class="text-sm text-gray-500">作成日: {{ new Date(repo.created_at).toLocaleDateString() }}</p>
      <template #footer>
        <div class="flex justify-end gap-2">
          <UButton color="secondary" :to="repo.html_url">Github</UButton>
          <UButton v-if="repo.homepage" color="success" :to="repo.homepage">公開中</UButton>
        </div>
      </template>
    </UCard>
  </UContainer>
</template>

<script setup>
const { data: repos, error } = await useFetch(
	"https://api.github.com/users/sintaro-katuta/repos",
);

if (error.value) {
	console.error(error.value);
}
</script>
