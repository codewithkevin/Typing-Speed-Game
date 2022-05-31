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
  let isPlaying = true;

  //Get random word from array
}