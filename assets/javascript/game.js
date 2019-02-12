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
// Global Variables

var winsCount = 0;
var lossesCount = 0;
var guessesSoFar = [];
var guessesLeftCount = 10 - guessesSoFar.length;
var wordToGuess = '';
var startUp = false;
var randomMovie = '';
var wordHash = '';
var movie = '';

//Movie Array
var movies = [
    {
        name: "Total Recall",
        url: "url('https://goo.gl/images/2uzU31')"
    },
    {
        name: "Say Anything",
        url: "url('https://goo.gl/images/mgv9uf')"
    },
    {
        name: "Back To The Future",
        url: "url('https://goo.gl/images/x1zGar')"
    },
    {
        name: "Highlander",
        url: "url('https://goo.gl/images/w7WxZc')"
    },
    {
        name: "Top Gun", 
        url: "url('https://goo.gl/images/hBgf4J')"
    },
    {
        name: "Poltergeist", 
        url: "url('https://goo.gl/images/qBfzox')"
    },
    {
        name: "The Shining",
        url: "url('https://goo.gl/images/t4xNrR')"
    },
    {
        name: "The Goonies", 
        url: "url('https://goo.gl/images/MDH2ci')"
    },{
        name: "Ghostbusters",
        url: "url('https://goo.gl/images/Zhnstg')"
    },
    {
        name: "The Terminator",
        url: "url('https://goo.gl/images/75zPwD')"
    }
];


function updateHash() {
    document.getElementById("wordHash").textContent = wordHash;
}
//Resets the game
function roundReset() {
  
}

function makeAGuess(guessLetter){
    //Set an empty array called letterPositions[]
    movie = wordToGuess.split('');
    hash = wordHash.split('');
    //Look through wordToGuess for instances of guessLetter
    movie.forEach(function (character, index) {
        if (character === guessLetter){
            hash[index] = guessLetter;
        }
    });
    //If one or more instances of guessLetter exist in wordToGuess, record position in letterPositions[]
    //For each letter position in letterPositions[], replace the corresponding hash in wordHash with guessLetter 
    //If no instances of guessLetter exist in wordToGuess, iterate the Mistakes counter
    //If fail condition is met, call roundReset()
    wordHash = hash.join("");
    updateHash();
}

function roundStart(){
    //1st Pick a random movie from array
    var randomArrayItem = movies[Math.floor(Math.random() * movies.length)];
    wordToGuess = randomArrayItem.name;
    //2nd Create identical length string of hashes
    for (i = 0; i < wordToGuess.length; i++) {
        wordHash += "#";
    }
    //Initial display wordHash in the browser
    updateHash();

    //Update User instructions
    document.getElementById('instructions').textContent = 'Start Guessing Letters!';
}


//Startup on 'Press Any Key'
document.onkeyup = function(e){
    if (startUp === true){
        //Checks if game is started, proceeds to execute the game
        makeAGuess(e.key);
    } else {
        //Allows the game to start on next key press
        startUp = true;
        roundStart();
    }
};