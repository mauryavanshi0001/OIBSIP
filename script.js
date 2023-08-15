function showLogin() {
  document.getElementById('loginForm').style.display = 'block';
  document.getElementById('signupForm').style.display = 'none';
  document.getElementById('authCard').style.height = 'auto';
}

function showSignup() {
  document.getElementById('loginForm').style.display = 'none';
  document.getElementById('signupForm').style.display = 'block';
  document.getElementById('authCard').style.height = 'auto';
}

function login() {
  const loginUsername = document.getElementById('loginUsername').value;
  const loginPassword = document.getElementById('loginPassword').value;
  
  // Retrieve user data from local storage (if exists)
  const storedUserData = JSON.parse(localStorage.getItem(loginUsername));
  
  if (storedUserData && storedUserData.password === loginPassword) {
    document.getElementById('loginMessage').textContent = 'Login successful!';
    document.getElementById('loginMessage').style.color = '#2ecc71';
    showWelcome(loginUsername);
  } else {
    document.getElementById('loginMessage').textContent = 'Login failed. Please check your credentials.';
    document.getElementById('loginMessage').style.color = '#e74c3c';
  }
}

function signup() {
  const signupUsername = document.getElementById('signupUsername').value;
  const signupPassword = document.getElementById('signupPassword').value;
  
  // Store user data in local storage (insecure for real-world usage)
  localStorage.setItem(signupUsername, JSON.stringify({ password: signupPassword }));
  
  document.getElementById('signupMessage').textContent = 'Sign up successful! You can now log in.';
  document.getElementById('signupMessage').style.color = '#2ecc71';
}

function showWelcome(username) {
  document.getElementById('authCard').style.display = 'none';
  document.getElementById('welcomeCard').style.display = 'block';
  document.getElementById('welcomeUsername').textContent = username;
}

function logout() {
  document.getElementById('welcomeCard').style.display = 'none';
  document.getElementById('authCard').style.display = 'block';
  document.getElementById('loginUsername').value = '';
  document.getElementById('loginPassword').value = '';
  document.getElementById('loginMessage').textContent = '';
  document.getElementById('signupUsername').value = '';
  document.getElementById('signupPassword').value = '';
  document.getElementById('signupMessage').textContent = '';
}
