/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/


//Initializing for new game
var current_0=document.querySelector('#current-0');
var current_1=document.querySelector('#current-1');
var playerscore_0=document.querySelector('#score-0');
var playerscore_1=document.querySelector('#score-1');''
var Dice=document.querySelector('.dice');
var roll=document.querySelector('.btn-roll');
var hold=document.querySelector('.btn-hold');
var scores,activePlayer;
var newgame=document.querySelector('.btn-new');
var random,sum=0;
var gameplay=true;


init();


//generating random numbers

function rolling(){
    if(gameplay){
    random=Math.floor((Math.random()*6)+1);
    if(random===1){
        document.querySelector("#current-"+activePlayer).textContent='0';
        activePlayer === 0? activePlayer = 1 : activePlayer = 0;
        Dice.style.display='block';
        Dice.src="dice-1.png";
        sum=0;
        document.querySelector(".player-0-panel").classList.toggle("active");
        document.querySelector(".player-1-panel").classList.toggle("active");
        
       }
        else{
    Dice.style.display='block';
    Dice.src="dice-"+random+".png";
    //add to current score
    sum+=random;
    document.querySelector("#current-"+activePlayer).textContent=sum;
        }
}
}


//clicking on dice
roll.addEventListener('click',rolling);

//clicking on hold
hold.addEventListener('click',function(){
    if(gameplay){
   var prev= parseInt(document.querySelector("#score-"+activePlayer).textContent);
    sum+=prev;
    document.querySelector("#score-"+activePlayer).textContent=sum;
    scores[activePlayer]=sum;
    if(scores[activePlayer]>20)
        {
            document.querySelector("#name-"+activePlayer).classList.add("winner","player-name");
            document.querySelector("#name-"+activePlayer).textContent="WINNER !";
            current_0.textContent='0';
            current_1.textContent='0';
            Dice.style.display='none';
            gameplay=false;
        }
    else{
    activePlayer === 0? activePlayer = 1 : activePlayer = 0;
    document.querySelector(".player-0-panel").classList.toggle("active");
    document.querySelector(".player-1-panel").classList.toggle("active");
    current_0.textContent='0';
    current_1.textContent='0';
    sum=0;
    }
    }
}
    
        
)

newgame.addEventListener('click',init);

function init()
{
scores=[0,0];
activePlayer=0;

current_0.textContent='0';
current_1.textContent='0';
playerscore_0.textContent='0';
playerscore_1.textContent='0';
Dice.style.display='none';
document.querySelector("#name-"+activePlayer).classList.remove("winner","player-name");
document.querySelector("#name-"+activePlayer).classList.add("player-name");
document.querySelector("#name-"+activePlayer).textContent="PLAYER "+(activePlayer + 1);

}