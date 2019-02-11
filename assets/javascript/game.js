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
var movieDatabase = {
    TotalRecall: ["url('https://goo.gl/images/2uzU31')", "Total Recall"],
    SayAnything: ["url('https://goo.gl/images/mgv9uf')", "Say Anything"],
    BackToTheFuture: ["url('https://goo.gl/images/x1zGar')", "Back To The Future"],
    Highlander: ["url('https://goo.gl/images/w7WxZc')", "Highlander"],
    TopGun: ["url('https://goo.gl/images/hBgf4J')", "Top Gun"],
    Poltergeist: ["url('https://goo.gl/images/qBfzox')", "Poltergeist"],
    TheShining: ["url('https://goo.gl/images/t4xNrR')", "The Shining"],
    TheGoonies: ["url('https://goo.gl/images/MDH2ci')", "The Goonies"],
    Ghostbusters: ["url('https://goo.gl/images/Zhnstg')", "Ghostbusters"],
    TheTerminator: ["url('https://goo.gl/images/75zPwD')", "The Terminator"]
};

//Resets the game
function roundReset() {
    guessesSoFar = [];
    document.getElementById("guessesSoFar").textContent = guessesSoFar;
    document.getElementById("guessesLeft").textContent = 10 - guessesSoFar.length;
}

function setUpWordToGuess() {
    var tmpList = Object.keys(movieDatabase);
    var randomProperty = tmpList[Math.floor(Math.random() * tmpList.length)];
    //Sets randomMovie equal to an array
    randomMovie = movieDatabase[randomProperty];
    //Returns string of name of random movie
    randomMovie.find(function (){
        wordToGuess = [1]; 
    });
    console.log(wordToGuess);
};

//Startup on 'Press Any Key'
document.onkeyup = function(start){
    start = alphabetArray.find(function (){
        start.key === ' ';
    });
    startUp = true;
   setUpWordToGuess();
};



//Keyups for Guessing
// document.onkeyup = function (e) {
//     keyMatch = alphabetArray.find(function (letterMatch) {
//         return letterMatch === e.key;
//     });
//     //Win Criteria
//     if (startUp === true){
//         if (keyMatch === randomLetter) {
//             document.getElementById("wins").textContent = ++winsCount;
//             roundReset();
//             //Exclude keys that aren't the alphabet
//         } else if (keyMatch === undefined) {
//             return;
//             //Loss Criteria
//         } else {
//             guessesSoFar.push(keyMatch);
//             document.getElementById("guessesLeft").textContent = 10 - guessesSoFar.length;
//             document.getElementById("guessesSoFar").textContent = guessesSoFar;
//         }
//         //Loss Counter to Reset after too many guesses
//         if (guessesSoFar.length === 10) {
//             document.getElementById("losses").textContent = ++lossesCount;
//             roundReset();
//         }
//     }
       
//    };