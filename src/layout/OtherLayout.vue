<template>
  <div class="other-layout">
    <main class="layout-content">
      <div class="brand w-5 h-5 flex justify-center mx-auto mt-5">
        <img
          class="logo w-full h-full"
          src="../assets/logo.png"
          alt="logo"
          id="logo"
        />
      </div>

      <div class="mx-3 md:mx-10">
        <router-view />
      </div>
    </main>
  </div>
</template>

<style scoped></style>
