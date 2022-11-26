

const borgar = document.querySelector('.borgar');
const navList = document.querySelector('.navigation-list')
const logo = document.querySelector('h1')
const body = document.querySelector('body')
const navContainer = document.querySelector('.nav-container')
const designBy = document.querySelector('.design-by-text')
const line = document.querySelectorAll('.line')


function toggleMenu() {
    if(borgar.classList.contains('show') && navContainer.classList.contains('background-smoke') && borgar.classList.contains('rotate') && borgar.classList.contains('position') && navList.classList.contains('active') && logo.classList.contains('hide')){
      borgar.classList.remove('show');
    borgar.classList.remove('position');
    navList.classList.remove('active');
    logo.classList.remove('hide');
    borgar.classList.remove('rotate');
    navContainer.classList.remove('background-smoke')
    designBy.classList.remove('active')
    for (let i= 0; i<line.length; i++){
        line[i].classList.remove('color')
    }



    } else {
      borgar.classList.add('show');
      borgar.classList.add('position');
      navList.classList.add('active');
      logo.classList.add('hide');
      borgar.classList.add('rotate');
      navContainer.classList.add('background-smoke')
      designBy.classList.add('active')
      for (let i= 0; i<line.length; i++){
        line[i].classList.add('color')
    }
    }

  }

  navContainer.addEventListener('click', toggleMenu);

  borgar.addEventListener('click', toggleMenu);


  /*Панель Amount*/




  var radioButtons = document.querySelectorAll('input[name="money-val"]');
  const moneyInput = document.querySelector('.money-input')
  const moneyId = document.querySelectorAll('.money-value')

function removeActiveClass(){
  for (let money of moneyId){
    money.classList.remove('active-money')
  }
}
 removeActiveClass()



  for(const radioButton of radioButtons){
      radioButton.addEventListener('change', showSelected);
      radioButton.addEventListener('input', showSelected)


  }        


  
  function showSelected() {
    
      if (this.checked) {
           moneyInput.value = this.value   
      } 
    }

    moneyInput.addEventListener('input', function(){
      for (const radioButton of radioButtons){
      
        if(this.value === radioButton.value){
          radioButton.checked = true;
          
        } else {
          radioButton.checked = false;
        }
      }
      
    })







