window.onload = function () {
  const slider = document.getElementById("myRange");
  const output = document.getElementById("slider-value");
  output.innerText = slider.value; // Display the default slider value

  // Update the current slider value (each time you drag the slider handle)
  slider.oninput = function () {
    output.innerText = this.value;
    sliderValue = output.innerText;
    return sliderValue;
  };
  //pesco i dati dal form

  const form = document.getElementById("user-form");
  const difficulty = document.getElementsByTagName("input");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    console.log(sliderValue);
    const numberOfQuestions = sliderValue;

    localStorage.setItem("numberOfQuestions", numberOfQuestions);

    for (i = 0; i < difficulty.length; i++) {
      if ((difficulty[i].type = "radio")) {
        if (difficulty[i].checked) {
          const difficultyValue = difficulty[i].value;
          console.log(difficultyValue);
          localStorage.setItem("difficultyValue", difficultyValue);

          //cambio pagina una volta avuti i dati
          const url = "./benchmark-page.html";
          window.location.href = url;
        }
      }
    }

    form.reset();

    // handle submit
  });
};
