const userInput = require("readline-sync");


function askForName() {
  let candidateName = "";
  candidateName = userInput.question("What is your name?");
   return candidateName
   

}
let nameOfPerson = askForName ();
console.log("Hello Canidate",   nameOfPerson);

let questions = ["1) Who was the first American woman in space?", "2) True or False: 5 kilometer==5000 meter?","3) (5+3)/2*10=?","4) Given the array[8,'Orbit','Trajectory', 45],what entry is at index 2?","5) What is the minimum crew size for the ISS?"];

let correctAnswers = ["Sally Ride", "true","40","Trajectory","3" ];


function askQuestion() {
let candidateAnswers = "";
 candidateAnswers = userInput.question(questions[0]);
 let answerForZero = candidateAnswers;
console.log("Your answer:",answerForZero);
 }
 askQuestion();
 console.log("Correct Answer:",correctAnswers[0]);
 console.log();
 console.log();

 function askqUestion() {
let candidateaNswers = "";
 candidateaNswers = userInput.question(questions[1]);
 let answerForOne = candidateaNswers;
console.log("Your answer:",answerForOne);
 }
 askqUestion();
 console.log("Correct Answer:",correctAnswers[1]);
console.log();
 console.log();

function askquEstion(){
  let candidateanSwers ="";
  candidateanSwers = userInput.question(questions[2]);
  let answerForTwo = candidateanSwers;
  console.log("Your Answer:",answerForTwo);
}
askquEstion();
console.log("Correct Answer:",correctAnswers[2]);
console.log();
 console.log();
 
 function askqueStion (){
   let candidateansWers ="";
   candidateansWers = userInput.question(questions[3]);let answerForThree = candidateansWers;
   console.log("Your Answer:",answerForThree);
 }
askqueStion();
 console.log("Correct Answer:",correctAnswers[3]);
console.log();
 console.log();

 function askquesTion(){
   let candidateanswEr = "";
   candidateanswEr = userInput.question(questions[4]);
   let answerForFour = candidateanswEr;
   console.log("Your Answer:",answerForFour);
 }
 askquesTion();
 console.log("Correct Answer:",correctAnswers[4]);
console.log();
 console.log();

 let rightAnswers = userInput.question ("How many correct answers?")
console.log ("Your correct answers:" + rightAnswers);
const numberOfq = 5
let grade = rightAnswers/numberOfq * 100;
console.log ("Over all grade", grade);
console.log("You pass if you get a 'true'(pass) and 'false' (failed) if you get a false. This test is...", 80<= grade);

//function askForName(candidateName) {
  // TODO 1.1b: Ask for candidate's name //



//function askQuestion(candidateAnswer) {
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //




function gradeQuiz(candidateAnswers) {}

  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 


  
  

 // return grade;


//function runProgram() {
  //askForName();
  // TODO 1.1c: Ask for candidate's name //
  
 // askQuestion();
  //gradeQuiz(this.candidateAnswers);



// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
};