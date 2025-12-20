// Initialize EmailJS
(function() {
    emailjs.init(import.meta.env.VITE_PUBLIC_KEY_EMAILJS);
})();

const form = document.getElementById("contact-form");
const submitBtn = document.getElementById("submit-btn");

const toaster = document.getElementById("toaster");

function showToaster(message, type) {
    toaster.textContent = message;
    toaster.className = `toaster ${type} show`;
    toaster.setAttribute('aria-hidden', 'false');

    setTimeout(() => {
        toaster.classList.remove('show');
        toaster.setAttribute('aria-hidden', 'true');
    }, 3000);
}

form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Disable button during sending
    submitBtn.disabled = true;
    submitBtn.textContent = "Invio in corso...";

    emailjs
        .sendForm(
            import.meta.env.VITE_SERVICE_ID_EMAILJS,
            import.meta.env.VITE_TEMPLATE_ID_EMAILJS,
            this
        )
        .then(
            () => {
                showToaster("Email inviata con successo!", "success");
                form.reset();
                submitBtn.textContent = "Invia Email";
                
                // Close modal after a short delay
                setTimeout(() => {
                    const modal = document.getElementById('contact-modal');
                    if (modal) {
                        modal.classList.remove('active');
                        modal.setAttribute('aria-hidden', 'true');
                        document.body.style.overflow = '';
                    }
                }, 1500);
            },
            (error) => {
                console.error("EmailJS Error:", error);
                showToaster("Errore durante l'invio dell'email", "error");
                submitBtn.disabled = false;
                submitBtn.textContent = "Invia Email";
            }
        );
});

