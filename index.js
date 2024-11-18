const questions = [
    {questions: "What is the capital of France?", answer: "paris"},
    {questions: "Which planet is known as the Red planet?", answer: "mars"},
    {questions: "What gas do planets absorb from the athmosphere ?", answer: "carbon"},
]

let score = 0

for (let i = 0; i < questions.length; i++) {
    let userAnswer = prompt(questions[i].questions);
}

if (userAnswer.toLowerCase() === questions[i].answer){
    scoe++;
    alert("Correct!");
} else {
    alert("Incorrect. The correct answer is" + questions[i].answer +".");
}

alert("Game over! You scored" + score + "out of" + questions.length);