<script setup lang="ts">
import Pagination from "../components/Pagination.vue";
</script>

<template>
  <div class="mt-20 md:mt-10 mb-10 grid gap-4 mx-4 lg:mx-10">
    <p class="text-2xl font-bold">Reports(50)</p>

    <div class="mt-4 grid gap-6">
      <div
        v-for="(i, idx) in 15"
        :key="idx"
        class="bg-white rounded-md shadow-md p-4"
      >
        <div class="flex justify-between items-center text-n-gray-text">
          <div class="flex items-center gap-2">
            <img
              src="https://picsum.photos/200"
              alt="User Image"
              class="w-10 h-10 rounded-full object-cover"
            />

            <div class="flex flex-col sm:flex-row items-center sm:gap-4">
              <p class="text-n-black font-semibold">username{{ idx + 1 }}</p>
              <p class="text-xs">1 month ago</p>
            </div>
          </div>

          <div class="flex items-center gap-2 cursor-pointer text-n-gray-text">
            <i class="fa fa-comments-o"></i>
            <p class="">3</p>
          </div>
        </div>

        <div class="mt-4 grid gap-1">
          <p class="font-bold">Random title</p>
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a
            asperiores voluptatum deserunt doloremque modi.
          </p>
          <p
            class="px-2 py-1 w-fit bg-n-dark-blue rounded-md text-white font-semibold"
          >
            Enhancements
          </p>
        </div>
      </div>
    </div>

    <div class="mt-10 flex justify-center items-center">
      <Pagination />
    </div>
  </div>
</template>
