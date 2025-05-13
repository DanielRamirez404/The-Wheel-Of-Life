<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router';
import type { FieldDictionary } from '../classes/WheelOfLife'
import ApexCharts from 'apexcharts'
import LifeField from '../classes/LifeField'
import wheel from '../data/wheel'

const chartEl = ref<HTMLElement | null>(null);
const router = useRouter();


const dictionary: FieldDictionary = wheel.getFields();
const fields: LifeField[] = Object.values(dictionary); 
const names: string[] = fields.map((field) => field.getName() );
const values: number[] = fields.map((field) =>  field.getScore()?.getValue() ?? 0 );

onMounted( () => {
    if (wheel.isEmpty()) {
        wheel.reset();
        router.push('/');
    }

    const options = {
        series: values,
        labels: names,

        colors: [
            '#4CAF50', '#FFA726', '#E91E63', '#9C27B0',
            '#00BCD4', '#795548', '#3F51B5', '#FFC107'
        ], 
    
        chart: { type: 'polarArea', width: 500 },
        stroke: { colors: ['#fff'] },
        fill: { opacity: 0.8 },
        yaxis: { show: false, max: 10 },
        legend: { position: 'bottom' },
    
        plotOptions: {
            polarArea: {
                rings: { strokeWidth: 1 },
                spokes: { strokeWidth: 1 },
            }
        },

        responsive: [{
            breakpoint: 600,

            options: {
                chart: { width: 460 },
                legend: { position: 'bottom' }
            }
        }]
    };

    if (chartEl.value) {
        const chart = new ApexCharts(chartEl.value, options);
        chart.render();
    } 
});
         
</script>

<template>
    <div class="life-container">
        <h1>¡Tu Rueda de la Vida!</h1> 
        <div ref="chartEl" class="chart"></div>
    </div>
</template>

<style scoped>
.chart {
    min-height: 400px; 
}

.life-container {
    display: flex;
    flex-direction: column;
    place-items: center;
}
</style>
