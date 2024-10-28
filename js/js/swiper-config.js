// swiper-config.js
document.addEventListener("DOMContentLoaded", function () {
    // Initialize Swiper with configuration
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1, // Default for mobile
        spaceBetween: 20,
        freeMode: true,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 2, // Display 3 slides for larger screens
           },
            1200: {
                slidesPerView: 3, // Display 3 slides for larger screens
            },
        }
    });

    // Add event listeners for navigation buttons
    document.getElementById('prevButton').addEventListener('click', function () {
        swiper.slidePrev(); // Slide to the previous slide
    });

    document.getElementById('nextButton').addEventListener('click', function () {
        swiper.slideNext(); // Slide to the next slide
    });

    // Function to update the state of navigation buttons
    function updateButtons() {
        const prevButton = document.getElementById('prevButton');
        const nextButton = document.getElementById('nextButton');

        // Check if it's the beginning of the slides
        if (swiper.isBeginning) {
            prevButton.classList.add('opacity-50'); // Add opacity if at the start
            prevButton.classList.remove('cursor-pointer'); // Disable pointer cursor
        } else {
            prevButton.classList.remove('opacity-50'); // Remove opacity
            prevButton.classList.add('cursor-pointer'); // Enable pointer cursor
        }

        // Check if it's the end of the slides
        if (swiper.isEnd) {
            nextButton.classList.add('opacity-50'); // Add opacity if at the end
            nextButton.classList.remove('cursor-pointer'); // Disable pointer cursor
        } else {
            nextButton.classList.remove('opacity-50'); // Remove opacity
            nextButton.classList.add('cursor-pointer'); // Enable pointer cursor
        }
    }

    // Call the update function on slide change
    swiper.on('slideChange', updateButtons);

    // Call the update function on initialization to set the initial state
    updateButtons();

    // Set initial opacity for prevButton since there are no slides on the left
    document.getElementById('prevButton').classList.add('opacity-50'); // Set opacity to 0.5
    document.getElementById('prevButton').classList.remove('cursor-pointer'); // Disable pointer cursor
});
