function disableCardsUntilDate() {
    const cards = document.querySelectorAll('.card');
    const currentDate = new Date();

    cards.forEach((card) => {
        const unlockDate = new Date(card.dataset.unlockDate);
        const link = card.querySelector('a');

        if (currentDate < unlockDate) {
            card.classList.add('disabled');
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const formattedDate = unlockDate.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
                alert(`This content will be available on ${formattedDate}`);
            });
        } else {
            card.classList.remove('disabled');
            link.removeEventListener('click', () => {});
        }
    });
}

// Run the function when the DOM is loaded
document.addEventListener('DOMContentLoaded', disableCardsUntilDate);

// Update card states every minute
setInterval(disableCardsUntilDate, 60000);
