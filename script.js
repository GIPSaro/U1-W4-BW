window.onload = () => {
  //pesco gli elementi dal DOM
  const checkboxAcceptance = document.getElementById("checkboxAcceptance");
  const proceedButton = document.getElementById("proceedButton");

  //rendo incliccabile il bottone
  proceedButton.disabled = true;

  //controllo se la checkbox di accettazione sia cliccata
  //e in caso di esito positivo attivo il pulsante
  checkboxAcceptance.addEventListener("change", function () {
    if (checkboxAcceptance.checked) {
      //riattivo il bottone
      proceedButton.disabled = false;
      console.log("Checkbox spuntata");
    } else {
      //spengo il bottone
      proceedButton.disabled = true;
      console.log("Checkbox non spuntata");
    }
  });
};
