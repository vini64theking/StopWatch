let startTime=0;
let elapsedTime=0;
let isRunning=false;
let timer=null;
let display=document.getElementById("display");


function startFunction(){
    if(!isRunning){
        
        startTime=Date.now()-elapsedTime;
        display.textContent=startTime;
        timer=setInterval(updateFunction,10);
        isRunning=true;

    }

}
function stopFunction(){
    if(isRunning){
        clearInterval(timer);
        elapasedTime=Date.now-startTime;
        isRunning=false;
    }
}
function resetFunction(){
    
    clearInterval(timer);
    startTime=0;
    elapsedTime=0;
    isRunning=false;
    
    display.textContent="00:00:00:00"
}
function updateFunction(){
    elapsedTime=Date.now()-startTime;
    display.textContent=elapsedTime;

    let hours=Math.floor(elapsedTime/(1000*60*60)%24);
    let minutes=Math.floor(elapsedTime/(1000*60)%60);
    let seconds=Math.floor(elapsedTime/(1000)%60);
    let milliseconds=Math.floor(elapsedTime%1000/10);

    hours=String(hours).padStart(2,"0");
    minutes=String(minutes).padStart(2,"0");
    seconds=String(seconds).padStart(2,"0");
    milliseconds=String(milliseconds).padStart(2,"0");
    
    display.textContent=`${hours}:${minutes}:${seconds}:${milliseconds}`;

}