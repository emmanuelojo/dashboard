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
  <div class="mt-20 md:mt-10 mb-10 grid gap-4 mx-4 lg:mx-10"  ref="listContainer">
    <p class="text-2xl font-bold">Customers(10)</p>

    <div class="bg-white rounded-md shadow-md mt-5 p-4 overflow-auto w-full">
      <table class="w-full">
        <thead>
          <tr>
            <td class="px-6 py-3 text-sm font-semibold">Name</td>
            <td class="px-6 py-3 text-sm font-semibold">Email</td>
            <td class="px-6 py-3 text-sm font-semibold">Address</td>
            <td class="px-6 py-3 text-sm font-semibold">Mobile</td>
            <td class="px-6 py-3 text-sm font-semibold">Company</td>
            <td class="px-6 py-3 text-sm font-semibold">Website</td>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(customer, idx) in 10"
            :key="idx"
            class="border-n-gray border-t"
          >
            <td class="px-6 py-4 text-sm flex items-center gap-2">
              <div class="w-10 h-10">
                <img
                  src="https://picsum.photos/200"
                  alt="Product Image"
                  class="w-10 h-10 rounded-full object-cover"
                />
              </div>
              <p>Customer{{ idx + 1 }}</p>
            </td>
            <td class="px-6 py-4">customer{{ idx + 1 }}@mail.com</td>
            <td class="px-6 py-4">{{ idx + 1 }},Avenue</td>
            <td class="px-6 py-4">+555333888</td>
            <td class="px-6 py-4">Company{{ idx + 1 }}</td>
            <td class="px-6 py-4">www.customer{{ idx + 1 }}.com</td>
          </tr>
        </tbody>
      </table>

      <div class="mt-10 flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  </div>
</template>
