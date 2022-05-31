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
mediumBtn.addEventListener('click', mediumBtnClick);
hardBtn.addEventListener('click', hardBtnClick);

//easy Function listeners
function easyBtnClick() {

   //Available Levels 
   const levels = {
      easy: 13,
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
  

  

    //HIGHSCORE
    if(typeof sessionStorage['highscore'] == 'undefined' || score > sessionStorage['highscore']){
      sessionStorage['highscore'] = score;
    }
    else{
      sessionStorage['highscore'] = sessionStorage['highscore'];
    }

    //Prevent displaying highscore if no score is present
    if(sessionStorage['highscore'] >= 0){
      highscoreDisplay.innerHTML = sessionStorage['highscore'];
    }

    //iF SCORE is -1, display 0
    if(score === -1){
      scoreDisplay.innerHTML = 0;
    } else {
      scoreDisplay.innerHTML = score;
    }
  }

  function matchWords(){
    if(wordInput.value === currentWord.innerHTML){
      message.innerHTML = 'Correct!';
      return true;
    } else {
      message.innerHTML = '';
      return false;
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

  //Countdown timer
  function countdown(){
    //Make sure time is not run out
    if(time > 0){
      //Decrement
      time--;
    } else if(time === 0){
      //Game over
      isPlaying = false;
      message.innerHTML = 'Game Over!';
    }
    //Show time
    timeDisplay.innerHTML = time;
  }

  //Check game status
  // function checkStatus(){
  //   if(!isPlaying && time === 0){
  //     message.innerHTML = 'Game Over!';
  //     score = -1;
  //   }
  // }


  init();
  
}

//medium Function listeners
function mediumBtnClick() {

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
 

 

   //HIGHSCORE
   if(typeof sessionStorage['highscore'] == 'undefined' || score > sessionStorage['highscore']){
     sessionStorage['highscore'] = score;
   }
   else{
     sessionStorage['highscore'] = sessionStorage['highscore'];
   }

   //Prevent displaying highscore if no score is present
   if(sessionStorage['highscore'] >= 0){
     highscoreDisplay.innerHTML = sessionStorage['highscore'];
   }

   //iF SCORE is -1, display 0
   if(score === -1){
     scoreDisplay.innerHTML = 0;
   } else {
     scoreDisplay.innerHTML = score;
   }
 }

 function matchWords(){
   if(wordInput.value === currentWord.innerHTML){
     message.innerHTML = 'Correct!';
     return true;
   } else {
     message.innerHTML = '';
     return false;
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

 //Countdown timer
 function countdown(){
   //Make sure time is not run out
   if(time > 0){
     //Decrement
     time--;
   } else if(time === 0){
     //Game over
     isPlaying = false;
   }
   //Show time
   timeDisplay.innerHTML = time;
 }

 //Check game status
 // function checkStatus(){
 //   if(!isPlaying && time === 0){
 //     message.innerHTML = 'Game Over!';
 //     score = -1;
 //   }


 init();
 startMatch();
 
}


//hard Function listeners
function hardBtnClick() {

  //Available Levels 
  const levels = {
     easy: 5,
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
 

 

   //HIGHSCORE
   if(typeof sessionStorage['highscore'] == 'undefined' || score > sessionStorage['highscore']){
     sessionStorage['highscore'] = score;
   }
   else{
     sessionStorage['highscore'] = sessionStorage['highscore'];
   }

   //Prevent displaying highscore if no score is present
   if(sessionStorage['highscore'] >= 0){
     highscoreDisplay.innerHTML = sessionStorage['highscore'];
   }

   //iF SCORE is -1, display 0
   if(score === -1){
     scoreDisplay.innerHTML = 0;
   } else {
     scoreDisplay.innerHTML = score;
   }
 }

 function matchWords(){
   if(wordInput.value === currentWord.innerHTML){
     message.innerHTML = 'Correct!';
     return true;
   } else {
     message.innerHTML = '';
     return false;
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

 //Countdown timer
 function countdown(){
   //Make sure time is not run out
   if(time > 0){
     //Decrement
     time--;
   } else if(time === 0){
     //Game over
     isPlaying = false;
   }
   //Show time
   timeDisplay.innerHTML = time;
 }

 //Check game status
 // function checkStatus(){
 //   if(!isPlaying && time === 0){
 //     message.innerHTML = 'Game Over!';
 //     score = -1;
 //   }


 init();
 startMatch();
 
}
//default level
easyBtnClick();

