<script setup lang="ts">
import FacebookLogo from "../assets/fb.svg";
import InstagramLogo from "../assets/ig.svg";
import LinkedInLogo from "../assets/linkedin.svg";
import YouTubeLogo from "../assets/yt.svg";
import RadialProgress from "../components/RadialProgress.vue";
import router from "../router";
import { formatCurrency } from "../utils/helpers";

const today = new Date().toISOString().split("T")[0];

const summaryList = [
  {
    name: "Total Sales",
    amount: 25024,
    percent: 80,
    icon: "bar-chart",
  },
  {
    name: "Total Expenses",
    amount: 14160,
    percent: 60,
    icon: "credit-card-alt",
  },
  {
    name: "Total Income",
    amount: 10864,
    percent: 44,
    icon: "money",
  },
];

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
];

const topChannels = [
  {
    name: "Instagram",
    logo: InstagramLogo,
    visits: 124,
    conversionRate: 5,
    visitRatio: "1/5",
  },
  {
    name: "LinkedIn",
    logo: LinkedInLogo,
    visits: 120,
    conversionRate: 12,
    visitRatio: "2/5",
  },
  {
    name: "YouTube",
    logo: YouTubeLogo,
    visits: 80,
    conversionRate: 7,
    visitRatio: "5/5",
  },
  {
    name: "Facebook",
    logo: FacebookLogo,
    visits: 64,
    conversionRate: 3,
    visitRatio: "2/5",
  },
];

const goToSettings = () => {
  router.push("/settings");
};
</script>

<template>
  <div class="text-n-black w-screen md:w-full">
    <div class="">
      <div
        class="invisible md:visible h-16 w-full px-4 bg-white flex justify-between items-center"
      >
        <p class="text-2xl font-bold">Dashboard</p>

        <div
          @click="goToSettings"
          class="flex justify-between items-center gap-2 cursor-pointer"
        >
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
      <div class="my-4 px-4 lg:px-10">
        <input type="date" v-model="today" class="border" />
      </div>
    </div>

    <div
      class="p-2 sm:px-4 sm:pb-10 lg:px-10 grid sm: lg:grid-cols-auto-1fr gap-8"
    >
      <div class="">
        <div
          class="grid sm:grid-cols-2 md:grid-cols-md-fr lg:flex lg:justify-between gap-8 md:gap-10 lg:gap-0 mb-5"
        >
          <div
            v-for="(item, idx) in summaryList"
            :key="idx"
            class="bg-white p-4 rounded-md shadow-md w-[95%] sm:w-fit md:w-[250px] lg:w-64 flex justify-between items-center gap-4 mx-auto lg:mx-0"
          >
            <div class="grid gap-4 sm:w-40 md:w-24">
              <div
                class="bg-n-bold-blue rounded-full w-8 h-8 p-1 flex justify-center items-center"
              >
                <i :class="`fa fa-${item.icon} text-white`"></i>
              </div>

              <div class="grid gap-2">
                <p class="text-sm font-bold">{{ item.name }}</p>
                <p class="text-2xl font-bold">
                  {{ formatCurrency("en-us", item.amount, "USD") }}
                </p>
              </div>

              <span class="text-n-gray-text text-[9px] font-semibold"
                >Last 24 hours</span
              >
            </div>
            <div class="">
              <RadialProgress
                :percent="item.percent"
                :width="72"
                stroke-color="#017EFA"
                :stroke-width="6"
                text-color="#017EFA"
                innerStrokeColor="#E9F6F7"
                :font-size="11"
              />
            </div>
          </div>
        </div>

        <div class="mt-10 grid gap-4 mx-2 lg:mx-0">
          <p class="font-bold">Recent Orders</p>

          <div class="bg-white rounded-md shadow-md p-4 overflow-auto">
            <table class="w-full">
              <thead>
                <tr>
                  <td class="px-6 py-3 text-sm font-semibold">Product Name</td>
                  <td class="px-6 py-3 text-sm font-semibold">Amount</td>
                  <td class="px-6 py-3 text-sm font-semibold">Has Paid</td>
                  <td class="px-6 py-3 text-sm font-semibold">Status</td>
                </tr>
              </thead>

              <tbody>
                <tr
                  v-for="(item, idx) in orders.slice(-3)"
                  :key="idx"
                  class="border-n-gray border-t"
                >
                  <td class="px-6 py-2">{{ item.name }}</td>
                  <td class="px-6 py-2">
                    {{ formatCurrency("en-us", item.amount, "USD") }}
                  </td>
                  <td class="px-6 py-2">
                    {{ item.hasPaid }}
                  </td>
                  <td>
                    <p
                      class="w-28 h-8 flex justify-center items-center rounded-md"
                      :class="
                        item.status === 'In Progress'
                          ? 'bg-yellow-200 text-yellow-500'
                          : item.status === 'Pending'
                          ? 'bg-blue-500 text-blue-800'
                          : item.status === 'Delivered'
                          ? 'bg-green-500 text-green-800'
                          : 'bg-red-500 text-red-800'
                      "
                    >
                      {{ item.status }}
                    </p>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div class="mx-2 md:mx-0 mt-10 bg-white rounded-md shadow">
          <div class="flex justify-between p-4 border-b">
            <p class="font-bold">Top Channels</p>

            <div class="flex items-center text-blue-500 cursor-pointer">
              <p class="font-bold">See Details</p>
              <span class="ml-2"> <i class="fa fa-chevron-right"></i> </span>
            </div>
          </div>

          <div class="p-4">
            <div class="flex items-center justify-between">
              <p class="">Source</p>
              <p class="mr-[30%] sm:mr-[55%] md:mr-[50%] lg:mr-[65%]">Visit</p>
            </div>

            <div class="mt-4 grid gap-3">
              <div
                v-for="(channel, idx) in topChannels"
                :key="idx"
                class="bg-gray-200 rounded-md p-2 flex sm:justify-between items-center lg:gap-10"
              >
                <div class="w-50 flex items-center gap-4">
                  <img
                    :src="channel.logo"
                    :alt="channel.name + ' Logo'"
                    class="w-10 h-10"
                  />
                  <p class="font-bold">{{ channel.name }}</p>
                </div>

                <div class="flex items-center gap-1 md:gap-5">
                  <p class="w-10 font-bold">{{ channel.visits }}K</p>

                  <p class="w-10 font-bold text-green-500">
                    +{{ channel.conversionRate }}%
                  </p>
                </div>

                <div
                  class="hidden sm:block sm:w-[230px] md:w-[150px] lg:w-[400px]"
                >
                  <div
                    class="h-10 bg-blue-300 rounded-md"
                    :class="
                      idx === 0
                        ? 'w-4/5'
                        : idx === 1
                        ? 'w-full'
                        : idx === 2
                        ? 'w-1/5'
                        : 'w-2/5'
                    "
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        class="mx-2 sm:mx-0 mt-5 lg:mt-0 md:grid grid-cols-2 lg:flex lg:flex-col gap-8 lg:max-w-lg"
      >
        <div>
          <div class="grid gap-4">
            <p class="font-bold">Recent Updates</p>

            <div class="bg-white rounded-md shadow-md grid gap-4 p-4">
              <div v-for="i in 3" class="grid grid-cols-2auto gap-4">
                <div class="w-16 h-16">
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
                  <p class="text-n-gray-text text-xs">2 minutes ago</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <p class="my-5 md:mt-0 font-bold">Sales Analytics</p>

          <div class="grid gap-5">
            <div
              v-for="i in 3"
              class="bg-white px-4 py-6 rounded-md shadow-md flex items-start justify-between"
            >
              <div class="flex flex-grow items-start gap-2">
                <div
                  class="w-8 h-8 flex justify-center items-center bg-n-bold-blue rounded-full"
                >
                  <i class="fa fa-user text-white"></i>
                </div>

                <div>
                  <p class="text-sm uppercase font-bold">Online Orders</p>
                  <p class="text-[9px]">Last 24 hours</p>
                </div>
              </div>

              <div
                class="flex justify-between items-center gap-10 md:gap-4 2xl:gap-10"
              >
                <p class="text-sm font-bold text-green-500">+23%</p>
                <p class="text-sm font-bold">3849</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style></style>
