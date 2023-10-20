const globalUserPoint = localStorage.getItem("globalUserPoint");

// otteniamo i riferimenti dal DOM
const feedbackList = document.getElementById("feedbackList");
ratingValue = document.getElementById("rating-value");

if (comment && rating) {
  const newComment = document.createElement("li");
  newComment.textContent = comment;
  feedbackList.appendChild(newComment);
  ratingValue.textContent = selectedRating + "/10";
}
