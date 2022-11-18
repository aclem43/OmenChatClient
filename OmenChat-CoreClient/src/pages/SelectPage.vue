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
            <div class="Button AutoMargin Round-15">
              <SvgIcon type="mdi" :path="mdiMagnify"></SvgIcon>
            </div>
            <div class="Button AutoMargin Round-15">
              <SvgIcon type="mdi" :path="mdiPlus"></SvgIcon>
            </div>
            <div class="Button AutoMargin Round-15">
              <SvgIcon type="mdi" :path="mdiRefresh"></SvgIcon>
            </div>
          </div>
        </div>
        <div class="GroupContainer">a</div>
      </div>
    </template>
  </PageLayout>
</template>

<style>
.GroupContainer {
  background-color: var(--dark-content-highlight-color);
  margin-top: 15px;

  height: calc(100% - 110px);
  border-radius: 10px;
}

.AutoMargin {
  margin: auto;
}
.Input {
  border-width: 1px;
}

.Button {
  margin-left: 10px;
  margin-right: 10px;
}
.SearchContainer {
  background-color: var(--dark-content-highlight-color);
  height: 40px;
  width: 60%;
  margin: auto;
  border-radius: 10px;
  padding: 15px;
  position: relative;
}

@media only screen and (max-width: 768px) {
  .SearchContainer {
    width: auto;
    padding: 5px;
  }
  .Input {
    line-height: 10px;
    min-width: 50px;
  }
}
</style>
