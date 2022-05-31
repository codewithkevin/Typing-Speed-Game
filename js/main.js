// Dom Selector 
const easyBtn = document.querySelector('#easyBtn');
const mediumBtn = document.querySelector('#mediumBtn');
const hardBtn = document.querySelector('#hardBtn');
const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscoreDisplay = document.querySelector('#highscore');

//Event listeners
easyBtn.addEventListener('click', easyBtnClick);

//Function listeners
function easyBtnClick() {

   //Available Levels 
   const levels = {
      easy: 10,
   };

   //To change level
   const currentLevel = levels.easy;

  let time = currentLevel;
  let score = 0;
  let isPlaying;

  //Word APi
  const words = "https://random-word-api.herokuapp.com/word?number=100"
  

  
  //INITIALIZE GAME
  function init(){
    //Show seconds
    seconds.innerHTML = currentLevel;
    //Load word from array
    showWord(words);
    //Start matching on word input
    wordInput.addEventListener('input', startMatch);
    //Call countdown every second
    setInterval(countdown, 1000);
    //Check game status
    setInterval(checkStatus, 50);
  }

  //Start match
  function startMatch(){
   if(matchWords()){
     isPlaying = true;
     time = currentLevel + 1;
     showWord(words);
     wordInput.value = '';
     score++;
   }
  }

  //SHow word
  function showWord(words){
    fetch(words)
    .then(response => response.json())
    .then(data => {
      const randomWord = data[Math.floor(Math.random() * data.length)];
      currentWord.innerHTML = randomWord;
    });
  }

  //HIGHSCORE
  if(typeof sessionStorage['highscore'] == 'undefined' || score > sessionStorage['highscore']){
    sessionStorage['highscore'] = score;
  }
  else{
    sessionStorage['highscore'] = sessionStorage['highscore'];
  }


  init();
  
}