function showModInfo(modId) {
    // Alle Mod-Info-Inhalte ausblenden
    const modContents = document.querySelectorAll('.mod-info-content');
    modContents.forEach(content => {
        content.classList.remove('active');
    });

    // Alle Tab-Buttons zurücksetzen
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(button => {
        button.classList.remove('active');
    });

    // Den entsprechenden Mod-Inhalt anzeigen
    const activeMod = document.getElementById(modId);
    if (activeMod) {
        activeMod.classList.add('active');
    }

    // Den entsprechenden Tab-Button aktivieren
    const activeTabButton = Array.from(tabButtons).find(button => {
        return button.innerText.toLowerCase().includes(modId.replace('-', ' ').toLowerCase());
    });
    if (activeTabButton) {
        activeTabButton.classList.add('active');
    }
}

// Standardmäßig die erste Mod anzeigen
document.addEventListener("DOMContentLoaded", function() {
    showModInfo('fury-reach');
});
