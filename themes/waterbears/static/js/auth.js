// Initialize Supabase client
const supabase = supabase.createClient('https://lvslqchedclitjtbgxpn.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx2c2xxY2hlZGNsaXRqdGJneHBuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc0OTc5MjMsImV4cCI6MjA1MzA3MzkyM30.kT5mo_B2zDIFsCHFXK1tpKBn-ceASbXI-i_qulHgRpc');

// Handle Sign Up
document.getElementById('signup-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    // Create a new user with Supabase
    const { user, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    alert('Sign up successful! Please check your email for verification.');
  } catch (error) {
    alert(error.message);
  }
});

// Handle Sign In
document.getElementById('signin-form')?.addEventListener('submit', async (e) => {
  e.preventDefault();
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    // Log in the user with Supabase
    const { user, error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) throw error;
    alert('Login successful!');
    window.location.href = "/dashboard/"; // Redirect after successful login
  } catch (error) {
    alert(error.message);
  }
});
