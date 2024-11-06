// Display the login page after 5 seconds
function showLoginPage() {
  setTimeout(() => {
    document.querySelector('.splash-page').style.display = 'none';
    document.querySelector('.login-page').style.display = 'block';
  }, 5000);
}

// Show the register page and hide the login page
function showRegisterPage() {
  document.querySelector('.login-page').style.display = 'none';
  document.querySelector('.register-page').style.display = 'block';
}

// Show the login page and hide the register page
function showLoginPage() {
  document.querySelector('.register-page').style.display = 'none';
  document.querySelector('.login-page').style.display = 'block';
}
