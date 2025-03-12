// 1. Get references to HTML questions
const questionElement = document.getElementById('question');
const answerElement = document.getElementById('answer');
const answerList = document.getElementById('answers-list');

// Variables to store the current question and answer
let num1, num2, correctAnswer;

// Variables to control History and Score
let score = 0;

// 2. Gerenerate random numbers and display the question
function generateQuestion() {
    //Generate two random integer numbers from 0 to 9
    let num1 = Math.floor(Math.random() * 10);
    let num2 = Math.floor(Math.random() * 10);
    correctAnswer = num1 * num2;
    //Display the question in HTML
    questionElement.innerHTML = `${num1} x ${num2}`;
}

// 3. Check the given answer
function checkAnswer() {
    //Compare it to the correct answer
    let userAnswer = parseInt(answerElement.value);
    // Check if it is right
    if (userAnswer === correctAnswer) {
        console.log(`Certo: ${userAnswer}`);
        scoreUpdate(1);
        historyLogger(userAnswer,Boolean(true))
    }
    else {
        console.log(`Errado: ${userAnswer}`);
        scoreUpdate(0);
        historyLogger(userAnswer,Boolean(false))
    }
    answerElement.value = '';
    generateQuestion();

}

// 4. Add event listeners to the input
answerElement.addEventListener('keydown', function(event){
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// 5. Updates the score based on users inputs
function scoreUpdate(outcome) {
    // If outcome is 0 subtract 10 points, if outcome is 1 adds 10 points
    // to the overall score
    if (outcome === 1) {
        score =+ score + 10
    }
    else if (outcome === 0) {
        score =+ score - 10;
        if (score <= 0) {
            score = 0
        }
    }
    //Updates the span element
    const scoreText = document.getElementById('score');
    scoreText.innerHTML = score;
}

// 6. Logger
function historyLogger(userAnswer, isCorrect) {
    // Cria o elemento
    const li = document.createElement('li');
    li.textContent = `${questionElement.innerHTML} = ${answerElement.value} ${isCorrect ? '✅' : '❌'}`;
    // li.style.color = isCorrect ? 'green' : 'red';

    // Function to add answer to the list
    answerList.prepend(li);
}


// Do teh shit
generateQuestion();



