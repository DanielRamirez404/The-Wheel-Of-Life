import { createRouter, createWebHistory } from 'vue-router'
import LifeCanvas from './components/LifeCanvas.vue'
import FieldsSelector from './components/FieldsSelector.vue'

const routes = [
    { path: '/:catchAll(.*)', redirect: '/seleccion' },
    { path: '/rueda-de-vida', name: 'Canvas', component: LifeCanvas },
    { path: '/seleccion', name: 'Selección', component: FieldsSelector },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
