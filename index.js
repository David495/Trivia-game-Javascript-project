const questions = [
    { question: "What is the capital of France?", answer: "paris" },
    { question: "Which planet is known as the Red planet?", answer: "mars" },
    { question: "What gas do plants absorb from the atmosphere?", answer: "carbon" },
    { question: "How many planets do we have?", answer: "9" },
    { question: "What is the name of the first planet?", answer: "mercury" },
    { question: "What is the name of the gas that human beings breathe?", answer: "oxygen" },
    { question: "What is CSS used for?", answer: "styling" },
    { question: "What is div for in HTML?", answer: "division" },
    { question: "The act of writing code for servers and applications is called?", answer: "coding" },
    { question: "What is the name of the third planet?", answer: "earth" }
];

let score = 0; // Initialize the score

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i].question); // Ask the question

    // Check the answer (case-insensitive)
    if (userAnswer.toLowerCase() === questions[i].answer) {
        score++; // Increment score if correct
        alert("Correct!"); // Feedback
    } else {
        alert("Incorrect. The correct answer is " + questions[i].answer + "."); // Feedback
    }
}

// Display the final score
alert("Game over! You scored " + score + " out of " + questions.length + ".");
