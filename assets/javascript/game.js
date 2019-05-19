$(document).ready(function() {

var wins = 0; 
var losses = 0; 
var keepCount = 0; 
var randomNum = 0;

function generateNum() {   
 randomNum = Math.floor((Math.random() * 100) + 20);
 //between 120
 $("#number-to-guess").text(randomNum);
 console.log(randomNum);
}
generateNum();


var num1 = Math.floor(Math.random() * 11) + 1;
var num2 = Math.floor(Math.random() * 11) + 1;
var num3 = Math.floor(Math.random() * 11) + 1;
var num4 = Math.floor(Math.random() * 11) + 1;
console.log(num1, num2, num3, num4);

$("#img1").on("click", function(){
$("#img1").append(num1);
console.log(num1);
keepCount = keepCount + num1;
$("#score-box").text("Your total score is: " + keepCount);
keepCount1();
});

$("#img2").on("click", function(){
  $("#img2").append(num2);
  console.log(num2);
  keepCount = keepCount + num2;
  $("#score-box").text("Your total score is: " + keepCount);
  keepCount1();
});

$("#img3").on("click", function(){
  $("#img3").append(num3);
  console.log(num3);
  keepCount = keepCount + num3;
  $("#score-box").text("Your total score is: " + keepCount);
  keepCount1();
});

$("#img4").on("click", function(){
  $("#img4").append(num4);
  console.log(num4);
  keepCount = keepCount + num4;
  console.log(keepCount)
  $("#score-box").text("Your total score is: " + keepCount);
  keepCount1();
});


if (keepCount === randomNum) {
//adds one more win to counter
alert("You win" + wins++);
console.log(wins);
$("#wins-box").html("Wins: " + wins);
newGame();
}
else if(keepCount > randomNum) {
  alert("You lose...):" + losses++);
  console.log(losses);
  $("#losses-box").html("Losses: " + losses);
  newGame();
};

function resetNum() {
  wins = 0;
  losses = 0;
  keepCount = 0;
}

function newGame() {
  generateNum();
  resetNum();
  console.log("new game");
};

});