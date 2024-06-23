document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', (event) => {
        const email = document.getElementById('email').value;
        const confirmEmail = document.getElementById('confirmEmail').value;

        if (email !== confirmEmail) {
            alert('Email addresses do not match. Please verify and try again.');
            event.preventDefault(); // Prevent form submission
        }
    });
});