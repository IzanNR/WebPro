const words = ["page!", "site!", "blog!"];
let index = 0;

function changeText() {
    const dynamicText = document.getElementById('dynamic-text');
    dynamicText.textContent = words[index];
    index = (index + 1) % words.length;
}

setInterval(changeText, 1500); // 1.5 Sec


let currentTheme = localStorage.getItem('theme');

if (currentTheme === 'dark') {
    document.body.classList.add('dark-mode');
    document.getElementById('theme-toggle').checked = true;
} else {
    document.body.classList.remove('dark-mode');
}

document.getElementById('theme-toggle').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
    } else {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    }
});

// Hamburger menu toggle logic
const hamburgerMenu = document.getElementById('hamburger-menu');
const navLinks = document.getElementById('nav-links');

hamburgerMenu.addEventListener('click', function() {
    navLinks.classList.toggle('show');
});