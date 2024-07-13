// Get all panels
const panels = document.querySelectorAll(".panel");

// Add click event listener to each panel
panels.forEach(panel => {
    panel.addEventListener("click", () => {
        // Remove 'active' class from all panels
        panels.forEach(p => p.classList.remove("active"));

        // Add 'active' class to the clicked panel
        panel.classList.add("active");

        // Get the background image URL of the clicked panel
        const backgroundImage = panel.style.backgroundImage;

        // Set the body background image to the clicked panel's background image
        document.body.style.backgroundImage = backgroundImage;

        // Move the clicked panel to the beginning of .slide
        const slide = document.querySelector('.slide');
        slide.prepend(panel);
    });
});
