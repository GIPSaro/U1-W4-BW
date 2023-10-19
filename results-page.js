const globalUserPoint = localStorage.getItem("globalUserPoint");

let data = globalUserPoint;
let dataWrong = 10 - data;
if (data == null) {
  data = 0;
}
//console.log(data);

function percent(partialValue, totalValue) {
  return (partialValue / totalValue) * 100;
}
function percentWrong(partialValue, totalValue) {
  return [(totalValue - partialValue) / totalValue] * 100;
}

document.getElementById("percCorr").innerHTML = percent(data, 10) + "%";
document.getElementById("numCorr").innerHTML = data;
document.getElementById("percWrong").innerHTML = percentWrong(data, 10) + "%";
document.getElementById("numWrong").innerHTML = dataWrong;

//qui bisonga impostare l'angolo del colore del grafico in base al risultato
let angolo = dataWrong * 36;
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
stampaResult(percent(data, 10));
