<script setup lang="ts">
import { onMounted, ref } from 'vue'
import ApexCharts from 'apexcharts'
import WheelOfLife from '../classes/WheelOfLife.ts'
import LifeField from '../classes/LifeField.ts'
import wheel from '../data/wheel.ts'

const chartEl = ref<HTMLElement | null>(null);

const dictionary: FieldDictionary = wheel.getFields();
const fields: LifeField[] = Object.values(dictionary); 
const names: string[] = fields.map((field) => field.getName() );
const values: number[] = fields.map((field) => field.getScore().getValue() );

onMounted( () => {
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
        yaxis: { show: false },
        legend: { position: 'bottom' },
    
        plotOptions: {
            polarArea: {
                rings: { strokeWidth: 1 },
                spokes: { strokeWidth: 1 },
            }
        },

        responsive: [{
            breakpoint: 480,

            options: {
                chart: { width: 800 },
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
    <div ref="chartEl" class="chart"></div>
</template>

<style scoped>
.chart {
  min-height: 400px; 
}
</style>
