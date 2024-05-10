<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>
<script setup>
useHead({
    meta: [
        {
            name: 'robots',
            content: 'noindex, nofollow'
        }
    ]
});
</script>
