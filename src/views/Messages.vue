<script setup lang="ts">
import { ref, Ref, onMounted} from 'vue'
import Pagination from "../components/Pagination.vue";

const listContainer = ref() as Ref<HTMLDivElement>

onMounted(() => {
  listContainer.value.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
})
</script>

<template>
  <div class="mt-20 md:mt-10 mb-10 grid gap-4 mx-4 lg:mx-10" ref="listContainer">
    <p class="text-2xl font-bold">Messages(150)</p>

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

            <div class="flex flex-col sm:flex-row sm:items-center sm:gap-4">
              <p class="text-n-black font-semibold">username{{ idx + 1 }}</p>
              <p class="text-xs">1 month ago</p>
            </div>
          </div>

          <div class="flex items-center gap-2 text-n-black cursor-pointer">
            <i class="fa fa-reply"></i>
            <p class="font-semibold">Reply</p>
          </div>
        </div>

        <div class="mt-4">
          <p class="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id a
            accusamus in sequi necessitatibus reiciendis aliquid quos molestias,
            corporis vitae iure tenetur, recusandae repellat similique
            asperiores voluptatum deserunt doloremque modi.
          </p>
        </div>
      </div>
    </div>

    <div class="mt-10 flex justify-center items-center">
      <Pagination />
    </div>
  </div>
</template>
