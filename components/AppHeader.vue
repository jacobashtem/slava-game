<template>
  <header
    class="text-white fixed py-2 top-0 left-0 w-full transition-colors duration-300 z-10"
    :class="{ 'bg-slate-800 shadow-lg z-10': isScrolled }"
  >
    <div
      class="xs:container xs:mx-auto flex justify-between items-center px-4 xs:px-8"
    >
      <nuxt-link to="/" class="font-bold">
        <h1
          class="flex flex-col text-center text-6xl font-bold bulgariamoderna"
        >
          SLAVA!<span class="text-sm">THE CARD GAME</span>
        </h1>
      </nuxt-link>
      <MobileMenu v-if="isMobile" :is-scrolled="isScrolled" />
      <nav v-else class="relative flex items-center">
        <ul class="flex space-x-4 mr-4">
          <li>
            <nuxt-link to="/" class="font-bold hover:text-customPrimary-500">
              {{ $t("menu._1") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/about"
              class="font-bold hover:text-customPrimary-500"
            >
              {{ $t("menu._2") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/contact"
              class="font-bold hover:text-customPrimary-500"
            >
              {{ $t("menu._3") }}
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/contact"
              class="font-bold hover:text-customPrimary-500"
            >
              {{ $t("menu._4") }} <span class="icon-[quill--hamburger]"></span>
            </nuxt-link>
          </li>
        </ul>
        <LanguageSwitcher />
      </nav>
    </div>
  </header>
</template>

<script setup>
import { useMediaQuery } from "@vueuse/core";
const isMobile = useMediaQuery("(max-width: 640px)");
const { y } = useWindowScroll();
const isScrolled = computed(() => y.value > 0);
</script>
