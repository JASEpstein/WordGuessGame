/*
PSEUDOCODE

1.) After user loads page, press any key to start game. x
2.) When key is pressed, the 'Press Any Key' text disappears. x
3.) A string of hashes appears. x
4.) Guessing the correct letters will reveal the corresponding letter in the hash string.
5.) Guessing the incorrect letters will decrement a 'Mistakes' counter.
6.) Previously guessed letters will appear below that counter. 
7.) When the number of mistakes reaches 0, the game resets.

*/

// POTENTIAL FOR DIFFERENT DIFFICULTY LEVELS (CHANGE MISTAKES ALLOWED, RESTRUCTURE DATA INTO EASY/MED/HARD)
// PROMPT COULD BE WRITTEN TO ASK FOR DIFFICULTY LEVEL ON LOAD

// Global Variables

var winsCount = 0;
var lossesCount = 0;
var guessesSoFar = [];
var mistakesCount = 8;
var wordToGuess = '';
var startUp = false;
var randomMovie = '';
var hashString = '';
var movieArr = '';
var hashArr = '';
var lettersGuessed = [];
var alphabetArray = [];

//Movie Array
var movies = [
    {
        name: "total recall",
        url: "url('https://goo.gl/images/2uzU31')"
    },
    {
        name: "say anything",
        url: "url('https://goo.gl/images/mgv9uf')"
    },
    {
        name: "back to the future",
        url: "url('https://goo.gl/images/x1zGar')"
    },
    {
        name: "highlander",
        url: "url('https://goo.gl/images/w7WxZc')"
    },
    {
        name: "top gun", 
        url: "url('https://goo.gl/images/hBgf4J')"
    },
    {
        name: "poltergeist", 
        url: "url('https://goo.gl/images/qBfzox')"
    },
    {
        name: "the shining",
        url: "url('https://goo.gl/images/t4xNrR')"
    },
    {
        name: "the goonies", 
        url: "url('https://goo.gl/images/MDH2ci')"
    },{
        name: "ghostbusters",
        url: "url('https://goo.gl/images/Zhnstg')"
    },
    {
        name: "the terminator",
        url: "url('https://goo.gl/images/75zPwD')"
    }
];

//Purpose: to use to exclude special characterse
function genCharArray(charA, charZ) {
    alphabetArray = [],
        i = charA.charCodeAt(0),
        j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        alphabetArray.push(String.fromCharCode(i));
    }
    // alphabetArray.push(' ');
    return alphabetArray;
}
genCharArray('a', 'z');

function updateHash() {
    document.getElementById("hashString").textContent = hashString;
}

function updateLettersGuessed(){
    document.getElementById("lettersGuessed").textContent = lettersGuessed;
}

function updateMistakes() {
    --mistakesCount;
    document.getElementById("mistakes").textContent = mistakesCount;
}

function updateWins(){
    ++winsCount;
    document.getElementById("wins").textContent = winsCount;
}

//Resets the game
function roundReset() {
    mistakesCount = 8;
    hashString = '';
    document.getElementById("hashString").textContent = hashString;
    lettersGuessed = [];
    updateLettersGuessed();
    roundStart();
    makeAGuess();
}

function makeAGuess(guessLetter){
    //Creates two arrays, one blank & one with the word, and slowly changes one to the other
    movieArr = wordToGuess.split('');
    hashArr = hashString.split('');

    movieArr.forEach(function (character, index) {
        if (character === guessLetter){
            hashArr[index] = guessLetter;
        } 
    });
    //Converts hashString back into a string
    hashString = hashArr.join("");
    updateHash();

    //Letters Guessed tracker
    updateLettersGuessed();

    //LOGIC SECTION - Tracks guessed letters, excludes letters already guessed & special characters
    //If guessed letter is not in the hash array...
    if(hashArr.includes(guessLetter) === false){
        //If guessed letter has already been stored in guess tracker array...
        if (lettersGuessed.includes(guessLetter)){
            return;
        } else {
            if (alphabetArray.includes(guessLetter) === false) {
                return;
            } else {
                updateMistakes();
                lettersGuessed.push(guessLetter);
                updateLettersGuessed();
            }
        }
    }    

    //Lose Condition
    if(mistakesCount === 0){
        alert("Try again!");
        roundReset();
    }
    
    //Win Condition
    if(hashString === wordToGuess){
        setTimeout(winCondition(), 8000);
    }
   
}

function winCondition() {
    alert('You won!');
    updateWins();
    roundReset();
}
// makeAGuess();

function roundStart(){
    //1st Pick a random movie from array
    var randomArrayItem = movies[Math.floor(Math.random() * movies.length)];
    wordToGuess = randomArrayItem.name;
    //2nd Create identical length string of hashes
    for (i = 0; i < wordToGuess.length; i++) {
        hashString += "#";
    }
    //Initial display hashString in the browser
    updateHash();

    //Display Mistakes Remaining
    document.getElementById("mistakes").textContent = mistakesCount;

    //Update User instructions
    document.getElementById('instructions').textContent = 'Start Guessing Letters!';
}


//Startup on 'Press Any Key'
document.onkeyup = function(e){
    if (startUp === true){
        //Checks if game is started, proceeds to execute the game
        makeAGuess(e.key);
        makeAGuess(e.keyCode == 32);
    } else {
        //Allows the game to start on next key press
        startUp = true;
        roundStart();
    } 
};

