function updateOpeningStatus() {
    const now = new Date();
    const hours = now.getHours();
    const statusBadge = document.querySelector('.status-badge');
  
    if (hours >= 9 && hours < 17) {
      statusBadge.textContent = 'Open Now';
      statusBadge.classList.remove('closed');
      statusBadge.style.backgroundColor = '#4CAF50';
    } else {
      statusBadge.textContent = 'Closed Now';
      statusBadge.classList.add('closed');
      statusBadge.style.backgroundColor = '#f44336';
    }
  }
  window.addEventListener('DOMContentLoaded', updateOpeningStatus);
  

  document.querySelectorAll('.ticket-card button').forEach(button => {
    button.addEventListener('click', () => {
      alert("Your ticket has been selected. Please go to payment.");
    });
  });
  
  
// Dark mode functionality
let dark = localStorage.getItem('dark');
const themeSwitch = document.getElementById('theme-switch');

const enableDark = () => {
    document.body.classList.add('dark');
    localStorage.setItem('dark', 'active');
}

const disableDark = () => {
    document.body.classList.remove('dark');
    localStorage.setItem('dark', null);
}

// Initialize theme based on localStorage
if (dark === 'active') {
    enableDark();
}

// Add click event listener
themeSwitch.addEventListener('click', () => {
    dark = localStorage.getItem('dark');
    if (dark !== 'active') {
        enableDark();
    } else {
        disableDark();
    }
});

const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;
const slideCount = slides.length;

function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slideCount;
    updateSlider();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slideCount) % slideCount;
    updateSlider();
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000);

// ############################## Search Bar Functionality ##############################

// Toggle the visibility of the search bar when the search icon is clicked
document.getElementById("search-icon")
    .addEventListener("click", function () {
        let searchBar = document.getElementById("search-bar"); // Get the search bar element
        searchBar.classList.toggle("active"); // Show or hide the search bar
        searchBar.focus(); // Automatically focus on the input field
    });

// Perform search and redirect to corresponding museum pages when pressing Enter
document.getElementById("search-bar").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        let query = event.target.value.trim().toLowerCase(); // Get the typed input and convert to lowercase

        // Redirect to specific museum page based on keyword
        if (query.includes("civilization") || query.includes("national") || query.includes("القومي") || query.includes("الحضارة")) {
            window.location.href = "museum-1.html";
        } else if (query.includes("egyptian museum") || query.includes("المتحف المصري") || query.includes("egyptian")) {
            window.location.href = "museum-2.html";
        } else if (query.includes("abdeen") || query.includes("abdeen palace") || query.includes("قصر عابدين")) {
            window.location.href = "museum-3.html";
        } else if (query.includes("luxor") || query.includes("متحف الأقصر") || query.includes("الأقصر")) {
            window.location.href = "museum-4.html";
        } else {
            alert("Sorry, no matching result found. Please try another keyword.");
        }
    }
});
