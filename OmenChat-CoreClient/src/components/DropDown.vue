<script setup lang="ts">
const props = defineProps(["color", "width"]);
</script>

<template>
  <div class="dropdown">
    <span><slot name="title"></slot></span>
    <div class="dropdown-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>
<style>
.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: v-bind(color);
  min-width: v-bind(width);
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.dropdown:hover .dropdown-content {
  display: block;
  transform: translateX(-5px);
}
</style>
