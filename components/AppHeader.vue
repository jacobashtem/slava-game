<template>
  <header
    class="text-white fixed py-2 top-0 left-0 w-full transition-colors duration-300"
    :class="{ 'bg-white': isScrolled }"
  >
    <div
      :class="isScrolled ? 'text-black' : 'text-white'"
      class="container mx-auto flex justify-between items-center"
    >
      <nuxt-link to="/" class="font-bold hover:text-customPrimary-500">
        <h1
          class="flex flex-col text-center text-6xl font-bold bulgariamoderna"
        >
          SLAVA!<span class="text-sm">THE CARD GAME</span>
        </h1>
      </nuxt-link>
      <nav>
        <ul class="flex space-x-4">
          <li>
            <nuxt-link to="/" class="font-bold hover:text-customPrimary-500">
              Home
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/about"
              class="font-bold hover:text-customPrimary-500"
            >
              O Grze
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/contact"
              class="font-bold hover:text-customPrimary-500"
            >
              Blog
            </nuxt-link>
          </li>
          <li>
            <nuxt-link
              to="/contact"
              class="font-bold hover:text-customPrimary-500"
            >
              Bestiariusz
            </nuxt-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
const { y } = useWindowScroll();
const isScrolled = computed(() => y.value > 0);
</script>
