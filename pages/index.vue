<template>
  <article>
    <AppHero />
  </article>
</template>

<script lang="ts" setup>
const gtm = useGtm(); // auto-imported by the module

onMounted(() => {
  gtm.trackView("Home", "/");
});
</script>
