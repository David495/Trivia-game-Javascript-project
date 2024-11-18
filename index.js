const questions = [
    {questions: "What is the capital of France?", answer: "paris"},
    {questions: "Which planet is known as the Red planet?", answer: "mars"},
    {questions: "What gas do planets absorb from the athmosphere ?", answer: "carbon"},
    {questions: "Who is the richest man in the World ?", answer: "Elon Musk"}, 
    {questions: "What is Html used for ?", answer: "strucure"},
    {questions: "What is the full meaning of CSS ?", answer: "cascading stylesheet"},
    {questions: "What is CSS used for ?", answer: "styling "},
    {questions: "What is div for in Html?", answer: "division"},
    {questions: "How do you start a javascript file ?", answer: ".js"},
    {questions: "How do you start a Html file ?", answer: ".html"},   
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