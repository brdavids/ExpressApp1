﻿const NUMBER_OF_CHOICES = 4;
var myDone = false;

//Initialize names and faces
var nameJpgArray = [['David',
                'Aaron',
                'Tom',
                'Anna',
                'Brandon',
                'Daniel',
                'Chris',
                'Kyle',
                'Dampier',
                'Priyanka',
                'Sijia',
                'Cary',
                'Nhi',
                'Alf',
                'Grace',
                'Lacey',
                'Ray',
                'Stephanie',
                'Michael',
                'Emerson',
                'Abbie',
                'Brittany',
                'Chelsey',
                'Rachel',
                'Michael2',
                'Rick',
                'Shobana'], ['bao21d.jpg',
                            'aboswell.jpg',
                            'dtomcamp.jpg',
                            'casciari.jpg',
                            'brandonc.jpg',
                            'cloesd.jpg',
                            'cwd89.jpg',
                            'kyled17.jpg',
                            'dampier.jpg',
                            'psgentry.jpg',
                            'sijman.jpg',
                            'cjanz.jpg',
                            'nhile05.jpg',
                            'alf6679.jpg',
                            'gracie7.jpg',
                            'ljlowber.jpg',
                            'rloyola.jpg',
                            'lus.jpg',
                            'mikemosh.jpg',
                            'ejp26.jpg',
                            'pooklook.jpg',
                            'brit88.jpg',
                            'croney.jpg',
                            'rrudnick.jpg',
                            'mjscott.jpg',
                            'antlers.jpg',
                            'svaidy.jpg']];

//Pick a name at random
var el = document.getElementById('name');
var nameIndex = Math.round(Math.random() * nameJpgArray[0].length);
if (nameIndex >= 0 && nameIndex < nameJpgArray[0].length) {
    el.textContent = 'Who is ' + nameJpgArray[0][nameIndex] + '?';
}
else {
    nameIndex = nameJpgArray[0].length - 1;
    el.textContent = 'Who is ' + nameJpgArray[0][nameIndex] + '?';
}

//Randomize image choices
var choicesMap = new Map();
var choiceNames = [];
for (var i = 0; i < nameJpgArray[0].length; i++)
{
    if (i != nameIndex) {
        choiceNames.push(nameJpgArray[0][i]);
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
    choicesMap.set('a', nameJpgArray[0][nameIndex]);
}
var tempIndex = nameJpgArray[0].indexOf(choicesMap.get('a'));
answerA.src = '../images/' + nameJpgArray[1][tempIndex];

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
    choicesMap.set('b', nameJpgArray[0][nameIndex]);
}
tempIndex = nameJpgArray[0].indexOf(choicesMap.get('b'));
answerB.src = '../images/' + nameJpgArray[1][tempIndex];

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
    choicesMap.set('c', nameJpgArray[0][nameIndex]);
}
tempIndex = nameJpgArray[0].indexOf(choicesMap.get('c'));
answerC.src = '../images/' + nameJpgArray[1][tempIndex];

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
    choicesMap.set('d', nameJpgArray[0][nameIndex]);
}
tempIndex = nameJpgArray[0].indexOf(choicesMap.get('d'));
answerD.src = '../images/' + nameJpgArray[1][tempIndex];

function checkAnswer(answer) {
    if (!myDone) {
        var el = document.getElementById('name');
        if (answer === correctAnswer) {
            el.textContent = 'Correct!';
        }
        else if (answer === '') {
            el.textContent = 'Time\'s up!';
        }
        else {
            el.textContent = 'Wrong!';
        }
        var a = document.getElementById('aName');
        a.textContent = choicesMap.get('a');
        var b = document.getElementById('bName');
        b.textContent = choicesMap.get('b');
        var c = document.getElementById('cName');
        c.textContent = choicesMap.get('c');
        var d = document.getElementById('dName');
        d.textContent = choicesMap.get('d');
        myDone = true;
    }
}

window.onload = function () {

    var display = document.getElementsByClassName('name'),
        timer = new CountDownTimer(5);

    timer.onTick(format).onTick(timeIsUp).start();

    function timeIsUp() {
        if (this.expired()) {
            checkAnswer('');
        }
    }

    function format(minutes, seconds) {
        if (!myDone) {
            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;
            var timeBar = '';
            for (var i = 0; i < seconds; i++) {
                timeBar += ' =';
            }
            for (var i = 0; i < display.length; i++) {
                display[i].textContent = timeBar;
            }
        }
    }
};

function CountDownTimer(duration, granularity) {
    this.duration = duration;
    this.granularity = granularity || 1000;
    this.tickFtns = [];
    this.running = false;
}

CountDownTimer.prototype.start = function() {
    if (this.running) {
        return;
    }
    this.running = true;
    var start = Date.now(),
        that = this,
        diff, obj;

    (function timer() {
        diff = that.duration - (((Date.now() - start) / 1000) | 0);
    
        if (diff > 0) {
            setTimeout(timer, that.granularity);
        } else {
            diff = 0;
            that.running = false;
        }

        obj = CountDownTimer.parse(diff);
        that.tickFtns.forEach(function(ftn) {
            ftn.call(this, obj.minutes, obj.seconds);
        }, that);
    }());
};

CountDownTimer.prototype.onTick = function(ftn) {
    if (typeof ftn === 'function') {
        this.tickFtns.push(ftn);
    }
    return this;
};

CountDownTimer.prototype.expired = function() {
    return !this.running;
};

CountDownTimer.parse = function(seconds) {
    return {
        'minutes': (seconds / 60) | 0,
        'seconds': (seconds % 60) | 0
    };
};
