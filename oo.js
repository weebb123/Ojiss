const heart = document.getElementById('heart');
const paperRoll = document.getElementById('paper-roll');

heart.addEventListener('click', () => {
    if (paperRoll.classList.contains('grow')) {
        paperRoll.classList.remove('grow');
        paperRoll.addEventListener('transitionend', () => {
            paperRoll.style.display = 'none'; // Hide the paper roll after the animation
        }, { once: true });
        heart.style.top = 'calc(50% - 50px)';
        // Remove the arrow when closing the note
        const arrow = document.getElementById('next-page-arrow');
        if (arrow) {
            arrow.remove();
        }
    } else {
        const messageContent = "To My princess, my queen, my everything. I can’t think of what to say, not because I have nothing to say, but because words displayed on screens can’t possibly convey anything in my heart. Tbh I didn’t think being this lucky was possible, you’re. The type of girl that only exists in movies with happy endings, the type of girl that only exists in books written by Shakespeare, my Juliet, I thought people like you only existed in songs and dreams, Meeting you made me realize, I’m allowed to love and be loved, I’m allowed to be happy, I’m allowed to be respected, I’m allowed to be me. Grieve for the version of me that did not know these things, admiration for him sticking around this long to find you, you’ve changed me, my life and my soul, I’ll spend the rest of my days trying to thank you for that. As long as I’m alive, as long as I breathe, you’ll never lie in your bed at night wondering if anyone loves or cares about you, you’ll never go to sleep feeling alone in this lonely world, you’ll never go another day without feeling loved,for you a too well tangled up in my soul my princess , loving you feels like a life time of infinite happiness and good days all mashed up into a single moment, I am birthed and dead in the moment I hear your voice, I want you mama, I want everything about you, your perfect imperfections, your beautiful flaws, your mistakes, your love, your soul, your everything, I want us. You’re my favorite person, my favorite notification, my favorite sunrise, my favorite moonlight, my favorite human. A simple complex soul A tesseract, a kaleidoscope, the universe itself encompassed within your gaze, drunken by the kisses of your lips, lethal intoxication. At the end of the day I want you and me, I want your early mornings and your late late nights, I want you on your good days even more on your bad, I want your happiness, I want your anger, I want your sadness, I want your pain, I’ve fallen in love with you my princess,  love that can’t be taken away, love that’ll fill up a room, take your breath away. Ethereal love you’ve given me, you’re heaven in itself I love you so much my princess, now till the end of my days"; // Your message content here
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerText = messageContent;
        paperRoll.appendChild(messageElement);

        paperRoll.style.display = 'block';
        setTimeout(() => {
            paperRoll.classList.add('grow'); // Add the grow class for opening animation
            heart.style.top = 'calc(50% + 100px)'; // Adjust the position as needed
            // Create and position the arrow
            const arrow = document.createElement('a');
            arrow.classList.add('next-page-arrow');
            arrow.innerText = 'Next Page';
            arrow.href = 'pg.html'; // Set the link to another page
            arrow.target = '_blank'; // Open the link in a new tab
            arrow.style.bottom = '20px'; // Adjust the vertical position as needed
            arrow.style.right = '20px'; // Adjust the horizontal position as needed
            document.body.appendChild(arrow); // Append the arrow to the body
        }, 50);
    }
});

// Restore heart functionality when clicking outside the paper roll
document.addEventListener('click', (event) => {
    if (!paperRoll.contains(event.target)) {
        paperRoll.classList.remove('grow');
        paperRoll.addEventListener('transitionend', () => {
            paperRoll.style.display = 'none'; // Hide the paper roll after the animation
        }, { once: true });
        heart.style.top = 'calc(50% - 50px)';
        // Remove the arrow when closing the note
        const arrow = document.getElementById('next-page-arrow');
        if (arrow) {
            arrow.remove();
        }
    }
});















