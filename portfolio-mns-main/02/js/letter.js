function typeWriter(id, text, speed = 100) {
    const element = document.getElementById(output);
    let index = 0;

    // Fonction récursive pour écrire lettre par lettre
    function writeCharacter() {
        if (index < text.length) {
            element.textContent += text[index];
            index++;
            setTimeout(writeCharacter, speed);
        }
    }
}
