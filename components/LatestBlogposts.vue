<template>
  <section
    class="flex  xs:mx-auto mt-9 flex-col xs:px-8 w-full mb-9 relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8"
  >
    <h3
      class="text-3xl sm:text-5xl lg:text-6xl font-uppercase bulgariamoderna mb-8"
    >
      {{ $t("blog.title") }}
    </h3>
    <div
      class="grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 grid gap-3 grid-rows-1 h-auto"
    >
      <PostCard v-for="post in posts" :key="post._id" :post="post" />
    </div>
  </section>
</template>

<script setup>
const { locale } = useI18n();
const { posts, fetchPosts } = useFetchPosts( locale);

onMounted(() => {
  fetchPosts(0,3);
});
</script>
