<template>
  <div class="flex flex-col items-center mt-10">
    <h1 class="text-3xl font-bold mb-6">
      Newsletter Section
    </h1>
    <form
      class="w-1/2"
      @submit="submitForm"
    >
      <div class="mb-4">
        <label
          for="name"
          class="block text-gray-700 font-bold mb-2"
        >Name:</label>
        <input
          id="name"
          v-model="name"
          type="text"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
      </div>

      <div class="mb-4">
        <label
          for="email"
          class="block text-gray-700 font-bold mb-2"
        >Email:</label>
        <input
          id="email"
          v-model="email"
          type="email"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        >
      </div>

      <div class="mb-4">
        <label
          for="message"
          class="block text-gray-700 font-bold mb-2"
        >Message:</label>
        <textarea
          id="message"
          v-model="message"
          required
          class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
        />
      </div>

      <button
        type="submit"
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const name = ref("");
    const email = ref("");
    const message = ref("");

    const submitForm = () => {
      // Perform form submission logic here
      console.log("Form submitted");
      console.log("Name:", name.value);
      console.log("Email:", email.value);
      console.log("Message:", message.value);

      // Reset form fields
      name.value = "";
      email.value = "";
      message.value = "";
    };

    return {
      name,
      email,
      message,
      submitForm,
    };
  },
};
</script>
