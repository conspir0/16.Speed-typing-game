window.addEventListener('load', init);

// Globals

// Available levels
const levels = {
    easy: 5,
    medium: 3,
    hard: 1
}

// To change level
const currentLevel = levels.easy;

let time = currentLevel,
    score = 0,
    isPlaying;

// DOM Elements
const wordInput = document.querySelector('#word-input'),
      currentWord = document.querySelector('#current-word'),
      scoreDisplay = document.querySelector('#score'),
      timeDisplay = document.querySelector('#time'),
      message = document.querySelector('#message'),
      seconds = document.querySelector('#seconds');

const words = [
    'absolute',
    'align-items',
    'article',
    'aside',
    'background',
    'background-attachment',
    'background-image',
    'background-position',
    'background-repeat',
    'background-size',
    'block',
    'body',
    'charset',
    'datalist',
    'display',
    'div',
    'figcaption',
    'fixed',
    'flex',
    'flex-end',
    'flex-start',
    'flex-wrap',
    'font-family',
    'font-size',
    'font-weight',
    'footer',
    'grid',
    'head',
    'header',
    'html',
    'inline',
    'inline-block',
    'justify-content',
    'letter-spacing',
    'link',
    'main',
    'margin',
    'margin-bottom',
    'margin-left',
    'margin-right',
    'margin-top',
    'mark',
    'meta',
    'nav',
    'padding',
    'padding-bottom',
    'padding-left',
    'padding-right',
    'padding-top',
    'position',
    'relative',
    'secrion',
    'source',
    'static',
    'time',
    'title',
    'transform',
    'transition',
    'viewport',
    'visibility'
];


// Initialize Game
function init() {
    
    // Show number of seconds in UI
    seconds.innerHTML = currentLevel;
    
    // Load word from array
    showWord(words);
    
    // Start matching on input
    wordInput.addEventListener('input', startMatch);
    
    // Call countdown every second
    setInterval(countdown, 1000);
    
    // Check game status
    setInterval(checkStatus, 50);
}

// Start match
function startMatch() {
    if(matchWords()) {
        isPlaying = true;
        time = currentLevel + 1;
        showWord(words);
        wordInput.value = '';
        score++;
    }
    
    // If score is -1, display 0
    if(score === -1) {
        scoreDisplay.innerHTML = 0;
    } else {
        scoreDisplay.innerHTML = score;
    }
}

// Match currentWord to wordInput
function matchWords() {
    if(wordInput.value === currentWord.innerHTML) {
        message.innerHTML = 'Correct!';
        return true;
    } else {
        message.innerHTML = '';
        return false;
    }
}

// Pick & show random word
function showWord(words) {
    
    // Generate random array index
    const ranIndex = Math.floor(Math.random() * words.length);
    
    // Output random word
    currentWord.innerHTML = words[ranIndex];
}

// Countdown timer
function countdown() {
    
    // Make sure time is not run out
    if(time > 0) {
        
        // Decrement
        time--;
    } else if(time === 0) {
        
        // Game is over
        isPlaying = false;
    }
    
    // Show time
    timeDisplay.innerHTML = time;
}

// Check game status
function checkStatus() {
    if(!isPlaying && time === 0) {
        message.innerHTML = 'Game Over!';
        score = -1;
    }
}

