<template>
  <article
    class="prose max-w-none prose-pre:bg-white dark:prose-pre:bg-gray-800 prose-pre:text-gray-700 dark:prose-pre:text-gray-300"
  >
    <ContentDoc>
      <template #not-found>
        <h1>Document not found (404)</h1>
        <p>This blog post could not be found.</p>
      </template>
      <template v-slot="{ doc }">
          <div>
            <section
              class="flex items-end bg-cover bg-center min-h-[75vh] pb-9 w-100 relative mb-12"
            >
              <img
                :src="doc.image.src"
                :alt="doc.image.alt"
                class="my-0 z-0 h-full max-h-[75vh] w-full absolute top-0 brightness-50 object-cover object-top"
              />
              <div class="flex container mx-auto z-10">
                <div class="text-center max-w-6xl mx-auto">
                  <div class="flex justify-between items-center">
                    <BreadcrumbsNav />
                    <div class="text-white italic">
                      {{ doc.author }}
                    </div>
                  </div>
                  <h1
                    class="text-3xl sm:text-5xl text-left lg:text-6xl text-white font- uppercase bulgariamoderna mb-4"
                  >
                    {{ doc.title }}
                  </h1>
                  <h2
                    class="text-xl md:text-2xl text-left font-thin text-white mt-0"
                  >
                  
                    <ContentRenderer :value="doc" :excerpt="true" />
                  </h2>
                  <ReadingTime
                    :readingTimeInMinutes="doc.readingTime.minutes"
                  />
                </div>
              </div>
            </section>
            <aside class="prose-a:font-normal prose prose-xl desktop-xl:prose-2xl prose lg:prose-xl prose-h3:text-2xlcontainer max-w-6xl mx-auto prose-a:no-underline">
               <TableOfContent :links="doc.body.toc.links"/>
            </aside>
            <article
              class="container prose-h3:text-2xl prose-a:no-underline max-w-6xl mx-auto prose prose-xl desktop-xl:prose-2xl prose lg:prose-xl"
            >
              <ContentRenderer :value="doc" />
            </article>
          </div>
      </template>
    </ContentDoc>
  </article>
</template>

<script setup>
const activeId = ref(null);
onMounted(async () => {
  let elements = [];
  const callback = (entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        activeId.value = entry.target.id;
        break;
      }
    }
  };
  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0.5,
  });

  setTimeout(() => {
    elements = document.querySelectorAll("h2, h3");

    for (const element of elements) {
      observer.observe(element);
    }
  }, 150);

  onBeforeUnmount(() => {
    for (const element of elements) {
      observer.unobserve(element);
    }
  });
});
</script>