<template>
  <div class="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col relative pb-20">
    <NuxtLink :to="post._path">
    <!-- Miniaturka obrazka -->
    <img :src="post.image.src" alt="Post Image" class="w-full h-80 object-cover object-center">

    <!-- Opis posta -->
    <div class="p-4">
      <h2 class="text-xl font-semibold text-black">{{ post.title }}</h2>
      <p class="text-black mt-2">{{ post.description }}</p>
    </div>

        <div class="px-4 py-2 bg-slate-800 text-white flex absolute bottom-4 right-4 rounded-2xl items-center">
            <Icon class="mr-3" icon="gridicons:arrow-right"/>
            {{ $t("blog.readMore")}}
        </div>
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
    post: Object
})

const readMore = () => {

};
</script>
