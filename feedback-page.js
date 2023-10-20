let star = document.querySelectorAll("input:not(#comment)");
let showValue = document.querySelector("#rating-value");
let selectedRating = 0;

//logica per la selezione delle stelle di valutazione
for (let i = 0; i < star.length; i++) {
  star[i].addEventListener("click", function () {
    selectedRating = star[i].value;
    showValue.innerText = selectedRating + "/10";
  });

  // al tasto invio per le stelle salvo il punteggio delle stelle
  star[i].addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      selectedRating = star[i].value;
      showValue.innerText = selectedRating + "/10";
    }
  });
}

// al tasto invio per il commento salvo il commento

const commentInput = document.getElementById("comment");
commentInput.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const commentText = commentInput.value.trim();
    // console.log(commentText);

    if (commentText !== "" && selectedRating !== "") {
      //memorizziamo il commento nello storage
      localStorage.setItem("feedbackComment", commentText);
      localStorage.setItem("feedbackRating", selectedRating);
    }
  }
});
