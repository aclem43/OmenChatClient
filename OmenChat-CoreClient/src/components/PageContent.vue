<script setup lang="ts"></script>

<template>
  <div class="Content">
    <div class="Page">
      <div class="PageTitle"><slot name="title"></slot></div>
      <div class="PageContent" name="content"></div>
    </div>
  </div>
</template>

<style>
.Content {
  position: absolute;
  margin: auto;
  top: 50px; /* Header Height */
  bottom: 40px; /* Footer Height */
  width: 100%;
}
.Page {
  margin: auto;
  width: 90%;
  height: 100%;
  background-color: var(--dark-content-highlight-color);
  border-radius: 20px;
}
.PageTitle {
  height: 10%;
}
.PageContent {
  height: 90%;
  border-radius: 20px;
  background-color: var(--dark-content-bg-color);
}
@media only screen and (max-width: 768px) {
  .Page {
    width: 100%;
    border-radius: 0px;
  }
  .PageContent {
    border-bottom-left-radius: 0px;
    border-bottom-right-radius: 0px;
  }
  .Content {
    top: 40px;
  }
}
</style>
