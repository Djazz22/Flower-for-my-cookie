document.addEventListener('DOMContentLoaded', function() {
    const flowers = document.querySelectorAll('.flower');

    flowers.forEach((flower, index) => {
        flower.addEventListener('click', () => {
            const messages = [
                "You are my sunshine! 🌞",
                "Just like these flowers, you brighten my day! 🌼",
                "I love you more than words can say! 💖",
                "You're the most beautiful flower in my life! 🌹",
                "Every day with you is a bouquet of joy! 💐",
                "You make my heart bloom! 🌺"
            ];
            alert(messages[index % messages.length]);
        });
    });
});
