// Haalt de button element op door te zoeken naar de class
document.querySelector('.toggleButton').addEventListener('click', function () {
    // Haalt de tekst element op door de class te zoeken
    const verborgenText = document.querySelector('.verborgen, .showing-more');
    const toggleButton = this; // Verwijst naar de knop die werd aangeklikt
    
    // Toggle de klassen voor zichtbaarheid
    verborgenText.classList.toggle('verborgen');
    verborgenText.classList.toggle('showing-more');

        // Verandert de knoptekst
        if (verborgenText.classList.contains('showing-more')) {
            toggleButton.textContent = 'Zie Minder';
        } else {
            toggleButton.textContent = 'Zie Meer';
        }
});