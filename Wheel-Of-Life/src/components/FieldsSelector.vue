<script setup lang="ts">
import { ref } from 'vue'
//import { useRouter } from 'vue-router';
import type { FieldDictionary } from '../classes/WheelOfLife'
import ValueSelector from './ValueSelector.vue'
import LifeField from '../classes/LifeField'
import LifeCanvas from './LifeCanvas.vue'
import wheel from '../data/wheel'

//const router = useRouter();
let showWheel = ref<boolean>(false);

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
        showWheel.value = true;
        //router.push('/Wheel-Of-Life/wheel');
    }
}

</script>

<template>
    <div v-if="!showWheel" >
        <h1>{{ currentFieldName }}</h1>
        <h2>{{ currentDescription }}</h2>
        <ValueSelector :onClick="onClick" /> 
    </div>
    <LifeCanvas v-else />
</template>

<style scoped>
</style>
