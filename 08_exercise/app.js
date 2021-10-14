const questions = [{
        id: 1,
        question: "What does CSS stand for? ",
        answer1: "Cascading Style Sheets",
        answer2: "Colorful Style Sheets",
        answer3: "Computer Style Sheets",
        correctAnswer: "Cascading Style Sheets",
    },
    {
        id: 2,
        question: "Where is the correct place to insert a JavaScript?",
        answer1: "Head ",
        answer2: "Body",
        answer3: "Head and Body",
        correctAnswer: "Header",
    },
    {
        id: 3,
        question: "Which HTML tag is used to define an internal style sheet?",
        correctAnswer: "script",
        answer2: "style",
        answer3: "css",
        answer1: "javascript",
    },
    {
        id: 4,
        question: "Where in your HTML document should you include the code <!DOCTYPE html>?",
        correctAnswer: "first line ",
        answer2: "body section",
        answer3: "doesn't matter ",
        answer1: "last line",
    },
    {
        id: 5,
        question: "Which tag is used to enclose a paragraph?",
        answer1: "text tag",
        answer2: "paragraph tag",
        answer3: "par tag ",
        correctAnswer: "p tag",
    },
];

function selector(element) {
    return document.querySelector(element);
}
const button = selector("#button");
const questionSection = selector("#main");

button.addEventListener("click", showList);

let questionNumber = 0;
let point = 0;

function getRandomQuestion() {
    let question = questions[Math.floor(Math.random() * questions.length)];
    return question;
}

function showList() {
    questionNumber = questionNumber + 1;
    let question = getRandomQuestion();
    if (questionNumber <= 5) {
        questionSection.innerHTML = `
        <h3>Question ${questionNumber} of 5</h3>
        <p>${question.question}</p>

        <ul id="answer-list">
            <li>
                <input type="radio" name="answer" id="${question.answer1}">
                <label for="${question.answer1}">${question.answer1}</label>
            </li>
            <li>
                <input type="radio" name="answer" id="${question.answer2}">
                <label for="${question.answer2}">${question.answer2}</label>
            </li>
            <li>
                <input type="radio" name="answer" id="${question.answer3}">
                <label for="${question.answer3}">${question.answer3}</label>
            </li>
            <li>
                <input type="radio" name="answer" id="${question.correctAnswer}">
                <label for="${question.correctAnswer}">${question.correctAnswer}</label>
            </li>
        </ul>
  `;
    } else {
        button.textContent = "Finish";
        if (point > 39) {
            questionSection.innerHTML = `
        <h3>Good Job! Your Point is ${point}</h3>
        `;
        } else if (point > 19 && point < 39) {
            questionSection.innerHTML = `
            <h3>It is Ok. But You need to study! Your Point is ${point}</h3>
            `;
        } else {
            questionSection.innerHTML = `
            <h3>You have a bad day. Your Point is ${point}</h3>
            `;
        }
    }
    let checkboxes = document.querySelectorAll('[type="radio"]');

    for (let index = 0; index < checkboxes.length; index++) {
        checkboxes[index].addEventListener("change", checkAnswer);
    }

    function checkAnswer() {
        let questionID = this.id;
        if (questionID === question.correctAnswer) {
            point = point + 10;
            return (selector(
                "#answer-list"
            ).innerHTML = `<h3 class="correct-answer">Correct answer </h3>`);
        } else {
            return (selector(
                "#answer-list"
            ).innerHTML = `<h3 class="wrong-answer"> Wrong answer </h3>`);
        }
    }
}