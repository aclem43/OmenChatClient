<script setup lang="ts">
import PageLayout from "@/components/PageLayout.vue";
</script>
<template>
  <PageLayout>
    <template #title>
      <div class="Title">Welcome"USERNAME"</div>
    </template>
    <template #content>
      <div class="SearchContainer"><input /></div>
    </template>
  </PageLayout>
</template>

<style>
.SearchContainer {
  background-color: var(--dark-content-highlight-color);
  height: 50px;
  width: 100%;
  margin: 10px;
}
</style>
