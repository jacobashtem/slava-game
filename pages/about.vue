<template>
  <div class="flex flex-col items-center justify-center min-h-screen">
    <h1 class="text-3xl font-bold mb-4">Contact Us</h1>
    <form class="w-1/2">
      <div class="mb-4">
        <label for="name" class="block font-medium">Name:</label>
        <input
          id="name"
          v-model="name"
          type="text"
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div class="mb-4">
        <label for="email" class="block font-medium">Email:</label>
        <input
          id="email"
          v-model="email"
          type="email"
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <div class="mb-4">
        <label for="message" class="block font-medium">Message:</label>
        <textarea
          id="message"
          v-model="message"
          class="w-full border border-gray-300 rounded px-3 py-2"
        />
      </div>
      <button
        class="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-4 rounded"
        @click="submitForm"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      email: "",
      message: "",
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic here
      // You can use this.name, this.email, and this.message to access form values
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
