document.addEventListener("DOMContentLoaded", () => {
    const body = document.querySelector("body"); // Get the body element
    const background = body.getAttribute("data-background"); // Get the data-background attribute
    if (background) {
        // Apply the background image dynamically
        body.style.background = `url('${background}') no-repeat center center fixed`;
        body.style.backgroundSize = "cover";
    }
});
// JavaScript to trigger the animation after the page loads
window.addEventListener('load', function() {
    const listItems = document.querySelectorAll('li');
    
    listItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.2}s`; // Delay each item by 0.2s
    });
});
// JavaScript to trigger image animation when it enters the viewport
const images = document.querySelectorAll('img');

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add the class to trigger the animation
            entry.target.classList.add('animate');
            observer.unobserve(entry.target);  // Stop observing after animation starts
        }
    });
}, { threshold: 0.5 });  // Trigger when 50% of image is visible

images.forEach(image => {
    observer.observe(image);  // Start observing the images
});
