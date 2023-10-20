const globalUserPoint = localStorage.getItem("globalUserPoint");
const feedbackComment = localStorage.getItem("feedbackComment");
const feedbackRating = localStorage.getItem("feedbackRating");

// otteniamo i riferimenti dal DOM
const feedbackList = document.getElementById("feedbackList");

// const ratingValue = document.getElementById("rating-value");

//creo un elemento della lista e gli assegno il commento
const newFeedback = document.createElement("li");
newFeedback.textContent = `Commento: ${feedbackComment}, Valutazione: ${feedbackRating}`;

//appendo il commento alla lista
feedbackList.appendChild(newFeedback);
