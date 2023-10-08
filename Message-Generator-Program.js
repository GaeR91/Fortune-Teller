
var randomMessages = ["Today you are lucky", "You will find love soon", "Don't go tomorrow!", "Your planet is with you: it's time to shine", "Stay home, it's better for you!"];

function tellFortune() {
    var randomNumber = Math.floor(Math.random() * randomMessages.length);
    console.log("random number: " + randomNumber);
    document.getElementById("fortune").innerHTML = randomMessages[randomNumber];
}