<template>
  <article>
    <AppHero />
    <AboutSection/>
    <FeaturesSection />
    <LatestBlogposts />
    <TestimonialsSection />
    <FaqSection />
    
  </article>
</template>

<script lang="ts" setup>
const gtm = useGtm(); // auto-imported by the module

onMounted(() => {
  gtm.trackView("Home", "/");
});
</script>
