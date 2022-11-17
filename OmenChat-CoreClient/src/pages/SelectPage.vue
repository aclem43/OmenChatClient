<script setup lang="ts">
import PageLayout from "@/components/PageLayout.vue";
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiMagnify, mdiPlus, mdiRefresh } from "@mdi/js";
</script>
<template>
  <PageLayout>
    <template #title>
      <div class="Title">Welcome"USERNAME"</div>
    </template>
    <template #content>
      <div class="Container">
        <div class="SearchContainer">
          <div class="Flex">
            <input type="text" class="Input" placeholder="Search..." />
            <div class="Button AutoMargin">
              <SvgIcon type="mdi" :path="mdiMagnify"></SvgIcon>
            </div>
            <div class="Button AutoMargin">
              <SvgIcon type="mdi" :path="mdiPlus"></SvgIcon>
            </div>
            <div class="Button AutoMargin">
              <SvgIcon type="mdi" :path="mdiRefresh"></SvgIcon>
            </div>
          </div>
        </div>
      </div>
    </template>
  </PageLayout>
</template>

<style>
.AutoMargin {
  margin: auto;
}
.Input {
  border-width: 1px;
}

.Button {
  border-radius: 15px;
  margin-left: 10px;
  margin-right: 10px;
}
.SearchContainer {
  background-color: var(--dark-content-highlight-color);
  height: 50px;
  margin: auto;
  border-radius: 10px;
  padding: 10px;
  position: relative;
}
</style>
