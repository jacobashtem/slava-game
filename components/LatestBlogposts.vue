<template>
  <section class="flex container mx-auto mt-9 flex-col">
    <h3 class="text-3xl sm:text-5xl lg:text-6xl font-uppercase bulgariamoderna mb-8">
        {{$t("blog.title")}}
        </h3>
        <div class="grid-cols-3 grid gap-3 grid-rows-1 h-auto">
            <PostCard v-for="post in posts" :key="post._id" :post="post"/>
        </div>
  </section>
</template>

<script setup>
const { locale } = useI18n();

const posts = ref([]);
const fetchPosts = async () => {
    try{
        posts.value = await queryContent(locale.value !== 'pl'? locale.value: '' +'/blog').find()
    }catch(error) {
        console.error(error);
    }
}

watch(locale, () => {
  fetchPosts();
});

onMounted(() => {
  fetchPosts();
});

</script>

