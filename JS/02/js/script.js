// Cible un élément par son id (à préférer en terme de performance)
document.getElementById('btn').addEventListener("click", function() {
    console.log("l_o_l");

    let h1 = document.querySelector("h1");
    h1.innerText="Bonjour";
    // h1.style.color = "#FF0000";
    // h1.style.fontWeight="normal";
    h1.classList.toggle("error");

});

document.addEventListener("click", function() {
    let li=document.createElement("li");
    let text=document.createTextNode("Nouvelle tache");
    li.appendChild(text);
    document.getElementById("list").appendChild(li);
});







