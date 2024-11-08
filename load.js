document.addEventListener('DOMContentLoaded', () => {
    const logo = document.getElementById('logo');

    // Function to create the spinning animation
    const spinLogo = () => {
        gsap.to(logo, {
            rotation: 360, // Full rotation
            duration: 2,   // Time in seconds
            ease: 'power2.inOut',
            onComplete: () => {
                triggerConfetti(); // Trigger confetti after rotation
            }
        });
    };

    // Function to trigger confetti
    const triggerConfetti = () => {
        confetti({
            particleCount: 100,
            spread: 70,
            origin: { x: 0.5, y: 0.5 }  // Center of the screen
        });
    };

    // Start the animation when the page loads
    spinLogo();
});