const globalUserPoint = localStorage.getItem("globalUserPoint");
const numberOfQuestions = localStorage.getItem("numberOfQuestions");

const numberOfQuestionsOnHTML = document.querySelectorAll(
  ".number-of-questions"
);

let data = globalUserPoint;
let dataWrong = numberOfQuestions - data;

// if (data == null) {
//   data = 0;
// }
// //console.log(data);

function percent(partialValue, totalValue) {
  const percentNotRounded = (partialValue / totalValue) * 100;
  return percentNotRounded.toFixed(2);
}
function percentWrong(partialValue, totalValue) {
  const percentNotRounded = [(totalValue - partialValue) / totalValue] * 100;
  return percentNotRounded.toFixed(2);
}

//inserisco dinamicamente su quante domande corrette e quante sbagliate a video
numberOfQuestionsOnHTML[0].innerText = numberOfQuestions;
numberOfQuestionsOnHTML[1].innerText = numberOfQuestions;

document.getElementById("percCorr").innerHTML =
  percent(data, numberOfQuestions) + "%";
document.getElementById("numCorr").innerHTML = data;
document.getElementById("percWrong").innerHTML =
  percentWrong(data, numberOfQuestions) + "%";
document.getElementById("numWrong").innerHTML = dataWrong;

console.log(data);

//qui bisogna impostare l'angolo del colore del grafico in base al risultato
let angolo = dataWrong * (360 / numberOfQuestions);
let torta = document.querySelector(".torta");
torta.style.background = `conic-gradient(#d20094 ${angolo}deg , #00ffff ${angolo}deg )`;

const styleSheet = document.styleSheets[0];

console.log(styleSheet);
for (const rule of styleSheet.cssRules) {
  if (rule.selectorText === ".torta::before") {
    rule.style.background = `conic-gradient(#d20094 ${angolo}deg, #00ffff ${angolo}deg )`;
  }
}

let result = document.querySelector("#torta-testo");
function stampaResult(partialValue) {
  if (partialValue >= 60) {
    let duration = 15 * 1000;
    let animationEnd = Date.now() + duration;
    let defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    let interval = setInterval(function () {
      let timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      let particleCount = 50 * (timeLeft / duration);

      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
      });
    }, 250);
    let print1 = document.createElement("h3");
    let print2 = document.createTextNode("Congratulations!");
    print1.appendChild(print2);
    let print3 = document.createElement("h3");

    let print4 = document.createTextNode("You passed the exam");
    print3.appendChild(print4);
    let newP = document.createElement("p");
    let print5 = document.createTextNode(
      "We'll send you the certificate in few minuntes. Check your email(including promotions/spam folder)"
    );
    newP.appendChild(print5);
    print3.appendChild(newP);
    print1.appendChild(print3);
    result.appendChild(print1);
    print1.classList.add("h3Class");
    print3.classList.add("h3SecondClass");
    newP.classList.add("pClass");
  } else {
    let print1 = document.createElement("h3");
    let print2 = document.createTextNode("Unfortunate!");
    print1.appendChild(print2);
    let print3 = document.createElement("h3");
    let print4 = document.createTextNode("You didn't pass the exam");
    print3.appendChild(print4);
    let newP = document.createElement("p");
    let print5 = document.createTextNode(
      "Don't give up, keep studying and practicing until you reach your goal"
    );
    newP.appendChild(print5);
    print3.appendChild(newP);
    print1.appendChild(print3);
    result.appendChild(print1);
    print1.classList.add("h3Class");
    print3.classList.add("h3SecondClass");
    newP.classList.add("pClass");
  }
}
stampaResult(percent(data, numberOfQuestions));
