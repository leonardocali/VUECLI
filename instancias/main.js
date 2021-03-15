const puente = new Vue ({
    data:{
        titulo: "Compartido"
    }
})

const app = new Vue({

    el:"#inicio",
    data:{
        titulo:"Instancia Numero 1",
        titulo2:"Titulo Instancia 1",
        puente: puente.titulo
    },
    
}) 

const app2 = new Vue({

    el:"#cuerpo",
    data:{
        titulo:"Instancia Numero 2",
        titulo2:"Titulo Instancia 2",
        puente: puente.titulo
    },
    
}) 

