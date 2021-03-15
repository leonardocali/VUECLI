const app = new Vue({
    el:'#inicio',
    data:{
        tarea:null,
        tareas:[
            "Aprender Python",
            "Aprender Javascritp",
            "Aprender Vue",
            "Descansar"
        ],
        conectado:true,
        edad:19,
        lista : ["Julian","Leonardo","Alejandra"],  
        listapersonas:[
          {nombre: "Leonardo", edad:43, ciudad:"Cali"},
          {nombre: "Julian", edad:7, ciudad:"Cali"},
          {nombre: "Alejandra", edad:30, ciudad:"Cali"},
          {nombre: "Sammuel", edad:13, ciudad:"Cali"}
        ]
    },
    methods:{
        agregarTarea(){
            this.tareas.unshift(this.tarea)
        }
    }
})