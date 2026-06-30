//Visualização de senha ou não

let campoSenha = document.querySelector("input#senha");
let campoConfirmarSenha = document.querySelector("input#confirmar_senha");

let icon1 = document.querySelector("ion-icon#olho1");
let icon2 = document.querySelector("ion-icon#olho2");

console.log(campoSenha);
console.log(campoConfirmarSenha);
console.log(icon1);
console.log(icon2);

function esconder1(){
    if(campoSenha.type === "password"){
        campoSenha.type = "text";
        icon1.setAttribute('name','eye-off');
    } else{
        campoSenha.type = "password";
        icon1.setAttribute('name','eye');
    }
}

function esconder2(){
    if(campoConfirmarSenha.type === "password"){
        campoConfirmarSenha.type = "text";
        icon1.setAttribute('name','eye-off');
    } else{
        campoConfirmarSenha.type = "password";
        icon1.setAttribute('name','eye');
    }
}

icon1.addEventListener('click' , esconder1);
icon2.addEventListener('click' , esconder2);