var readlineSync = require('readline-sync');

var score = 0;

var questionOne = {
  question: 'Who won the fifa world cup in 2014 : ',
  answer: 'germany'
};

var questionTwo = {
  question: 'Who won the fifa world cup in 2010 : ',
  answer: 'spain'
};

var questions = [questionOne, questionTwo];

for (var i=0; i<questions.length; i++){
  var answer = readlineSync.question(questions[i].question);
  if(answer === questions[i].answer) {
    score = score + 1;
  } else {
    score = score - 1;
  }

}

console.log('Your final score : ', score);