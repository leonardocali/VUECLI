const app = new Vue({
    el:"#main",
    data:{
        tareas:[
            {
                titulo:"Tarea 1",
                completado:false
            },
            {
                titulo:"Tarea 2",
                completado:false
            },
            {
                titulo:"Tarea 3",
                completado:false
            },
            {
                titulo:"Tarea 4",
                completado:false
            },
        ] 
    },
    methods:{
        gestionTarea(item){
            item.completado = !item.completado
        }
    }
})

