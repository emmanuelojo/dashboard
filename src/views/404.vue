<template>
  <div class="container h-screen flex flex-col justify-center items-center">
    <h1 class="text-n-purple text-2xl lg:text-5xl font-bold">
      404: Page not found
    </h1>
    <img
      src="../assets/404.svg"
      alt="404 Image"
      class="mt-10 sm:w-40 lg:w-80"
    />
    <div class="mt-10 flex justify-center p-4">
      <router-link to="/" class="font-medium">Go Home</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "404",
});
</script>

<style></style>
