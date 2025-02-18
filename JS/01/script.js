// Click event

const questionContainer = document.querySelector('.click-event');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
const response = document.querySelector('p');

questionContainer.addEventListener('click', () => {
    questionContainer.classList.toggle('question-clicked');
});
btn1.addEventListener('click', () => {
    response.classList.add('show-response');
    response.style.backgroundColor = 'green';
})
btn2.addEventListener('click', () => {
    response.classList.add('show-response')
    response.style.backgroundColor = 'red';
})
//------------------------------------------------------------

// Mouse events
const mousemove = document.querySelector('.mousemove');

window.addEventListener('mousemove', (e) => {
    mousemove.style.left = e.pageX + 'px';
    mousemove.style.top = e.pageY + 'px';
});

window.addEventListener('mouseup', () => {
    mousemove.style.transform = 'scale(2) translate(-25%, -25%)';
});
window.addEventListener('mousedown', () => {
    mousemove.style.transform = 'scale(1) translate(-50%, -50%)';
    mousemove.style.border = '2px solid teal';
});

questionContainer.addEventListener('mouseenter', () => {
    questionContainer.style.backgroundColor = 'rgba(0, 0, 0, 0.6)';
});

questionContainer.addEventListener('mouseleave', () => {
    questionContainer.style.backgroundColor = 'pink';
});

response.addEventListener('mouseover', () => {
    response.style.transform = 'rotate(2deg)';
});

//------------------------------------------------------------
// KeyPress event

const keypressContainer = document.querySelector('.keypress');
const key = document.getElementById('key');

const ring = () => {
    const audio = new Audio();
    audio.src = './enter.mp3';
    audio.play();
};

document.addEventListener('keypress', (e) => {    
    key.textContent = e.key;
  ring();
});

//------------------------------------------------------------
// Scroll event

const nav = document.querySelector('nav');

window.addEventListener('scroll', () => {    
    if (window.scrollY > 120) {        
        nav.style.top = 0;
    }   else {
        nav.style.top = '-50px';
    }
})

//------------------------------------------------------------
// Input event

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector('select');
const form = document.querySelector('form');
const cgv = document.querySelector('#cgv');
const resultDiv = document.querySelector('form > div');

let pseudo = '';
let language = '';

// Capture la saisie de l'utilisateur pour le pseudo
inputName.addEventListener('input', (e) => {
    pseudo = e.target.value;
});

// Capture la sélection de l'utilisateur pour le langage
select.addEventListener('input', (e) => {
    language = e.target.value;
});

// Gestionnaire de soumission du formulaire
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Vérification des CGV
    if (!cgv.checked) {
        alert('Veuillez accepter les CGV');
        return;
    }

    // Vérification des champs remplis
    if (!pseudo || !language) {
        alert('Veuillez remplir tous les champs');
        return;
    }

    // Affichage des résultats dans le div
    resultDiv.innerHTML = `
        <h3>Pseudo : ${pseudo}</h3>
        <h4>Langage préféré : ${language}</h4>
    `;
});

//------------------------------------------------------------
// Load event

window.addEventListener('load', () => {
    //console.log('Page chargée');
});
// ------------------------------------------------------------
// ForEach
// const boxes = document.getElementsByClassName('box');
const boxes = document.querySelectorAll('.box');

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        box.style.backgroundColor = 'red';
    });
});
//--------------------------------------------------------------
// Stop propagation

questionContainer.addEventListener('click', (e) => {
    alert('Clic sur le conteneur');
    e.stopPropagation();
});

// removeEventListener

//--------------------------------------------------------------
// BOM
// console.log(window.innerHeight);
// console.log(window.innerWidth);
// console.log(window.scrollY);
// console.log(window.scrollX);
// console.log(window.location);
// console.log(window.history);

// window.open('https://google.com', 'cours js' 'height=500, width=500');
// window.close();

btn2.addEventListener('click', () => {
    confirm('Voulez-vous vraiment vous tromper ?');
});

// Prompt
let answer
btn1.addEventListener('click', () => {
    let answer = prompt('Entrez votre pseudo');

    questionContainer.innerHTML += '<h3>Bravo ' + answer + '</h3>';
});

setTimeout(() => {
    // logique à exécuter
    questionContainer.style.borderRadius = '300px';    
}, 5000);

let interval = setInterval(() => {    
    document.body.innerHTML += 
    `
    <div class="box">
    <h2>Je suis une box</h2>
    </div>;    
    `
}, 1000);

document.body.addEventListener('click', () => {
    clearInterval(interval);
});