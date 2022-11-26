const url = 'https://type.fit/api/quotes'
const quote = document.querySelector('.quote-text');
const author = document.querySelector('.name')
const upgradeBtn = document.querySelector('.quote-btn')
const quoteCon = document.querySelector('.quote-container')

let show = false;

async function getData() {
    const res = await fetch(url);
    const data = await res.json();
    console.log(data[0].text, data[0].author, data.length);
  }
  getData();

  async function getRandomQuote() {
    const res = await fetch(url);
const data = await res.json();
    let randomQuote = data[Math.floor(Math.random() * data.length)];
    quote.textContent = randomQuote.text;
    author.textContent = randomQuote.author;

  }
  getRandomQuote();
upgradeBtn.addEventListener('click', getRandomQuote)
upgradeBtn.addEventListener('click',  randColor);
upgradeBtn.addEventListener('mouseover', changeColorTextBtn)
upgradeBtn.addEventListener('mouseout', delchangeColorTextBtn)

function changeColorTextBtn() {
  upgradeBtn.classList.add('active'); 
}
function delchangeColorTextBtn() {
    upgradeBtn.classList.remove('active');
}

function randColor() {
    var r = Math.floor(Math.random() * (256)),
        g = Math.floor(Math.random() * (256)),
        b = Math.floor(Math.random() * (256));
        let result = '#' + r.toString(16) + g.toString(16) + b.toString(16);
        quoteCon.style.border = ` 15px solid ${result}`;
        upgradeBtn.style.border = `1px solid ${result}`;
        upgradeBtn.style.background = `${result}`

     
}


randColor()
