function authLogin(event){
    event ? event.preventDefault(): null;
    const usuario = document.getElementById("username").value;
    const contra = document.getElementById("password").value;
    let msg="";
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if(!usuario || usuario.trim() === ""){
        msg = "El campo de usuario es obligatorio";
    }

    if(!contra || contra.trim() === ""){
        msg = "El campo de contraseña es obligatorio";
    } else if (!regex.test(pass)) {
        msg = "La contraseña debe tener al menos 8 caracteres, un a mayúscula, una minúscula, un numero y un carácter especial";
    } else if (contra.lenght < 8) {
        msg = "La contraseña debe tener al menos 8 caracteres";
    }
    else{}

    if(msg.length > 0){
        document.getElementById("msgError").innerHTML = msg;
    } else if(usuario === "admin" && contra === "P4ssword#"){
        sessionStorage.setItem("username", usuario);
        sessionStorage.setItem("pass", contra);
        window.location.href = "./pages/home.html";
    } else {
        document.getElementById("msgError").innerHTML = "Usuario o contraseña incorrecta"
        return false;
    }
};

function contactar(event){
    event ? event.preventDefault(): null;
    const usuario2 = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const coment = document.getElementById("textc").value;
    const pp = document.getElementById("pp").value;
    let msg="";

    if(!usuario2 || usuario2.trim() === ""){
        msg = "El campo de usuario es obligatorio";
    }

    if(!email || email.trim() === ""){
        msg = "El campo de email es obligatorio";
    } 

    if(msg.length > 0){
        document.getElementById("msgError").innerHTML = msg;
    } else{
        sessionStorage.setItem("data1", usuario2 + " " + email + " " + coment + " Checkbox " + pp);
        window.location.href = "./resul1.html";
    }
};

function suscribir(event){
    event ? event.preventDefault(): null;
    const usuario3 = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const politica = document.getElementById("pp").value;
    let msg="";

    if(!usuario3 || usuario3.trim() === ""){
        msg = "El campo de usuario es obligatorio";
    }

    if(!email || email.trim() === ""){
        msg = "El campo de email es obligatorio";
    } 

    if(msg.length > 0){
        document.getElementById("msgError").innerHTML = msg;
    } else{
        sessionStorage.setItem("data2", usuario3 + " " + email + " checkbox " + politica);
        window.location.href = "./resul2.html";
    }
};

function registro(event){
    event ? event.preventDefault(): null;
    const user4 = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const pass = document.getElementById("password").value;
    const pass2 = document.getElementById("password2").value;
    const nam = document.getElementById("usernamec").value;
    const politica = document.getElementById("pp").value;
    let msg="";
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/;

    if(!user4 || user4.trim() === ""){
        msg = "El campo de usuario es obligatorio";
    }

    if(!email || email.trim() === ""){
        msg = "El campo de email es obligatorio";
    } 

    if(!pass || pass.trim() === ""){
        msg = "El campo de contraseña es obligatorio";
    } else if (!regex.test(pass)) {
        msg = "La contraseña debe tener al menos 8 caracteres, un a mayúscula, una minúscula, un numero y un carácter especial";
    } else if (pass.lenght < 8) {
        msg = "La contraseña debe tener al menos 8 caracteres";
    }
    else{}

    if(pass !== pass2){
        msg = "Contraseña es incorrecta"
    }

    if(!nam || nam.trim() === ""){
        msg = "El email es obligatorio";
    } 

    if(msg.length > 0){
        document.getElementById("msgError").innerHTML = msg;
    } else{
        sessionStorage.setItem("data3", user4 + " " + email + " " + pass + " " + pass2 + " " + nam + " Checkbox: " + politica);
        window.location.href = "./resul3.html";
    }
};

function acceder(event){
    event ? event.preventDefault(): null;
    const pass = document.getElementById("password").value;
    const email = document.getElementById("email").value;
    const man = document.getElementById("man").checked;
    let msg="";

    if(!pass || pass.trim() === ""){
        msg = "El usuario es obligatorio";
    }

    if(!email || email.trim() === ""){
        msg = "El email es obligatorio";
    } 

    if(msg.length > 0){
        document.getElementById("msgError").innerHTML = msg;
    } else{
        sessionStorage.setItem("data4", email + " " + pass + " Radio: " + man);
        window.location.href = "./pagr4.html";
    }

    if (man) {
            localStorage.setItem("data4", datos); // Sesión persistente
    } else {
            sessionStorage.setItem("data4", datos); // Sesión temporal
    }
};

function llevar(event){
    event ? event.preventDefault(): null;
  
    window.location.href = "./resul3.html";
};

function recup(event){
    event ? event.preventDefault(): null;
    const user3 = document.getElementById("username").value;

    if(!user3 || user3.trim() === ""){
        msg = "El usuario es obligatorio";
    }

    let pass = sessionStorage.getItem("pass");
    document.getElementById("pass").innerHTML = pass;

};