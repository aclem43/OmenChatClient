<script setup lang="ts">
import MenuBar from "./components/layout/MenuBar.vue";
import BottomBar from "./components/layout/BottomBar.vue";
</script>

<template>
  <div>
    <MenuBar></MenuBar>
    <RouterView></RouterView>
    <BottomBar class="BottomBar"></BottomBar>
  </div>
</template>
