<script setup lang="ts">
import { getOpen } from "../ts/Overlay";
const open = getOpen();
</script>

<template>
  <div v-if="open"></div>
</template>
