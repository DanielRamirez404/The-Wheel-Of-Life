<script setup lang="ts">
    import HelloWorld from './components/HelloWorld.vue'
    import WheelOfLife from './components/WheelOfLife.vue'
</script>

<template>
    <WheelOfLife :values="[10, 8, 2, 3, 5, 10, 9, 7]" :fields="['Health', 'Relationships', 'Love', 'Personal Growth', 'Leisure', 'Physical Environment', 'Career', 'Finances']" />
</template>
