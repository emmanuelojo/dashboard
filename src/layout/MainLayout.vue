<script setup lang="ts">
import { onMounted, ref } from "vue";
import Sidebar from "../components/Sidebar.vue";

onMounted(async () => {});

const visibleLeft = ref(false);

const showSidebar = ref(true);

const toggleSidebar = () => {
  showSidebar.value = !showSidebar.value;
  console.log("I was toggled");
};

const closeSideBar = () => {
  visibleLeft.value = false;
};
</script>

<template>
  <!-- <div class="main-layout grid grid-cols-2auto"> -->
  <div class="main-layout flex">
    <transition v-if="showSidebar" name="sidebar" mode="out-in" appear>
      <div :class="showSidebar ? 'block' : 'hidden'">
        <Sidebar />
      </div>
    </transition>

    <div class="h-screen overflow-y-auto">
      <router-view
        v-slot="{ Component, route }"
        @toggle-side-bar="toggleSidebar"
      >
        <Navbar />
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
