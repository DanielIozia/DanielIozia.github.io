  
    function validateEmail(email) {
    // RegEx pattern for basic email validation
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
    }

    var emailSent = false; // Variabile di controllo per verificare se l'email è stata inviata

    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission



        // Gather form data
        var name = document.getElementById('name').value;
        var surname = document.getElementById('surname').value;
        var email = document.getElementById('email').value;
        var subject = document.getElementById('subject').value;
        var message = document.getElementById('comment').value;

        // Validate email
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            return;
        }

        // Se l'email è già stata inviata, esci dalla funzione (ne manda solo una ogni refresh di pagina)
        if (emailSent) {
            alert('Please refresh the page');
            return;
        }

        // Send email using EmailJS
        emailjs.send("service_0pl5l7o", "template_9975wp5", {
            name: name,
            surname: surname,
            email: email,
            subjects: subject,
            message: message
        })
        .then(function(response) {
        console.log('SUCCESS!', response.status, response.text);
        // Imposta la variabile di controllo a true per indicare che l'email è stata inviata
        emailSent = true;
        alert('Email sent successfully!');
        }, function(error) {
        console.log('FAILED...', error);
        alert('Failed to send email. Please try again later.');
        });
});

        
        
        
        
        
        
        
        
