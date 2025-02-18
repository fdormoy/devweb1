document.querySelectorAll(".addToCart").forEach(function(button){ //parcourir tous les éléments
    button.addEventListener("click", function(){
         // This = le bouton - on redescend au h3 en remontant à l'article
        console.log(this.getAttribute("data-id"));
    });
});