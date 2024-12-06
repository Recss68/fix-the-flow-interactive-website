document.getElementById('toggleButton').addEventListener('click', function () {
    const text = document.getElementById('text');
    if (text.style.display === 'none') {
        text.style.display = 'block';
        this.textContent = 'Zie Minder';
    } else {
        text.style.display = 'none';
        this.textContent = 'Zie Meer';
    }
});