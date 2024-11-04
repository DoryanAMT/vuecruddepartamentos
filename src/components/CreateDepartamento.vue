<template>
    <div>
        <h1>Create Departamento</h1>
        <h2 style="color:blue"> {{mensaje}}</h2>
        <form v-on:submit.prevent="insertarDepartamento()" style="width:500px;margin: 0 auto">
            <label>Id departamento: </label>
            <input class="form form-control" type="number" v-model="departamento.idDepartamento">
            <label>Nombre: </label>
            <input class="form form-control" type="text" v-model="departamento.nombre">
            <label>Localidad: </label>
            <input class="form form-control" type="text" v-model="departamento.localidad">
            <button class="btn btn-info">Insertar </button>
        </form>
    </div>
</template>

<script>

    import ServiceDepartamento from './../services/ServiceDepartamentos'
    const service = new ServiceDepartamento()

    export default {
        name: "CreateDepartamento",
        methods: {
            insertarDepartamento(){
                service.insertDepartamento(this.departamento).then(result => {
                    this.mensaje = "insertado correctamente " +result
                    this.$router.push("/")
                })
            }
        },
        data(){
            return{
                mensaje : "",
                departamento: {
                    idDepartamento: 0,
                    nombre: "",
                    localidad: ""
                }
            }
        },
        mounted(){
            
        }
    }

</script>