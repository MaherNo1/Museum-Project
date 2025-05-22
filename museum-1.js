// ################## Global Variables ################## //

// Keeps track of the current slide in the gallery
let currentSlide = 0;

// ################## Gallery Slide Function ################## //

// Function to move the slide based on direction (left or right)
function moveSlide(direction) {
  const track = document.getElementById('track');
  const slides = track.children; // Includes both images and videos
  const slideWidth = slides[0].clientWidth; // Assumes all slides are the same width

  currentSlide += direction;

  // Prevent sliding out of bounds
  if (currentSlide < 0) currentSlide = slides.length - 1;
  if (currentSlide >= slides.length) currentSlide = 0;

  const newTransform = -currentSlide * slideWidth;
  track.style.transform = `translateX(${newTransform}px)`;
}

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

// ################## Dark Mode Functionality ################## //

// Retrieves the current dark mode status from localStorage
let dark = localStorage.getItem('dark');
const themeSwitch = document.getElementById('theme-switch');

// Function to enable dark mode
const enableDark = () => {
    document.body.classList.add('dark'); // Adds 'dark' class to body
    localStorage.setItem('dark', 'active'); // Stores dark mode status in localStorage
}

// Function to disable dark mode
const disableDark = () => {
    document.body.classList.remove('dark'); // Removes 'dark' class from body
    localStorage.setItem('dark', null); // Removes dark mode status from localStorage
}

// Initialize theme based on localStorage (if dark mode was enabled previously)
if (dark === 'active') {
    enableDark(); // Apply dark mode on page load if previously set
}

// Add click event listener for dark mode toggle
themeSwitch.addEventListener('click', () => {
    dark = localStorage.getItem('dark'); // Get current dark mode status
    if (dark !== 'active') {
        enableDark(); // Enable dark mode if it is not active
    } else {
        disableDark(); // Disable dark mode if it is active
    }
});
