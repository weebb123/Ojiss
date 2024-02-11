// Start the heart animation immediately when the page loads
startHeartAnimation();

let noClicks = 0;

document.getElementById('yes').addEventListener('click', () => {
    // Add the heart animation when "Yes" is clicked
    const hearts = ['❤️', '💖', '💕', '💓', '💗', '💞', '💘'];
    for (let i = 0; i < 200; i++) { // Increased the number of hearts to 100
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `${-50}px`; // Start from above the screen
        heart.style.fontSize = `${Math.random() * 30 + 10}px`;
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        document.body.appendChild(heart);
        animateHeart(heart);
    }

    // Redirect to the page with the heart after the animation
    setTimeout(() => {
        window.location.href = 'OO.html';
    }, 5000); // Increased the animation duration to 5 seconds
});

document.getElementById('no').addEventListener('click', () => {
    noClicks++;

    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');

    // Increase the size of the "Yes" button
    yesButton.style.transform = `scale(${1 + noClicks * 0.2})`;

    // Move the "No" button to maintain the same space between "Yes" and "No"
    const yesButtonRect = yesButton.getBoundingClientRect();
    const yesButtonCenterX = yesButtonRect.left + yesButtonRect.width / 2;
    const yesButtonCenterY = yesButtonRect.top + yesButtonRect.height / 2;

    const noButtonRect = noButton.getBoundingClientRect();
    const noButtonCenterX = yesButtonCenterX;
    const noButtonCenterY = yesButtonCenterY + yesButtonRect.height / 2 + 40; // Adjusted the vertical spacing to 40 pixels

    noButton.style.left = `${noButtonCenterX - noButtonRect.width / 2}px`;
    noButton.style.top = `${noButtonCenterY - noButtonRect.height / 2}px`;

    const image = document.getElementById('image');
    if (noClicks === 1) {
        noButton.innerText = 'Are you sure?';
        image.src = 'rus.jpg'; // Change the image source after the 1st click
    } else if (noClicks === 2) {
        noButton.innerText = 'Are you really sure?';
        image.src = 'cryj.jpg'; // Change the image source after the 2nd click
    } else if (noClicks === 3) {
        noButton.innerText = 'Mama please na';
        image.src = 'cat 7.jpg'; // Change the image source after the 3rd click
    } else if (noClicks === 4) {
        noButton.innerText = 'You\'ll make me cry';
        image.src = 'cat 4.jpg'; // Change the image source after the 4th click
    } else if (noClicks === 5) {
        noButton.innerText = 'Abeg na';
        image.src = 'waa2.jpg'; // Change the image source after the 5th click
    } else if (noClicks === 6) {
        noButton.innerText = 'Why are you so mean?';
        image.src = 'meanie.jpg'; // Change the image source after the 6th click
    } else if (noClicks === 7) {
        noButton.innerText = 'Princess plsssssss';
        image.src = 'waaa.jpg'; // Change the image source after the 7th click
    } else if (noClicks === 8) {
        noButton.innerText = 'Don\'t you want to be my good girl?';
        image.src = 'cat 6.jpeg'; // Change the image source after the 8th click
    } else if (noClicks === 9) {
        noButton.innerText = 'Your fada sef, no choice';
        image.src = 'cat 10.jpg'; // Change the image source after the 9th click
    }
});

function animateHeart(heart) {
    const animation = heart.animate([
        { transform: 'translateY(-100vh)' }, // Start position above the screen
        { transform: `translateY(${window.innerHeight + 100}px)` } // End position below the screen
    ], {
        duration: Math.random() * 10000 + 5000, // Random duration between 5 to 15 seconds
        easing: 'cubic-bezier(0, 0.2, 0.8, 1)', // Custom easing for a natural fall
        fill: 'forwards' // Keep final state after animation completes
    });

    // Remove heart element after animation completes
    animation.onfinish = () => {
        heart.remove();
    };
}

function startHeartAnimation() {
    const hearts = ['❤️', '💖', '💕', '💓', '💗', '💞', '💘'];
    for (let i = 0; i < 10; i++) { // Increased the number of hearts to 10
        const heart = document.createElement('div');
        heart.style.position = 'fixed';
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        heart.style.top = `${-50}px`; // Start from above the screen
        heart.style.fontSize = `${Math.random() * 30 + 10}px`;
        heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
        heart.style.opacity = '0'; // Initially invisible
        document.body.appendChild(heart);
        animateHeart(heart);
    }
}

function preloadHeartAnimation() {
    // Create a hidden div to preload the heart animation
    const preloader = document.createElement('div');
    preloader.style.position = 'fixed';
    preloader.style.left = '-9999px';
    preloader.style.width = '1px';
    preloader.style.height = '1px';
    document.body.appendChild(preloader);

    const preloaderAnimation = preloader.animate([
        { transform: 'translateY(-100vh)' }, // Start position above the screen
        { transform: 'translateY(0)' } // End position at the top of the screen
    ], {
        duration: 100, // Short duration to preload quickly
        iterations: 1, // Play animation once
        easing: 'ease-out', // Slow start, fast finish
        fill: 'forwards' // Keep final state after animation completes
    });

    // Remove preloader div after animation completes
    preloaderAnimation.onfinish = () => {
        preloader.remove();
    };
}

// Preload the heart animation when the page loads
preloadHeartAnimation();




