document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Here you can add code to send the form data to your server
    // For example, you can use fetch API to send data to a backend script

    alert('Muhammad Bilal says' + 'Thank you ' + name + '! Your message has been sent.');
      
    // Reset the form
    document.getElementById('contact-form').reset();
});





document.getElementById('mobile-menu').addEventListener('click', function() {
    this.classList.toggle('active');
    document.getElementById('mobile-nav').classList.toggle('active');
});
