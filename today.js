// Contact form submission
// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form from submitting

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     alert(Thank you ${name}, your message has been sent!);


//     // Optionally clear the form fields
//     document.getElementById('contact-form').reset();
// });

// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form from submitting

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     alert(`Thank you ${name}, your message has been sent!`);

//     // Optionally clear the form fields
//     document.getElementById('contact-form').reset();
// });


// document.getElementById('contact-form').addEventListener('submit', function(event) {
//     event.preventDefault(); // Prevent form from submitting

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     // Create a WhatsApp message
//     const whatsappMessage = `Hello, my name is ${name}. You can reach me at ${email}. Message: ${message}`;
//     const whatsappLink = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`;

//     // Open WhatsApp with the message
//     window.open(whatsappLink, '_blank');

//     alert(`Thank you ${name}, your message has been sent!`);

//     // Optionally clear the form fields
//     document.getElementById('contact-form').reset();
// });


document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
     const message = document.getElementById('message').value;

    // Your WhatsApp number (include country code, but omit '+' and any spaces)
    const yourWhatsAppNumber = '9025153037'; // Replace with your actual number

    // Create a WhatsApp message
    const whatsappMessage = `Hello, my name is ${name}. You can reach me at ${email} or ${phone}. Message: ${message}`;
    const whatsappLink = `https://wa.me/${yourWhatsAppNumber}?text=${encodeURIComponent(whatsappMessage)}`;

    // Open WhatsApp with the message
    window.open(whatsappLink, '_blank');

    alert(`Thank you ${name}, your message has been sent!`);

    // Optionally clear the form fields
    document.getElementById('contact-form').reset();
});
