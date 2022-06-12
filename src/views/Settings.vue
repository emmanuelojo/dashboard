<script setup lang="ts">
import { ref } from "vue";
import FacebookLogo from "../assets/fb.svg";
import InstagramLogo from "../assets/ig.svg";
import YouTubeLogo from "../assets/yt.svg";

const name = ref("John Doe");

const email = ref("doe@mail.com");

const password = ref("");

const mobile = ref<number>();

const about = ref("");
</script>

<template>
  <div class="mt-20 md:mt-10 mb-10 grid gap-4 mx-4 lg:mx-10">
    <p class="text-2xl font-bold">Settings</p>

    <div class="mt-5 md:mt-10 grid sm:flex gap-10">
      <div
        class="bg-white rounded-md shadow w-full md:w-1/2 lg:w-1/3 h-fit md:full"
      >
        <div class="p-4 md:p-8 bg-n-dark-blue flex flex-col">
          <img
            src="https://picsum.photos/200"
            alt="admin image"
            class="mx-auto w-20 md:w-32 lg:w-52 h-20 md:h-32 lg:h-52 rounded-full"
          />

          <div class="mt-8 text-center text-white">
            <p class="font-semibold">Johnny</p>
            <p class="text-sm">doe@mail.com</p>
          </div>
        </div>

        <div
          class="p-4 md:p-8 my-5 md:my-10 flex justify-center items-center gap-5"
        >
          <div class="flex flex-col justify-center gap-2">
            <img
              :src="InstagramLogo"
              alt="Social Media Logo"
              class="w-10 md:w-5 lg:w-10 h-10 md:h-5 lg:h-10 mx-auto object-cover"
            />
            <p>johnnyDoe</p>
          </div>

          <div class="flex flex-col justify-center gap-2">
            <img
              :src="FacebookLogo"
              alt="Social Media Logo"
              class="w-10 md:w-5 lg:w-10 h-10 md:h-5 lg:h-10 mx-auto object-cover"
            />
            <p>Johnny_Doe</p>
          </div>

          <div class="flex flex-col justify-center gap-2">
            <img
              :src="YouTubeLogo"
              alt="Social Media Logo"
              class="w-10 md:w-5 lg:w-10 h-10 md:h-5 lg:h-10 mx-auto object-cover"
            />
            <p>johnnyDoe</p>
          </div>
        </div>
      </div>

      <div
        class="p-4 md:p-8 bg-white rounded-md shadow w-full md:w-1/2 lg:w-2/3"
      >
        <div class="mt-4 md:mt-0 grid gap-7">
          <div class="input-group">
            <input type="text" class="input" required v-model="name" />
            <label for="" class="input-label">Name</label>
          </div>
          <div class="input-group">
            <input type="email" class="input" required v-model="email" />
            <label for="" class="input-label">Email</label>
          </div>
          <div class="input-group">
            <input type="password" class="input" required v-model="password" />
            <label for="" class="input-label">Password</label>
          </div>
          <div class="input-group">
            <input type="tel" class="input" required v-model="mobile" />
            <label for="" class="input-label">Phone No</label>
          </div>
          <div class="input-group">
            <textarea
              type="text"
              class="input"
              rows="4"
              cols="50"
              required
              v-model="about"
            />
            <label for="" class="input-label">About</label>
          </div>
        </div>

        <div class="mt-10">
          <input
            type="submit"
            value="Update"
            class="px-4 py-2 w-full bg-n-dark-blue text-white rounded-md cursor-pointer hover:scale-105"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.input-group {
  position: relative;
}

.input {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 4px;
  font: inherit;
  color: #1c1f37;
  background-color: transparent;
  outline: 1px solid #1c1f37;
  z-index: 10;
}

.input-label {
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(10px, 10px);
  transition: transform 0.25s;
}

.input:focus + .input-label,
.input:valid + .input-label {
  transform: translate(-5px, -20px);
  color: #1c1f37;
  padding-inline: 5px;
}

.input:is(:focus, :valid) {
}
</style>
