class Comment{
    constructor({
        content,
        studentName,
        studenRole = "estudiantes",
    }){
        this.content;
        this.studentName = studentName;
        this.studenRole = studenRole;
        this.likes = 0;
    }
    publicar(){
        console.log(this.studentName + "(" + this.studenRole + ")")
        console.log(this.likes + "likes")
        console.log(this.content)
    }
}



function videoPlay(id){
    const urlSecreta = "http://Platziultrasecretomasquelanasa.com/" + id
    console.log("Se esta reproduciendo desde la url" + urlSecreta)
}
function videoStop(id){
    const urlSecreta = "http://Platziultrasecretomasquelanasa.com/" + id
    console.log("Pausamos la url" + urlSecreta)
}

class platziClass{
    constructor({
        name,
        videoID,
    }){
      this.name = name;
      this.videoID = videoID;
    }
    reproducir(){
        videoPlay(this.videoID)
    }
    pausar(){
        videoStop(this.videoID)
    }
}

class courses {
    constructor({
        name,
        classes = [],
        isFree = false,
        lang = "spanish", 
    }){
        this._name = name;
        this.classes = classes;
        this.isFree = isFree;
        this.lang = lang;
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
    isFree: true,
})
CursoProgBasica.name = ""

const CursoDefinitivoHTML = new courses({
    name: "Curso definitivo de HTML y CSS",
})
const CursoPracticoHTML = new courses({
    name: "Curso practico de HTML y CSS",
    lang:"english",
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
    publicarComentario(commentContent){
        const comment = new Comment({
            content: commentContent,
            studentName: this.name,
            studenRole: "profesor",
        })
        comment.publicar()
    }
}

class FreeStudent extends Student{
    constructor(props){
      super(props)   
    }
    approveCourse(newCourse){
        if (newCourse.isFree){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("lo sentimos, " + this.name + ", solo puedes tomar cursos abiertos")
        }
    }
}

class BasicStudent extends Student{
    constructor(props){
        super(props)   
      }
      approveCourse(newCourse){
        if (newCourse.lang !== "english"){
            this.approvedCourses.push(newCourse);
        }else{
            console.warn("lo sentimos, " + this.name + ", no puedes tomar cursos en imgles")
        }
    }
}

class ExpertStudent extends Student{
    constructor(props){
        super(props)   
      }
      approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}
class TeacherStudent extends Student{
    constructor(props){
        super(props)   
      }
      approveCourse(newCourse){
        this.approvedCourses.push(newCourse);
    }
}


const juan2 = new FreeStudent({
    name: "JuanDc",
    username: "juandc",
    email: "juanito@platzi.com",
    twiter: "fjuandc",
    
})
const miguelieto22 = new BasicStudent({
    name: "Miguelito",
    username: "miguelitofiliz",
    email: "miguelito@platzi.com",
    instagram: "miguelito_feliz",
})
const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddiervega",
})