var radioName = ["op1", "op2", "op3", "op4"];
var qNo = 1;
var questions = ["Q1", "Q2", "Q3", "Q4", "Q5", "Q6", "Q7", "Q8", "Q9", "Q10"];
var answers = [
  ["1-1", "1-2", "1-3", "1-4"],
  ["2-1", "2-2", "2-3", "2-4"],
  ["3-1", "3-2", "3-3", "3-4"],
  ["4-1", "4-2", "4-3", "4-4"],
  ["5-1", "5-2", "5-3", "5-4"],
  ["6-1", "6-2", "6-3", "6-4"],
  ["7-1", "7-2", "7-3", "7-4"],
  ["8-1", "8-2", "8-3", "8-4"],
  ["9-1", "9-2", "9-3", "9-4"],
  ["10-1", "10-2", "10-3", "10-4"],
];
var correctOption = [1, 4, 2, 3, 1, 1, 3, 2, 1, 3];
var score = 0;
check = () => {
  if (
    document.getElementById("op1").checked ||
    document.getElementById("op2").checked ||
    document.getElementById("op3").checked ||
    document.getElementById("op4").checked
  ) {
    if (
      document.getElementById(radioName[correctOption[qNo - 1] - 1]).checked
    ) {
      score++;
    }
    console.log(score);
    qNo++;
    update();
  }
};

update = () => {
  if (qNo === 10) {
    scoreDisplayer();
  }
  document.getElementById("op1").checked = false
  document.getElementById("op2").checked = false
  document.getElementById("op3").checked = false
  document.getElementById("op4").checked = false
  document.getElementById("questionContainer").innerHTML = questions[qNo - 1];
  document.getElementById("op1text").innerHTML = answers[qNo - 1][0];
  document.getElementById("op2text").innerHTML = answers[qNo - 1][1];
  document.getElementById("op3text").innerHTML = answers[qNo - 1][2];
  document.getElementById("op4text").innerHTML = answers[qNo - 1][3];
};

scoreDisplayer = () => {
  document.getElementById("questionContainer").remove();
  document.getElementById("op1text").remove();
  document.getElementById("op2text").remove();
  document.getElementById("op3text").remove();
  document.getElementById("op4text").remove();
  document.getElementById("op1").remove();
  document.getElementById("op2").remove();
  document.getElementById("op3").remove();
  document.getElementById("op4").remove();
  document.getElementById("submit").remove();
  document.getElementById("score").innerHTML = score;
};
