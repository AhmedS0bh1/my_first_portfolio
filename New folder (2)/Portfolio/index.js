// Toggle dark theme
function toggleTheme() {
    document.documentElement.classList.toggle('dark');
}

// Add to a button
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);
