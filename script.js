
var button = document.getElementById('Switch-theme');
var icon = document.getElementById('theme-icon');

button.onclick = function() {
    document.body.classList.toggle('dark-mode');

    if (document.body.classList.contains('dark-mode')) {
        icon.src = './img/day.png';  
    } else {
        icon.src = './img/night.png';  
    }
};

