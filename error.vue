<template>
    <div>
      <AppHeader />
      <main>
        <div class="flex items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat"
            style="background-image: url('/img/404-page-img.webp')">
            <div class="max-w-md mx-auto text-center bg-white bg-opacity-90 p-8 rounded-lg shadow-lg">
                <div class="text-9xl font-bold text-customPrimary-600 mb-4">{{ error.statusCode }}</div>
                <h1 class="text-4xl font-bold text-gray-800 mb-6">Oops! {{ error.statusMessage }}</h1>
                <p class="text-lg text-gray-600 mb-8">{{ $t("404.text") }}</p>
                <NuxtLink to="/"
                class="inline-block bg-customPrimary-600 text-white font-semibold px-6 py-3 rounded-md hover:bg-customPrimary-700 transition-colors duration-300">
                {{ $t("404.button") }}
            </NuxtLink>
            </div>
            </div>
      </main>
      <AppFooter />
    </div>
  </template>
  
  
  
  <script setup>
  defineProps({ error: Object })
  </script>