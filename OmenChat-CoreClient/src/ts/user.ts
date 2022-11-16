import { ref, type Ref } from "vue";

const loggedIn = ref(false);
export const getLoggedIn = (): Ref => {
  return loggedIn;
};

export const setLoggedIn = (bool: boolean): void => {
  loggedIn.value = bool;
};
