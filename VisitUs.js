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

// Swiper initialization
var swiper = new Swiper(".mySwiper", {   /*class name*/
    navigation: {
        nextEl: ".swiper-button-next",  /*button goes to next p*/ 
        prevEl: ".swiper-button-prev",  /*button goes to prev p*/ 
    },
    pagination: {   /*dots*/
        el: ".swiper-pagination",   /*button will appear in this class*/
        clickable: true,    /*makes the pagination clickable if=true*/
    },
});

function changeText(){
    document.getElementById('demo')
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