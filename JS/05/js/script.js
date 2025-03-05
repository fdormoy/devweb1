//Fonction de validation
function formSubmit(event) {
    document
        .getElementById("form")
        .querySelectorAll(".error")
        .forEach(function (divError) {
            divError.classList.remove("error");
            divError.removeChild(divError.querySelector("div"));
        });
    let allValid = true;
    document
        .getElementById("form")
        .querySelectorAll(
            "input[required], textarea[required], select[required]"
        )
        .forEach(function (input) {
            if (input.value == "") {
                input.closest("div").classList.add("error");
                let div = document.createElement("div");
                let text = document.createTextNode(
                    "Attention, champ obligatoire"
                );
                div.appendChild(text);
                input.closest("div").appendChild(div);
                allValid = false;
            }
        });
    // On vérifie que le champ email est bien rempli
    let inputMail = document.getElementById("email");
    if (inputMail.value != "") {
        const regex = new RegExp(
            "^[A-Za-z0-9.-_+]+@[A-Za-z0-9.-]+[.]{1}[A-Za-z0-9]{2,}$",
            "i"
        );
        if (!regex.test(inputMail.value)) {
            inputMail.closest("div").classList.add("error");
            let div = document.createElement("div");
            let text = document.createTextNode("Attention, email non valide");
            div.appendChild(text);
            inputMail.closest("div").appendChild(div);
            allValid = false;
        }
    }
    if (!allValid) {
        event.preventDefault();
    }
}

// Fonction appelée pour chaque évènement désiré
document.getElementById("form").addEventListener("submit", formSubmit);
document.getElementById("btn").addEventListener("click", formSubmit);
