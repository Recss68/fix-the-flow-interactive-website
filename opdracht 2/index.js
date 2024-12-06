// Haalt de button element op door te zoeken naar ID | Maak de click function
document.querySelector('.toggleButton').addEventListener('click', function () {
    // Haalt de text element en classes op
    let verborgenText = document.querySelector('.verborgen, .showing-more');
    
    // Toggle de zichtbaarheid van de tekst door classes te wisselen
    if (verborgenText.classList.contains('verborgen')) {
        // Verwijdert de class verborgen
        verborgenText.classList.remove('verborgen');
        // Voegt de class showing-more toe en maakt de text zichtbaar
        verborgenText.classList.add('showing-more');
    } else if (verborgenText.classList.contains('showing-more')) {
        // Verwijdert de class showing-more
        verborgenText.classList.remove('showing-more');
        // Voegt de class verborgen toe, dus de text verdwijnt      
        verborgenText.classList.add('verborgen');
    }
});