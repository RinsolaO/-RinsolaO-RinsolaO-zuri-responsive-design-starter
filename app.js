// Getting NavBar And Toggle Button

const toggleBtn = document.querySelector('.toggle-btn')
const navLinks = document.querySelector('.nav-links')

// Add Event Listener

toggleBtn.addEventListener('click', toggleClick)


function toggleClick (e) {
    
    navLinks.classList.toggle('active')

    e.preventDefault();
}