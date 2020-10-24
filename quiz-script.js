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



//var question index an button id's
var currentQuestionIndex=0
var playerScore=0
var timer=180
var questionElement = document.getElementById("Q1"); 
var btnOne =  document.getElementById("A1"); 
var btnTwo =  document.getElementById("A2"); 
var btnThree =  document.getElementById("A3"); 
var btnFour =  document.getElementById("A4"); 


// create timer set score score board 
function timer(){
    console.log('timer started')
}

function checkAnswer(){
    console.log(this.value); 
    //correct answer 
    if(this.value === questionsList[currentQuestionIndex].answer){
        playerScore++
    }
    else{
        timer = timer- 20 ;
    }
    //Move to the next question 
    currentQuestionIndex++
    //if condition that will check for last question if reaches last question
     //create new function that says 'quiz score board' else will load next question
    
    if (currentQuestionIndex === questionsList.length) {
        quizEnd();
    }
    else {
        loadNextQuestion();
    }

    loadNextQuestion(currentQuestionIndex)
    // set and check interval for timer
}

function loadNextQuestion(currentQuestionIndex){
    console.log(questionsList[currentQuestionIndex].question)
    console.log(document.getElementById("Q1"))
    
    questionElement.textContent = questionsList[currentQuestionIndex].question; 
    btnOne.textContent = questionsList[currentQuestionIndex].choices[0]
    btnTwo.textContent = questionsList[currentQuestionIndex].choices[1]
    btnThree.textContent = questionsList[currentQuestionIndex].choices[2]
    btnFour.textContent = questionsList[currentQuestionIndex].choices[3]

    //setting values for the buttons 
    btnOne.value = questionsList[currentQuestionIndex].choices[0]
    btnTwo.value = questionsList[currentQuestionIndex].choices[1]
    btnThree.value = questionsList[currentQuestionIndex].choices[2]
    btnFour.value = questionsList[currentQuestionIndex].choices[3]
}

function saveData(){
}

//Button for initGame
// document.querySelector('#start').addEventListener('click', initGame)

//document.querySelector('#quiz').addEventListener('click', function(e){
    //if(!e.target.classlist.contains('option')){
     //   return
//    }
//})
//Addevent listiner for the choice buttons 
btnOne.addEventListener("click",checkAnswer)

loadNextQuestion(currentQuestionIndex)