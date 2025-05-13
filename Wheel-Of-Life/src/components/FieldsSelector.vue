<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router';
import type { FieldDictionary } from '../classes/WheelOfLife'
import ValueSelector from './ValueSelector.vue'
import LifeField from '../classes/LifeField'
import wheel from '../data/wheel'

const router = useRouter();

const dictionary: FieldDictionary = wheel.getFields();
const fields: LifeField[] = Object.values(dictionary); 
const fieldNames : string[] = fields.map((field) => field.getName() );
const fieldDescriptions: string[] = fields.map((field) => field.getDescription() );

let currentFieldIndex = ref<number>(0);
let currentFieldName = ref<string>(fieldNames[currentFieldIndex.value]);
let currentDescription = ref<string>(fieldDescriptions[currentFieldIndex.value]);

function onClick(value: number): void {
    wheel.setField(currentFieldName.value, value);
    
    currentFieldIndex.value++;
    currentFieldName.value = fieldNames[currentFieldIndex.value];
    currentDescription.value = fieldDescriptions[currentFieldIndex.value];
    
    if (currentFieldIndex.value >= fields.length) {
        wheel.setAsFilled()
        router.push('/rueda-de-vida');
    }
}

</script>

<template>
    <h1>{{ currentFieldName }}</h1>
    <h2>{{ currentDescription }}</h2>
    <ValueSelector :onClick="onClick" /> 
</template>

<style scoped>
</style>
