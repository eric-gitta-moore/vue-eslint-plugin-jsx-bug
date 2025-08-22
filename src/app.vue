<script setup lang="tsx">
import Child from "./child.vue";

defineOptions({
  name: "App",
});

const onClick = (params: { key: string }): any => {
  console.log(1, params.key);
};
</script>

<template>
  <Child
    @click="
      (params: { key: string }): any => {
        console.log(1, params.key);
      }
    "
  />
</template>
