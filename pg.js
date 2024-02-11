const heart = document.getElementById('heart');
const paper = document.getElementById('paper');
const message = document.getElementById('message');
const changeMessageButton = document.getElementById('change-message');

let messageIndex = 0;
const messages = [
    'Your eyes are my stars. I shall gaze upon them when it gets dark.',
    'My sun, my star. Oh how you brighten up my world.',
    'My princess, my queen. You are everything to me.',
    'I die in your absence and live in your gaze.',
    'To resist you is futile. Your beauty engulfs me.',
    'Your words are my truth. Oh your lips hold me in chains.',
    'I close my eyes and pray I dream of you. Heaven in my slumber.',
    'Pity for everyone else for they’re all going to hell. You’re mine and mine alone, you’re heaven itself.',
    'Jealous of your beauty the universe eats itself. A goddess you are, you’re perfect it’s clear.',
    'Too sweet for this world, you heal my very soul. Your words and your touch, they keep me whole.',
    'Set my very soul on fire for you. My twin flame, please let me burn.',
    'Turn into the devil himself just for one more kiss.',
    'Sell my whole, my soul for a touch of your lips.',
    'I love my love my love I love you.',
    'Your eyes the vast ocean. I’m lost, I drown.',
    'I do not know if I’m asleep, you belong in my dreams and I belong to you, a servant needs a queen.',
    'My princess, my queen, my dirty lil slut. You are everything I need, and just a lil more.',
    'I yearn for your kisses, I fight my withdrawals. What a sweet addiction you are, I’ll never go to rehab.'
];

heart.addEventListener('click', () => {
    // Toggle the display of the paper
    paper.classList.toggle('hidden');
    
    // Change the message on subsequent clicks
    messageIndex = (messageIndex + 1) % messages.length;
    message.textContent = messages[messageIndex];
});

changeMessageButton.addEventListener('click', () => {
    // Change the message on button click
    messageIndex = (messageIndex + 1) % messages.length;
    message.textContent = messages[messageIndex];
});


