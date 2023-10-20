let star = document.querySelectorAll("input:not(#comment)");
let showValue = document.querySelector("#rating-value");

//logica per la selezione delle stelle di valutazione
for (let i = 0; i < star.length; i++) {
  star[i].addEventListener("click", function () {
    i = this.value;
    showValue.innerText = i + "/10";
  });
}

const form = document.getElementById("feedback-comment");

//evitiamo il comportamento di default del form alla pressione del tasto "enter"
const inputComment = document.getElementById("comment");
inputComment.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    e.preventDefault();
    form.reset();
    showValue.innerText = "";
  }
});
