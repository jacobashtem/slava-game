<template>
    <section class="pagination">
      <ul class="flex items-center mb-4 cursor-pointer pl-0 justify-center">
        <li v-show="currentPage > 1" class="hover:bg-slate-800 hover:text-white border items-center pl-0 border-slate-800 mt-0 hover:transition-all text-center no-underline text-xl flex justify-center mb-0">
          <NuxtLink
            class="no-underline w-5 px-4 flex justify-center hover:text-white"
            :to="`./blog`"
            aria-label="First page"
          >
            &laquo;
          </NuxtLink>
        </li>
        <li
          v-for="page in pagesToShow"
          :key="page"
          class="hover:bg-slate-800 hover:text-white border items-center pl-0 mb-0 border-slate-800 mt-0 hover:transition-all text-center no-underline text-xl flex justify-center"
        >
          <span
            v-if="page === currentPage"
            class="no-underline w-5 px-4 flex bg-slate-800 text-white justify-center active cursor-default"
            aria-current="page"
          >
            {{ page }}
          </span>
          <NuxtLink
            v-else
            class="no-underline w-5 px-4 flex justify-center hover:text-white"
            :to="`./blog?page=${page}`"
            :aria-label="`Go to page ${page}`"
          >
            {{ page }}
          </NuxtLink>
        </li>
  
        <li v-show="currentPage < totalPages" class="hover:bg-slate-800 hover:text-white mb-0 border items-center pl-0 border-slate-800 mt-0 hover:transition-all text-center no-underline text-xl flex justify-center">
          <NuxtLink
            class="no-underline w-5 px-4 flex justify-center hover:text-white"
            :to="`./blog?page=${totalPages}`"
            aria-label="Last page"
          >
            &raquo;
          </NuxtLink>
        </li>
      </ul>
    </section>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    totalPages: {
      type: Number,
      required: true,
    },
    pagesToShow: {
      type: Array,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
  });
  </script>
  