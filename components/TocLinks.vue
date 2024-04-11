<template>
  <ul class="not-prose list-[upper-roman] pl-12">
    <li v-for="link in links" :key="link.id">
      <NuxtLink
        :to="{ path: route.path, hash: `#${link.id}` }"
        class="flex items-center hover:text-customPrimary-500"
        :class="{ 'ml-4': level }"
      >
        {{ link.text }}
      </NuxtLink>
      <TocLinks
        class="list-[decimal]"
        :links="link.children"
        :level="level + 1"
      />
    </li>
  </ul>
</template>

<script setup>
const route = useRoute();
defineProps({
  links: { type: Array, required: true },
  level: {
    type: Number,
    default: 0,
  },
});
</script>
