<script setup lang="ts">
const today = new Date().toISOString().split("T")[0];

const orders = [
  {
    name: "Dell XPS 17",
    amount: "$1200",
    hasPaid: "Yes",
    status: "Delivered",
  },
  {
    name: "Refrigerator",
    amount: "$500",
    hasPaid: "No",
    status: "Pending",
  },
  {
    name: "LG Monitor ",
    amount: "$300",
    hasPaid: "No",
    status: "Cancelled",
  },
  {
    name: "Chair",
    amount: "$100",
    hasPaid: "Yes",
    status: "Pending",
  },
  {
    name: "Duvet",
    amount: "$50",
    hasPaid: "Yes",
    status: "Delivered",
  },
  {
    name: "iPhone",
    amount: "$750",
    hasPaid: "Yes",
    status: "In Progress",
  },
  {
    name: "Yeezy",
    amount: "$150",
    hasPaid: "No",
    status: "Pending",
  },
];
</script>

<template>
  <div class="p-2">
    <div>
      <div class="flex justify-between items-center">
        <p class="text-2xl font-bold">Dashboard</p>
        <div class="flex justify-between items-center gap-2">
          <div>
            <p class="text-sm font-bold">Andy Doe</p>
            <p class="text-[11px] font-semibold">UI/UX Designer</p>
          </div>
          <div class="w-10 h-10">
            <img
              src="https://picsum.photos/200"
              alt="Profile Image"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <div>
        <input type="date" v-model="today" class="border" />
      </div>
    </div>

    <div>
      <div class="grid sm:flex gap-8 my-5">
        <div
          v-for="i in 3"
          class="bg-white p-4 rounded-md shadow-md w-[95%] sm:w-52 flex justify-between items-center gap-4 mx-auto"
        >
          <div class="grid gap-4">
            <div
              class="bg-purple-300 rounded-full w-6 h-6 flex justify-center items-center"
            >
              <i class="fa fa-home text-white"></i>
            </div>

            <div>
              <p class="text-[11px] font-bold">Total sales</p>
              <p class="text-xl font-bold">$25,024</p>
            </div>

            <span class="text-gray-300 text-[9px] font-bold"
              >Last 24 hours</span
            >
          </div>
          <div>
            <!-- <progress id="file" max="100" value="70">70%</progress> -->
            <div
              class="flex justify-center items-center w-20 h-20 rounded-full bg-purple-400"
            >
              <div class="w-16 h-16 rounded-full bg-white"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid gap-4">
        <p class="font-bold">Recent Orders</p>

        <div class="bg-white rounded-md shadow-md p-4">
          <table class="w-full overflow-auto">
            <thead>
              <tr>
                <td class="px-3 py-2 text-sm font-semibold">Product Name</td>
                <td class="px-3 py-2 text-sm font-semibold">Amount</td>
                <td class="px-3 py-2 text-sm font-semibold">Has Paid</td>
                <td class="px-3 py-2 text-sm font-semibold">Status</td>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(item, idx) in orders" :key="idx">
                <td>{{ item.name }}</td>
                <td>
                  {{ item.amount }}
                </td>
                <td>
                  {{ item.hasPaid }}
                </td>
                <td
                  class="status"
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
                  Paid
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="mt-5 md:mt-0">
      <div>
        <div class="grid gap-4">
          <p class="font-bold">Recent Updates</p>

          <div
            v-for="i in 3"
            class="bg-white rounded-md shadow-md grid gap-4 p-4"
          >
            <div class="grid grid-cols-n-auto-1fr gap-4">
              <div class="w-10 h-10">
                <img
                  src="https://picsum.photos/200"
                  alt="News Image"
                  class="w-full h-full object-cover rounded-full"
                />
              </div>

              <div class="grid">
                <p class="text-sm">
                  <b>Mike Tyson</b> lorem ipsum dolor sit amet consectetur
                  veritatirecusandae, eius corporis enim.
                </p>
                <p class="text-gray-300 text-xs">2 minutes ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <p class="my-5 font-bold">Sales Analytics</p>

        <div class="grid gap-4">
          <div
            v-for="i in 3"
            class="bg-white p-4 rounded-md shadow-md flex items-start justify-between"
          >
            <div class="flex items-start gap-2">
              <div
                class="w-8 h-8 flex justify-center items-center bg-purple-300 rounded-full"
              >
                <i class="fa fa-user text-white"></i>
              </div>

              <div>
                <p class="text-sm uppercase font-bold">Online Orders</p>
                <p class="text-[9px]">Last 24 hours</p>
              </div>
            </div>

            <div class="flex justify-between items-center gap-10">
              <p class="text-sm font-bold text-green-500">+23%</p>
              <p class="text-sm font-bold">3849</p>
            </div>
          </div>
        </div>

        <div
          class="bg-purple-400 my-4 p-4 rounded-md shadow-md cursor-pointer flex justify-center items-center gap-[6px]"
        >
          <i class="fa fa-plus"></i>
          <p class="text-sm font-bold">Add Product</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
