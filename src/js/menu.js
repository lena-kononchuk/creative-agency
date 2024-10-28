// Array of navigation links with names and paths
const paths = [
  { name: "Home", link: "/" },
  { name: "About", link: "#about" },
  { name: "Services", link: "#services" },
  { name: "Projects", link: "#projects" },
  { name: "Contact Us", special: true } // Changed to not include link; special button instead
];

// Select elements for opening and closing the menu and the container for links
const openBurgerMenuButton = document.getElementById("burger-menu-button");
const closeBurgerMenuButton = document.getElementById("close-menu");
const dropdown = document.getElementById("dropdown");
const linksContainer = document.querySelector("#dropdown nav");
const body = document.body; // Select the body element

// Create links and add them to the mobile menu
const links = paths.map((path) => {
  const link = document.createElement(path.special ? "button" : "a"); // Create button for special case
  if (!path.special) {
    link.href = path.link; // Only add href if it's not a special button
  }
  link.innerText = path.name;

  // Apply general button styles
  link.className = "py-1 text-1xl block transition-transform duration-500 ease-in-out text-white hover:underline translate-x-full opacity-0";

  // Apply special styles to 'Contact Us' button
  if (path.special) {
    link.className += " bg-blue-500 px-3 py-1 rounded hover:bg-blue-600 cursor-pointer"; // Add cursor pointer for button
  }

  linksContainer.appendChild(link);
  return link; // Return the link for later use
});

// Function to open the mobile menu
function openBurgerMenu() {
  dropdown.classList.remove("translate-x-full"); // Show the menu
  dropdown.classList.add("translate-x-0"); // Smooth slide-in effect
  body.classList.add("overflow-hidden"); // Freeze the body scroll

  // Add animation for each link
  links.forEach((link, index) => {
    setTimeout(() => {
      link.classList.remove("translate-x-full", "opacity-0"); // Slide in and fade in
      link.classList.add("translate-x-0", "opacity-100"); // Show link
    }, index * 100); // Delay based on index
  });
}

// Function to close the mobile menu
function closeBurgerMenu() {
  dropdown.classList.remove("translate-x-0"); // Hide the menu
  dropdown.classList.add("translate-x-full"); // Smooth slide-out effect
  body.classList.remove("overflow-hidden"); // Unfreeze the body scroll

  // Remove animation for each link
  links.forEach((link) => {
    link.classList.add("translate-x-full", "opacity-0"); // Slide out and fade out
    link.classList.remove("translate-x-0", "opacity-100"); // Hide link
  });
}

// Smooth scroll to the target section
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' }); // Smooth scrolling to the element
  }
}

// Event listener to open the menu on button click
openBurgerMenuButton.addEventListener("click", openBurgerMenu);

// Event listener to close the menu on close button click
closeBurgerMenuButton.addEventListener("click", closeBurgerMenu);

// Close menu and scroll to the section when any link is clicked
links.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault(); // Prevent default anchor behavior
    
    // Check if the clicked link is the "Contact Us" button
    if (link.innerText === "Contact Us") {
      openContactForm(); // Call function to open contact form
    } else {
      const target = link.getAttribute('href'); // Get the href attribute
      smoothScroll(target); // Scroll to the target section
    }
    
    closeBurgerMenu(); // Close the menu
  });
});

// Close menu when clicking outside of the dropdown
document.addEventListener("click", (event) => {
  if (dropdown.classList.contains("translate-x-0") && !dropdown.contains(event.target) && !openBurgerMenuButton.contains(event.target)) {
    closeBurgerMenu();
  }
});

// Function to open the contact form
function openContactForm() {
  const contactForm = document.getElementById("contactFormModal"); // Select the contact form element
  if (contactForm) {
    contactForm.classList.remove("hidden"); // Show the contact form
  }
}
