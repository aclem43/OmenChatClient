import { ref } from "vue";

const openvar = ref(false);

export const getOpen = () => {
  return openvar;
};

export const open = () => {
  openvar.value = true;
};

export const close = () => {
  openvar.value = false;
};
