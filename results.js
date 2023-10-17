let torta = document.querySelector(".torta");
torta.style.background =
  "conic-gradient(#D20094 ${angolo}deg, #00ffff ${angolo}deg";

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
  } else {
    let print1 = document.createElement("h3");
    let print2 = document.createTextNode("Unfortunate!");
    print1.appendChild(print2);
    let print3 = document.createElement("h3");
    let print4 = document.createTextNode("You didn't passed the exam");
    print3.appendChild(print4);
    let newP = document.createElement("p");
    let print5 = document.createTextNode(
      "We'll send you the certificate in few minuntes. Check your email(including promotions/spam folder)"
    );
    newP.appendChild(print5);
    print3.appendChild(newP);
    print1.appendChild(print3);
    result.appendChild(print1);
  }
}
