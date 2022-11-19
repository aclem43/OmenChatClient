<script setup lang="ts">
import router from "@/router";
import { setLoggedIn } from "@/ts/user";
import PageLayout from "../components/PageLayout.vue";

const login = () => {
  setLoggedIn(true);
  router.push("select");
};
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
            <div class="InputContainer">
              <input class="Input" placeholder="Username" />
            </div>
            <div class="InputContainer">
              <input class="Input" type="password" placeholder="Password" />
            </div>
          </div>
          <div class="ButtonGroup">
            <div class="LoginButton" @click="login">Login</div>
            <div class="LoginButton">Sign Up</div>
            <div class="LoginButton">Forgot?</div>
          </div>
        </div>
      </div>
    </template>
  </PageLayout>
</template>
<style>
.InputGroup {
  text-align: center;
  padding-top: 20px;
}
.InputContainer {
  text-align: center;
  position: relative;
  padding: 5px;
}
.Input {
  border: 2px black solid;
  border-radius: 15px;
  padding: 10px;
  width: 80%;
  line-height: 15px;
  font-size: large;
}

.ButtonGroup {
  background-color: var(--dark-content-darkhighlight-color);
  border: 4px var(--dark-content-bg-color) solid;
  border-bottom: none;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  height: 30%;
  width: 80%;
  margin: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  justify-content: space-between;
}
.LoginButton {
  margin: 10px;
  padding: 10px;
  font-size: medium;
  text-align: center;
  border-radius: 10px;
  border: 4px var(--dark-content-bg-color) solid;
}
.LoginButton:hover {
  background-color: var(--dark-content-highlight-color);
  cursor: pointer;
}

.LoginCard {
  background-color: var(--dark-content-highlight-color);
  position: relative;
  margin: auto;
  width: 50%;
  height: 40%;
  border-radius: 20px;
}
@media only screen and (max-width: 768px) {
  .LoginCard {
    width: 100%;
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
  .Container {
    padding-left: 0;
    padding-right: 0;
  }
  .ButtonGroup {
    width: 90%;
  }
  .Input {
    line-height: 10px;
    font-size: medium;
  }
}
</style>
