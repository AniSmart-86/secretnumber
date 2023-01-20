'use strict';


let scretnumber = Math.trunc(Math.random()*20) + 1;

let score = 20;

let high = 0;
document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
console.log(guess);

    if (!guess) {
        document.querySelector('.msg').textContent = 'select a number'
    } else if(guess === scretnumber) {
        document.querySelector('.msg').textContent = 'correct Number!'
        document.querySelector('.number').textContent = scretnumber;

        
        if (score > high) {
            high = score;
            document.querySelector('.high').textContent = high;

        }
    }if (guess > scretnumber) {

        if (score > 1) {
            document.querySelector('.msg').textContent = 'guess is too high!'
            score = score - 1;
            document.querySelector('.score').textContent = score;
            
        }else{
            document.querySelector('.msg').textContent = 'you lost!'
            document.querySelector('.score').textContent = 0;
        }
            
        
    } else if(guess < scretnumber) {
        if (score > 1) {
            document.querySelector('.msg').textContent = 'guess too low'
            score = score - 1;
    document.querySelector('.score').textContent = score;
    
        }else{
            document.querySelector('.msg').textContent = 'you lost!'
            document.querySelector('.score').textContent = 0;
        }
       
    }

    // restart button
})

    document.querySelector('.again').addEventListener('click', function() {
score = 20
scretnumber = Math.trunc(Math.random()*20) + 1;


        document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.msg').textContent = '▼start guessing... '
    document.querySelector('.score').textContent = score;
   
    })
    
    
