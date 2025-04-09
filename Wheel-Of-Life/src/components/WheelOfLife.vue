<template>
    <h1>Hi, {{ name }}!</h1>
    <span class="dot"></span>
</template>

<script setup lang="ts">
defineProps<{ name: string }>()
</script>

<style scoped>
.dot {
      height: 250px;
      width: 250px;
      background-color: #bbb;
      border-radius: 50%;
      display: inline-block;
}
</style>
