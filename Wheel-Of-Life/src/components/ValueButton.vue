<script setup lang="ts">
const props = defineProps<{ value: number, onClick: (arg0: number) => void }>();
</script>

<template>
    <button @click="props.onClick(props.value)">{{props.value}}</button>
</template>

<style scoped>
button {
    width: 75px;
    height: 75px;

    background: white;
    border: none;
    margin: 10px;
    padding: 5px;
    
    font-family: "Cal Sans", sans-serif;
    font-weight: 400;
    font-style: normal;    
    text-align: center;
    color: black;
    font-size: 50px;

    cursor: pointer;
    outline: none;
    
    transition: background 0.15s;
}

button:hover {
    outline: none;
    background: #f0f0f0;
}

button:active {
    outline: none;
    background: #e0e0e0;
}
</style>
