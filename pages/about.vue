<template>
<div>
  <div class="bg-gray-900 py-40">
    <div class="container mx-auto px-6 md:px-12">
        <div class="flex flex-col md:flex-row items-center">
            <div class="md:w-1/2 lg:w-2/3">
                <h1 class="text-4xl md:text-6xl lg:text-7xl text-white font-bold mb-6">
                    <br class="hidden md:block" />
                    <span class="text-customPrimary-500">Slava!</span> The Card Game
                </h1>
                <p class="text-lg md:text-xl lg:text-2xl text-gray-400 mb-8 mr-2 pr-5">
                  Wyjątkowy Living Card Game (LCG) bitewniak, dla od 2 do 4 graczy. Osadzony w tajemniczej, lecz niezwykle ciekawej i mało znanej ma słowiańskiej mitologii.
                </p>
            </div>
            <div class="md:w-1/2 lg:w-2/3 mt-8 md:mt-0">
                <img src="/public/img/slava-promo-2.png" alt="Hero Image" class="rounded-lg shadow-lg" />
            </div>
        </div>
    </div>
</div>
  <div class="relative overflow-hidden bg-white">
      <div class="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div class="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div class="sm:max-w-lg">
            <h1 class="font text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">120 unikalnych kart stworzeń...</h1>
            <p class="mt-4 text-xl text-gray-500">... a każde z nich, to unikalna zdolność i możliwości taktyczne. <br/><br/>Spotkasz tutaj zarówno Słowian, jak i całą masę demonów. Projektując, czerpaliśmy garściami z niezwykle bogatego - lecz wciąż zbyt mało znanego folkloru.</p>
          </div>
          <div>
            <div class="mt-10">
              <!-- Decorative image grid -->
              <div aria-hidden="true" class="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl">
                <div class="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div class="flex items-center space-x-6 lg:space-x-8">
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img src="/public/img/slava-promo-5.png" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="/public/img/slava-promo-6.png" alt="" class="h-full w-full object-cover object-center">
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="/public/img/slava-promo-7.png" alt="" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="/public/img/slava-promo-8.png" alt="" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="/public/img/slava-promo-9.png" alt="" class="h-full w-full object-cover object-center">
                      </div>
                    </div>
                    <div class="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="/public/img/slava-promo-10.png" alt="" class="h-full w-full object-cover object-center">
                      </div>
                      <div class="h-64 w-44 overflow-hidden rounded-lg">
                        <img src="/public/img/slava-promo-11.png" alt="" class="h-full w-full object-cover object-center">
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <NuxtLink to="./blog" class="inline-block rounded-md border border-transparent bg-customPrimary-600 py-3 px-8 text-center font-medium text-white hover:bg-indigo-700">O Mitologii, poczytasz na blogu</NuxtLink>
            </div>
          </div>
        </div>
      </div>
  </div>
</div>
</template>

<script setup>
const { t } = useI18n();
useSeoMeta({
  title: t("aboutPage.seoTitle"),
  ogTitle: t('aboutPage.seoTitle'),
  description: t('aboutPage.seoDescription'),
  ogDescription: t('aboutPage.seoDescription'),
})
</script>
