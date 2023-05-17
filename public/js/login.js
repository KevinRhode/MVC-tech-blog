const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      // If successful, redirect the browser to the profile page
      document.location.replace('/dashboard');
    } else {
      //once customer has decided on design alerts will be removed
      alert(response.statusText);
    }
  }
};

const signupFormHandler = async (event) => {
  event.preventDefault();

  const name = document.querySelector('#name-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      //once customer has decided on design alerts will be removed
      alert(response.statusText);
    }
  }
};
// Dev Testing Value
// console.log(document.querySelector('.btn-access').textContent);
if (document.querySelector('.btn-access').textContent.toLocaleLowerCase() === 'login!') {
  document
  .querySelector('.login-form')
  .addEventListener('submit', loginFormHandler);
} else{
  document
  .querySelector('.signup-form')
  .addEventListener('submit', signupFormHandler);
}



