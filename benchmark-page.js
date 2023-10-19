//Domande
const questions = [
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "What does CPU stand for?",
    correct_answer: "Central Processing Unit",
    incorrect_answers: [
      "Central Process Unit",
      "Computer Personal Unit",
      "Central Processor Unit"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the programming language Java, which of these keywords would you put on a variable to make sure it doesn't get modified?",
    correct_answer: "Final",
    incorrect_answers: ["Static", "Private", "Public"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "The logo for Snapchat is a Bell.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question:
      "Pointers were not used in the original C programming language; they were added later on in C++.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the most preferred image format used for logos in the Wikimedia database?",
    correct_answer: ".svg",
    incorrect_answers: [".png", ".jpeg", ".gif"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "In web design, what does CSS stand for?",
    correct_answer: "Cascading Style Sheet",
    incorrect_answers: [
      "Counter Strike: Source",
      "Corrective Style Sheet",
      "Computer Style Sheet"
    ]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the code name for the mobile operating system Android 7.0?",
    correct_answer: "Nougat",
    incorrect_answers: ["Ice Cream Sandwich", "Jelly Bean", "Marshmallow"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question: "On Twitter, what is the character limit for a Tweet?",
    correct_answer: "140",
    incorrect_answers: ["120", "160", "100"]
  },
  {
    category: "Science: Computers",
    type: "boolean",
    difficulty: "easy",
    question: "Linux was first created as an alternative to Windows XP.",
    correct_answer: "False",
    incorrect_answers: ["True"]
  },
  {
    category: "Science: Computers",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which programming language shares its name with an island in Indonesia?",
    correct_answer: "Java",
    incorrect_answers: ["Python", "C", "Jakarta"]
  }
];

// TIPS:
// SE MOSTRI TUTTE LE RISPOSTE ASSIEME IN FORMATO LISTA:
// Per ogni domanda, crea un container e incorporale tutte all'interno.
// Crea poi dei radio button
// https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/radio
// con le risposte corrette e incorrette come opzioni
// (dovrai probabilmente cercare su un motore di ricerca come ottenere un valore da un radio button in JS per ottenere il punteggio finale)
//
// SE MOSTRI UNA DOMANDA ALLA VOLTA:
// Mostra la prima domanda con il testo e i radio button.
// Quando l'utente seleziona una risposta, passa alla domanda successiva dell'array e sostituisci quella precedentemente visualizzata con quella corrente,
// salvando le risposte dell'utente in una variabile

// Come calcolare il risultato? Hai due strade:
// Se stai mostrando tutte le domande nello stesso momento, controlla semplicemente se i radio button selezionati sono === correct_answer
// Se stai mostrando una domanda alla volta, aggiungi semplicemente un punto alla variabile del punteggio che hai precedentemente creato SE la risposta selezionata è === correct_answer

// BUON LAVORO 💪🚀

//EXTRA 3
async function logMovies() {
  const response = await fetch(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium"
  );
  const movies = await response.json();
  console.log(movies);
}

logMovies();

//FINE EXTRA 3

window.onload = function () {
  appendQuestionToPage(questionInfo);
  startTimer();
};
//timer
const FULL_DASH_ARRAY = 283;
const WARNING_THRESHOLD = 10;
const ALERT_THRESHOLD = 5;

const COLOR_CODES = {
  info: {
    color: "white"
  },
  warning: {
    color: "orange",
    threshold: WARNING_THRESHOLD
  },
  alert: {
    color: "red",
    threshold: ALERT_THRESHOLD
  }
};

const TIME_LIMIT = 60;
let timePassed = 0;
let timeLeft = TIME_LIMIT;
let timerInterval = null;
let remainingPathColor = COLOR_CODES.info.color;

document.getElementById("timer").innerHTML = `
<div class="base-timer">
  <svg class="base-timer__svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
    <g class="base-timer__circle">
      <circle class="base-timer__path-elapsed" cx="50" cy="50" r="45"></circle>
      <path
        id="base-timer-path-remaining"
        stroke-dasharray="283"
        class="base-timer__path-remaining ${remainingPathColor}"
        d="
          M 50, 50
          m -45, 0
          a 45,45 0 1,0 90,0
          a 45,45 0 1,0 -90,0
        "
      ></path>
    </g>
  </svg>
  <span id="seconds">SECONDS</span>
  <span id="base-timer-label" class="base-timer__label">
  
  ${formatTime(timeLeft)}</span>
  <span id="remaining-text">REMAINING</span>
</div>
`;

//quando il tempo finisce azzera il timer e vai alla prossima domanda
function onTimesUp() {
  clearInterval(timerInterval);
  goToNewQuestion();
}

function startTimer() {
  timerInterval = setInterval(() => {
    timePassed += 1;
    timeLeft = TIME_LIMIT - timePassed;
    document.getElementById("base-timer-label").innerHTML =
      formatTime(timeLeft);
    setCircleDasharray();
    setRemainingPathColor(timeLeft);

    if (timeLeft === 0) {
      onTimesUp();
    }
  }, 1000);
}

function formatTime(time) {
  //const minutes = Math.floor(time / 60);
  let seconds = time % 60;

  if (seconds < 10) {
    seconds = `0${seconds}`;
  }

  //return `${minutes}:${seconds}`;
  return seconds;
}

function setRemainingPathColor(timeLeft) {
  const { alert, warning, info } = COLOR_CODES;
  if (timeLeft <= alert.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(warning.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(alert.color);
  } else if (timeLeft <= warning.threshold) {
    document
      .getElementById("base-timer-path-remaining")
      .classList.remove(info.color);
    document
      .getElementById("base-timer-path-remaining")
      .classList.add(warning.color);
  }
}

function calculateTimeFraction() {
  const rawTimeFraction = timeLeft / TIME_LIMIT;
  return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
}

function setCircleDasharray() {
  const circleDasharray = `${(
    calculateTimeFraction() * FULL_DASH_ARRAY
  ).toFixed(0)} 283`;
  document
    .getElementById("base-timer-path-remaining")
    .setAttribute("stroke-dasharray", circleDasharray);
}

//imposto un punteggio globale dell'utente
let globalUserPoint = 0;

//imposto il counter di domande alla prima domanda
let questionNumber = 0;

//mostro a video a quale domanda siamo arrivati
const questionCounter = document.getElementById("question-counter");

const increaseCounterOfQuestions = function () {
  questionCounter.innerText = questionNumber + 1;
};

//pesco l'oggetto contenente la domanda
const getQuestion = function () {
  const question = questions[questionNumber];
  return question;
};

const questionInfo = getQuestion();
//console.log(questionInfo);

//pesco il contenitore dei counter delle domande
const counterContainer =
  document.getElementsByClassName("counter-container")[0];

//pesco il contenitore del timer
const timerContainer = document.getElementById("timer");

//pesco il contenitore delle risposte
const answersContainer = document.getElementsByClassName("answers")[0];
//console.log(answersContainer);

//appendo alla pagina la domanda dinamicamente
const appendQuestionToPage = function (questionInfo) {
  //svuoto il container di answer
  answersContainer.innerText = "";
  //pesco la domanda dall'array di domande
  const questionToAppend = questionInfo.question;

  //mostro la domanda
  const questionHtml = document.getElementById("question");
  questionHtml.innerText = questionToAppend;
  //console.log(questionToAppend);

  //pesco la risposta corretta
  const correctAnswer = questionInfo.correct_answer;
  //console.log(correctAnswer);

  //creo il bottone che conterrà la risposta corretta e gli do un id
  const correctAnswerButton = document.createElement("button");
  correctAnswerButton.setAttribute("id", "correctAnswer");
  correctAnswerButton.style.display = "none";
  correctAnswerButton.innerText = correctAnswer;
  //appendo il bottone con la risposta al contenitore di risposte
  answersContainer.appendChild(correctAnswerButton);

  //pesco le risposte errate e appendo le risposte errate al contenitore di risposte
  const incorrect_answers = questionInfo.incorrect_answers;

  //inserisco la risposta corretta nell'array delle risposte sbagliate
  //in un punto random dell'array
  // console.log(incorrect_answers);
  // console.log(correctAnswer);
  const correctAnswerPosition = Math.floor(
    Math.random() * incorrect_answers.length
  );
  incorrect_answers.splice(correctAnswerPosition, 0, correctAnswer);
  // console.log(incorrect_answers);
  // console.log(correctAnswerPosition);

  incorrect_answers.forEach((element) => {
    const wrongAnswer = document.createElement("button");
    wrongAnswer.classList.add("answer");
    wrongAnswer.innerText = element;
    answersContainer.appendChild(wrongAnswer);
  });
  return correctAnswer;
};

//mostra pagina del risultati
const showResultsPage = function () {
  const url = "./results-page.html";
  localStorage.setItem("globalUserPoint", globalUserPoint);
  window.location.href = url;
};

//spostarsi sulla nuova domanda
const goToNewQuestion = function () {
  //resetto il timer prima ad ogni domanda
  console.log("Reset TIMER");
  clearInterval(timerInterval);
  questionNumber++;
  if (questionNumber > questions.length - 1) {
    //console.log(questionNumber);
    showResultsPage();
  } else {
    appendQuestionToPage(getQuestion());
    increaseCounterOfQuestions();
    //resetto il timer ad ogni nuova risposta
    timePassed = 0;
    startTimer();
  }
};

//selezione della risposta
const selectAnswerAndChangeButtonColor = function (element) {
  //check per vedere se ci sono altre risposte che sono già selezionate
  //e le deseleziono
  const allSelectedAnswers = document.querySelectorAll(".selectedAnswer");
  //console.log(allSelectedAnswers);
  allSelectedAnswers.forEach((element) => {
    element.classList.remove("selectedAnswer");
  });
  //seleziono la risposta cliccata
  element.classList.add("selectedAnswer");
  console.log("Hai selezionato la risposta", element.innerText);
};

const checkIfTheAnswerIsCorrect = function (element) {
  // console.log(element.innerText);
  // console.log(correctAnswer.innerText);
  if (element.innerText === correctAnswer.innerText) {
    globalUserPoint++;
    sendPositivePopupFeedbackForTheAnswer();
    //console.log("Risposta corretta!");
  } else {
    sendNegativePopupFeedbackForTheAnswer();
    //console.log("Risposta errata");
  }
  goToNewQuestion();
};

answersContainer.addEventListener("click", (e) => {
  const element = e.target;
  selectAnswerAndChangeButtonColor(element);
  checkIfTheAnswerIsCorrect(element);
});

//EXTRA
//popup per il feedback sulla risposta corretta o errata

const mainContainer = document.getElementsByClassName("container")[0];
const alertMessageForAnswer = document.getElementById("alertMessageForAnswer");
const popupMessage = document.createElement("h5");

const removeShowedPopup = function () {
  alertMessageForAnswer.style.display = "none";
};

//resetto il valore display a none
removeShowedPopup();

//mostro il popup "RISPOSTA CORRETTA" in caso di risposta corretta
const sendPositivePopupFeedbackForTheAnswer = function () {
  popupMessage.innerText = "";

  alertMessageForAnswer.classList.remove("wrong-popup");
  alertMessageForAnswer.classList.add("correct-popup");

  popupMessage.classList.add("popup-text");

  const icon = document.createElement("i");
  icon.classList.add("far");
  icon.classList.add("fa-check-circle");
  popupMessage.innerText = "Risposta Corretta ";
  popupMessage.appendChild(icon);

  alertMessageForAnswer.appendChild(popupMessage);

  alertMessageForAnswer.style.display = "inline-block";
  setTimeout(removeShowedPopup, 1000);
};

//mostro il popup "RISPOSTA ERRATA" in caso di risposta errata
const sendNegativePopupFeedbackForTheAnswer = function () {
  popupMessage.innerText = "";

  alertMessageForAnswer.classList.remove("correct-popup");
  alertMessageForAnswer.classList.add("wrong-popup");

  popupMessage.classList.add("popup-text");

  const icon = document.createElement("i");
  icon.classList.add("far");
  icon.classList.add("fa-times-circle");
  popupMessage.innerText = "Risposta Errata ";
  popupMessage.appendChild(icon);

  alertMessageForAnswer.appendChild(popupMessage);

  alertMessageForAnswer.style.display = "inline-block";
  setTimeout(removeShowedPopup, 1000);
};
