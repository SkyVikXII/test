// ... existing code ...

document.addEventListener("DOMContentLoaded", () => {
    const scrollContainer = document.getElementById('scrollContainer');
    const nextBtn = document.getElementById('nextBtn');
    const backBtn = document.getElementById('backBtn');

    // Function to get 80% of the scroll container's width
    function getScrollAmount() {
        return scrollContainer.clientWidth * 0.8; // 80% of the container's width
    }

    // Stop auto-scrolling on button click
    if (nextBtn && scrollContainer) {
        nextBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = 'smooth';
            if (scrollContainer.scrollLeft + getScrollAmount() < scrollContainer.scrollWidth) {
                scrollContainer.scrollLeft += getScrollAmount(); // Scroll right
            } else {
                scrollContainer.scrollLeft = 0; // Jump back to start
            }
        });
    }

    if (backBtn && scrollContainer) {
        backBtn.addEventListener("click", () => {
            scrollContainer.style.scrollBehavior = 'smooth';
            if (scrollContainer.scrollLeft - getScrollAmount() >= 0) {
                scrollContainer.scrollLeft -= getScrollAmount(); // Scroll left
            } else {
                scrollContainer.scrollLeft = scrollContainer.scrollWidth; // Jump to end
            }
        });
    }
});

// ... existing code ...
