// ############################## Swiper Initialization ##############################

// Wait for the DOM to be fully loaded before initializing the Swiper
document.addEventListener('DOMContentLoaded', function() {
    // Initialize Swiper with specific configurations
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, // Only one slide visible at a time
        spaceBetween: 0, // No space between slides
        loop: true, // Infinite loop for slides
        effect: 'fade', // Fade effect between slides
        fadeEffect: {
            crossFade: true // Enable crossfade during the fade transition
        },
        pagination: {
            el: ".swiper-pagination", // Pagination element for navigation dots
            clickable: true, // Enable clickability of pagination dots
        },
        navigation: {
            nextEl: ".swiper-button-next", // Next button for slide navigation
            prevEl: ".swiper-button-prev", // Previous button for slide navigation
        },
        on: {
            // Add event listeners for mouseenter and mouseleave to stop and start autoplay
            init: function() {
                this.el.addEventListener('mouseenter', function() {
                    swiper.autoplay.stop(); // Stop autoplay when mouse enters
                });
                this.el.addEventListener('mouseleave', function() {
                    swiper.autoplay.start(); // Start autoplay when mouse leaves
                });
            }
        }
    });
});

// ############################## Dark Mode Functionality ##############################

// Get current dark mode status from localStorage
let dark = localStorage.getItem('dark');
// Get the theme switch button element
const themeSwitch = document.getElementById('theme-switch');

// Function to enable dark mode by adding the 'dark' class to the body
const enableDark = () => {
    document.body.classList.add('dark');
    localStorage.setItem('dark', 'active'); // Save dark mode state to localStorage
}

// Function to disable dark mode by removing the 'dark' class from the body
const disableDark = () => {
    document.body.classList.remove('dark');
    localStorage.setItem('dark', null); // Save the 'null' state to localStorage to indicate no dark mode
}

// Initialize theme based on localStorage value
if (dark === 'active') {
    enableDark(); // Enable dark mode if 'active' is saved in localStorage
}

// Add click event listener to the theme switch button
themeSwitch.addEventListener('click', () => {
    dark = localStorage.getItem('dark'); // Get the current dark mode state
    if (dark !== 'active') {
        enableDark(); // Enable dark mode if it's not already enabled
    } else {
        disableDark(); // Disable dark mode if it's currently enabled
    }
});

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
