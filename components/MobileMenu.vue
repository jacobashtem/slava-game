<template>
  <div>
    <button class="block lg:hidden" @click="toggleMenu">
      <Icon width="40" icon="ci:hamburger-md" />
    </button>
    <transition name="slide" mode="out-in">
      <div
        v-if="isMenuOpen"
        ref="menuRef"
        class="lg:hidden absolute top-0 right-0 z-10 w-24 text-white w-full h-screen px-8 bg-slate-800"
      >
        <button class="absolute right-8 top-8 right-0" @click="toggleMenu">
          <Icon width="60" icon="ci:close-md" />
        </button>
        <p
          class="text-6xl xs:text-8xl font-bold bulgariamoderna flex flex-col py-8"
        >
          SLAVA!<span class="text-3xl">THE CARD GAME</span>
        </p>
        <ul class="text-2xl">
          <li class="py-2">
            <nuxt-link to="/" class="font-bold">
              {{ $t("menu._1") }}
            </nuxt-link>
          </li>
          <li class="py-2">
            <nuxt-link
              to="/about"
              class="font-bold hover:text-customPrimary-500"
            >
              {{ $t("menu._2") }}
            </nuxt-link>
          </li>
          <li class="py-2">
            <nuxt-link
              to="/contact"
              class="font-bold hover:text-customPrimary-500"
            >
              {{ $t("menu._3") }}
            </nuxt-link>
          </li>
          <li class="py-2">
            <nuxt-link
              to="/contact"
              class="font-bold hover:text-customPrimary-500"
            >
              {{ $t("menu._4") }} <span class="icon-[quill--hamburger]"></span>
            </nuxt-link>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { onClickOutside } from "@vueuse/core";
const menuRef = ref(null);
onClickOutside(menuRef, () => {
  isMenuOpen.value = false;
});
const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}
</style>
