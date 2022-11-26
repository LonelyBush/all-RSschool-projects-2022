const petsData = [
  {
    "id": "0",
    "name": "Jennifer",
    "img": "/shelter-page/assets/images/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "1",
    "name": "Sophia",
    "img": "/shelter-page/assets/images/pets-sophia.png",
    "type": "Dog",
    "breed": "Shih tzu",
    "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
    "age": "1 month",
    "inoculations": ["parvovirus"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "2",
    "name": "Woody",
    "img": "/shelter-page/assets/images/pets-woody.png",
    "type": "Dog",
    "breed": "Golden Retriever",
    "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
    "age": "3 years 6 months",
    "inoculations": ["adenovirus", "distemper"],
    "diseases": ["right back leg mobility reduced"],
    "parasites": ["none"]
  },
  {
    "id": "3",
    "name": "Scarlett",
    "img": "/shelter-page/assets/images/pets-scarlet.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
    "age": "3 months",
    "inoculations": ["parainfluenza"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "4",
    "name": "Katrine",
    "img": "/shelter-page/assets/images/pets-katrine.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
    "age": "6 months",
    "inoculations": ["panleukopenia"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "5",
    "name": "Timmy",
    "img": "/shelter-page/assets/images/pets-timmy.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
    "age": "2 years 3 months",
    "inoculations": ["calicivirus", "viral rhinotracheitis"],
    "diseases": ["kidney stones"],
    "parasites": ["none"]
  },
  {
    "id": "6",
    "name": "Freddie",
    "img": "/shelter-page/assets/images/pets-freddie.png",
    "type": "Cat",
    "breed": "British Shorthair",
    "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
    "age": "2 months",
    "inoculations": ["rabies"],
    "diseases": ["none"],
    "parasites": ["none"]
  },
  {
    "id": "7",
    "name": "Charly",
    "img": "/shelter-page/assets/images/pets-charly.png",
    "type": "Dog",
    "breed": "Jack Russell Terrier",
    "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
    "age": "8 years",
    "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
    "diseases": ["deafness", "blindness"],
    "parasites": ["lice", "fleas"]
  }
]
console.log(petsData)

/*Рандом функция с диапазоном*/

const active_Item = document.querySelector('#active-items');




function getRandomNumber(range, outputCount){
  const parent = active_Item;
const children = Array.from(parent.children);
//console.log(children)
let ids = children.map(element => {
  return Number(element.id)
})
console.log(ids)
  let arr = []
  for (let i = 1; i <= range; i++) {
    arr.push(i)
  }

  let result = [];

  for (let i = 1; i <= outputCount; i++) {
    const random = Math.floor(Math.random() * (range - i));
    result.push(arr[random]);
    arr[random] = arr[range - i];
    }
       

  return result;
} 

console.log(getRandomNumber(7, 3))

 



let randomArray = []
  for (let i = 0, range = 7; i<range; i++){
    let randomGen = Math.round(Math.random()* (3 - 1));
    if (!randomArray.includes(randomGen)){
      randomArray.push(randomGen);
    } 

  }
  
//console.log(randomArray)

const borgar = document.querySelector('.borgar');
const navList = document.querySelector('.nav-list')
const logo = document.querySelector('.logo-container')
const body = document.querySelector('body')
const navContainer = document.querySelector('.nav-container')

/*Бургир меню*/

function toggleMenu() {
  if(borgar.classList.contains('show') && navContainer.classList.contains('background-smoke') && borgar.classList.contains('rotate') && borgar.classList.contains('position') && navList.classList.contains('active') && logo.classList.contains('hide')){
    borgar.classList.remove('show');
  borgar.classList.remove('position');
  navList.classList.remove('active');
  logo.classList.remove('hide');
  borgar.classList.remove('rotate');
  navContainer.classList.remove('background-smoke')

  document.removeEventListener('wheel', prevent);

  } else {
    borgar.classList.add('show');
    borgar.classList.add('position');
    navList.classList.add('active');
    logo.classList.add('hide');
    borgar.classList.add('rotate');
    navContainer.classList.add('background-smoke')
    document.addEventListener('wheel', prevent, {passive: false})
  }

}

navContainer.addEventListener('click', toggleMenu);

borgar.addEventListener('click', toggleMenu);


/* Каруселя */
const btnLeft = document.getElementById('btn-left-1')
const btnRight = document.getElementById('btn-right-1')
const btnLeft_2 = document.getElementById('btn-left-2')
const btnRight_2 = document.getElementById('btn-right-2')
const blockCards = document.querySelector('.our-friends-cards')
const cardBlock = document.querySelector('.our-friends-card')
const left_Item = document.querySelector('#left-items')
const right_Item = document.querySelector('#right-items')


 /*Поле экспериментов*/
//const parent = active_Item;
//const children = Array.from(parent.children);
//console.log(children)
//let activeIds = children.map(element => {
  //return Number(element.id)
//})
//console.log(activeIds)

function getInclusiveRandow(actArr){
  let newArr = new Set()


  for (let i = 0; i<actArr.length; i++){
    while(newArr.size < 3) {
      let random = Math.floor(Math.random() * (7 - 0 + 1)) + 0;
      if(!actArr.includes(random)){
        newArr.add(random)
      }
    }
  
  }



return Array.from(newArr)
}



//console.log(getInclusiveRandow(activeIds))




function moveLeft(){
  blockCards.classList.add('trans-left');
  btnLeft.removeEventListener('click', moveLeft)
  btnRight.removeEventListener('click', moveRight)
}

function moveRight(){
  blockCards.classList.add('trans-right');
  btnLeft.removeEventListener('click', moveLeft)
  btnRight.removeEventListener('click', moveRight)
}

btnLeft.addEventListener('click', moveLeft)
btnRight.addEventListener('click', moveRight)


blockCards.addEventListener('animationend', (animationEvent)=> {
  let changedItemRight, changedItemLeft
if (animationEvent.animationName === 'move-left'){
  blockCards.classList.remove('trans-left')
 changedItemLeft = left_Item;
 changedItemRight = right_Item;
  document.querySelector('#active-items').innerHTML = left_Item.innerHTML;

} if (animationEvent.animationName === 'move-right') {
  blockCards.classList.remove('trans-right')
  changedItemRight = right_Item;
  changedItemLeft = left_Item;
  document.querySelector('#active-items').innerHTML = right_Item.innerHTML;
}

changedItemLeft.innerHTML ="";
changedItemRight.innerHTML = '';



const parent = active_Item;
const children = Array.from(parent.children);
//console.log(children)
let activeIds = children.map(element => {
  return Number(element.id)
})
console.log(activeIds)




  let frsRandomArray = getInclusiveRandow(activeIds);
  for (let k = 0; k<frsRandomArray.length; k++){
  let card = createCardTemplate(frsRandomArray[k]);
  changedItemLeft.appendChild(card)
  }
  let scnRandomArray = getInclusiveRandow(activeIds);
  for (let k = 0; k<scnRandomArray.length; k++){
  let card = createCardTemplate(scnRandomArray[k]);
  changedItemRight.appendChild(card)
  }


  btnLeft.addEventListener('click', moveLeft)
  btnRight.addEventListener('click', moveRight)
  btnLeft_2.addEventListener('click', moveLeft)
  btnRight_2.addEventListener('click', moveRight)


})

function randomizeLeftItems(){
  left_Item.innerHTML='';
  const parent = active_Item;
const children = Array.from(parent.children);

let activeIds = children.map(element => {
  return Number(element.id)
})
  let randomArr = getInclusiveRandow(activeIds)
  for (let k = 0; k<randomArr.length; k++){
    let card = createCardTemplate(randomArr[k]);
    left_Item.appendChild(card);
    }
}
function randomizeRightItems(){
  right_Item.innerHTML='';
  const parent = active_Item;
  const children = Array.from(parent.children);

  let activeIds = children.map(element => {
    return Number(element.id)
  })
    let randomArr = getInclusiveRandow(activeIds)
  for (let k = 0; k<randomArr.length; k++){
    let card = createCardTemplate(randomArr[k]);
    right_Item.appendChild(card);
    }
}
randomizeLeftItems();
randomizeRightItems()


function createCardTemplate(num){
  card = document.createElement('div');
  card.classList.add('our-friends-card');
  card.setAttribute('id', `${petsData[num].id}`)
  card.setAttribute('onClick', "updatePopup(this.id)");
  card.innerHTML = `<img src ="${petsData[num].img}"> <h4 class ="our-friends-names"> ${petsData[num].name} </h4> <button class ="btn-сard">Learn more</button>`
  return card
  
  
}




function getRandomSet(lo, hi, n) {
  var res = new Set();
  while (res.size < n) res.add(Math.floor(Math.random() * (hi - lo + 1)) + lo);
  return Array.from(res);
}



/* Формирование Попапа*/

const btnCard = document.querySelector('button')

function createPopupElement(num){
  const title = document.querySelector('.modal-title')
  const typeBreed = document.querySelector('.modal-type-breed')
  const petImg = document.querySelector('.modal-img')
  const textBlock = document.querySelector('.modal-text')
  const age = document.querySelector('#age')
  const ino = document.querySelector('#inoculations')
  const dis = document.querySelector('#diseases')
  const par = document.querySelector('#parasites')

  title.textContent = petsData[num].name;
  typeBreed.textContent = `${petsData[num].type} - ${petsData[num].breed}`;
  petImg.src = petsData[num].img;
  textBlock.textContent = petsData[num].description;
  age.innerHTML = `<b>Age:</b> ${petsData[num].age}`
  ino.innerHTML = `<b>Inoculations:</b> ${petsData[num].inoculations}`
  dis.innerHTML = `<b>Diseases:</b> ${petsData[num].diseases}`
  par.innerHTML = `<b>Parasites:</b> ${petsData[num].parasites}`




}
//createPopupElement(3)


/* Обновление Попапа*/
function updatePopup(id){
  convert = Number(id);
  let result = createPopupElement(id);
  return result;
}

const modalWrapper = document.querySelector('.modal-wrapper');
const modalWrapperBckgr = document.querySelector('.modal-wrapper-background');
const modalWindow = document.querySelector('.modal-window')
const modalCloseBtn = document.querySelector('.close-btn-modal')

function togglePopap(){
  
  if(modalWrapperBckgr.classList.contains('show') && modalWrapper.classList.contains('show')){
    modalWrapperBckgr.classList.remove('show');
    modalWrapper.classList.remove('show');
    
    document.removeEventListener('wheel', prevent);

  } else {
    modalWrapperBckgr.classList.add('show');
    modalWrapper.classList.add('show');
    document.addEventListener('wheel', prevent, {passive: false})
  }
}


active_Item.addEventListener('click', togglePopap)
modalWrapper.addEventListener('click', togglePopap)
modalWindow.addEventListener('click', togglePopap);

/*Возврат значения по умолчанию для скрола */
function prevent(ev) {
  ev.preventDefault();
}


  console.log(petsData.map(function(pet){return pet.name }).join(' '))



modalWrapperBckgr.addEventListener('mouseover', function(e){
  if (!modalWindow.contains(e.target))
  modalCloseBtn.classList.add("hover");
else 
modalCloseBtn.classList.remove("hover");
})
