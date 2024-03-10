// 'Use Strict'
// console.log(document.querySelector('.message').textContent);
// console.log(document.querySelector('.message').textContent = '🍾Correct Number');

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;  

// console.log(document.querySelector('.guess').value);
// document.querySelector('.guess').value = 23;


const secretNumber =  Math.trunc(Math.random()*20)+1;

let score =  20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function()
{
    const guess = Number(document.querySelector('.guess').value);
    console.log( guess , typeof guess);
//    When there is no Input 
   if(!guess){
     document.querySelector('.message').textContent = '⛔ No Number! ';
   } 
//    when there is a match 
   else if(guess === secretNumber ){
    document.querySelector('.message').textContent = '🍾 Correct Number!';
   document.querySelector('body').style.backgroundColor = 'green';
   document.querySelector('.number').textContent = secretNumber ;

   if(score>highscore){
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
   }
   }
   else if(guess>secretNumber){
    if(score>1){
        document.querySelector('.message').textContent = 'Too High !!';
        score--;
        document.querySelector('.score').textContent  =  score;
      
    }
       else{
        document.querySelector('.message').textContent = 'You Lose!';
        document.querySelector('.score').textContent  =  0;
       }
   }
   else if(guess<secretNumber){
    if(score<1){
        document.querySelector('.message').textContent = 'You Lose!';  
    }
       else{
        document.querySelector('.message').textContent = 'Too Low !!';
        score--;
        document.querySelector('.score').textContent  =  score;
      
       }
   }
}
);

document.querySelector('.again').addEventListener('click',function(){
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('body').style.backgroundColor = 'white';
  

  document.queryselector

});

