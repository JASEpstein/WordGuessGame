// Global Variables

var alphabetArray = [];
var keyMatch = "";
var winsCount = 0;
var lossesCount = 0;
var guessesSoFar = [];
var guessesLeftCount = 10 - guessesSoFar.length;
var wordToGuess = '';
var startUp = false;
var start = '';
var randomMovie = '';

//Generates alphabet array
function genCharArray(charA, charZ) {
    alphabetArray = [],
        i = charA.charCodeAt(0),
        j = charZ.charCodeAt(0);
    for (; i <= j; ++i) {
        alphabetArray.push(String.fromCharCode(i));
    }
    alphabetArray.push(' ');
    return alphabetArray;
}
genCharArray('a', 'z');

//Movie Database Object
var movieDatabase = [
    TotalRecall = {
        name: "Total Recall",
        url: "url('https://goo.gl/images/2uzU31')"
    },
    SayAnything = {
        name: "Say Anything",
        url: "url('https://goo.gl/images/mgv9uf')"
    },
    BackToTheFuture = {
        name: "Back To The Future",
        url: "url('https://goo.gl/images/x1zGar')"
    },
    Highlander = {
        name: "Highlander",
        url: "url('https://goo.gl/images/w7WxZc')"
    },
    TopGun = {
        name: "Top Gun", 
        url: "url('https://goo.gl/images/hBgf4J')"
    },
    Poltergeist = {
        name: "Poltergeist", 
        url: "url('https://goo.gl/images/qBfzox')"
    },
    TheShining = {
        name: "The Shining",
        url: "url('https://goo.gl/images/t4xNrR')"
    },
    TheGoonies = {
        name: "The Goonies", 
        url: "url('https://goo.gl/images/MDH2ci')"
    },
    Ghostbusters = {
        name: "Ghostbusters",
        url: "url('https://goo.gl/images/Zhnstg')"
    },
    TheTerminator = {
        name: "The Terminator",
        url: "url('https://goo.gl/images/75zPwD')"
    },
];

//Resets the game
function roundReset() {
    guessesSoFar = [];
    document.getElementById("guessesSoFar").textContent = guessesSoFar;
    document.getElementById("guessesLeft").textContent = 10 - guessesSoFar.length;
}

function setUpWordToGuess() {
    var randomArrayItem = movieDatabase[Math.floor(Math.random() * movieDatabase.length)];
    wordToGuess = randomArrayItem.name;
};

function setUpGuessBlocks() {

}

//Startup on 'Press Any Key'
document.onkeyup = function(start){
    start = alphabetArray.find(function (){
        start.key === ' ';
    });
    startUp = true;
   setUpWordToGuess();
};



//Keyups for Guessing
document.onkeyup = function (e) {
    keyMatch = alphabetArray.find(function (letterMatch) {
        return letterMatch === e.key;
    });
    //Win Criteria
    if (startUp === true){
        if (keyMatch === randomLetter) {
            document.getElementById("wins").textContent = ++winsCount;
            roundReset();
            //Exclude keys that aren't the alphabet
        } else if (keyMatch === undefined) {
            return;
            //Loss Criteria
        } else {
            guessesSoFar.push(keyMatch);
            document.getElementById("guessesLeft").textContent = 10 - guessesSoFar.length;
            document.getElementById("guessesSoFar").textContent = guessesSoFar;
        }
        //Loss Counter to Reset after too many guesses
        if (guessesSoFar.length === 10) {
            document.getElementById("losses").textContent = ++lossesCount;
            roundReset();
        }
    }
       
   };