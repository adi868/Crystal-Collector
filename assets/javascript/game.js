$(document).ready(function () {

  var wins = 0;
  var losses = 0;
  var keepCount = 0;
  var randomNum = 0;

  //random number list
  var num1 = Math.floor(Math.random() * 11) + 1;
  var num2 = Math.floor(Math.random() * 11) + 1;
  var num3 = Math.floor(Math.random() * 11) + 1;
  var num4 = Math.floor(Math.random() * 11) + 1;
  console.log(num1, num2, num3, num4);

  //to re-use code 
  function generateNum() {
    randomNum = Math.floor((Math.random() * 101) + 19);
    //random number between 19-120
    $("#number-to-guess").text(randomNum);
    console.log(randomNum);

    //hidden value between 1-12
    num1 = Math.floor(Math.random() * 11) + 1;
    num2 = Math.floor(Math.random() * 11) + 1;
    num3 = Math.floor(Math.random() * 11) + 1;
    num4 = Math.floor(Math.random() * 11) + 1;
    console.log(num1, num2, num3, num4);

  }
  generateNum();

  $("#img1").on("click", function () {
    //store the random numbers in randomnumber store values w/ num1
    $("#img1").attr("data-randomnumber", num1);
    console.log(num1);
    keepCount = keepCount + num1;
    $("#score-box").text("Your total score is: " + keepCount);
    checkForStatus();
    //check wins or losses
  });

  $("#img2").on("click", function () {
    $("#img2").attr("data-randomnumber", num2);
    console.log(num2);
    keepCount = keepCount + num2;
    $("#score-box").text("Your total score is: " + keepCount);
    checkForStatus();
  });

  $("#img3").on("click", function () {
    $("#img3").attr("data-randomnumber", num3);
    console.log(num3);
    keepCount = keepCount + num3;
    $("#score-box").text("Your total score is: " + keepCount);
    checkForStatus();
  });

  $("#img4").on("click", function () {
    //.attr assigns values to image tag
    $("#img4").attr("data-randomnumber", num4);
    console.log(num4);
    keepCount = keepCount + num4;
    console.log(keepCount)
    $("#score-box").text("Your total score is: " + keepCount);
    checkForStatus();
  });
  
  function checkForStatus() {
    if (keepCount === randomNum) {
      //adds one more win to counter
      alert("You win!!");
      wins++;
      console.log(wins);
      $("#wins-box").html("Wins: " + wins);
      resetNum();
      newGame();
    } else if (keepCount > randomNum) {
      alert("You lose...Try again!");
      losses++;
      console.log(losses);
      $("#losses-box").html("Losses: " + losses);
      resetNum();
      newGame();
    };
  }

  function resetNum() {
    $("#wins-box").html("Wins: " + wins);
    $("#losses-box").html("Losses: " + losses);
    //score should revert back to zero
    $("#score-box").text("Your total score is: " + keepCount);
    // Summation is set to zero for each image random number to sum up again
    keepCount = 0;
    //re-display the target number
    $("#number-to-guess").text(randomNum);
  }

  function newGame() {
    generateNum();
    resetNum();
    console.log("new game");
  };

});

//help taken from Instructor Phil's posts in slack as well as class activity on crystal game