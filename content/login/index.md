---
title: "Login"
---

<form id="login-form">
  <label for="email">Email</label>
  <input type="email" id="email" name="email" placeholder="Enter your email" required />

  <label for="password">Password</label>
  <input type="password" id="password" name="password" placeholder="Enter your password" required />

  <button type="submit">Login</button>
</form>

<!-- Script to handle form submission -->
<script>
  document.getElementById('login-form').addEventListener('submit', async (e) => {
    e.preventDefault(); // Prevents form submission from reloading the page
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Sending login details to the Netlify function
    const response = await fetch('/.netlify/functions/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    // Handling the response
    const result = await response.json();
    if (response.ok) {
      alert(result.message); // Success message
      window.location.href = "/dashboard/"; // Redirect to dashboard (example)
    } else {
      alert(result.message); // Error message
    }
  });
</script>
