'use strict';

//Here are the questions in this trivia quiz. Respond with y/n

var userName = prompt('Hey there.. What\'s your name?');

console.log('User Name: ' + userName);

alert('Hey ' + userName + ', try this quiz to know a little more about me. Please respond with a Y/N or Yes/No to the following questions.');

var tryingToBeCool = 'You are trying to be smart, can you answer with a yes or a no?';
var numberOfRightAnswers = 0;

question1();
question2();
question3();
question4();
question5();
question6();
question7();

//convert response to uppercase for consistency
//Question 1
function question1(){

  var doneCartwheel = prompt('Have I tried a cartwheel before?').toUpperCase();

  console.log('Done Cartwheel?: ' + doneCartwheel);

  if (doneCartwheel === 'Y' || doneCartwheel === 'YES') {
    alert('Wrong! I don\'t know how people do it.');
  } else if (doneCartwheel === 'N' || doneCartwheel === 'NO'){
    alert('So true..I wouldn\'t imagine doing one.');
    numberOfRightAnswers++;
  } else {
    alert(tryingToBeCool);
  }

  var el = document.getElementById('cartwheel-user-response');
  el.textContent = doneCartwheel;
}

//Question 2

function question2 (){

  var knowToWhistle = prompt('Can I whistle?').toUpperCase();

  console.log('Know to Whistle?: ' + knowToWhistle);

  if (knowToWhistle === 'Y' || knowToWhistle === 'YES') {
    alert('Not at all! I am not that cool. ');
  } else if (knowToWhistle === 'N' || knowToWhistle === 'NO'){
    alert('Correct! I wish I knew how to. Would come in handy at times.');
    numberOfRightAnswers++;
  } else {
    alert(tryingToBeCool);
  }

  var el = document.getElementById('whistle-user-response');
  el.textContent = knowToWhistle;
}

//Question 3

function question3(){

  var likeMangoes = prompt('Do I like Mangoes?').toUpperCase();
  console.log('Like Mangoes?: ' + likeMangoes);

  if (likeMangoes === 'Y' || likeMangoes === 'YES') {
    alert('Yes, thay are my favorite.');
    numberOfRightAnswers++;
  } else if (likeMangoes === 'N' || likeMangoes === 'NO'){
    alert('Are you kidding me, I absolutely love them.');
  } else {
    alert(tryingToBeCool);
  }

  var el = document.getElementById('mangoes-user-response');
  el.textContent = likeMangoes;
}

//Question 4

function question4(){

  var afraidOfDogs = prompt('Am I afraid of dogs?').toUpperCase();

  console.log('Afraid of Dogs?: ' + afraidOfDogs);

  if (afraidOfDogs === 'Y' || afraidOfDogs === 'YES') {
    alert('You read my mind. I am especially afraid of the bigger ones.');
    numberOfRightAnswers++;
  } else if (afraidOfDogs === 'N' || afraidOfDogs === 'NO'){
    alert('Nah.. I am afraid of them. I can\'t have one as a pet.');
  } else {
    alert(tryingToBeCool);
  }

  var el = document.getElementById('dogs-user-response');
  el.textContent = afraidOfDogs;
}

//Question 5
function question5(){


  var commuteByBus = prompt('Do I take the bus to work?').toUpperCase();

  console.log('Commute by bus?: ' + commuteByBus);

  if (commuteByBus === 'Y' || commuteByBus === 'YES') {
    alert('Absolutely, it gives me some thinking time. ');
    numberOfRightAnswers++;
  } else if (commuteByBus === 'N' || commuteByBus === 'NO'){
    alert('II do too. Cannot sit in traffic for hours together.');
  } else {
    alert(tryingToBeCool);
  }

  var el = document.getElementById('commute-user-response');
  el.textContent = commuteByBus;
}

//Question 6
//Generate a random number between 1 and 10. Take this to be the number of my retries on the quiz I took
//actualRetries - Random number generated
//guessedRetries - Number guessed by the user
//numberOfGuesses - Counter to keep track of the number of guesses, limit this to 4 guesses
//correctGuess - Boolean flag set to true when the number is correctly guessed

function question6 (){

  var actualRetries = Math.floor(Math.random() * 10) + 1;
  console.log('Actual number of retries: ' + actualRetries);

  var el = document.getElementById('random-number');
  el.textContent = actualRetries;

  var guessedRetries = 0;
  var correctGuess = false;
  var numberOfGuesses = 0;

  //The initial prompt is kept separate from the follow up question to be more interactive

  guessedRetries = prompt('Can you guess the number of my retries to get all answers on the course quiz right? Please be courteous and limit your response to a number between 1 and 10.');

  while (numberOfGuesses < 4){
    console.log('Number of retries guessed: ' + guessedRetries);
    if (actualRetries < guessedRetries){
      guessedRetries = prompt('Number is lower than your guess. Try again!');
    } else if (actualRetries > guessedRetries){
      guessedRetries = prompt('Number is higher than your guess. Try again!');
    } else {
      correctGuess = true;
      break;
    }
    numberOfGuesses++;
  }

  //Keep track of number ofright answers. Set the alert message depending on the outcomme

  if (!correctGuess){
    alert('Sorry, you have exhausted the number of tries.');
  } else{
    alert('Awesome, you got it!');
    numberOfRightAnswers++;
  }

}

function question7 (){

  var visitedStates = ['Oregon', 'California', 'Nevada', 'Arizona', 'Idaho'];
  var numberOfTries = 0;
  var correctAnswer = false;

  var guessedState = prompt('I went on an awesome roadtrip last summer. Can you guess any of the states that I visited.').toLowerCase();

  while (numberOfTries < 5){
    numberOfTries++;
    console.log('State Guessed: ' + guessedState);
    if (guessedState === 'oregon' || guessedState === 'or' ||
  guessedState === 'california' || guessedState === 'ca' ||
  guessedState === 'nevada' || guessedState === 'nv' ||
  guessedState === 'arizona' || guessedState === 'az' ||
  guessedState === 'idaho' || guessedState === 'id'){
      correctAnswer = true;
      break;
    }
    if (!correctAnswer){
      guessedState = prompt('Mmm... that doesn\'t look right. Can you try again?');

    }
  }

  var reply;
  if (correctAnswer){
    reply = 'Awesome, you got it!. You would have scored with any one of these: ';
    numberOfRightAnswers++;
  } else {
    reply = 'Nevermind, Here is the list: ';
  }

  //Iterate through the array to get a list of the states
  for (var stateIndex=0; stateIndex<visitedStates.length; stateIndex++){
    reply = reply + visitedStates[stateIndex] + ' ';
  }
  alert(reply);

}

var el = document.getElementById('message');

if (numberOfRightAnswers < 5){
  alert('Nice try ' + userName + '. You got ' + numberOfRightAnswers + ' out of the 7 questions right.');
  el.textContent = 'Nice try. You got ' + numberOfRightAnswers + ' out of 7 questions right';
} else {
  alert('Good job ' + userName + '. You seem to know a lot about me. You got ' + numberOfRightAnswers + ' out of the 7 questions right.');
  el.textContent = 'Good job. You seem to know a lot about me. You got ' + numberOfRightAnswers + ' out of the 7 questions right.';
}

var element = document.getElementById('number-correct');
element.textContent = numberOfRightAnswers;



