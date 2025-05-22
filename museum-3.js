//opening and closing time
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


// Alert when "Book Now" is clicked
document.querySelectorAll('.ticket-card button').forEach(button => {
    button.addEventListener('click', () => {
      alert("Your ticket has been selected. Please go to payment.");
    });
  });


    

// Reviews Slider
document.addEventListener('DOMContentLoaded', function() {
    const reviews = document.querySelectorAll('.review');
    const dots = document.querySelectorAll('.dot');
    let currentIndex = 0;
    
    function showReview(index) {
        reviews.forEach(review => {
            review.classList.remove('active');
            review.style.transform = 'translateX(100%)';
        });
        dots.forEach(dot => dot.classList.remove('active'));
        
        reviews[index].classList.add('active');
        reviews[index].style.transform = 'translateX(0)';
        dots[index].classList.add('active');
        currentIndex = index;
    }
    
    // Auto switch reviews every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex + 1) % reviews.length;
        showReview(currentIndex);
    }, 5000);
    
    // Make dots clickable
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showReview(index);
        });
    });
});

// Video Controls
const video = document.getElementById('museumVideo');
const videoControl = document.getElementById('videoControl');
const videoIcon = videoControl.querySelector('i');
const videoText = videoControl.querySelector('span');

function togglePlay() {
    if (video.paused) {
        video.play();
        videoIcon.className = 'fas fa-pause';
        videoText.textContent = 'Pause';
    } else {
        video.pause();
        videoIcon.className = 'fas fa-play';
        videoText.textContent = 'Play';
    }
}

// Add keyboard controls
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault(); // Prevent page scroll
        togglePlay();
    }
});


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

// ################ Search bar ################ //

/// click on lens to open the search bar ///
document.getElementById("search-icon").addEventListener("click", function() {
    let searchBar = document.getElementById("search-bar");
    searchBar.classList.toggle("active");
});