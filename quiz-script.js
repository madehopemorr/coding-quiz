// list of all questions, choices, and answers
var questionsList = [
  {
    question: "Commonly used data types DO NOT include:",
    choices: ["strings", "booleans", "alerts", "numbers"],
    answer: "alerts"
  },
  {
    question: "CSS is to Bootstrap as Javascript is to ___ ?",
    choices: ["Modal", "JQuery", "HTML", "Window"],
    answer: "JQuery"
  },
  {
    question: "Which is term is not used to style code in CSS?",
    choices: ["background-color", "margin", "text-color", "var"],
    answer: "var"
  },
  {
    question: "What allows you to iterate through items in an array?",
    choices: ["functions", "loops", "vars", "console"],
    answer: "loops"
  },
  {
    question: "Which program is used when coding more interactivity on a webpage?",
    choices: ["HTML", "CSS", "Javascript", "C#"],
    answer: "Javascript"
  },
  {
    question: "Which is not used in a string?",
    choices: ["text", "integer"],
    answer: "integer"
  },
  {
    question: "What is the term for a notation resembling code, but is used for prepping code in note form?",
    choices: ["false code", "pseudocode", "alkaline notation", "source code"],
    answer: "pseudocode"
  },
  {
    question: "What tab comes up when you choose to inspect the browser window?",
    choices: ["console", "element", "variables", "search bar"],
    answer: "element"
  },
  {
    question: "Where can you view errors in your code?",
    choices: ["jquery", "gitlab", "pseudocode", "console"],
    answer: "console"
  },
  {
    question: "Which symbol is used to link jquery to a specific element?",
    choices: ["!", "*", "%", "$"],
    answer: "$"
  }
]
//ALL VARIABLES 
//------------------------------------
//var question index an button id's
var currentQuestionIndex = 0;
var playerScore = 0;
var timer = 180; 
var questionElement = document.getElementById("Q1");
var btnOne = document.getElementById("A1");
var btnTwo = document.getElementById("A2");
var btnThree = document.getElementById("A3");
var btnFour = document.getElementById("A4");
var resultDiv = document.getElementById("results");
var questionCount = document.getElementById("questionCount");
var quizDiv = document.getElementById("QandA");
var submitButton = document.getElementById("submitBtn");
var startButton = document.getElementById("startbutton");
var time = 120; //your time in seconds here
var display = document.getElementById('myTimerDisplay');
var timerInterval;
///// DECALRING FUNCTIONS 
// ------------------------------------------------------
function startTimer(duration, display) {
  console.log('start clock', duration)
  // redirect to next page
  //window.location.href = "quiz.html";
  timer = duration;
  timerInterval = setInterval(function () {
    //  Takes the current time in seconds and convert it to minutes and seconds (mm:ss).
		var minutes = Math.floor(timer/ 60);
		var seconds = timer - (minutes * 60);

    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    timer--;
    console.log("time left ", timer);
    if (timer <= 0) {
      //stp timer
      clearInterval(timerInterval)
      timer = 600;
      timer = duration; // uncomment this line to reset timer automatically after reaching 0
      //call quiz end 
      quizEnd()
    }
  }, 1000);
  //Display the question after showing the timer 
  loadNextQuestion(currentQuestionIndex)
}
function checkAnswer() {
  console.log(currentQuestionIndex  , "User Input", this.value);
  //correct answer
  if (this.value === questionsList[currentQuestionIndex].answer) {
    playerScore++
    resultDiv.textContent = "Correct Answer"
    resultDiv.style.color = "green"; 
  }
  else {
    timer = timer - 20;
    resultDiv.textContent = "Incorrect Answer"
    resultDiv.style.color = "red"; 
  }
  //Move to the next question
  currentQuestionIndex++;
  //if condition that will check for last question if reaches last question
  //create new function that says 'quiz score board' else will load next question
  if (currentQuestionIndex === questionsList.length) {
    quizEnd();
  }
  else {
    loadNextQuestion(currentQuestionIndex);
  }
}
function loadNextQuestion(currentQuestionIndex) {
  console.log(questionsList[currentQuestionIndex].question)
  //Displays how many questions are reamining 
  questionCount.textContent = "Question " + (currentQuestionIndex + 1) + "  / " + questionsList.length;
  //populates the Question and options for it 
  questionElement.textContent = questionsList[currentQuestionIndex].question;
  btnOne.textContent = questionsList[currentQuestionIndex].choices[0]
  btnTwo.textContent = questionsList[currentQuestionIndex].choices[1]
  btnThree.textContent = questionsList[currentQuestionIndex].choices[2]
  btnFour.textContent = questionsList[currentQuestionIndex].choices[3]
  btnOne.value = questionsList[currentQuestionIndex].choices[0]
  btnTwo.value = questionsList[currentQuestionIndex].choices[1]
  btnThree.value = questionsList[currentQuestionIndex].choices[2]
  btnFour.value = questionsList[currentQuestionIndex].choices[3]
}
function quizScoreBoard(currentQuestionIndex) {
  if (currentQuestionIndex === questionsList.answer) {
    playerscore++
  }
  else {
    timer = timer - 20;
  }
}
function saveData() {
  console.log("Player Score and Initials", playerScore , " - ", document.getElementById("initials").value)
  // get saved scores from localstroage, or if not any, set to empty array
  var previouScores = JSON.parse(window.localStorage.getItem("allScores")) || [];
  //Set Data in localStorage 
  var finalScore = { 
    score: playerScore, 
    initials: document.getElementById("initials").value
  }
  console.log(finalScore)
  //save to localstorage
  previouScores.push(finalScore);
  //write code to store in localstorage using
  localStorage.setItem("allScores", JSON.stringify(previouScores));
  //Navigate to next page 
  window.location.href="highscore.html"
}

// function showResults() {
//   var answerContainers = quizContainer.querySelectorAll('.answers');
//   let numCorrect = 0
// }
function quizEnd() {
  console.log("Quiz ENd")
  //Stop Timer 
  clearInterval(timerInterval)
  //Show end results 
  var scoreboardDiv = document.getElementById("scoreboard");
  scoreboardDiv.style.display = "block";
  //hide question and number section 
  quizDiv.style.display = "none";
  //Display player Score 
  document.getElementById("playerscore").textContent = playerScore + " out of "+ questionsList.length;
}
//EVENT LISTINERS 
//------------------------------------
//trying to get button cliks to trigger next question:
btnOne.addEventListener("click", checkAnswer);
btnTwo.addEventListener("click", checkAnswer);
btnThree.addEventListener("click", checkAnswer);
btnFour.addEventListener("click", checkAnswer);
submitButton.addEventListener('click', saveData);
//startButton.addEventListener('click', startTimer);
  
startTimer(time, display);