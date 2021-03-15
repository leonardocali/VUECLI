const app = new Vue({
    el:"#inicio",
    data:{
        tarea:null,
        tareas:[
            {titulo:"Aprender Python", completado:false},
            {titulo:"Aprender Javascritp", completado:true},
            {titulo:"Aprender Vue", completado:false},
            {titulo:"Descansar", completado:true},
        ],
        
    },
    methods:{
        agregarTarea(){
            this.tareas.unshift({titulo:this.tarea, completado:false})
        }
    },
    computed:{
        tareasRealizadas(){
            return this.tareas.filter(item => item.completado)
        },
        filtrarPortitulo(){
            return this.tareas.filter( item => item.titulo.includes(this.tarea))
        }
    }
})