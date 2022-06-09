<script lang="ts" setup>
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
    path: "/",
    icon: "users",
  },
  {
    label: "Orders",
    name: "Orders",
    path: "/",
    icon: "home",
  },
  {
    label: "Analytics",
    name: "Analytics",
    path: "/",
    icon: "graph",
  },
  {
    label: "Messages",
    name: "Messages",
    path: "/",
    icon: "envelope",
  },
  {
    label: "Products",
    name: "Products",
    path: "/",
    icon: "home",
  },
  {
    label: "Reports",
    name: "Reports",
    path: "/",
    icon: "home",
  },
  {
    label: "Settings",
    name: "Settings",
    path: "/",
    icon: "cog",
  },
];
</script>

<template>
  <div
    class="py-5 w-[200px] h-screen overflow-y-auto grid grid-rows-2auto gap-8 border border-red-500"
  >
    <div class="flex justify-center">
      <img
        src="../assets/logo.png"
        alt="Logo Image"
        class="w-10 h-10 object-cover"
      />
    </div>

    <div class="px-3">
      <ul class="grid gap-4">
        <li v-for="(link, idx) in sideBarLinks" :key="idx" class="w-full block">
          <router-link
            exact-active-class="active"
            :to="link.path"
            class="flex items-center gap-5 transition ease-linear hover:rounded-tr-md hover:rounded-br-md hover:font-semibold"
          >
            <div></div>
            <div class="py-[10px] flex items-center gap-2">
              <i :class="`fa fa-${link.icon}`"></i>
              <p class="text-sm capitalize">{{ link.name }}</p>
              <p
                v-if="link.name === 'Messages'"
                class="px-2 py-[2px] flex justify-center items-center bg-red-400 text-white text-[10px] rounded-md"
              >
                15
              </p>
            </div>
          </router-link>
        </li>
      </ul>
    </div>

    <div>
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
    </div>
  </div>
</template>

<style>
li a.active {
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  font-weight: 600;
  color: purple;
  background-color: rgba(128, 0, 128, 0.03);
}
li a.active > div:first-child {
  height: 40px;
  width: 5px;
  background-color: purple;
}
</style>
