document.addEventListener('DOMContentLoaded', () => {
    const gif = document.getElementById('animated-gif');
    const finalFrame = document.getElementById('final-frame');

    if (!gif || !finalFrame) {
        console.error("GIF or final frame not found in the DOM.");
        return;
    }

    function isInView(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        );
    }

    function playGif() {
        const gifDuration = 3820;
        setTimeout(() => {
            gif.style.display = 'none';
            finalFrame.style.display = 'block';
        }, gifDuration);
    }

    function handleScroll() {
        if (isInView(gif)) {
            playGif();
            window.removeEventListener('scroll', handleScroll);
        }
    }

    if (isInView(gif)) {
        playGif();
    } else {
        window.addEventListener('scroll', handleScroll);
    }
});