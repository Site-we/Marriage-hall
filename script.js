document.getElementById('contact-form').addEventListener('submit', (event) => {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been received. We'll contact you shortly.`);
    document.getElementById('contact-form').reset();
  } else {
    alert('Please fill in all the fields.');
  }
});
