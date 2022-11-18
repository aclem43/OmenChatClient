<script setup lang="ts">
import DropDown from "../DropDown.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiChevronDown, mdiCog } from "@mdi/js";
</script>

<template>
  <div class="MenuBar">
    <div class="Group">
      <div class="Button Corner">
        <div class="TextAlign">OmenChat Core Client</div>
      </div>
    </div>
    <div class="Group">
      <div class="Button">
        <DropDown color="var(--dark-content-bg-color)" width="10px">
          <template #title>
            <SvgIcon type="mdi" :path="mdiChevronDown"></SvgIcon>
          </template>
          <template #content>
            <div class="Button">
              <SvgIcon type="mdi" :path="mdiCog"></SvgIcon>
            </div>
          </template>
        </DropDown>
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
</style>
