<script setup lang="ts">
import { reactive } from 'vue'
import LifeCanvas from './components/LifeCanvas.vue'
import WheelOfLife from './classes/WheelOfLife.ts'

const wheel = reactive<WheelOfLife>(new WheelOfLife());

wheel.setField("Salud", 0);
wheel.setField("Relaciones", 1);
wheel.setField("Amor", 2);
wheel.setField("Crecimiento Personal", 3);
wheel.setField("Ocio", 4);
wheel.setField("Entorno Físico", 5);
wheel.setField("Carrera", 6);
wheel.setField("Finanzas", 7);
</script>

<template>
    <LifeCanvas :wheel="wheel" />
</template>
