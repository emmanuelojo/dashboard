<script lang="ts" setup>
import { ref } from "vue";

const reduceSidebarWidth = ref(false);

const sideBarLinks = [
  {
    label: "Dashboard",
    name: "Dashboard",
    path: "/",
    icon: "home",
  },
  {
    label: "Customers",
    name: "Customers",
    path: "/customers",
    icon: "users",
  },
  {
    label: "Orders",
    name: "Orders",
    path: "/orders",
    icon: "credit-card",
  },
  {
    label: "Analytics",
    name: "Analytics",
    path: "/analytics",
    icon: "line-chart",
  },
  {
    label: "Inbox",
    name: "Inbox",
    path: "/messages",
    icon: "envelope",
  },
  {
    label: "Products",
    name: "Products",
    path: "/products",
    icon: "shopping-bag",
  },
  {
    label: "Reports",
    name: "Reports",
    path: "/reports",
    icon: "exclamation-circle",
  },
  {
    label: "Settings",
    name: "Settings",
    path: "/settings",
    icon: "cog",
  },
];

const toggleSidebar = () => {
  reduceSidebarWidth.value = !reduceSidebarWidth.value;
};

const logout = () => {
  localStorage.removeItem("token");
  window.location.reload();
};

const props = defineProps({
  showSidebar: {
    type: Boolean,
    default: false,
  },
});
</script>

<template>
  <div
    class="hidden py-5 h-screen overflow-y-auto md:grid grid-rows-2auto gap-8 bg-n-darker-blue relative"
    :class="reduceSidebarWidth ? 'w-16' : ' w-[200px]'"
  >
    <div
      class="justify-between items-center"
      :class="
        reduceSidebarWidth
          ? 'grid place-content-center gap-4 mx-auto '
          : 'flex px-2'
      "
    >
      <div
        v-if="reduceSidebarWidth"
        class="bg-purple-800 rounded-md w-fit px-[6px] py-1 flex justify-center items-center"
      >
        <p class="text-white font-bold text-[11px]">Dash</p>
      </div>

      <img
        v-else
        src="../assets/logo.png"
        alt="Logo Image"
        class="w-10 h-10 object-cover"
      />

      <div
        class="cursor-pointer w-6 h-6 flex justify-center items-center bg-white border border-white shadow text-n-blue rounded-full"
        :class="reduceSidebarWidth ? 'mx-auto' : ''"
        @click="toggleSidebar"
        style="z-index: 888"
      >
        <i
          :class="` text-xs fa fa-chevron-${
            reduceSidebarWidth ? 'right' : 'left'
          } ${reduceSidebarWidth ? 'pl-1' : 'pr-1'}`"
        ></i>
      </div>
    </div>

    <div :class="reduceSidebarWidth ? 'px-0' : 'px-3'">
      <ul class="grid gap-4">
        <li v-for="(link, idx) in sideBarLinks" :key="idx" class="w-full block">
          <router-link
            exact-active-class="active"
            :to="link.path"
            class="flex items-center gap-5 transition ease-linear hover:rounded-tr-md hover:rounded-br-md hover:font-semibold text-n-gray relative"
          >
            <div></div>
            <div class="py-[10px] flex items-center gap-2">
              <i :class="`fa fa-${link.icon}`"></i>
              <p v-if="!reduceSidebarWidth" class="text-sm capitalize">
                {{ link.name }}
              </p>
              <p
                v-if="link.name === 'Inbox' && !reduceSidebarWidth"
                class="absolute right-2 px-1 py-[2px] flex justify-center items-center bg-red-400 text-white text-[10px] rounded-[4px]"
              >
                15
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <!-- <div>
      <li>
        <a
          class="flex items-center gap-5 transition ease-linear hover:rounded-tr-md hover:rounded-br-md hover:font-semibold cursor-pointer"
        >
          <div></div>
          <div class="py-[10px] flex items-center gap-2">
            <i class="fa fa-sign-out-alt"></i>
            <p class="text-sm capitalize">Logout</p>
          </div>
        </a>
      </li>
    </div> -->
  </div>
</template>

<style>
li a.active,
a:hover {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  font-weight: 600;
  color: #fff;
  background-color: #1b2b65;
}
li a > div:first-child {
  height: 40px;
  width: 5px;
  visibility: hidden;
}

li a.active > div:first-child {
  background-color: #445bff;
  visibility: visible;
}
</style>
