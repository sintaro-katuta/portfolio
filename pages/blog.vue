<template>
  <Header />
  <p id="title" class="font-appleSystem font-medium text-3xl text-center p-4">🌟 Blog 📗</p>
  <UContainer class="w-full h-full grid md:grid-cols-2 max-md:grid-cols-1 gap-4 py-8">
    <UCard hover v-for="article in articles" :key="article.id" class="article w-full h-full">
      <template #header>
        <div class="flex items-center gap-4 py-2">
          <img :src="article.user.profile_image_url" alt="" class="w-8 h-8 rounded-full" />
          <p class="text-sm text-gray-500">{{ article.user.id }}({{ article.user.name }})</p>
        </div>
        <div class="flex justify-between items-center">
          <ULink as="button" :to="article.url" class="title text-xl text-white truncate">{{ article.title }}</ULink>
        </div>
      </template>
      <p class="truncate">{{ article.description }}</p>
        <div class="flex gap-2 mb-4">
          <p v-for="tag in article.tags" class="h-fit text-sm border bg-gray-600 rounded-xl p-1">{{ tag.name }}</p>
        </div>
        <div class="flex items-center justify-start gap-4">
          <div class="flex items-center gap-1">
            <UIcon name="i-mi:heart" class="w-4 h-4" />
            <p class="like text-sm text-gray-500">{{ article.likes_count }}</p>
          </div>
          <p class="text-sm text-gray-500">作成日: {{ new Date(article.created_at).toLocaleDateString() }}</p>
        </div>
    </UCard>
  </UContainer>
</template>

<script setup>
const config = useRuntimeConfig();
const { data: articles, error } = await useFetch(
	"https://qiita.com/api/v2/users/sintaro-katuta/items",
	{
		headers: {
			Authorization: `Bearer ${config.public.QIITA_ACCESS_TOKEN}`,
		},
	},
);

if (error.value) {
	console.error(error.value);
}
</script>
