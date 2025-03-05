document.getElementById("form").addEventListener("submit", function (event) {
  let allValid = true;
  let inputArray = ["#name", "#email", "#password", "#password-confirm"];
  for (let inputId of inputArray) {
    // for - of est l'équivalent d'un foreach
    let input = this.querySelector(inputId);
    if (input.value == "") {
      input.closest("div").classList.add("error");
      let div = document.createElement("div");
      let text = document.createTextNode("Attention, champ obligatoire");
      div.appendChild(text);
      input.closest("div").appendChild(div);
      allValid = false;
    }
    if (!allValid) {
      event.preventDefault();
    }
  }
});
