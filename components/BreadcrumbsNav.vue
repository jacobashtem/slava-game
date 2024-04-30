<template>
  <nav>
    <ul class="text-white flex list-none pl-0 text-xs xs:text-base mb-2">
      <li class="flex items-center pl-0">
        <NuxtLink
          class="text-white no-underline flex items-center hover:text-customPrimary-500"
          :to="'/'"
        >
          <Icon icon="oi:home" />
        </NuxtLink>
        <Icon class="w-4 ml-3 mr-3 mt-1" icon="il:arrow-right" />
      </li>
      <li class="flex items-center pl-0">
        <NuxtLink
          class="text-white no-underline hover:text-customPrimary-500"
          :to="'./'"
          >Blog</NuxtLink
        >
        <Icon class="ml-3 w-4 mr-3 mt-1" icon="il:arrow-right" />
      </li>
      <li class="capitalize w-[45vw] xxs:w-[50vw]  xs:w-[60vw] sm:w-auto text-left pl-0 text-customPrimary-500 bold font-semibold truncate">
        {{ routeSlug }}
      </li>
    </ul>
  </nav>
</template>

<script setup>
const route = useRoute();
const routeSlug = (route.params.slug?.[0] || "").replace(/-/g, " ");
</script>
