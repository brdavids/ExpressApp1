const NUMBER_OF_CHOICES = 4;
var myDone = false;

//Initialize names and faces
var names = ['Shobana', 'Emerson', 'Aaron', 'Tom', 'Donald', 'Dog', 'Cat', 'Bryan'];
var photoMap = new Map();
photoMap.set('Aaron', '../images/aaron.JPG');
photoMap.set('Emerson', '../images/emerson.png');
photoMap.set('Shobana', '../images/shobana.JPG');
photoMap.set('Tom', '../images/tom.JPG');
photoMap.set('Bryan', '../images/bryan.JPG');
photoMap.set('Donald', '../images/donald.JPG');
photoMap.set('Dog', '../images/dog.JPG');
photoMap.set('Cat', '../images/cat.JPG');

//Pick a name at random
var el = document.getElementById('name');
var nameIndex = Math.round(Math.random() * names.length);
if (nameIndex >= 0 && nameIndex < names.length) {
    el.textContent = 'Click on ' + names[nameIndex] + '\'s picture';
}
else {
    nameIndex = names.length - 1;
    el.textContent = 'Click on ' + names[nameIndex] + '\'s picture';
}

//Randomize image choices
var choicesMap = new Map();
var choiceNames = [];
for (var i = 0; i < names.length; i++)
{
    if (i != nameIndex) {
        choiceNames.push(names[i]);
    }
}
var answerIndex = Math.round(Math.random() * NUMBER_OF_CHOICES);
var correctAnswer = 'a';
if (answerIndex >= 0 && answerIndex < 1){
    correctAnswer = 'a';
}
else if (answerIndex >= 1 && answerIndex < 2){
    correctAnswer = 'b';
}
else if (answerIndex >= 2 && answerIndex < 3){
    correctAnswer = 'c';
}
else if (answerIndex >= 3 && answerIndex <= 4){
    correctAnswer = 'd';
}

//Setup answer A
var answerA = document.getElementById('a');
answerA.addEventListener('click', function () {
    checkAnswer('a');
}, false);
if (correctAnswer != 'a'){
    var aIndex = Math.round(Math.random() * choiceNames.length);
    if (aIndex === choiceNames.length){
        aIndex--;
    }
    choicesMap.set('a', choiceNames[aIndex]);
    choiceNames.splice(aIndex, 1);
}
else{
    choicesMap.set('a', names[nameIndex]);
}
answerA.src = photoMap.get(choicesMap.get('a'));

//Setup answer B
var answerB = document.getElementById('b');
answerB.addEventListener('click', function () {
    checkAnswer('b');
}, false);
if (correctAnswer != 'b') {
    var bIndex = Math.round(Math.random() * choiceNames.length);
    if (bIndex === choiceNames.length) {
        bIndex--;
    }
    choicesMap.set('b', choiceNames[bIndex]);
    choiceNames.splice(bIndex, 1);
}
else {
    choicesMap.set('b', names[nameIndex]);
}
answerB.src = photoMap.get(choicesMap.get('b'));

//Setup answer C
var answerC = document.getElementById('c');
answerC.addEventListener('click', function () {
    checkAnswer('c');
}, false);
if (correctAnswer != 'c') {
    var cIndex = Math.round(Math.random() * choiceNames.length);
    if (cIndex === choiceNames.length) {
        cIndex--;
    }
    choicesMap.set('c', choiceNames[cIndex]);
    choiceNames.splice(cIndex, 1);
}
else {
    choicesMap.set('c', names[nameIndex]);
}
answerC.src = photoMap.get(choicesMap.get('c'));

//Setup answer D
var answerD = document.getElementById('d');
answerD.addEventListener('click', function () {
    checkAnswer('d');
}, false);
if (correctAnswer != 'd') {
    var dIndex = Math.round(Math.random() * choiceNames.length);
    if (dIndex === choiceNames.length) {
        dIndex--;
    }
    choicesMap.set('d', choiceNames[dIndex]);
    choiceNames.splice(dIndex, 1);
}
else {
    choicesMap.set('d', names[nameIndex]);
}
answerD.src = photoMap.get(choicesMap.get('d'));

function checkAnswer(answer) {
    if (!myDone) {
        var el = document.getElementById('name');
        if (answer === correctAnswer) {
            el.textContent = 'Correct!';
        }
        else {
            el.textContent = 'Wrong!';
        }
        myDone = true;
    }
}