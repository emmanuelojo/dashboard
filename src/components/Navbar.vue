<script setup lang="ts">
import { onMounted, ref } from "vue";
import router from "../router";
import navbarStore from "../store/navbarStore";

onMounted(() => {
  navbarStore.actions.getSidebarStatus();
});

const route = router.currentRoute.value.name;

const isToggled = ref(false);

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
  isToggled.value = !isToggled.value;

  navbarStore.mutations.setSidebar(isToggled.value);
};
</script>

<template>
  <div
    class="navbar h-16 bg-white w-full flex justify-between p-2 lg:py-4 fixed"
    style="z-index: 1000"
  >
    <div class="logo">
      <img src="../assets/logo.svg" alt="Logo" class="w-10 h-10" />
    </div>

    <div class="flex justify-between items-center">
      <div class="line hidden lg:block">
        <hr class="bg-gray-500 max-w-[500px] ml-[500px]" />
      </div>

      <nav
        class="w-50 h-screen overflow-y-auto bg-n-darker-blue grid-rows-2auto gap-8 fixed top-0 left-0 shadow"
        :class="isToggled ? 'grid ' : 'hidden'"
        style="z-index: 1000"
      >
        <div class="px-3 pt-16">
          <ul class="grid gap-4">
            <li
              v-for="(link, idx) in sideBarLinks"
              :key="idx"
              class="w-full block"
            >
              <router-link
                @click="isToggled = !isToggled"
                exact-active-class="active"
                :to="link.path"
                class="flex items-center gap-5 transition ease-linear hover:rounded-tr-md hover:rounded-br-md hover:font-semibold text-n-gray relative"
              >
                <div></div>
                <div class="py-[10px] flex items-center gap-2">
                  <i :class="`fa fa-${link.icon}`"></i>
                  <p class="text-sm capitalize">
                    {{ link.name }}
                  </p>
                  <p
                    v-if="link.name === 'Inbox'"
                    class="absolute right-2 px-1 py-[2px] flex justify-center items-center bg-red-400 text-white text-[10px] rounded-[4px]"
                  >
                    15
                  </p>
                </div>
              </router-link>
            </li>
          </ul>
        </div>

        <div class="px-3">
          <li>
            <a
              class="flex items-center gap-5 transition ease-linear hover:rounded-tr-md text-n-gray hover:rounded-br-md hover:font-semibold cursor-pointer"
            >
              <div class=""></div>
              <div class="py-[10px] flex items-center gap-2">
                <i class="fa fa-sign-out"></i>
                <p class="text-sm capitalize">Logout</p>
              </div>
            </a>
          </li>
        </div>
      </nav>

      <div
        class="p-2 z-20 md:hidden absolute top-0 right-0"
        @click="toggleSidebar"
      >
        <button :class="isToggled ? 'hamburger active' : 'hamburger'">
          <span class="line"> </span> <span class="line"> </span
          ><span class="line"> </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.hamburger {
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}

.hamburger .line {
  display: block;
  width: 30px;
  height: 3px;
  background-color: #081a51;
  margin-block: 7px;
  border-radius: 4px;
  transition: transform 0.5s, opacity 0.25s;
}

.hamburger.active .line:nth-child(1) {
  transform: translateY(13px) rotate(45deg);
}

.hamburger.active .line:nth-child(2) {
  opacity: 0;
}

.hamburger.active .line:nth-child(3) {
  transform: translateY(-13px) rotate(-45deg);
}

a {
  text-decoration: none;
}
.router-link-exact-active {
  background: #fff;
  height: 3px;
}
</style>
