// array that has 4 colours
var buttonColours = ["red", "blue", "green", "yellow"];

// array that will store the game patterns
var gamePattern = [];

// array that will store the user's click patterns
var userClickedPattern = [];

var level = 0;

function playSound(name) {
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}

// return the random number 0 ~ 3
function nextSequence() {
    var randNumber = Math.floor(Math.random() * 4);
    randomChosenColour = buttonColours[randNumber];
    gamePattern.push(randomChosenColour);

    playSound(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100);

    level++;
    $("h1").text("Level " + level);
}


// click animation & sound effect 
$(".btn").click(function(event) {
    var userChosenColor = $(this).attr("id");
    userClickedPattern.push(userChosenColor);

    playSound(userChosenColor);

    animatePress($(this).attr("id"));
    $("#" + event.target.id).fadeOut(100).fadeIn(100);

    if (level !== 0 && level === userClickedPattern.length) {
        setTimeout(function(){
        nextSequence();
        userClickedPattern = [];
    }, 1000)}
        checkAnswer(userClickedPattern.length - 1);
})

function animatePress(currentColour) {
    $("#" + currentColour).toggleClass("pressed");

    setTimeout(function() {
        $("#" + currentColour).toggleClass("pressed");
    }, 100)
}

$(document).keypress(function() {
    if(level === 0) {
        nextSequence();
    }
})

function checkAnswer(currentLevel) {
    if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
        console.log("success");
    } else {
        var wrongAudio = new Audio("sounds/wrong.mp3");
        wrongAudio.play();
        
        $("body").addClass("game-over");
        $("h1").text("Game Over, Press Any Key to Restart");

        setTimeout(function() {
            $("body").removeClass("game-over");
        }, 200)

        startOver();
    }

}

function startOver() {
    level = 0;
    gamePattern = [];
    userClickedPattern = [];
}
