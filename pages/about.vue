<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    About us
  </div>
</template>

<script setup>
const { t } = useI18n();
useSeoMeta({
  title: t("aboutPage.seoTitle"),
  ogTitle: t('aboutPage.seoTitle'),
  description: t('aboutPage.seoDescription'),
  ogDescription: t('aboutPage.seoDescription'),
})
</script>
