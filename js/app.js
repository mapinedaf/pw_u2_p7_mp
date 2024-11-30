//configuracion de vue
console.log(Vue); //Imprime todo el paquete de librerias de vue

const app = Vue.createApp({

    template: `
        <h1>Hola mundo</h1>
        <p>Con Vue.JS</p>
    `

})

app.mount('#myApp');