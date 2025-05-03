<script setup lang="ts">
import { onMounted, ref } from 'vue';
import ApexCharts from 'apexcharts';

const chartEl = ref<HTMLElement | null>(null);
    
var options = {
      series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
      chart: {
      type: 'polarArea',
    },
    stroke: {
      colors: ['#fff']
    },
    fill: {
      opacity: 0.8
    },
    responsive: [{
      breakpoint: 480,
      options: {
        chart: {
          width: 200
        },
        legend: {
          position: 'bottom'
        }
      }
    }]
};


onMounted( () => {
    if (chartEl.value) {
        const chart = new ApexCharts(chartEl.value, options);
        chart.render();
    }
});
         
defineProps<{ name: string }>()
</script>

<template>
    <h1>Wheel of Life</h1>
    <h3>Hi, {{ name }}!</h3>
    <div ref="chartEl" class="chart"></div>
</template>

<style scoped>
.chart {
  min-height: 300px; 
}
</style>
