<template>
    <h1>Wheel of Life</h1>
    <h3>Hi, {{ name }}!</h3>
    <span class="dot">
        <span class="cone"></span>
    </span>
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

.cone {
    
    position: absolute;

    width: 0;
    height: 0;
    border-left: 70px solid transparent;
    border-right: 70px solid transparent;
    border-top: 100px solid gray;
    border-radius: 50%;

    transform: rotate(180deg);
}

</style>
