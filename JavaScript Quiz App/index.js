const questions = [
  {
    question: "Which is the most used programming language in 2023?",
    answers: [
      { option: "Java", correct: false },
      { option: "Python", correct: false },
      { option: "Javascript", correct: true },
      { option: "PHP", correct: false },
    ],
  },
  {
    question: "Which is the capital city of Türkiye?",
    answers: [
      { option: "Ankara", correct: true },
      { option: "Antalya", correct: false },
      { option: "Batman", correct: false },
      { option: "Adana", correct: false },
    ],
  },
  {
    question: "Which is the traditional dish of Türkiye?",
    answers: [
      { option: "Paella", correct: false },
      { option: "Pasta", correct: false },
      { option: "Risotto", correct: false },
      { option: "Kebap", correct: true },
    ],
  },
  {
    question: "How many states are there in the U.S?",
    answers: [
      { option: 234, correct: false },
      { option: 12, correct: false },
      { option: 5, correct: false },
      { option: 50, correct: true },
    ],
  },
];

const questionElement = document.querySelector(".question h3");
const answerButtons = document.querySelector(".options");
const nextButton = document.querySelector("#next-button");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = "Next";
  showQuestion();
}

function showQuestion() {
  resetPage();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNumber = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNumber + ". " + currentQuestion.question;
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.innerHTML = answer.option;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

function resetPage() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

function selectAnswer(e) {
  const selectedOption = e.target;
  const isCorrect = selectedOption.dataset.correct === "true";
  console.log(selectedOption);
  if (isCorrect) {
    selectedOption.classList.add("correct");
    score++;
  } else {
    selectedOption.classList.add("wrong");
  }
  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

function showScore() {
  resetPage();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    startQuiz();
  }
});

startQuiz();
