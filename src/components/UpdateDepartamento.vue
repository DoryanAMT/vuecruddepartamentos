<template>
    <div>
        <h1>Update Departamento</h1>
        <router-link class="btn btn-dark" to="/">Back to list</router-link>
        <form v-if="departamento"
        style="width:500px;margin:0 auto"
        v-on:submit.prevent="updateDepartamento()">
            <label>Id Departamento</label>
            <input type="number" class="form form-control" v-model="departamento.idDepartamento" disabled>
            <label>Nombre: </label>
            <input type="text" class="form form-control" v-model="departamento.nombre">
            <label>Localidad: </label>
            <input type="text" class="form form-control" v-model="departamento.localidad">
            <button class="btn btn-warning">Actualizar</button>
        </form>


    </div>
</template>

<script>
import ServiceDepartamentos from './../services/ServiceDepartamentos'
const service = new ServiceDepartamentos()

    export default {
        name: "UpdateDepartamento",
        data(){
            return{
                departamento:null
            }
        },
        mounted(){
            let id = this.$route.params.id
            service.findDepartamento(id).then(result => {
                this.departamento = result;
            })
        },
        methods:{
            updateDepartamento(){
                service.updateDepartamentos(this.departamento).then(result => {
                    console.log(result);
                    this.$router.push("/")
                })
            }
        }
    }
</script>