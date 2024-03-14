// Add smooth scrolling to navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
  
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Add a simple form validation for the contact form
  document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form input values
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    
    // Simple validation
    if (name && email && message) {
      // You can customize this part to send the form data to your backend or display a success message
      alert('Message sent successfully!');
      document.getElementById('contactForm').reset();
    } else {
      alert('Please fill in all fields.');
    }
  });
  