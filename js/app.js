let minutes=25;
let seconds=00;

let startWatch=null;
let state="stopped";

let bells = document.createElement('audio');
bells.src = './media/BellTransition.mp3';
let btnStart = document.getElementById('btn-start');
let btnPom = document.getElementById('btn-pom');
let btnSb = document.getElementById('btn-sb');
let btnLb = document.getElementById('btn-lb');
let title = document.getElementById('title');
let time = document.getElementById("time");
let mode = "pomodoro";
btnPom.classList.add("active");

btnPom.addEventListener('click',function(){
    title.innerHTML = "Pomodoro";
    mode = "pomodoro";
    minutes = 25;
    seconds = 00;
    btnLb.classList.remove('active');
    btnSb.classList.remove('active');
    btnPom.classList.add('active');
    time.innerHTML = "25:00";
});

btnSb.addEventListener('click',function(){
    title.innerHTML = "Short Break";
    mode = "short-break";
    minutes = 05;
    seconds = 00;
    btnPom.classList.remove('active');
    btnLb.classList.remove('active');
    btnSb.classList.add('active');
    time.innerHTML = "05:00";
});

btnLb.addEventListener('click',function(){
    title.innerHTML = "Long Break";
    mode = "long-break";
    minutes = 15;
    seconds = 00;
    btnPom.classList.remove('active');
    btnSb.classList.remove('active');
    btnLb.classList.add("active");
    time.innerHTML = "15:00";
});


const pomodoro=()=>{
    let displayMinutes=minutes;
    let displaySeconds=seconds;

    if(seconds!=0){
        seconds--;
    }else if(seconds==0 && minutes!=0){
        minutes--;
        seconds = 59;
    }

    if(seconds<10){
        displaySeconds = "0" + seconds;
    }else{
        displaySeconds = seconds;
    }
    if(minutes<10){
        displayMinutes = "0" + minutes;
    }else{
        displayMinutes = minutes;
    }
    time.innerHTML = displayMinutes + ":" + displaySeconds;

    if(minutes===0 & seconds === 0){
        time.classList.toggle('blink');
        bells.play();
    }
}

const startPause=()=>{
    if(state === "stopped"){
        startWatch = setInterval(pomodoro,1000);
        btnStart.innerHTML = "Pause";
        state = "started";
    }else{
        window.clearInterval(startWatch);
        btnStart.innerHTML = "Start";
        state = "stopped";
    }
}


const toReset=()=>{
    clearInterval(startWatch);
    time.classList.remove('blink');
    if(mode==="pomodoro"){
        minutes = 25;
        seconds = 00;
        btnStart.innerHTML="Start";
        time.innerHTML = "25:00";
    }else if(mode==="short-break"){
        minutes = 05;
        seconds = 00;
        btnStart.innerHTML="Start";
        time.innerHTML = "05:00";
    }else if(mode==="long-break"){
        minutes = 15;
        seconds = 00;
        btnStart.innerHTML="Start";
        time.innerHTML = "15:00";
    }   
}



