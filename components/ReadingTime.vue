<template>
  <p class="text-white flex items-center mb-0 xs:mb-5">
    <Icon class="mr-2" icon="il:clock" /> {{ readingTime }} min
  </p>
</template>

<script setup>
const props = defineProps({
  readingTimeInMinutes: { type: Number, required: true },
});

const readingTime = computed(() => {
  const minutes = parseFloat(props.readingTimeInMinutes);
  if (!isNaN(minutes)) {
    return Math.round(minutes);
  } else {
    return "< 1";
  }
});
</script>

<style></style>
