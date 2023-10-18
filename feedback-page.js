let star = document.querySelectorAll("input:not(#comment)");
let showValue = document.querySelector("#rating-value");

let rating = 0;

for (let i = 0; i < star.length; i++) {
  star[i].addEventListener("click", function () {
    i = this.value;
    showValue.innerText = i + "/10";
    rating = i;
  });
}

//Per salvare risposte del campo form:

//ottengo riferimento all'input del commento con l'Id
const commentInput = document.getElementById("comment");
const ratingInput = document.getElementById("rating-value");
//ottnego il form HTML tramite l'ID
const feedbackForm = document.getElementById("feedback-comment");

//creo un array per memorizzare i dati del form
const feedbackData = [];

//creare oggetto con risposte
const feedbackObject = {
  comment: "",
  rating: "",
};

const pushFeedbackInArray = (comments, rating) => {
  feedbackObject.comment = comments;
  feedbackObject.rating = rating;
  console.log(feedbackObject);

  //aggiungo oggetto all'array
  feedbackData.push(feedbackObject);

  console.log(feedbackData);
};

//aggiungo un eventListener per gestire l'input
commentInput.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    e.preventDefault(); //per evitare comportamento predefinito del form
    //console.log(feedbackObject);
    //ottenere risposte dal modulo
    const comments = commentInput.value;

    console.log(comments, rating);
    pushFeedbackInArray(comments, rating);
  }
});

//console.log();
