import { createRouter, createWebHistory } from 'vue-router'
import LifeCanvas from './components/LifeCanvas.vue'
import FieldsSelector from './components/FieldsSelector.vue'

const routes = [
    //{ path: '/:catchAll(.*)', redirect: '/Wheel-Of-Life' },
    { path: '/Wheel-Of-Life/wheel', name: 'Canvas', component: LifeCanvas },
    { path: '/Wheel-Of-Life/', name: 'Selección', component: FieldsSelector },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
