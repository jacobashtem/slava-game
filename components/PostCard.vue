<template>
  <NuxtLink class="flex flex-col relative pb-20 w-full no-underline" :to="post._path"
    :class="insideSlider ? 'text-center' : 'bg-white rounded-lg shadow-lg overflow-hidden '">
    <NuxtImg :src="post.image.src" :alt="post.image.alt" height="320"
      class="h-56 m-w-80 object-cover object-center my-0 hover:brightness-50 transition-all " loading="lazy" />
    <div class="p-4 text-black">
      <p :class="insideSlider ? 'text-center' :  ''" class="capitalize pl-0 text-customPrimary-500 bold font-semibold relative mt-0 mb-0">{{
        post.category }}</p>
      <h2 class="text-xl font-semibold text-black m-0 min-h-14">{{ post.title }}</h2>
      <ArticleDate :class="insideSlider? 'flex justify-center' : ''" :date="post.date" />
      <p v-if="!insideSlider" class="text-black mt-2">{{ post.description }}</p>
    </div>
    <div v-if="!insideSlider"
      class="px-4 py-2 bg-slate-800 text-white flex absolute bottom-4 right-4 rounded-2xl items-center hover:brightness-50 transition-all">
      <Icon class="mr-3" icon="gridicons:arrow-right" />
      {{ $t("blog.readMore") }}
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  post: { type: Object, required: true },
  insideSlider: { type: Boolean, required: false },
});
</script>
