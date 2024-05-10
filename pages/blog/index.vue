<template>
  <article :class="{'min-h-[1400px]' : otherPosts.length > 0}" class="prose dark:prose-invert max-w-none mt-0">
    <FeaturedPost v-if="firstPost && firstPost._path" :first-post="firstPost" />
    <SliderPosts v-if="sliderPosts.length > 0" :slider-posts="sliderPosts" />
    <OtherPosts v-if="otherPosts.length > 0" :other-posts="otherPosts" />
    <BlogPagination :totalPages="totalPages" :pagesToShow="pagesToShow" :currentPage="currentPage"/>
  </article>
</template>

<script setup>
useSeoMeta({
  title: 'Blog | Slava! The Card Game',
  ogTitle: 'Blog | Slava! The Card Game',
  description: 'Zanurz się, w tajemniczej i fascynującej mitologii słowiańskiej. W grze karcianej `Slava! The Card Game`, stoczysz pasjonujące pojedynki strategiczne za pomocą 180 unikalnych kart! Dołącz do społeczności graczy i rozpocznij swoją przygodę już dziś!',
  ogDescription: 'Zanurz się, w tajemniczej i fascynującej mitologii słowiańskiej. W grze karcianej `Slava! The Card Game`, stoczysz pasjonujące pojedynki strategiczne za pomocą 180 unikalnych kart! Dołącz do społeczności graczy i rozpocznij swoją przygodę już dziś!',
})
const { locale } = useI18n();
const { posts, totalPages, fetchPosts, postsPerPage } = useFetchPosts(locale);
const { currentPage, pagesToShow } = usePagination(totalPages);
const firstPost = ref({});
const sliderPosts = ref([]);
const otherPosts = ref([]);

watch(posts, () => {
    if (posts.value.length > 0) {
        firstPost.value = posts.value[0];
        sliderPosts.value = posts.value.slice(1, 9);
        otherPosts.value = posts.value.slice(9, 15);
    }
});

onMounted(() => {
    const skip = (currentPage.value - 1) * postsPerPage;
    fetchPosts(skip, postsPerPage);
});

onBeforeRouteUpdate((to) => {
    const newPage = parseInt(to.query.page) || 1;
    currentPage.value = newPage;
    const skip = (currentPage.value - 1) * postsPerPage;
    fetchPosts(skip, postsPerPage);
});
</script>

<style scoped>
.swiper-button-disabled {
  cursor: default;
}
</style>