<script setup lang="ts">
import ValueButton from './ValueButton.vue'

const props = defineProps<{ onClick: (arg0: number) => void }>();
</script>

<template>
    <ValueButton v-for="i in 10" :key='i' :value='i' :onClick="props.onClick" /> 
</template>

<style scoped>
</style>
