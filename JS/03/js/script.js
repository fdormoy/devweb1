document.getElementById("displayModal").addEventListener("click", function(){
    document.getElementById("modal").style.display="flex";
    document.querySelector("#modal > div").focus(); //l'élément devient focusable
});

document.getElementById("closeModal").addEventListener("click", function(){
    document.getElementById("modal").style.display="none";
});

document.getElementById("backModal").addEventListener("focus", function(){
    document.querySelector("#modal > div").focus(); // Laisse le focus dans le fenêtre modale en tabulant
})