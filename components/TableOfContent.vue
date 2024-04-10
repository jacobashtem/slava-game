<template>
<div>
  <h4 class="text-2xl">Table of Content:</h4>
  <ul class="border-l-2 border-customPrimary-200">
    <li v-for="link in links" :key="link.id">
      <NuxtLink :to="{ path: route.path, hash: `#${link.id}` }" class="flex items-center hover:text-customPrimary-500" :class="{ 'ml-4': level }">
        <Icon class="mr-2" icon="uil:link"></Icon>  {{ link.text }}
      </NuxtLink>
    </li>
  </ul>
  </div>
</template>

<script setup>
const route = useRoute()
defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0
  }
})
</script>