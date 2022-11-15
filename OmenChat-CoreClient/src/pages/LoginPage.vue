<script setup lang="ts">
import PageLayout from "../components/PageLayout.vue";
</script>

<template>
  <PageLayout>
    <template #title>
      <div class="Title">Login</div>
    </template>
    <template #content>
      <div class="Container">
        <div class="LoginCard">
          <div class="InputGroup">
            <input class="Input" placeholder="Login" />
          </div>
        </div>
      </div>
    </template>
  </PageLayout>
</template>
<style>
.InputGroup {
  text-align: center;
}
.Container {
  height: 100%;
  padding: 15px;
}
.Title {
  font-size: x-large;
  padding: 15px;
}
.LoginCard {
  background-color: var(--dark-content-highlight-color);
  margin: auto;
  width: 50%;
  height: 50%;
  border-radius: 20px;
}
@media only screen and (max-width: 768px) {
  .LoginCard {
    width: 100%;
  }
}
</style>
