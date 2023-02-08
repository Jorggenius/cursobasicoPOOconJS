const natalia = {
    name: "Natalia",
    age: 20,
    cursosAprobados:[
        "Curso Definitivo de HTML y CSS",
        "Curso Practico de HTML y CSS",
    ],
    aprobarCurso(nuevoCursito){
      this.cursosAprobados.push(nuevoCursito)
    },
}

function student(name, age, cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
}
student.prototype.aprobarCurso = function (nuevoCursito){
    this.cursosAprobados.push(nuevoCursito)
}

const juanita = new student(
    "Juanita alejandra",
    15,
    [
        "Curso de introduccion a la produccion de videojuegos",
        "Curso de creacion de videojuegos",
    ]
)

//Prototipos con la sintaxis de clases//
class student2 {
    constructor({
        name,
        age,
        email,
        cursosAprobados = [],
    }){
        this.name = name;
        this.cursosAprobados = cursosAprobados;
        this.email = email
        this.age = age;
    }
    aprobarCurso(nuevoCursito){
        this.cursosAprobados.push(nuevoCursito)
    }
}

const miguelito = new student2({
    name:"Miguel",  
    age: 28,
    email: "migueliti@platzi.com",
}
)
