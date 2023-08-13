// array that will store the game patterns
var gamePattern = [];

// array that will store the user's click patterns
var userClickedPattern = [];


// sound variables
var yellowAudio = new Audio("./sounds/yellow.mp3");
var greenAudio = new Audio("./sounds/green.mp3");
var redAudio = new Audio("./sounds/red.mp3");
var blueAudio = new Audio("./sounds/blue.mp3");
var wrongAudio = new Audio("./sounds/wrong.mp3");

// array that has 4 colours
var buttonColours = ["red", "blue", "green", "yellow"];



function playSound(name) {
    if (name == "red") {redAudio.play();} 
    else if (name == "blue") {blueAudio.play();} 
    else if (name == "green") {greenAudio.play();} 
    else if (name == "yellow") {yellowAudio.play();}
}

// return the random number 0 ~ 3
function nextSequence() {
    var randNum = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randNum];
    gamePattern.push(randomChosenColour);
    playSound(randomChosenColour);
    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);
}

nextSequence();



// click animation & sound effect 
$(".btn").click(function(event) {
    $("#" + event.target.id).fadeOut(100).fadeIn(100);
    playSound(event.target.id);
})



// function that store the user's chosen color
$(".btn").click(function(event) {
    var userChosenColor = event.target.id;
    userClickedPattern.push(userChosenColor);
    console.log(userClickedPattern);
})