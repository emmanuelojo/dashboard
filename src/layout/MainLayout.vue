<script setup lang="ts">
import { onMounted, ref } from "vue";
import Navbar from "../components/Navbar.vue";
import Sidebar from "../components/Sidebar.vue";
import navbarStore from "../store/navbarStore";

onMounted(async () => {
  navbarStore.actions.getSidebarStatus();
});

const visibleLeft = ref(false);

const showSidebar = ref(navbarStore.getters.sidebarStatus);

// const toggleSidebar = () => {
//   showSidebar.value = !showSidebar.value;
//   console.log("I was toggled");
// };

const closeSideBar = () => {
  visibleLeft.value = false;
};
</script>

<template>
  <div class="grid grid-cols-auto-1fr bg-n-bg">
    <!-- <Sidebar :showSidebar="true" /> -->
    <div :class="`${showSidebar ? 'block' : 'hidden'} md:block`">
      <Sidebar :showSidebar="true" />
    </div>

    <div class="h-screen overflow-y-auto">
      <!-- <router-view
        v-slot="{ Component, route }"
        @toggle-side-bar="toggleSidebar"
      > -->
      <router-view v-slot="{ Component, route }">
        <div class="block md:hidden fixed w-full">
          <Navbar />
        </div>
        <transition name="fade" appear mode="out-in">
          <div :key="route.name">
            <component :is="Component" />
          </div>
        </transition>
      </router-view>
    </div>
  </div>
</template>

<style scoped>
.sidebar-enter-from,
.sidebar-leave-to {
  opacity: 0;
  transform: translateX(-100%);
}

.sidebar-enter-to,
.sidebar-leave-from {
  opacity: 1;
  transform: translate(0);
}

.sidebar-enter-active,
.sidebar-leave-active {
  transition: all 1s ease;
}
.fade-enter-from {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}

.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;
}
</style>
