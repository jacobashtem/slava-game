<template>
  <div>
    <p class="not-prose  mb-8 text-3xl sm:text-5xl text-left lg:text-6xl  bulgariamoderna">Table of Content</p>
    <TocLinks class="border-l-2 border-customPrimary-200 pl-12" :links="links" :level="level + 1" />
    </div>
</template>

<script setup>
defineProps({
  links: Array,
  level: {
    type: Number,
    default: 0
  }
})
</script>