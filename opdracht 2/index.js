// Haalt de button element op door te zoeken naar de class
document.querySelector('.toggleButton').addEventListener('click', function () {
    // Haalt de tekst element op door de class te zoeken
    const verborgenText = document.querySelector('.verborgen, .showing-more');
    
    // Toggle de klassen voor zichtbaarheid
    verborgenText.classList.toggle('verborgen');
    verborgenText.classList.toggle('showing-more');
});