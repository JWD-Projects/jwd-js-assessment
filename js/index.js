/* ***************************
  JWD JavaScript Assessment

  This code is unfinished. You will need to study it to figure out what it does. Then you will need to use this and
  your own code, to finish the app. 
  
  The tasks you need to do are below.

    TASKS TODO:
      1. Calculate the score as the total of the number of correct answers

      2. Add an Event listener for the submit button, which will display the score and highlight 
         the correct answers when the button is clicked. Use the code from lines 67 to 86 to help you.

      3. Add 2 more questions to the app (each question must have 4 options).

      4. Reload the page when the reset button is clicked (hint: search window.location)

      5. Add a countdown timer - when the time is up, end the quiz, display the score and highlight the correct answers
*************************** */

const scoreDisplay = document.getElementById('score');;
const submitBtn = document.getElementById('btnSubmit');
const resetBtn = document.getElementById('btnReset');
const timer =  document.getElementById('time');


window.addEventListener('DOMContentLoaded', () => {
  const start = document.querySelector('#start');
  start.addEventListener('click', function (e) {
    document.querySelector('#quizBlock').style.display = 'block';
    start.style.display = 'none';
  });
  // quizArray QUESTIONS & ANSWERS
  // q = QUESTION, o = OPTIONS, a = CORRECT ANSWER
  // Basic ideas from https://code-boxx.com/simple-javascript-quiz/
  const quizArray = [
    {
      q: 'Which is the third planet from the sun?',
      o: ['Saturn', 'Earth', 'Pluto', 'Mars'],
      a: 1, // array index 1 - so Earth is the correct answer here
    },
    {
      q: 'Which is the largest ocean on Earth?',
      o: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
      a: 3,
    },
    {
      q: 'What is the capital of Australia',
      o: ['Sydney', 'Canberra', 'Melbourne', 'Perth'],
      a: 1,
    },
    {
      q: 'Which team won the NBA championship in 2020',
      o: ['Celtics', 'Heat', 'Lakers', 'Nuggets'],
      a: 2,
    },
    {
      q: 'Who won the 2021 French Open',
      o: ['Nadal', 'Federer', 'Djokovic', 'Murray'],
      a: 2,
    }

  ];

  // function to Display the quiz questions and answers from the object
  const displayQuiz = () => {
    const quizWrap = document.querySelector('#quizWrap');
    let quizDisplay = '';
    quizArray.map((quizItem, index) => {
      quizDisplay += `<ul class="list-group">
                   Q - ${quizItem.q}
                    <li class="list-group-item mt-2" id="li_${index}_0"><input type="radio" name="radio${index}" id="radio_${index}_0"> ${quizItem.o[0]}</li>
                    <li class="list-group-item" id="li_${index}_1"><input type="radio" name="radio${index}" id="radio_${index}_1"> ${quizItem.o[1]}</li>
                    <li class="list-group-item"  id="li_${index}_2"><input type="radio" name="radio${index}" id="radio_${index}_2"> ${quizItem.o[2]}</li>
                    <li class="list-group-item"  id="li_${index}_3"><input type="radio" name="radio${index}" id="radio_${index}_3"> ${quizItem.o[3]}</li>
                    </ul>
                    <div>&nbsp;</div>`;
      quizWrap.innerHTML = quizDisplay;
    });
  };


  // Calculate the score
  const calculateScore = () => {
    let score = 0;
    quizArray.map((quizItem, index) => {
      for (let i = 0; i < 4; i++) {
        //highlight the li if it is the correct answer
        let li = `li_${index}_${i}`;
        let r = `radio_${index}_${i}`;
        liElement = document.querySelector('#' + li);
        radioElement = document.querySelector('#' + r);

        if (quizItem.a == i) {
          //change background color of li element here
          liElement.style.backgroundColor = 'green';
        }

        if (radioElement.checked) {
          // code for task 1 goes here
          
          // if selected answer matches actual answer increment score
          if (i == quizItem.a) {
            score++
          }
         
         
        }
      }
     
    });

    // show score
   scoreDisplay.innerHTML = `You Scored: ${score}`;
   // Hide submit button
   submitBtn.style.display = 'none'
   // stop timer on submit
 clearInterval(countdown)
  };



  let timeInSeconds = 60;
  // Display Time function
  const displayTime = (time) => {
    // convert to seconds, round it to remove decimal
    let min = Math.floor(time / 60);
    //  modulus gives us the remainder which are the seconds e.g. 122 % 60 = 2
    let sec = Math.floor(time % 60);
    timer.innerHTML = `${min<10 ? '0' : ''}${min}:${sec<10 ? '0' : ''}${sec}`;
  }



  //  Count Down function
const countdown = setInterval(() => {
  // decrement the time every 1 second and display it

  timeInSeconds--
  displayTime(timeInSeconds)

if (timeInSeconds <= 0) {
  // when time get to 0 seconds calculate the score
  calculateScore()
  // clears the interval which has been set by setInterval() 
 clearInterval(countdown)

}

}, 1000)  






  
// Event handlers
submitBtn.addEventListener('click', calculateScore);
resetBtn.addEventListener('click', function(){location.reload()});

 

  // call the displayQuiz function
  displayQuiz();
});
