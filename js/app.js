//configuracion de vue
console.log(Vue); //Imprime todo el paquete de librerias de vue

const app = Vue.createApp({
    /*
    template: `
        <h1>Hola mundo</h1>
        <p>Con Vue.JS</p>
        <p>{{1+2}}</p>

        <p>{{[1,2,3,4,5]}}</p>
        <p>{{ {nombre:'Edison',apellido:'Cayambe'} }}</p>
        <p>{{ true?'Activo':'Inactivo' }}</p>
        <p>{{ 1===1 }}</p>
    `*/

    methods:{

        cambiarMensaje(){
            this.mensaje ="Nuevo mensaje",
            this.edad = 30;
        }

    },
    data(){

        return {
            mensaje:"Hola mundo pweb",
            edad:35
        }
    }

})

app.mount('#myApp');