import Global from '../Global'
import axios from 'axios'

export default class ServiceDepartamentos{
    insertDepartamento(departamento){
        return new Promise(function(resolve){
            let request = "api/departamentos"
            let url = Global.urlApiDepartamentos + request
            axios.post(url,departamento).then(response => {
                resolve(response)
            })
        })
    }

    getDepartamentos (){
        return new Promise(function(resolve){
            let departamentos = [];
            let request = "api/departamentos"
            let url = Global.urlApiDepartamentos + request

            axios.get(url).then(response => {
                departamentos = response.data
                resolve(departamentos)
            })
        })
    }

    findDepartamento(idDepartamento){
        return new Promise(function(resolve){
            let request = "api/departamentos/"+idDepartamento
            let url = Global.urlApiDepartamentos + request;
            let departamento = {};

            axios.get(url).then(response => {
                departamento = response.data
                resolve(departamento)
            })
        })
    }

    updateDepartamentos(departamento){ 
        return new Promise(function(resolve){
            let request = "api/departamentos"
            let url = Global.urlApiDepartamentos + request;
            axios.put(url, departamento).then(response => {
                console.log("updated");
                resolve(response);
            })
        })

    }

    deleteDepartamento(idDepartamento){
        return new Promise(function(resolve){
            let request = "api/departamentos/" + idDepartamento;
            let url = Global.urlApiDepartamentos + request;

            axios.delete(url).then(response => {
                console.log("delete");
                resolve(response);
            })

        })
    }
}