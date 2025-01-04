document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('animated-autograph');

    if (!video) {
        console.error("Video not found in the DOM.");
        return;
    }

    function isInView(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function playVideo() {
        video.classList.remove('hidden');
        video.classList.add('visible');
        video.play();

        // Ensure the video pauses on the last frame when it ends
        video.addEventListener('ended', () => {
            video.pause();
        });
    }

    function handleScroll() {
        if (isInView(video)) {
            playVideo();
            window.removeEventListener('scroll', handleScroll); // Ensures it triggers only once
        }
    }

    // Check if the video is already in view on page load
    if (isInView(video)) {
        playVideo();
    } else {
        // Add the scroll listener if the video is not in view
        window.addEventListener('scroll', handleScroll);
    }
});