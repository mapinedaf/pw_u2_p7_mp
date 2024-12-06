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

        agregarFrase() {

            if (this.frase.length !== 0 && this.autor.length !== 0) {
                this.listafrases.unshift({
                    frase: this.frase,
                    autor: this.autor
                })
            }

        },


        agregarFrase2() {

            if (this.frase.length !== 0 ) {
                this.listafrases.push({
                    frase: this.frase,
                    autor: this.autor
                })
            }

        },

        eventoKeyPress({ charCode, target, key }) {
            console.log("metodo")
            if (charCode === 13) {
                console.log("evento");
                console.log(charCode)
            }
            if (key === "Enter") {
                console.log(target.baseURI)
                this.agregarFrase2()
                console.log(this.frase)
                console.log(this.autor)

            }
        },
        eventoKeyPressModificador() {
            console.log("metodo")
            console.log("evento");
            this.agregarFrase2()
            console.log(this.frase)
            console.log(this.autor)


        }

    },
    data() {
        return {
            listafrases: frases,
            frase: null,
            autor: null
        }
    }

})

app.mount('#myApp');