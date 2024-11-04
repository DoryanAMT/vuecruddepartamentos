<template>
    <div>
        <h1>Delete departamento {{this.$route.params.id}}</h1>
        
    </div>
</template>

<script>

    import ServiceDepartamentos from './../services/ServiceDepartamentos'
    const service = new ServiceDepartamentos();
    export default {
        name: "DeleteDepartamento",
        mounted(){
            let idDepartamento = this.$route.params.id
            service.deleteDepartamento(idDepartamento).then(result => {
                console.log(result);
                this.$router.push("/")
            })
        }

    }
</script>