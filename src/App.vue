<template>
  <div class="body-wrapper w-full min-h-screen">
    <div class="container mx-auto min-h-screen">
      <router-view />
    </div>
    <main-footer></main-footer>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Londrina+Solid:wght@100;300;400;900&display=swap");

@tailwind base;
@tailwind components;
@tailwind utilities;
</style>

<script>
import MainFooter from "@/components/mainFooter";
export default {
  components: { MainFooter }
};
</script>
