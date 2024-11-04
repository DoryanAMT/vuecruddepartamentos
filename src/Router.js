import { createWebHistory, createRouter } from "vue-router";
import DepartamentosComponent from './components/DepartamentosComponent.vue'
import CreateDepartamento from './components/CreateDepartamento.vue'
import DetailsDepartamento from './components/DetailsDepartamento.vue'
import UpdateDepartamento from './components/UpdateDepartamento.vue'
import DeleteDepartamento from './components/DeleteDepartamento.vue'


const myRoutes = [
    {
        path: "/", component: DepartamentosComponent
    },
    {
        path: "/createdepartamento", component: CreateDepartamento
    },
    {
        path: "/updatedepartamento/:id", component: UpdateDepartamento
    },
    {
        path: "/deletedepartamento/:id", component: DeleteDepartamento
    },
    {
        path: "/detailsdepartamento/:id/:nombre/:localidad", component: DetailsDepartamento
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: myRoutes
})

export default router;