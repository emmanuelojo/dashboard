<script setup lang="ts">
import { onMounted, ref } from "vue";

onMounted(async () => {
  await getCustomers();
});

const customers = ref<any>([]);

const getCustomers = async () => {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then((data) => customers.value.push(...data));
};
</script>

<template>
  <div class="p-4 md:p-10">
    <p class="text-2xl font-bold">Customers({{ customers.length }})</p>

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
              <p>Customer {{ idx + 1 }}</p>
            </td>
            <td class="px-6 py-4">customer{{ idx + 1 }}@mail.com</td>
            <td class="px-6 py-4">{{ idx + 1 }}, Avenue</td>
            <td class="px-6 py-4">+555-333-888</td>
            <td class="px-6 py-4">Company {{ idx + 1 }}</td>
            <td class="px-6 py-4">www.customer{{ idx + 1 }}.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
