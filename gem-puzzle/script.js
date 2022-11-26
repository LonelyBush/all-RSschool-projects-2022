//alert('Здравствуйте! Не успеваю доделать в срок все фичи указанные в ТЗ.... Поэтому очень прошу вас проверить мою работу в последний день кроссчека. Дискорд для связи: BonelyLush#0480')
const body = document.querySelector('body');

function createGameLayout() {
  let createGameTitle =  document.createElement('h1');
  let createSection = document.createElement('section');
  let createGameField = document.createElement('div');

  let createControlsSection = document.createElement('section');
  createControlsSection.classList.add('controls-section');
  let createGameInfoBlock = document.createElement('div');
  createGameInfoBlock.classList.add('game-info-block');
  createGameInfoBlock.innerHTML = "Time:<p class = 'time'>00:00</p> Moves:<p class ='step'>0</p>"

  let createBtnBlock = document.createElement('div');
  createBtnBlock.classList.add('btn-block');
  let createStartBtn = document.createElement('button');
  createStartBtn.classList.add('start-btn');
  createStartBtn.textContent = "Start Game"
  let createStopBtn = document.createElement('button');
  createStopBtn.classList.add('stop-btn');
  createStopBtn.textContent = "Clear"
  let createSaveBtn = document.createElement('button');
  createSaveBtn.classList.add('save-btn');
  createSaveBtn.setAttribute('disabled', 'disabled')
  createSaveBtn.textContent = "Save"
  let createResetBtn = document.createElement('button');
  createResetBtn.classList.add('res-btn');
  createResetBtn.textContent = "Results";
  createBtnBlock.appendChild(createStartBtn);
  createBtnBlock.appendChild(createStopBtn);
  createBtnBlock.appendChild(createSaveBtn);
  createBtnBlock.appendChild(createResetBtn);

  let createResultSection = document.createElement('section');
  createResultSection.classList.add('result-wrapper-background')
  let createResultWrapper = document.createElement('div');
  createResultWrapper.classList.add('result-wrapper');
  
  let createCloseBtnRes = document.createElement('button');
  createCloseBtnRes.classList.add('close-btn-result');
  createCloseBtnRes.textContent = 'x'
  let createTableRecords = document.createElement('div');
  createTableRecords.classList.add('table-records');
  let createTableContent = document.createElement('table');
  createTableContent.classList.add('table-content');
  createTableContent.innerHTML = " <tr><th>Game №</th><th>Moves</th><th>Time</th></tr><tbody></tbody>"
  createTableRecords.appendChild(createTableContent);

  createResultWrapper.appendChild(createCloseBtnRes);
  createResultWrapper.appendChild(createTableRecords);
  createResultSection.appendChild(createResultWrapper);

  let createMusicIcon = document.createElement('div');
  createMusicIcon.classList.add('music-togle-icon');

  let createAudioSound = document.createElement('audio');
  createAudioSound.id = "audio"
  let createSourceSound = document.createElement('source');
  createSourceSound.src = './assets/music/Keygen Music - popkorn.mp3';
  createSourceSound.type = 'audio/mp3';

  createAudioSound.appendChild(createSourceSound);


  createSection.setAttribute('class', 'game-section');
  createGameField.setAttribute('class', 'game-field');
  createControlsSection.setAttribute('class', 'controls-section');
  createGameTitle.textContent = 'Gem Puzzle'

 // createControlsSection.

  createSection.appendChild(createGameTitle)
  createSection.appendChild(createGameField)
  body.appendChild(createSection);
  body.appendChild(createControlsSection);
  createControlsSection.appendChild(createGameInfoBlock);
  createControlsSection.appendChild(createBtnBlock);
  createControlsSection.appendChild(createResultSection)

  body.appendChild(createMusicIcon);
  body.appendChild(createAudioSound);
  

}
createGameLayout()

const gameField = document.querySelector('.game-field')
const items = document.querySelectorAll('.item');
const item = document.querySelector('.item');
const timeSet = document.querySelector('.time');
const nullBlock = document.querySelectorAll('empty-item');
const step = document.querySelector('.step')
const startBtn = document.querySelector('.start-btn')
const stopBtn = document.querySelector('.stop-btn')
const saveBtn = document.querySelector('.save-btn')

const resultWrapBack = document.querySelector('.result-wrapper-background')
const resultWrap = document.querySelector('.result-wrapper')
const resultBtn = document.querySelector('.res-btn')
const modalRevRes = document.querySelector('.table-records')
var audio =document.getElementById("audio");
const volumeIcon = document.querySelector('.music-togle-icon')


let numbersArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
let emptyArr = []

var col = 4;
var row = 4;
var moves = 0;
let seconds = 0;
let minutes = 0;
let time;

let currBlock;
let emptyBlock;


function getInclusiveRandow(actArr){
    let newSet = new Set()
  
  
    for (let i = 0; i<actArr.length; i++){
      
        while(newSet.size < 15) {
          let random = Math.floor(Math.random() * (16 - 1)+1);
          newSet.add(random)
        }
    }

    newSet.add('')
    let newArr = Array.from(newSet);
     
    if(solvable(newArr)){
      return newArr;
    } else {
     return getInclusiveRandow(newArr)
    }
    
  
}


function setGameField(){
  saveBtn.removeAttribute('disabled', 'disabled')
    let randomArr = getInclusiveRandow(numbersArr)
    numbersArr.push('');

    let newNumberArr =[]
    let dirArr = []
   

   // console.log(solvable(randomArr));
    for (let r = 0; r<row; r++){
      for(let c = 0; c<col; c++){
        
          let block = document.createElement('div')
          block.id = `${r}-${c}`
          block.classList.add('item')
          block.innerHTML = `<p class = "number-style">${randomArr.shift()}</p>`
          gameField.appendChild(block);   
          
          if( r == 3 && c == 3){
              //let emptyBlock = document.createElement('div')
              block.id = `${r}-${c}`;
              block.classList
              block.classList.add('empty')
              block.innerHTML = '<p class = "number-style"></p>'
              gameField.appendChild(block);
              emptyBlock = block
            
              const number = document.querySelectorAll('.number-style')
              const elem = document.querySelectorAll('.item')
    for(let j =0; j<elem.length; j++){
      dirArr.push(elem[j].getAttribute('id'));
    }    
    for(let k = 0; k < number.length; k++){
      newNumberArr.push(number[k].textContent);
    }
    
      saveToStorage(newNumberArr,dirArr)

            }
            block.addEventListener('click', function(){
              watchCurInfo()
              
              countMoves()
              let newNumberArr =[]
              let dirArr = []

              let cord = emptyBlock.id.split('-');
              
              let r1 = Number(cord[0]);
              let c1 = Number(cord[1]);
               
                let movingRight = r1 == r && c1 == c+1; 
                let movingLeft = r1 == r && c1 == c-1;
                
                let movingUp = c1 == c && r1 == r-1;
                let movingDown = c1 == c && r1 == r+1;
                
               
             

                if (movingLeft || movingRight || movingUp || movingDown){
                  
                  currBlock = this;
                  currBlock.setAttribute('class','item empty');
                  emptyBlock.setAttribute('class', 'item')
                  if (emptyBlock.hasAttribute('class', 'item empty')){
                  
                 
                    emptyBlock.innerHTML = currBlock.innerHTML
                    emptyBlock = currBlock
                    
                    currBlock.innerHTML = '<p class = "number-style"></p>'
                    const number = document.querySelectorAll('.number-style')
                    const elem = document.querySelectorAll('.item')
                    for(let j =0; j<elem.length; j++){
                      dirArr.push(elem[j].getAttribute('id'));
                    }    
                    for(let k = 0; k < number.length; k++){
                      newNumberArr.push(number[k].textContent);
                    }
                    
                      saveToStorage(newNumberArr,dirArr)
                        
                        

                        let strNewArr = newNumberArr.join('-');
                        let strСorrectArr = numbersArr.join('-')
                       // console.log(strNewArr, strСorrectArr)
                        

                        setTimeout(() => {
                          checkForMatch(strNewArr, strСorrectArr)
                        }, 700);
                        
                   
                    
                    
                  
                  }
                }
                 
              
             
            });
      }
    }
    
    
}




function checkForMatch(prev, corr){
  if (prev === corr){
   alert(`Hooray, you complete Puzzle!! Your moves is ${step.textContent}. And you time is ${timeSet.textContent}. Nice try!`)
   updateStorage()
   window.location.reload()
   stopGame()
  } else {
   // alert(`Keep playing! Moves: ${step.textContent}`)
  }
}


//console.log(newNumberArr)
function countMoves() {
 
     moves = moves + 1; 
     let count = moves
     step.textContent = `${count}`
     // console.log(count)
  
  return;
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
            alert('Time\'s up dude!!')
            setGame()
           
        } 
           let result = `${String(minutes).padStart(2,0)}:${String(seconds).padStart(2,0)}`
           timeSet.textContent = result;

      
   }, 1000)
   
}

function solvable(a){
  var difOrder = 0;
  for ( i = 1, len = a.length-1; i < len; i++)
  for (var k = i-1; k >= 0; k--){
    if (a[k] > a[i]) {
      difOrder++;
    }
  } 
  let even = difOrder % 2;

return !(even);
}

function setGame(){
   col = 4;
   row = 4;
   moves = 0;
   seconds = 0;
   minutes = 0;
  step.textContent = '0';
  timeSet.textContent = '00:00';
  gameField.innerHTML = ''
  numbersArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
  setGameField()
  clearInterval(time);
  time_count()
}

function stopGame(){
  gameField.innerHTML =''
  timeSet.textContent ='00:00'
  step.textContent = "0"
  clearInterval(time);
}



function saveToStorage(newArr, direcArr){
  //const curSet = JSON.parse(localStorage['set']);
 // curSet.push(newArr);
  localStorage['currSet']=JSON.stringify(newArr)
  localStorage['dirSet']=JSON.stringify(direcArr)
  if (!localStorage.hasOwnProperty('set')){
    localStorage.setItem('set', '[]');
  } 
}

let savedDirArr = []
let savedGemArr = []

function addArrFromStorage(){
  const curSet = JSON.parse(localStorage['currSet'])
  const dirSet = JSON.parse(localStorage['dirSet'])
  const curTime = JSON.parse(localStorage['currTime'])
  const curMoves = JSON.parse(localStorage['currMove'])
localStorage['savedGem'] = JSON.stringify(curSet)
localStorage['savedDir'] = JSON.stringify(dirSet)
localStorage['savedTime'] = JSON.stringify(curTime)
localStorage['savedMoves'] = JSON.stringify(curMoves)
//console.log(curSet[i])

}

function watchCurInfo(){
  localStorage['currTime']=JSON.stringify(timeSet.textContent)
  localStorage['currMove']=JSON.stringify(Number(step.textContent) +1)
}


function createSavePuzzleField(){
  let arr = []
  numbersArr.push('');
  let createDiv = document.createElement('div');
  createDiv.classList.add('item');
  createDiv.setAttribute('id', ``)
  //let createPvalue = document.createElement('p');
  //createPvalue.classList.add('number-style');
  //createDiv.appendChild(createPvalue)
  if(localStorage.hasOwnProperty('savedDir') && localStorage.hasOwnProperty('savedGem') && localStorage.hasOwnProperty('savedTime')&&localStorage.hasOwnProperty('savedMoves')){
    const savedGem = JSON.parse(localStorage['savedGem']);
    const savedDir = JSON.parse(localStorage['savedDir']);
    const savedTime = JSON.parse(localStorage['savedTime']);
    const savedMoves = JSON.parse(localStorage['savedMoves']);
    console.log(savedDir, savedGem)

    

    for (let r = 0; r<row; r++){
      for(let c = 0; c<col; c++){
        clearInterval(time);
        time_count()
        moves = Number (savedMoves)
        let convertSavedTime = savedTime.split(":");
        console.log(convertSavedTime)
        seconds = Number(convertSavedTime[1]);
        minutes = Number (convertSavedTime[0]);
        console.log(minutes, seconds)
        timeSet.textContent = savedTime;
        step.textContent = savedMoves;
        
        let createDiv = document.createElement('div');
        createDiv.id = `${savedDir.shift()}`
        createDiv.classList.add('item')
        createDiv.innerHTML = `<p class = "number-style">${savedGem.shift()}</p>`
        gameField.appendChild(createDiv);  
        
       
        const number = document.querySelectorAll('.number-style')
       
        for (let j = 0; j<number.length; j++){
          if( number[j].textContent == ''){
            number[j].parentElement.classList.add('empty');
            emptyBlock = number[j].parentElement
           }
        }
        
        saveBtn.removeAttribute('disabled', 'disabled');
        createDiv.addEventListener('click', function(){
          watchCurInfo()

          let newNumberArr =[]
          let dirArr = []

          let cord = emptyBlock.id.split('-');
          
          let r1 = Number(cord[0]);
          let c1 = Number(cord[1]);
           
            let movingRight = r1 == r && c1 == c+1; 
            let movingLeft = r1 == r && c1 == c-1;
            
            let movingUp = c1 == c && r1 == r-1;
            let movingDown = c1 == c && r1 == r+1;
            
           
         

            if (movingLeft || movingRight || movingUp || movingDown){
              
              currBlock = this;
              currBlock.setAttribute('class','item empty');
              emptyBlock.setAttribute('class', 'item')
              if (emptyBlock.hasAttribute('class', 'item empty')){
              
             
                emptyBlock.innerHTML = currBlock.innerHTML
                emptyBlock = currBlock
                
                currBlock.innerHTML = '<p class = "number-style"></p>'
                const number = document.querySelectorAll('.number-style')
                const elem = document.querySelectorAll('.item')
                for(let j =0; j<elem.length; j++){
                  dirArr.push(elem[j].getAttribute('id'));
                }    
                for(let k = 0; k < number.length; k++){
                  newNumberArr.push(number[k].textContent);
                }
                
                  saveToStorage(newNumberArr,dirArr)
                    
                    

                    let strNewArr = newNumberArr.join('-');
                    let strСorrectArr = numbersArr.join('-')
                    console.log(strNewArr, strСorrectArr)
                   // console.log(strNewArr, strСorrectArr)
                    countMoves()

                    setTimeout(() => {
                      checkForMatch(strNewArr, strСorrectArr)
                    }, 700);
                    
               
                
                
              
              }
            }
             
          
         
        });

      }

      }
      
    }
   


//return console.log(arr)
}
createSavePuzzleField()

saveBtn.addEventListener('click', addArrFromStorage)


function updateStorage() {

  const stepResult = JSON.parse(localStorage['step']);
  const timeResult = JSON.parse(localStorage['time']);
 


  stepResult.push(step.textContent);
  timeResult.push(timeSet.textContent);
 
  
      localStorage['step'] = JSON.stringify(stepResult);
      localStorage['time'] = JSON.stringify(timeResult);
    }
  
   if (!localStorage.hasOwnProperty('step')&& !localStorage.hasOwnProperty('time')){
      localStorage.setItem('step', '[]');
      localStorage.setItem('time', '[]');
      localStorage.setItem('set', '[]');
  

    } 
  
    if (JSON.parse(localStorage['step']).length >= 10 && JSON.parse(localStorage['time']).length >= 10 && JSON.parse(localStorage['set']).length >= 10){
      localStorage.clear()
  }




  function addTableStr(){
    const stepResult = JSON.parse(localStorage['step']);
    const timeResult = JSON.parse(localStorage['time'])
    for( let i =0; i<stepResult.length; i++){
        if( i === 10){
            
            break;
        } 
        for( let i =0; i<timeResult.length; i++){
          if( i === 10){
              
              break;
          } 
        }
        let tbody = document.getElementsByTagName('tbody')[0];
        let row = document.createElement('tr');
        let td1 = document.createElement('td');
        td1.appendChild(document.createTextNode(`${i+1}`));
        let td2 = document.createElement('td');
        td2.appendChild (document.createTextNode(`${stepResult[i]}`))
        let td3 = document.createElement('td');
        td3.appendChild (document.createTextNode(`${timeResult[i]}`))
        row.appendChild(td1);
        row.appendChild(td2);
        row.appendChild(td3);
        tbody.appendChild(row);   
    }
    }
    addTableStr()


    function togglePopap(){
  
      if(resultWrapBack.classList.contains('show') && resultWrap.classList.contains('show')){
        resultWrapBack.classList.remove('show');
        resultWrap.classList.remove('show');
        
        document.removeEventListener('wheel', prevent);
    
      } else {
        resultWrapBack.classList.add('show');
        resultWrap.classList.add('show');
        
        document.addEventListener('wheel', prevent, {passive: false})
      }
    }

    function prevent(ev) {
      ev.preventDefault();
    }


stopBtn.addEventListener('click', stopGame)
startBtn.addEventListener('click', setGame);




function upPopup(){
  
    modalRevRes.addEventListener('click', togglePopap)
    resultBtn.addEventListener('click', togglePopap)
    resultWrap.addEventListener('click', togglePopap)
}
upPopup()





function runMusic(){
audio.setAttribute('loop', 'loop')  
audio.play()
  
}
function stopMusic(){
  audio.setAttribute('loop', 'loop')  
  audio.pause()
    
  }

function toggleVolume(){
  if (volumeIcon.classList.contains('up')){
    volumeIcon.classList.remove('up');
    stopMusic()
  } else {
    volumeIcon.classList.add('up');
    runMusic()
  }
}

volumeIcon.addEventListener('click', toggleVolume)

//runMusic()
