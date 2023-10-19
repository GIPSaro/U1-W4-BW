window.onload = () => {
  //pesco gli elementi dal DOM
  const checkboxAcceptance = document.getElementById("checkboxAcceptance");
  const proceedButton = document.getElementById("proceedButton");

  //rendo incliccabile il bottone
  proceedButton.disabled = true;
  proceedButton.classList.add("not-clickable-button");

  //controllo se la checkbox di accettazione sia cliccata
  //e in caso di esito positivo attivo il pulsante
  checkboxAcceptance.addEventListener("change", function () {
    if (checkboxAcceptance.checked) {
      //riattivo il bottone
      proceedButton.disabled = false;
      proceedButton.classList.remove("not-clickable-button");
      proceedButton.classList.add("clickable-button");
      console.log("Checkbox spuntata");
    } else {
      //spengo il bottone
      proceedButton.classList.remove("clickable-button");
      proceedButton.classList.add("not-clickable-button");
      proceedButton.disabled = true;
      console.log("Checkbox non spuntata");
    }
  });

  proceedButton.addEventListener("click", function () {
    const url = "./benchmark-page.html";
    window.location.href = url;
  });
};
