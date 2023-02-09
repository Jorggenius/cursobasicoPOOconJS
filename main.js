class courses {
    constructor({
        name,
        classes = [],
        commentas = [],
    }){
        this._name = name;
        this.classes = classes;
    }
    get name(){
        return this._name; 
    }
   
    set  name(nuevoNombresito){
        if(nuevoNombresito === "Curso malito de proghramacion basica"){
            console.error("Web... no")
        }else{
            this._name = nuevoNombresito
        }
   }
}


const CursoProgBasica = new courses({
    name: "Curso gratis de programacion basica",
})
CursoProgBasica.name = ""

const CursoDefinitivoHTML = new courses({
    name: "Curso definitivo de HTML y CSS",
})
const CursoPracticoHTML = new courses({
    name: "Curso practico de HTML y CSS",
})


class learningPhats{
    constructor({
        name,
        courses,
    }){
        this.name = name;
        this.courses = courses;
    }
}

const escuelaWeb = new learningPhats({
    name: "escuela de desarrollo web",
    courses: [
        CursoProgBasica,
        CursoDefinitivoHTML,
        CursoPracticoHTML,
    ],
})  
const escuelaData = new learningPhats({
    name: "escuela de data science",
    courses: [
        CursoProgBasica,
        "Curso databusisness",
        "Curso dataviz",
    ],
})
const escuelaVgs = new learningPhats({
    name: "escuela de videojuegos",
    courses: [
        CursoProgBasica,
        "Curso Unity",
        "Curso Unreal",
    ],
})

class Student{
    constructor({
        name,
        email,
        username,
        twiter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPhats = [],
    }){
        this.name = name;
        this.email = email;
        this.username = username;
        this.socialMedia = {
            twiter,
            instagram,
            facebook,
        };
        this.approvedCourses = [] = approvedCourses;
        this.learningPhats = [] = learningPhats;
    }
}

const juan2 = new Student({
    name: "JuanDc",
    username: "juandc",
    email: "juanito@platzi.com",
    twiter: "fjuandc",
    
})
const miguelieto22 = new Student({
    name: "Miguelito",
    username: "miguelitofiliz",
    email: "miguelito@platzi.com",
    instagram: "miguelito_feliz",
})