window.addEventListener('load', init);

// Globals
let time = 5,
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
    'margin',
    'padding',
    'background',
    'color'
];

// Initialize Game
function init() {
    // Load word from array
    showWord(words);
}

// Pick & show random word
function showWord(words) {
    // Generate random array index
    const ranIndex = Math.floor(Math.random() * words.length);
    
    //Output random word
    currentWord.innerHTML = words[ranIndex];
}