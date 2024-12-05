const frases = [{
    frase: 'frase 1',
    autor: 'autor 1'
}, {
    frase: 'frase 2',
    autor: 'autor 2'
}, {
    frase: 'frase 3',
    autor: 'autor 3'
}, {
    frase: 'frase 4',
    autor: 'autor 4'
}]



const app = Vue.createApp({


    methods: {



    },
    data() {

        return {
            listafrases:frases
            

        }
    }

})

app.mount('#myApp');