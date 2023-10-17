let star = document.querySelectorAll("input:not(#comment)");
let showValue = document.querySelector("#rating-value");

for (let i = 0; i < star.length; i++) {
  star[i].addEventListener("click", function () {
    i = this.value;
    showValue.innerText = i + "/10";
  });
}
