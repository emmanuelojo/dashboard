<script setup lang="ts">
import { ref, Ref, onMounted} from 'vue'
import Pagination from "../components/Pagination.vue";
import { formatCurrency } from "../utils/helpers";

const listContainer = ref() as Ref<HTMLDivElement>

onMounted(() => {
  listContainer.value.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  })
})
</script>

<template>
  <div
    class="mt-20 md:mt-10 mb-10 grid gap-4 px-4 lg:px-10 w-screen md:w-full lg:w-auto" ref="listContainer"
  >
    <p class="text-2xl font-bold">Products(10)</p>

    <div class="bg-white rounded-md shadow-md p-4 overflow-auto">
      <table class="w-full">
        <thead>
          <tr>
            <td class="px-6 py-3 text-sm font-semibold">Product Name</td>
            <td class="px-6 py-3 text-sm font-semibold">Amount</td>
            <td class="px-6 py-3 text-sm font-semibold">Quantity</td>
            <td class="px-6 py-3 text-sm font-semibold">Status</td>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item, idx) in 10"
            :key="idx"
            class="border-n-gray border-t"
          >
            <td class="px-6 py-4 text-sm flex items-center gap-2">
              <span class="w-10 h-10">
                <img
                  src="https://picsum.photos/200"
                  alt="Product Image"
                  class="w-10 h-10 rounded-md object-cover"
                />
              </span>
              <p class="w-fit">Product{{ idx + 1 }}</p>
            </td>
            <td class="px-6 py-4 text-sm">
              {{ formatCurrency("en-us", 450, "USD") }}
            </td>
            <td class="px-6 py-4 text-sm">7</td>
            <td class="px-6 py-4 text-sm">In Stock</td>
          </tr>
        </tbody>
      </table>

      <div class="mt-10 flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  </div>
</template>
