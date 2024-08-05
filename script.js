// script.js

document.addEventListener('DOMContentLoaded', function() {
    const element1 = document.getElementById('element1');
    const element2 = document.getElementById('element2');
    const button = document.getElementById('interactiveButton');

    button.addEventListener('click', function() {
        element1.style.transform = 'translateX(100px) rotate(45deg)';
        element2.style.transform = 'translateY(-100px) scale(1.5)';
    });
});


