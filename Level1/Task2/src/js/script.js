// Select the menu button and the navbar
const menuBtn = document.getElementById('menu-btn');
const navbar = document.getElementById('navbar');

// Add a click event listener to toggle the visibility of the navbar
menuBtn.addEventListener('click', function() {
  // Toggle the 'hidden' class to show/hide the navbar
  navbar.classList.toggle('hidden');
});
