// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        // Toggle dark mode on the body
        document.body.classList.toggle('dark');

        // Check if dark mode is active
        const isDark = document.body.classList.contains('dark');
        localStorage.setItem('theme', isDark ? 'dark' : 'light'); // Save theme in local storage

        // Change the icon based on the theme
        themeIcon.classList.toggle('fa-moon', isDark);
        themeIcon.classList.toggle('fa-sun', !isDark);
    });
}


// Select all links that lead to sections on the page
const smoothScrollLinks = document.querySelectorAll('nav a');

smoothScrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent default link behavior

        const targetId = link.getAttribute('href'); // Get the section ID
        const targetSection = document.querySelector(targetId); // Find the section by ID

        if (targetSection) {
            // Close mobile menu if visible
            mobileMenu.classList.add('hidden');

            // Smooth scroll to the section
            targetSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Intersection Observer for section animations
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section'); // Select all sections

    if (sections.length === 0) {
        console.error('No sections found!'); // Log error if no sections are found
        return;
    }

    const observerOptions = {
        root: null, // Default viewport as the root
        threshold: 0.1 // Trigger when 10% of the section is visible
    };

    // Callback function for Intersection Observer
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation class when the section comes into view
                entry.target.classList.add('animate-slidein');
                entry.target.classList.remove('opacity-0'); // Remove opacity class
                observer.unobserve(entry.target); // Stop observing the section
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions); // Create the observer

    sections.forEach(section => {
        observer.observe(section); // Start observing each section
    });
});


  // JavaScript to toggle the modal
  const openContactFormButton = document.getElementById('openContactForm');
  const closeContactFormButton = document.getElementById('closeContactForm');
  const contactFormModal = document.getElementById('contactFormModal');
  openContactFormButton.addEventListener('click', () => {
      contactFormModal.classList.remove('hidden');
  });

  closeContactFormButton.addEventListener('click', () => {
      contactFormModal.classList.add('hidden');
  });

