<template>
  <div class="max-w-xl">
    <div class="bg-white rounded-lg p-8 shadow-md">
      <h2 class="text-2xl font-semibold mb-6">
        Nie chcesz przegapić premiery? Zapisz się na listę oczekujących!
      </h2>
      <form
        class="shadow-lg p-6 bg-white justify-between mt-8 max-w-lg flex items-center"
        @submit.prevent="submitForm"
      >
        <input
          v-model="email"
          type="email"
          class="py-2 px-4 mr-2 w-full md:w-72 border-b-customPrimary-500 border-solid border-b focus:outline-none focus:border-b-none focus:border-t focus:border-t-customPrimary-500"
          placeholder="Wpisz swój email"
        />
        <button
          type="submit"
          class="bg-customPrimary-500 hover:bg-customPrimary-600 text-white py-2 px-6 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Zapisz się
        </button>
      </form>
    </div>
  </div>
</template>

<script setup>
const isFocused = ref(false);
const email = ref("");
const submitForm = () => {
  // Handle subscription logic here
  // You can use the email variable to access the email value
  email.value = "";
};
</script>
