// Haalt de button element op door te zoeken naar ID | Maak de click function
document.getElementById('toggleButton').addEventListener('click', function () {
    // Haalt de text element op door te zoeken naar de ID
    const text = document.getElementById('text');
    if (text.style.display === 'none') {
        // Zet de diplay styling naar block, dus het wordt getoond
        text.style.display = 'block';
        // Past de button content aan
        this.textContent = 'Zie Minder';
    } else {
        // Zet de diplay styling naar none, dus er wordt niet getoond
        text.style.display = 'none';
        // Behoud de button content
        this.textContent = 'Zie Meer';
    }
});