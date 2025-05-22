document.addEventListener("DOMContentLoaded", function () {
    // === Contact form submission === //
    const form = document.getElementById("contact-form");
    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            alert("Thank you for your message! We’ll get back to you soon.");
            window.location.href = "homep.html";
        });
    }

    // === Dark mode initialization === //
    let dark = localStorage.getItem('dark');
    const themeSwitch = document.getElementById('theme-switch');

    const enableDark = () => {
        document.body.classList.add('dark-mode');
        localStorage.setItem('dark', 'active');
    }

    const disableDark = () => {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('dark', null);
    }

    if (dark === 'active') {
        enableDark();
    }

    if (themeSwitch) {
        themeSwitch.addEventListener('click', () => {
            dark = localStorage.getItem('dark');
            if (dark !== 'active') {
                enableDark();
            } else {
                disableDark();
            }
        });
    }
});


// === Search bar toggle === //
    const searchIcon = document.getElementById("search-icon");
    const searchBar = document.getElementById("search-bar");

    if (searchIcon && searchBar) {
        searchIcon.addEventListener("click", function () {
            searchBar.classList.toggle("active");
        });
    }


  const themeBtn = document.getElementById('theme-switch');
  const body = document.body;

  themeBtn.addEventListener('click', () => {
    body.classList.toggle('dark');
  });

  // ############################## Search Bar Functionality ##############################


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