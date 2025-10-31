// Wait for the DOM to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', () => {

    // --- Contact Form Validation ---
    const contactForm = document.getElementById('contact-form');
    const formStatus = document.getElementById('form-status');

    // Check if the contact form exists on the current page
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            // Prevent the default form submission
            e.preventDefault();

            // Get form field values and trim whitespace
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            let errors = [];
            
            // Basic validation
            if (name === '') {
                errors.push('Name is required.');
            }
            if (email === '') {
                errors.push('Email is required.');
            }
            if (message === '') {
                errors.push('Message is required.');
            }
            
            // Simple email format check (you can use a regex for stricter validation)
            if (email !== '' && !email.includes('@')) {
                 errors.push('Please enter a valid email address.');
            }

            // --- Display Messages ---
            if (errors.length > 0) {
                // If there are errors, show them
                formStatus.textContent = errors.join(' ');
                formStatus.className = 'error';
            } else {
                // If validation passes, show a success message
                // In a real-world scenario, you would send this data to a server
                formStatus.textContent = 'Thank you for your message! (This is a demo)';
                formStatus.className = 'success';
                
                // Clear the form fields
                contactForm.reset();

                // Optional: remove success message after 5 seconds
                setTimeout(() => {
                    formStatus.textContent = '';
                    formStatus.className = '';
                    formStatus.style.display = 'none'; // Hide it again
                }, 5000);
            }
        });
    }

    // Note: The "active" page link is handled via a class
    // manually set in each HTML file (`class="active"`).
    // This is a simple and robust method for a static multi-page site.
});
