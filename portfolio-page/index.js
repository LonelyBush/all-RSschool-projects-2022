import i18Obj from './translate.js';

// Кэширование изображений

function preloadImages() {
  const seasons = ['winter', 'spring', 'summer', 'autumn'].forEach((season) => {
  for(let i = 1; i <= 6; i++) {
    const img = new Image();
    img.src = `./assets/img/portfolio_img/${season}/${i}.jpg`;
  }
});
}
preloadImages();


const borgar = document.querySelector('.borgar');
const navList = document.querySelector('.nav-list')

function toggleMenu() {
  borgar.classList.toggle('show');
  borgar.classList.toggle('position');
  navList.classList.toggle('active');


}
borgar.addEventListener('click', toggleMenu);
navList.addEventListener('click', toggleMenu);


// Кнопки переключения изображений в портфолио!

const portfolioBtns = document.querySelector('.buttons-block');
const portfolioBtn = document.querySelectorAll('.portfolio-btn');

function changeImage(event) {
  const portfolioImages = document.querySelectorAll('.portfolio-pics');

  if(event.target.classList.contains('portfolio-btn')) {
    // здесь код функции, меняющей src изображений
    
    if (event.target.dataset.season == "winter"){
      
      event.target.classList.add('active');
portfolioImages.forEach((img, index) => img.src = `./assets/img/portfolio_img/winter/${index + 1}.jpg`);    
}     if (event.target.dataset.season == "summer"){
      event.target.classList.add('active');
  portfolioImages.forEach((img, index) => img.src = `./assets/img/portfolio_img/summer/${index + 1}.jpg`);
      }   if (event.target.dataset.season == "autumn"){
        event.target.classList.add('active');
    portfolioImages.forEach((img, index) => img.src = `./assets/img/portfolio_img/autumn/${index + 1}.jpg`);
        } if (event.target.dataset.season == "spring"){
          event.target.classList.add('active');
      portfolioImages.forEach((img, index) => img.src = `./assets/img/portfolio_img/spring/${index + 1}.jpg`);
          } 
}
}
function deactiveButton () {
  portfolioBtn.forEach((element) => element.classList.remove('active'));
}
portfolioBtns.addEventListener('click', deactiveButton)
portfolioBtns.addEventListener('click', changeImage)




// Перевод текста
const lngEn = document.querySelector('.language-link-en');
const lngRu = document.querySelector('.language-link-ru');

function deactiveLngEn (){
lngEn.classList.remove('active');

}
function deactiveLngRu (){
  lngRu.classList.remove('active');
  
  }
let lang = 'ru'; 

function getTranslate(lang) {
  const elements = document.querySelectorAll('[data-i18]');
  elements.forEach((curElem) =>  {
    if (curElem.placeholder){
      curElem.placeholder = i18Obj[lang][curElem.dataset.i18];
      curElem.textContent = '';
    };
    curElem.textContent = i18Obj[lang][curElem.dataset.i18];
  })  
}
lngEn.addEventListener('click', function() {
  getTranslate('en')
});
lngRu.addEventListener('click', function() {
  getTranslate('ru')
});
lngRu.addEventListener('click', function(){
  lngRu.classList.add('active')
})
lngEn.addEventListener('click', function(){
  lngEn.classList.add('active')
})
lngRu.addEventListener('click', deactiveLngEn)
lngEn.addEventListener('click', deactiveLngRu)

console.log(lang)



// Переключение темы (соболезную тем кто решит сюда заглянуть) 
 
const svgBtn = document.querySelector('.sun-pos')

const section = document.querySelector('.skills');
const portfolio = document.querySelector('.portfolio');
const video = document.querySelector('.video');
const price = document.querySelector('.price');
const sectionToChange = [section, portfolio,  video, price]

function changeToLightBackAndText() {
  sectionToChange.forEach((elem) => {
    elem.classList.toggle('light-theme')
  });
}

const sectionTitle = document.querySelectorAll('.section-title');
const titleLine = document.querySelectorAll('.title-line');
const navLink = document.querySelectorAll('.nav-link');
const borgarLine = document.querySelectorAll('.line')
const body = document.querySelector('body')

function changeBackGroundBody() {
  body.classList.toggle('light-theme')
}

function changeToSectionTitle(){
  sectionTitle.forEach((element) => element.classList.toggle('light-theme'));
  titleLine.forEach((element) => element.classList.toggle('light-theme'));
}

function changePortfolioBtnToLight() {
portfolioBtn.forEach((element) => element.classList.toggle('light-theme'))
}
function changeBorgarAndNavListToLight() {
  navList.classList.toggle('light-theme');
  borgarLine.forEach((element) =>element.classList.toggle('light-theme'));
  navLink.forEach((element) =>element.classList.toggle('light-theme'));

}


// изменение иконки при переключении цветовой схемыв
var i = 0;
var svgImg = ['./assets/svg/sun.svg', './assets/svg/moon.svg']
var image = document.getElementById("image");
function changeImg() {
  i++;
  i %=svgImg.length;
  image.src= svgImg[i];
}

// вызов функций для переключения
svgBtn.addEventListener('click', changeToLightBackAndText)
svgBtn.addEventListener('click', changeToSectionTitle)
svgBtn.addEventListener('click', changePortfolioBtnToLight)
svgBtn.addEventListener('click', changeBorgarAndNavListToLight)
svgBtn.addEventListener('click', changeImg)
svgBtn.addEventListener('click', changeBackGroundBody)



