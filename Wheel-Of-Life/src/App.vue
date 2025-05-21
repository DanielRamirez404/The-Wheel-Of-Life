<script setup lang="ts">
import { ref } from 'vue'
import FieldsSelector from './components/FieldsSelector.vue'
import LifeCanvas from './components/LifeCanvas.vue'

let showWheel = ref<boolean>(false);

function onFinishSelection(): void {
   showWheel.value = true; 
}

</script>
<template>
    <FieldsSelector :onFinish="onFinishSelection" v-if="!showWheel" />
    <LifeCanvas v-else />
</template>
