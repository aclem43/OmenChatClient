<script setup lang="ts">
import Cog from "vue-material-design-icons/Cog.vue";
</script>

<template>
  <div class="MenuBar">
    <div class="Group">
      <div class="Button">
        <div class="TextAlign">Home</div>
      </div>
    </div>
    <div class="Group">
      <div class="Button">
        <div class="TextAlign">OmenChat Core Client</div>
      </div>
      <div class="Button">
        <Cog class="TextAlign"></Cog>
      </div>
    </div>
  </div>
</template>

<style>
.MenuBar {
  width: 100%;
  height: 40px;
  background-color: var(--dark-content-bg-color);
  display: flex;
  justify-content: space-between;
}
.Group {
  display: flex;
}
.TextAlign {
  margin: 5px;
}

.Button {
  background-color: var(--dark-content-bg-color);
  padding: 5px;
  cursor: pointer;
}
.Button:hover {
  background-color: var(--dark-highlights-color);
}
</style>
