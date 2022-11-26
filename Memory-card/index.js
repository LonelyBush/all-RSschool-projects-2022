const memoryGame = document.querySelector('.memory-game')
const allCards = document.querySelectorAll('.memory-card')
const step = document.querySelector('.step')
const timeSet = document.querySelector('.time');
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const tableBtn = document.querySelector('.tabl-btn')

let flippedCard = false;
let blockCard = false;
let firstCard, secondCard;
let moves = 0;
let succsessmov = 0;
let seconds = 0;
let minutes = 0;
let time;


function flipCard(){
    if (blockCard == true) {
    return;
} 
    if (this === firstCard) {
        return;
    }
    this.classList.add('fliper')
    if (!flippedCard) {
        flippedCard = true;
        firstCard = this;
        return;
    } else {
        secondCard = this;
       // flippedCard = false;
    }
    checkForMatch()
}

//allCards.forEach((elem) => elem.addEventListener('click', flipCard));

function checkForMatch(){
    if(firstCard.dataset.pokemon === secondCard.dataset.pokemon){
        firstCard.classList.add('right')
        secondCard.classList.add('right')
        firstCard.removeEventListener('click', flipCard);
        secondCard.removeEventListener('click', flipCard);
        countMoves()
        succsessmov = succsessmov +1;
        console.log(succsessmov)
       setWinner()
        resetBoard()
        return;
    }if (firstCard.dataset.pokemon !== secondCard.dataset.pokemon){
        firstCard.classList.add('wrong')
        secondCard.classList.add('wrong')
    }
    countMoves()
    unflipCards();
}


  function unflipCards() {
      blockCard = true;
       setTimeout(() => {
         firstCard.classList.remove('fliper');
        secondCard.classList.remove('fliper');
        firstCard.classList.remove('wrong');
        secondCard.classList.remove('wrong')
        resetBoard()
       }, 1500);
     }

     function resetBoard(){
         flippedCard = false ;
         blockCard = false;
         firstCard = null;
         secondCard = null;
     }


     function countMoves() {
         if (firstCard.classList.contains('wrong') || firstCard.classList.contains('right'))  {
            moves = moves + 1; 
            let count = moves
            step.textContent = `${count}`
            // console.log(count)
         }
         return;
     }

     function randomCards() {
         allCards.forEach((elem) => {
             let randomOrder = Math.floor(Math.random()* 16);
             elem.style.order = randomOrder;
         })
     }

function time_count(){
    
     time =  setInterval(function() {
        seconds++
        
        if (seconds === 60) {
             seconds = 0;
             minutes++
            // minutes = minutes;
         } if (minutes === 60){
            clearInterval(time)
             alert('Time\'s up coach!!')
             setGame()
            
         } 
            let result = `${String(minutes).padStart(2,0)}:${String(seconds).padStart(2,0)}`
            timeSet.textContent = result;

       
    }, 1000)
    
}


function refreshAfterComplete(){
    allCards.forEach((elem) => elem.addEventListener('click', flipCard));
  allCards.forEach((elem) => elem.classList.remove('fliper'));
  allCards.forEach((elem) => elem.classList.remove('right'));
}

function setWinner(){
    if(succsessmov == 8){
        alert(`Nicely done! \n Moves: ${step.textContent}\nTime: ${timeSet.textContent}`)
        updateStorage()
        stopGame()  
    return succsessmov = 0;
    } 
}
function updateStorage() {

const stepResult = JSON.parse(localStorage['step']);
stepResult.push(step.textContent);

    localStorage['step'] = JSON.stringify(stepResult);
  }

 if (!localStorage.hasOwnProperty('step')){
    localStorage.setItem('step', '[]');
  } 

  if (JSON.parse(localStorage['step']).length >= 10){
    localStorage.clear()
}

function addTableStr(){
    const stepResult = JSON.parse(localStorage['step']);
    for( let i =0; i<stepResult.length; i++){
        if( i === 10){
            
            break;
        } 
        let tbody = document.getElementsByTagName('tbody')[0];
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(`${i+1}`));
        let td2 = document.createElement('td');
        td2.appendChild (document.createTextNode(`${stepResult[i]}`))
        row.appendChild(td1);
        row.appendChild(td2);
        tbody.appendChild(row);   
    }
    }

addTableStr()



function setGame(){

flippedCard = false;
blockCard = false;
minutes = 0;
moves = 0;
step.textContent = `0`
seconds = 0;
timeSet.textContent = "00:00";
refreshAfterComplete()
clearInterval(time);
time_count()
//randomCards()  
}


function stopGame(){
    window.location.reload()
}


stopBtn.addEventListener('click', stopGame)
startBtn.addEventListener('click', setGame);