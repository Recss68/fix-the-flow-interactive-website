// Haalt de button element op door te zoeken naar ID | Maak de click function
document.getElementById('toggleButton').addEventListener('click', function () {
    // Haalt de text element op door te zoeken naar de ID
    const verborgenText = document.getElementById('text');
    if (verborgenText.style.display === 'none') {
        // Zet de diplay styling naar block, dus het wordt getoond
        verborgenText.style.display = 'block';
        // Past de button content aan
        this.textContent = 'Zie Minder';
    } else {
        // Zet de diplay styling naar none, dus er wordt niet getoond
        verborgenText.style.display = 'none';
        // Behoud de button content
        this.textContent = 'Zie Meer';
    }
});