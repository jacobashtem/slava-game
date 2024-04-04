<template>
  <div class="flex right-0">
    <NuxtLink :to="switchLocalePath('pl')"
      ><Icon class="mr-3" icon="emojione-v1:flag-for-poland"
    /></NuxtLink>
    <NuxtLink :to="switchLocalePath('en')"
      ><Icon class="mr-3" icon="emojione-v1:flag-for-united-kingdom" />
    </NuxtLink>
    <NuxtLink :to="switchLocalePath('uk')"
      ><Icon class="mr-3" icon="emojione-v1:flag-for-ukraine" />
    </NuxtLink>
  </div>
</template>

<script setup></script>

<style></style>
