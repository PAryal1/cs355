// Toggle dark-light theme
const toggleBtn = document.getElementById('toggle');

// Retrieve the current theme from localStorage
let currentTheme = localStorage.getItem('theme');

// Apply the saved theme on page load
if (currentTheme === 'Dark') {
    document.documentElement.setAttribute('theme', 'dark');
    toggleBtn.innerText = 'Light'; 
} else {
    document.documentElement.removeAttribute('theme');
    toggleBtn.innerText = 'Dark'; 
}

// event listener for toggling the theme
toggleBtn.addEventListener('click', e => {
   
    currentTheme = localStorage.getItem('theme');

    if (currentTheme === 'Dark') {
      
        document.documentElement.removeAttribute('theme');
        toggleBtn.innerText = 'Dark';
        localStorage.setItem('theme', 'Light');
    } else {
     
        document.documentElement.setAttribute('theme', 'dark');
        toggleBtn.innerText = 'Light';
        localStorage.setItem('theme', 'Dark');
    }
});
