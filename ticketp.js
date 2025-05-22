 //define the categories with their prices
const prices = { 
    "egyptian-student": 40,
    "egyptian-adult": 80,
    "foreigner-student": 250,
    "foreigner": 500,
    "senior-citizien": 50 
  };
  // refrence to form elements
  const VisitorCategory = document.getElementById("visitor-category");  
  const NumOfTickets = document.getElementById("num-tickets");
  const TicketPrice = document.getElementById("ticket-price");
  const TotalPrice = document.getElementById("total-price");
 

  // function to update the prices according to its category
  function updatePrices() {
    const type = VisitorCategory.value;    // get the visitor category
    const quantity = parseInt(NumOfTickets.value) || 0;    // get number of tickets (default to 0 if invalid)
    const pricePerTicket = prices[type];   // get price for the specific category
    const total = pricePerTicket * quantity;   // Calculate total price


 // Update displayed prices in the DOM
    TicketPrice.innerText = `EGP ${pricePerTicket.toFixed(2)}`;   
    TotalPrice.innerText = `EGP ${total.toFixed(2)}`;
  }

  // Update prices whenever the category or ticket number changes
  VisitorCategory.addEventListener("change", updatePrices);
  NumOfTickets.addEventListener("input", updatePrices);
  updatePrices(); //call the function
    
    //submission 
    function myFunction(event) {
    event.preventDefault(); // Stop default form action (page reload)
    alert("You have booked your ticket successfully!"); 
    window.location.href = "homep.html"; // Redirect to homepage
  }
// Attach submit event listener to the form
  const form = document.getElementById("booking-form");
  form.addEventListener("submit", myFunction);
  
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

