// Sélection du panier
const cartItemsList = document.querySelector("#cartItems");
const totalPriceElement = document.querySelector("#totalPrice");

// Initialisation du panier
let cart = {};

// Fonction pour afficher le panier
function displayCart() {
    cartItemsList.innerHTML = ""; // On vide la liste avant de la remplir
    let totalPrice = 0;

    Object.values(cart).forEach(item => {
        let li = document.createElement("li");
        li.innerHTML = `${item.name} x ${item.quantity} - ${item.totalPrice.toFixed(2)} €`;
        
        // Ajout bouton de suppression
        let removeBtn = document.createElement("button");
        removeBtn.textContent = "❌";
        removeBtn.classList.add("removeFromCart");
        removeBtn.dataset.id = item.id;
        removeBtn.addEventListener("click", function () {
            removeFromCart(item.id);
        });

        li.appendChild(removeBtn);
        cartItemsList.appendChild(li);

        totalPrice += item.totalPrice; // On ajoute au total
    });

    // Vérification avant d'appliquer .toFixed(2)
    totalPriceElement.textContent = `Total : ${totalPrice ? totalPrice.toFixed(2) : "0.00"} €`;
}

// Fonction pour ajouter un article au panier
document.querySelectorAll(".addToCart").forEach(button => {
    button.addEventListener("click", function () {
        let id = this.getAttribute("data-id");
        let name = this.parentElement.querySelector("h3").textContent;
        let price = parseFloat(this.parentElement.querySelector(".price").textContent.replace(",", "."));

        if (!cart[id]) {
            cart[id] = { id, name, price, quantity: 1, totalPrice: price };
        } else {
            cart[id].quantity++;
            cart[id].totalPrice += price;
        }

        displayCart();
    });
});

// Fonction pour retirer un article du panier
function removeFromCart(id) {
    if (cart[id]) {
        cart[id].quantity--;
        cart[id].totalPrice -= cart[id].price;

        if (cart[id].quantity <= 0) {
            delete cart[id]; // Suppression si quantité = 0
        }
    }
    displayCart();
}
