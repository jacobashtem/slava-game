<template>
  <div>
    <button class="block lg:hidden" @click="toggleMenu">
      <Icon width="40" icon="ci:hamburger-md" />
    </button>
    <transition name="slide" mode="out-in">
      <div
        v-if="isMenuOpen"
        ref="menuRef"
        class="lg:hidden bg-white absolute top-0 right-0 z-10 w-24 shadow-md text-black"
      >
        <ul class="text-center">
          <li class="py-2 border-b-black border-solid border-b">
            <nuxt-link to="/" class="font-bold"> Home </nuxt-link>
          </li>
          <li class="py-2 border-b-black border-solid border-b">
            <nuxt-link
              to="/about"
              class="font-bold hover:text-customPrimary-500"
            >
              O Grze
            </nuxt-link>
          </li>
          <li class="py-2 border-b-black border-solid border-b">
            <nuxt-link
              to="/contact"
              class="font-bold hover:text-customPrimary-500"
            >
              Blog
            </nuxt-link>
          </li>
          <li class="py-2 border-b-customPrimary-500 border-solid border-b">
            <nuxt-link
              to="/contact"
              class="font-bold hover:text-customPrimary-500"
            >
              Bestiariusz <span class="icon-[quill--hamburger]"></span>
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
