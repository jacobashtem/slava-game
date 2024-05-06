<template>
  <div :class="{ 'pt-8 mt-8 border-t': mobile }" class="flex right-0">
    <NuxtLink
      v-for="(locale, index) in locales"
      :key="index"
      :to="switchLocalePath(locale.code)"
    >
      <Icon
        :class="{ 'text-5xl mr-8': mobile }"
        class="mr-3"
        :icon="locale.icon"
      />
    </NuxtLink>
  </div>
</template>

<script setup>
const props = defineProps({
  mobile: { type: Boolean, required: false },
});

const locales = [
  { code: 'pl', icon: 'emojione-v1:flag-for-poland' },
  { code: 'en', icon: 'emojione-v1:flag-for-united-kingdom' },
  { code: 'uk', icon: 'emojione-v1:flag-for-ukraine' },
];
</script>
