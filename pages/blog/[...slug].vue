<template>
  <div
    class="prose max-w-none prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <ContentDoc>
      <template #not-found>
        <h1>Document not found (404)</h1>
        <p>This blog post could not be found.</p>
      </template>
      <template #default="{ doc }">
        <div>
          <section
            class="flex items-end bg-cover bg-center min-h-[480px] pb-4 xs:pb-9 w-100 relative mb-12 z-0"
          >
            <NuxtImg
              :src="doc.image.src"
              :alt="doc.image.alt"
              sizes="xs:100vw sm:100vw md:100vw lg:100vw xl:100vw xxl:100vw 2xl:100vw"
              class="my-0 z-0 h-full max-h-[90vh] w-full absolute top-0 brightness-50 object-cover object-top"
            />
            <div class="flex md:container md:mx-auto z-10 px-4 xs:px-8">
              <div class="text-center max-w-6xl mx-auto">
                <div class="flex justify-between items-center">
                  <BreadcrumbsNav />
                </div>
                <h1
                  class="text-2xl xs:text-3xl sm:text-5xl text-left lg:text-6xl text-white font- uppercase bulgariamoderna mb-2 xs:mb-4"
                >
                  {{ doc.title }}
                </h1>
                <h2
                  class="text-base xs:text-xl md:text-2xl text-left font-thin text-white mt-0 mb-4"
                >
                  {{doc.description}}
                </h2>
                <div class="flex justify-between text-white">
                  <ReadingTime
                    :reading-time-in-minutes="doc.readingTime.minutes"
                  />
                  <ArticleDate :date="doc.date"/>
                </div>
              </div>
            </div>
          </section>
          <section class="px-4 md:px-8 md:container md:mx-auto">
            <div
              class="prose-a:font-normal prose prose-xl desktop-xl:prose-2xl prose lg:prose-xl prose-h3:text-2xlcontainer max-w-6xl mx-auto prose-a:no-underline"
            >
              <TableOfContent :links="doc.body.toc.links" />
            </div>
            <div
              class="container prose-h3:text-2xl prose-a:no-underline max-w-6xl mx-auto prose prose-xl desktop-xl:prose-2xl prose lg:prose-xl"
            >
              <ContentRenderer :value="doc" />
            </div>
          </section>
        </div>
      </template>
    </ContentDoc>
    <!-- <PostCard v-for="post in randomPosts" :key="post._id" :post="post" /> -->
    <section class="xs:container xs:mx-auto px-4 xs:px-8 pb-8">
      <DisqusComments :identifier="currentPath" />
    </section>
  </div>
</template>

<script setup>
const { locale } = useI18n();
// const { posts, fetchPosts } = fetchPosts(2, 'Stworzenia');
// const { randomPosts, fetchRandomPosts, postsPerPage } = useFetchPosts(locale);
onMounted(() => {
    // fetchRandomPosts(doc._id);
});
const route = useRoute();
const currentPath = ref(route.fullPath);
</script>
