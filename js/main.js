//Selectors For Difficult Level
// const easyBtn = document.querySelector('#easyBtn');
// const mediumBtn = document.querySelector('#mediumBtn');
// const hardBtn = document.querySelector('#hardBtn');

//Medium Fuction
function easy() {

  window.addEventListener('load', init);

  // Globals

  // Available Levels
  const levels = {
    easy: 10
  };

  // To change level
  const currentLevel = levels.easy;

  let time = currentLevel;
  let score = 0;
  let isPlaying;

  // DOM Elements
  const wordInput = document.querySelector('#word-input');
  const currentWord = document.querySelector('#current-word');
  const scoreDisplay = document.querySelector('#score');
  const timeDisplay = document.querySelector('#time');
  const message = document.querySelector('#message');
  const seconds = document.querySelector('#seconds');
  const highscoreDisplay = document.querySelector('#highscore');

  const words = "https://random-word-api.herokuapp.com/word?number=100";
  // Initialize Game
  function init() {
    // Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    // Load word from array
    showWord(words);
    // Start matching on word input
    wordInput.addEventListener('input', startMatch);
    // Call countdown every second
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
  }

  // Start match
  function startMatch() {
    if (matchWords()) {
      isPlaying = true;
      time = currentLevel + 1;
      showWord(words);
      wordInput.value = '';
      score++;
    }
    
    // Highscore based on score value for Session Storage
    if (typeof sessionStorage['highscore'] === 'undefined' || score > sessionStorage['highscore']) {
      sessionStorage['highscore'] = score;
    } else {
      sessionStorage['highscore'] = sessionStorage['highscore'];
    }

    // Prevent display of High Score: -1
    if (sessionStorage['highscore'] >= 0) {
    highscoreDisplay.innerHTML = sessionStorage['highscore'];
    }

    // If score is -1, display 0
    if (score === -1) {
      scoreDisplay.innerHTML = 0;
    } else {
      scoreDisplay.innerHTML = score;
    }
  }

  // Match currentWord to wordInput
  function matchWords() {
    if (wordInput.value === currentWord.innerHTML) {
      message.innerHTML = 'Correct!!!';
      return true;
    } else {
      message.innerHTML = '';
      return false;
    }
  }

  // Pick & show random word
  function showWord(words) {
    fetch(words)
      .then(response => response.json())
      .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        currentWord.innerHTML = data[randomIndex];
      });
  }

  // Countdown timer
  function countdown() {
    // Make sure time is not run out
    if (time > 0) {
      // Decrement
      time--;
    } else if (time === 0) {
      // Game is over
      isPlaying = false;
    }
    // Show time
    timeDisplay.innerHTML = time;
  }

  // Check game status
  function checkStatus() {
    if (!isPlaying && time === 0) {
      message.innerHTML = 'Game Over!!!';
      score = -1;
    }
  }

}

easy()

