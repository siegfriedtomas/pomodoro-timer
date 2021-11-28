let minutos=25;
let segundos=00;

let startWatch=null;
let state="stopped";

let bells = document.createElement('audio');
bells.src = './media/BellTransition.mp3'

let btn_pom = document.getElementById('btn-pom');
let btn_sb = document.getElementById('btn-sb');
let btn_lb = document.getElementById('btn-lb');
let titulo = document.getElementById('titulo');
let modo = "pomodoro";
document.getElementById("btn-pom").classList.add("modo-activo");

btn_pom.addEventListener('click',function(){
    titulo.innerHTML = "Pomodoro";
    modo = "pomodoro";
    minutos = 25;
    segundos = 00;
    document.getElementById("btn-lb").classList.remove('modo-activo');
    document.getElementById("btn-sb").classList.remove("modo-activo");
    document.getElementById("btn-pom").classList.add("modo-activo");
    document.getElementById("hora").innerHTML = "25:00";
});

btn_sb.addEventListener('click',function(){
    titulo.innerHTML = "Short Break";
    modo = "short-break";
    minutos = 05;
    segundos = 00;
    document.getElementById("btn-pom").classList.remove('modo-activo');
    document.getElementById("btn-lb").classList.remove('modo-activo');
    document.getElementById("btn-sb").classList.add("modo-activo");
    document.getElementById("hora").innerHTML = "05:00";
});

btn_lb.addEventListener('click',function(){
    titulo.innerHTML = "Long Break";
    modo = "long-break";
    minutos = 15;
    segundos = 00;
    document.getElementById("btn-pom").classList.remove('modo-activo');
    document.getElementById("btn-sb").classList.remove('modo-activo');
    document.getElementById("btn-lb").classList.add("modo-activo");
    document.getElementById("hora").innerHTML = "15:00";
});



const pomodoro=()=>{
    let mostrarMinutos=minutos;
    let mostrarSegundos=segundos;

    if(segundos!=0){
        segundos--;
    }else if(segundos==0 && minutos!=0){
        minutos--;
        segundos = 59;
    }

    if(segundos<10){
        mostrarSegundos = "0" + segundos;
    }else{
        mostrarSegundos = segundos;
    }
    if(minutos<10){
        mostrarMinutos = "0" + minutos;
    }else{
        mostrarMinutos = minutos;
    }
    document.getElementById("hora").innerHTML = mostrarMinutos + ":" + mostrarSegundos;

    if(minutos===0 & segundos === 0){
        document.getElementById('hora').classList.toggle('parpadeo');
        bells.play();
    }
}

function startPause(){
    if(state === "stopped"){
        startWatch = setInterval(pomodoro,1000);
        document.getElementById('btn-inicio').innerHTML = "Pausa";
        state = "started";
    }else{
        window.clearInterval(startWatch);
        document.getElementById('btn-inicio').innerHTML = "Inicio";
        state = "stopped";
    }
}


function toReset(){
    clearInterval(startWatch);
    document.getElementById('hora').classList.remove('parpadeo');
    if(modo==="pomodoro"){
        minutos = 25;
        segundos = 00;
        document.getElementById('btn-inicio').innerHTML="Inicio";
        document.getElementById("hora").innerHTML = "25:00";
    }else if(modo==="short-break"){
        minutos = 05;
        segundos = 00;
        document.getElementById('btn-inicio').innerHTML="Inicio";
        document.getElementById("hora").innerHTML = "05:00";
    }else if(modo==="long-break"){
        minutos = 15;
        segundos = 00;
        document.getElementById('btn-inicio').innerHTML="Inicio";
        document.getElementById("hora").innerHTML = "15:00";
    }   
}



