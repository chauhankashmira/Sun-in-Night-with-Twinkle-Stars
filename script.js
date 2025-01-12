// Select the container for the sky
const sky = document.querySelector('.sky');

// Function to create stars
function createStars(count) {
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 3 + 1; // Random star size (1px to 4px)
        const posX = Math.random() * window.innerWidth; // Random X position
        const posY = Math.random() * window.innerHeight; // Random Y position
        const duration = Math.random() * 3 + 1; // Random animation duration

        // Add the 'star' class to the element
        star.classList.add('star');
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.left = `${posX}px`;
        star.style.top = `${posY}px`;
        star.style.animationDuration = `${duration}s`;

        // Append the star to the sky
        sky.appendChild(star);
    }
}

// Create 150 stars (adjust as needed)
createStars(150);

