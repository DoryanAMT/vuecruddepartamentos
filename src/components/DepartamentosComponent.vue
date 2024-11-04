<template>
    <div>
        <h1>Departamentos Component</h1>
        <img v-if="status == false" src="./../assets/Loading_icon.gif">
        <table v-else class="table table-bordered">
            <thead>
                <tr>
                    <th>Id departamento</th>
                    <th>Nombre</th>
                    <th>Localidad</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="dept in departamentos" :key="dept">
                    <td>{{dept.idDepartamento}}</td>
                    <td>{{dept.nombre}}</td>
                    <td>{{dept.localidad}}</td>
                    <td>
                        <router-link :to="'/detailsdepartamento/'+dept.idDepartamento+'/'+dept.nombre+'/'+dept.localidad"
                        class="btn btn-info">detalle</router-link>

                        <router-link :to="'/updatedepartamento/'+dept.idDepartamento"
                        class="btn btn-warning">Update</router-link>

                        <router-link :to="'/deletedepartamento/'+dept.idDepartamento"
                        class="btn btn-danger">Delete</router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import ServiceDepartamentos from './../services/ServiceDepartamentos';
    const service = new ServiceDepartamentos();

    export default {
        name : "DepartamentosComponent",
        data(){
            return{
                departamentos: [],
                status: false,
            }
        },
        mounted(){
            service.getDepartamentos().then(result => {
                this.status = true;
                this.departamentos = result;
            });
        }
    }
</script>