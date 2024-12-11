const  personas = [
    { 
         nombre: "Karl",
         apellido:"Marx",
         hobby:"Escribir",
         lugarNacimiento:"Prusia"
    }, 
    { 
         nombre: "Firederich",
         apellido:"Engels",
         hobby:"Filosofía",
         lugarNacimiento:"Prusia"
    } 
] 
  
 
 
 const app = Vue.createApp({
 
 
     methods: {
 
         guardarPersona(){
             console.log("Metodo guardar persona")
             this.listaPersonas.unshift(
                 {
                     nombre:this.inputNombre,
                     apellido:this.inputApellido,
                     hobby:this.inputHobby,
                     lugarNacimiento:this.inputLugarNacimiento
                 }
             )

            this.inputNombre= ""
            this.inputApellido= "" 
            this.inputHobby= "" 
            this.inputLugarNacimiento= ""
         }
    }, 
    data() { 
        return  {
            listaPersonas: personas,
            inputNombre:" ",
            inputApellido:" ",
            inputHobby:" ",
            inputLugarNacimiento:" "
         }
     }
 
}) 
 
 app.mount('#myApp');