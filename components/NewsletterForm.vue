<template>
  <div class="max-w-xl">
    <div class="md:mt-9">
      <h2 class="text-xl md:text-2xl text-left font-thin text-white">
        {{ $t("hero.subtitle") }}
      </h2>
      <form
        class="flex-col text-left md:flex-row py-6 items-start md:items-center justify-between mt-2 max-w-lg flex"
        @submit.prevent="submitForm"
      >
        <input
          v-model="email"
          type="email"
          class="rounded-3xl mb-3 md:mb-0 py-2 px-4 w-full md:w-96 border-b-customPrimary-500 border-solid border-b focus:outline-none focus:border-b-none focus:border-t focus:border-t-customPrimary-500"
          :placeholder="$t('hero.email_placeholder')"
        />
        <button
          type="submit"
          class="ml-2 bg-customPrimary-500 hover:bg-customPrimary-600 text-white py-2 px-6 rounded-3xl focus:outline-none focus:ring-2 focus:customPrimary-500"
        >
          {{ $t("hero.button") }}
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const email = ref("");
const submitForm = () => {
  email.value = "";
};
</script>
