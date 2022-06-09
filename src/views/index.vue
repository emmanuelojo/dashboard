<template>
  <div class="main-layout border-6 border-red-500">
    <div class="content">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import Sidebar from "../components/Sidebar.vue";
// import Footer from "../components/Footer.vue";
// import Navbar from "../components/Navbar.vue";
// import Home from "../views/Home.vue";

export default defineComponent({
  name: "MainLayout",

  components: {
    Sidebar,
  },

  setup() {
    onMounted(async () => {});

    const visibleLeft = ref(false);

    const closeSideBar = () => {
      visibleLeft.value = false;
    };

    return { visibleLeft, closeSideBar };
  },
});
</script>
