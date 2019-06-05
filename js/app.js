'use strict';

//Here are the questions in this trivia quiz. Respond with y/N

alert('Please respond with Y/N or Yes/No');

var tryingToBeCool = 'You are trying to be smart, can you answer with a yes or a no?';

//convert response to uppercase for consistency

var doneCartwheel = prompt('Have you ever done a cartwheel?');
var doneCartWheelUpperCase = doneCartwheel.toUpperCase();
console.log('Done Cartwheel?: ' + doneCartWheelUpperCase);

if (doneCartWheelUpperCase === 'Y' || doneCartWheelUpperCase[0] === 'Y') {
  alert('Bravo! I wouldn\'t imagine doing one');
} else if (doneCartWheelUpperCase === 'N' || doneCartWheelUpperCase[0] === 'N'){
  alert('Welcome to the club! I don\'t know how people do it');
} else {
  alert(tryingToBeCool);
}

var knowToWhistle = prompt('Do you know how to whistle?');
var knowToWhistleUpperCase = knowToWhistle.toUpperCase();
console.log('Know to Whistle?: ' + knowToWhistleUpperCase);

if (knowToWhistleUpperCase === 'Y' || knowToWhistleUpperCase[0] === 'Y') {
  alert('Awesome! I wish I knew how to. Would come in handy at times');
} else if (knowToWhistleUpperCase === 'N' || knowToWhistleUpperCase[0] === 'N'){
  alert('Me too, may be we are the less cooler bunch');
} else {
  alert(tryingToBeCool);
}

var likeMangoes = prompt('Do you like Mangoes?');
var likeMangoesUpperCase = likeMangoes.toUpperCase();
console.log('Like Mangoes?: ' + likeMangoesUpperCase);

if (likeMangoesUpperCase === 'Y' || likeMangoesUpperCase[0] === 'Y') {
  alert('I bet you are from a tropical country. They are a little rare elsewhere.');
} else if (likeMangoesUpperCase === 'N' || likeMangoesUpperCase[0] === 'N'){
  alert('Have you tried one? Mangoes are the best fruits.');
} else {
  alert(tryingToBeCool);
}

var afraidOfDogs = prompt('Are you afraid of dogs?');
var afraidOfDogsUpperCase = afraidOfDogs.toUpperCase();
console.log('Afraid of Dogs?: ' + afraidOfDogsUpperCase);

if (afraidOfDogsUpperCase === 'Y' || afraidOfDogsUpperCase[0] === 'Y') {
  alert('Are you kidding me, they are the coolest pets.');
} else if (afraidOfDogsUpperCase === 'N' || afraidOfDogsUpperCase[0] === 'N'){
  alert('Cool, do you have one as a pet?');
} else {  
  alert(tryingToBeCool);
}

var commuteByBus = prompt('Do you take the bus to work?');
var commuteByBusUpperCase = commuteByBus.toUpperCase();
console.log('Commute by bus?: ' + commuteByBusUpperCase);

if (commuteByBusUpperCase === 'Y' || commuteByBusUpperCase[0] === 'Y') {
  alert('Me too, I think I have seen you at the bus stop.');
} else if (commuteByBusUpperCase === 'N' || commuteByBusUpperCase[0] === 'N'){
  alert('Oh.. How do you get to work?');
} else {
  alert(tryingToBeCool);
}
