// 1. Get references to HTML questions
let questionElement = document.getElementById('question');
let answerElement = document.getElementById('answer');

// Variables to store the current question and answer
let num1, num2, correctAnswer;

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
    const userAnswer = parseInt(answerElement.value);
    // Check if it is right
    if (userAnswer === correctAnswer) {
        console.log(`Certo: ${userAnswer}`);
    }
    else {
        console.log(`Errado: ${userAnswer}`);
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


//5. Do teh shit
generateQuestion();

