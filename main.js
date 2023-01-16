//initialization of variables

let cardshowed =0;
let cardone=null;
let cardtwo=null;
let resultone=null;
let resulttwo=null;
let moves=0;
let hits=0;
let time=false;
let timer=30;
let timeback=null;

//address document HTML
let showmoves=document.getElementById('moves');
let showhits=document.getElementById('hits');
let showtime=document.getElementById('time');

//Generate random numbers

let numbers=[1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];

numbers=numbers.sort(()=>{return Math.random()-0.5});

//console.log(numbers)

//runtime
function runtime(){
    timeback= setInterval(()=>{
     timer--;
     showtime.innerHTML="Time: "+timer+ " seconds";
     if(timer==0){
        clearInterval(timeback);
        blockcards();
     }
    },1000);
}

function blockcards(){
    for(let i=0;i<=15;i++){
        let cardblock = document.getElementById(i);
        cardblock.innerHTML=numbers[i];
        cardblock.disabled=true;
    }
}
//funcion show

function show(id){

    if(time == false){
    runtime();
    time=true;
    }

    cardshowed++;

  
    if(cardshowed==1){

        //show first number
        cardone = document.getElementById(id);
        resultone = numbers[id];
        cardone.innerHTML = resultone;

        //Disable first button
        cardone.disabled=true;
    }else if(cardshowed==2){
        //show second number
        cardtwo=document.getElementById(id);
        resulttwo=numbers[id];
        cardtwo.innerHTML=resulttwo

        //Disable second button
        cardtwo.disabled=true;

        //increase moves
        moves++;
        showmoves.innerHTML="Moves: "+moves;

        if(resultone==resulttwo){
            cardshowed=0;
            //increase hits
            hits++;
            showhits.innerHTML = "Hits: "+hits;

            if(hits==8){
                clearInterval(timeback);
                showhits.innerHTML= "Hits: "+hits + "\uD83D\uDE00";
                showtime.innerHTML= "Great, tu time is "+ (30-timer)+"😉";
                showmoves.innerHTML="Moves: "+moves+"😎";
            }
        }else{
            setTimeout(()=>{
                cardone.innerHTML=' ';
                cardtwo.innerHTML=' ';
                cardone.disabled=false;
                cardtwo.disabled=false;
                cardshowed=0;
            },800);
        }
    }

}

