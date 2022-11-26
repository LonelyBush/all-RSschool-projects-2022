const  playBtn = document.querySelector('.playbutton');
const pauseBtn = document.querySelector('.pausebutton');
const currentTime = document.querySelector('.currentTime')
const switchNext = document.querySelector('.switch-forward');
const switchBack = document.querySelector('.switch-backward');
const progress = document.querySelector('.progress');
const progressContainer = document.querySelector('.progress-bar');

const durationTime = document.querySelector('.durationTime');
const songArtist = document.querySelector('.song-artist');
const songTittle = document.querySelector('.song-title');
const imgSong = document.querySelector('.img-song');
const backGrnImg = document.querySelector('.background-img');

const audio = new Audio();
let isPlay = false;
let playNum = 0;
const songs = ['./assets/audio/CallMe.mp3', './assets/audio/11ThStreetKidzz.mp3', './assets/audio/CherryBomb.mp3'];
const artistSong = ['Blondie', 'Hanoi Rocks', 'The Runaways'];
const tittleSong = ['Call Me','11th Street Kids', 'Cherry Bomb'];
const imgsForSong = ['./assets/img/blondie.png', './assets/img/hanoirocks.png', './assets/img/therunaways.png' ];


function switchForward(){
    if(playNum < 2){
        playNum++;
        setAudio(playNum);
        setTittleArtistSong(playNum);
        setImgForSongs(playNum);
        audio.play()
        if (audio.play){
            isPlay = true;
            playBtn.classList.add('pausebutton');
        } if (!audio.play) {
            isPlay = false;
            playBtn.classList.remove('pausebutton');
        }
    } else {
        playNum = 0;
        setAudio(playNum);
        setTittleArtistSong(playNum);
        setImgForSongs(playNum);
        audio.play()
        if (audio.play){
            isPlay = true;
            playBtn.classList.add('pausebutton');
        } if (!audio.play) {
            isPlay = false;
            playBtn.classList.remove('pausebutton');
        }
     
    }
}
function switchBackward(){
    if (playNum > 0) {
        playNum--;
        setAudio(playNum);
        setTittleArtistSong(playNum);
        setImgForSongs(playNum);
        audio.play()
        if (audio.play){
            isPlay = true;
            playBtn.classList.add('pausebutton');
        } if (!audio.play) {
            isPlay = false;
            playBtn.classList.remove('pausebutton');
        }
    
    } else {
        playNum = 2;
        setAudio(playNum);
        setTittleArtistSong(playNum);
        setImgForSongs(playNum);
        audio.play()
        if (audio.play){
            isPlay = true;
            playBtn.classList.add('pausebutton');
        } if (!audio.play) {
            isPlay = false;
            playBtn.classList.remove('pausebutton');
        }
        
     
    }
}
function setTittleArtistSong(pos){
    songTittle.textContent = tittleSong[pos];
    songArtist.textContent = artistSong[pos];

}
function setImgForSongs(elem){
    imgSong.src = imgsForSong[elem];
    backGrnImg.src = imgsForSong[elem];
}


switchNext.addEventListener('click', switchForward)
switchBack.addEventListener('click', switchBackward)

function setAudio(track){
    audio.src = songs[track];
    audio.currentTime = 0;
    audio.pause();
}
setAudio(playNum);

function playAudio(){
    if (!isPlay){
        isPlay = true;
        audio.play();
        playBtn.classList.add('pausebutton');
        imgSong.classList.add('scale');
    }  else {
        isPlay = false;
        audio.pause();
        playBtn.classList.remove('pausebutton');
        imgSong.classList.remove('scale');
    }

}
playBtn.addEventListener('click', playAudio);

function updateTime() {
    let seconds = Math.floor(audio.currentTime);
    let minutes = Math.floor(audio.currentTime / 60);
    let result = `${minutes}:${String(seconds % 60).padStart(2, 0)}`
    currentTime.textContent = result;
   
}
function progressBarUpdate(){
    let current = audio.currentTime;
    let duration = audio.duration;
    const progressPercent = (current/ duration) * 100;
    progress.style.width = `${progressPercent}%`;

}
function setBar(elem) {
    const width = this.clientWidth;
    const click = elem.offsetX;
    audio.currentTime = (click / width) * audio.duration;
}

function setDuration(){
    let seconds = Math.floor(audio.duration);
    let minutes = Math.floor(audio.duration / 60);
    let result = `${minutes}:${String(seconds % 60).padStart(2, 0)}`
    durationTime.textContent = result;
}
audio.addEventListener('timeupdate', updateTime)
audio.addEventListener('timeupdate', setDuration)
audio.addEventListener('timeupdate', progressBarUpdate)
progressContainer.addEventListener('click', setBar);

console.log("Ваша отметка - 60 балла(ов)\nОтзыв по пунктам ТЗ:\nНе выполненные/не засчитанные пункты:\n1) Очень высокое качество оформления приложения и/или дополнительный не предусмотренный в задании функционал, улучшающий качество приложения\nВсе оставшиеся пункты выполнены и не имеют комментариев проверяющего.");