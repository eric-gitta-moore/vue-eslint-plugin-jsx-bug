<template>
  <button @click="$emit('click', { key: '123' })">click</button>
</template>

<script setup lang="ts">
defineEmits<{
  click: [params: { key: string }];
}>();
</script>
