class learningPhats{
    constructor({
        approvedCourses = []
    }){
        this.approvedCourses = [] = approvedCourses;
    }
}

const escuelaWeb = new learningPhats({
    approvedCourses: [
        "Curso definitivo de html y css",
            "Curso Practico de html y css",
            "Curso de responsive desing",
            "Curso de Sistemas de diseño",
    ]
})
const escuelaData = new learningPhats({
    approvedCourses:[
        "Curso DataBusiness",
        "Curso DataViz",
        "Curso Tableau",
    ]
})
const escuelaVgs = new learningPhats({
    approvedCourses:[
        "Curso de introduccion a la produccion de VGs",
        "Curso de unreal engine",
        "Curso de Unioty 3D", 
    ]
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