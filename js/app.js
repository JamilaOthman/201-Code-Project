
'use strict'
var score = 0;
function Q1(params) {
    

var Q1 = 'y';
var Q1 = prompt("Am I have bachelors degree?");;
while (Q1 === null || Q1 === '') {
    alert('Please  insert a value');
    Q1 = prompt('Am I have bachelors degree? ');
    if (Q1.toLowerCase() === 'y' || Q1.toLowerCase === 'yes') {
        alert('good start');
        score++;
       
    } else {
        alert('Oopsno');
    }
}
}
Q1();

function Q2(params) {
    

    var Q2 = 'n';
    var Q2 = prompt("Do I like cats");
    if (Q2.toLowerCase() === 'n' || Q2.toLowerCase === 'no') {
        alert('you are right');
        score++
    } else {
        alert('are you sure???!!');
    }
}

Q2();

function Q3(params) {
    
   var Q3 = 'y';
    var Q3 = prompt("Do I live in Amman? ");
    if (Q3.toLowerCase() === 'y' || Q3.toLowerCase === 'yes') {
        alert('yes I do');
        score++
       
    } else {
        alert('actually I do');
    }
}
 Q3();
function Q4(params) {
    

    var Q4 = 'y';
    var Q4 = prompt("Do I like cooking?");
    if (Q4.toLowerCase() === 'y' || Q4.toLowerCase === 'yes') {
        alert('Correct!!');
        score++
        
    } else {
        alert('actually I do');
    }
}
Q4();
function Q5(params) {
    

    var Q5 = 'n&&no';
    var Q5 = prompt("Is my favorite season is summer?");
    if (Q5.toLowerCase() === 'n' || Q5.toLowerCase === 'no') {
        alert('you are amzing');
        score++
        
    } else {
        alert('actually it is not summer');
    }
}
Q5();
function mydogage(params) {
    

    var mydogage = 3
    var opp = [1, 2, 3, 4]
    for (var i = 0; i < 4; i++) {
        var mydogage = prompt('guess my dog age');
        if (mydogage == 4) {
            alert('right')
            score++
            break
        }
        else if (mydogage > 4) {
            alert('too high')
        }
        else if (mydogage < 4) {
            alert('too low')
        }
    }
    alert('the correct answer is 4');
}
mydogage();
function favfruit(params) {
    

    var favfruit = ['mango', 'peache', 'apple', 'orange']
    var j = 0;
    var correctanswer = false;

    for (var j = 0; j < favfruit.length; i++) {
        var favfruit = prompt('what is my favorite fruit?');
        if (favfruit[j] === favfruit.toLowerCase()) {
            alert('WoOw you are really good');
            correctanswer = true;
            score++
            break
        } else {
            alert('correct answers are mango and peache');
        }
    }
}
favfruit();

if (score >= 4) {
        alert('you are amazing you got ' + score + 'out of 7');
    } else if (score <= 3) {
        alert('nooo you only got ' + score + 'out of 7');
    }

    confirm('we are done .... Thanks for your time')