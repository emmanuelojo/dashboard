<script setup lang="ts">
import Pagination from "../components/Pagination.vue";
import { formatCurrency } from "../utils/helpers";

const orders = [
  {
    name: "Dell XPS 17",
    amount: 1200,
    hasPaid: "Yes",
    status: "Delivered",
  },
  {
    name: "Refrigerator",
    amount: 500,
    hasPaid: "No",
    status: "Pending",
  },
  {
    name: "LG Monitor ",
    amount: 300,
    hasPaid: "No",
    status: "Cancelled",
  },
  {
    name: "Chair",
    amount: 100,
    hasPaid: "Yes",
    status: "Pending",
  },
  {
    name: "Duvet",
    amount: 50,
    hasPaid: "Yes",
    status: "Delivered",
  },
  {
    name: "iPhone",
    amount: 750,
    hasPaid: "Yes",
    status: "In Progress",
  },
  {
    name: "Yeezy",
    amount: 150,
    hasPaid: "No",
    status: "Pending",
  },
  {
    name: "Ice cream",
    amount: 50,
    hasPaid: "Yes",
    status: "In Progress",
  },
  {
    name: "Furniture",
    amount: 800,
    hasPaid: "No",
    status: "Pending",
  },
  {
    name: "Solar Panels",
    amount: 1750,
    hasPaid: "Yes",
    status: "In Progress",
  },
  {
    name: "Colgne",
    amount: 150,
    hasPaid: "No",
    status: "Pending",
  },
  {
    name: "Utensils",
    amount: 350,
    hasPaid: "Yes",
    status: "In Progress",
  },
  {
    name: "Sneakers",
    amount: 200,
    hasPaid: "No",
    status: "Pending",
  },
  {
    name: "Tablet",
    amount: 950,
    hasPaid: "Yes",
    status: "In Progress",
  },
  {
    name: "Gloves",
    amount: 150,
    hasPaid: "No",
    status: "Pending",
  },
];
</script>

<template>
  <div
    class="mt-20 md:mt-10 mb-10 grid gap-4 px-4 lg:px-10 w-screen md:w-full lg:w-auto"
  >
    <p class="text-2xl font-bold">Orders({{ orders.length }})</p>

    <div class="bg-white rounded-md shadow-md mt-5 p-4 overflow-auto w-full">
      <table class="w-full">
        <thead>
          <tr>
            <td></td>
            <td class="px-6 py-3 text-sm font-semibold">Product Name</td>
            <td class="px-6 py-3 text-sm font-semibold">Amount</td>
            <td class="px-6 py-3 text-sm font-semibold">Has Paid</td>
            <td class="px-6 py-3 text-sm font-semibold">Status</td>
          </tr>
        </thead>

        <tbody>
          <tr
            v-for="(item, idx) in orders"
            :key="idx"
            class="border-n-gray border-t"
          >
            <td><input type="checkbox" name="" id="" /></td>
            <td class="px-6 py-4">{{ item.name }}</td>
            <td class="px-6 py-4">
              {{ formatCurrency("en-us", item.amount, "USD") }}
            </td>
            <td class="px-6 py-4">
              {{ item.hasPaid }}
            </td>
            <td
              class="px-6 py-4"
              :style="`color:  ${
                item.status === 'In Progress'
                  ? 'yellow'
                  : item.status === 'Pending'
                  ? 'pink'
                  : item.status === 'Delivered'
                  ? 'green'
                  : 'red'
              }`"
            >
              {{ item.status }}
            </td>
          </tr>
        </tbody>
      </table>

      <div class="mt-10 flex justify-center items-center">
        <Pagination />
      </div>
    </div>
  </div>
</template>
