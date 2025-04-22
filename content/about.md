---
title: "About Me"
layout: profile
url: "/profile/"
---

# About Me

Welcome to my personal page! Here you can learn more about me, edit your profile, or update your bio.

## My Profile

If you are logged in, you can view and edit your profile below. If you're not logged in, you can sign up or sign in to access your profile.

### Profile Information

<div id="profile-container">
  <p>Loading...</p>
</div>

<!-- Auth Form -->
<h2>Sign Up</h2>
<form id="signup-form">
  <input type="email" id="signup-email" placeholder="Email" required />
  <input type="password" id="signup-password" placeholder="Password" required />
  <button type="submit">Sign Up</button>
</form>

<h2>Sign In</h2>
<form id="signin-form">
  <input type="email" id="signin-email" placeholder="Email" required />
  <input type="password" id="signin-password" placeholder="Password" required />
  <button type="submit">Sign In</button>
</form>

<button id="signout-button">Sign Out</button>
<p id="auth-status"></p>

<!-- Supabase JS -->
<script src="https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2"></script>
<script>
  const supabase = window.supabase.createClient(
    'https://cmbmfdtmofhidxjugtcd.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtYm1mZHRtb2ZoaWR4anVndGNkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUyNzEwMTAsImV4cCI6MjA2MDg0NzAxMH0.y1XJNaw380hgC7Mkkl79ugvXZUfjRqMyMsnEfUXmQ8Q'
  );

  const status = document.getElementById('auth-status');

  // Sign Up
  document.getElementById('signup-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value.trim();
    const password = document.getElementById('signup-password').value.trim();
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      status.innerText = `❌ Signup error: ${error.message}`;
    } else {
      status.innerText = '✅ Signup successful! Check your email to confirm.';
    }
  });

  // Sign In
  document.getElementById('signin-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signin-email').value.trim();
    const password = document.getElementById('signin-password').value.trim();
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      status.innerText = `❌ Login error: ${error.message}`;
    } else {
      status.innerText = `✅ Logged in as ${email}`;
      const session = await supabase.auth.getSession();
      loadUserProfile(session.data.session.user.id);
    }
  });

  // Sign Out
  document.getElementById('signout-button').addEventListener('click', async () => {
    await supabase.auth.signOut();
    status.innerText = '👋 Signed out.';
    document.getElementById('profile-container').innerHTML = '<p>Logged out. Please sign in again.</p>';
  });

  // Load profile if user is already logged in
  supabase.auth.getSession().then(({ data: { session } }) => {
    const user = session?.user;
    if (user) {
      status.innerText = `🔒 Already logged in as ${user.email}`;
      loadUserProfile(user.id);
    } else {
      status.innerText = `👤 Not logged in.`;
    }
  });

  async function loadUserProfile(userId) {
  const container = document.getElementById('profile-container');

  let { data: profile, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('user_id', userId)
    .single();

  if (error && error.code !== 'PGRST116') {
    console.error('Error loading profile:', error);
    container.innerHTML = `<p style="color:red;">Failed to load profile.</p>`;
    return;
  }

 <!-- if (!profile) {
    const { data: newProfile, error: insertError } = await supabase
      .from('profiles')
      .insert([
        {
          user_id: userId,
          name: '',
          email: '',
          bio: '',
          location: '',
          social_links: {},
          profile_image_url: ''
        }
      ])
      .select()
      .single();
      -->

    if (insertError) {
      console.error('Error creating profile:', insertError);
      container.innerHTML = `<p style="color:red;">Failed to create profile.</p>`;
      return;
    }

    profile = newProfile;
  }

  container.innerHTML = `
    <form id="profile-form">
      <label>Name:<br><input type="text" id="name" value="${profile.name || ''}" /></label><br>
      <label>Email:<br><input type="email" id="email" value="${profile.email || ''}" /></label><br>
      <label>Bio:<br><textarea id="bio">${profile.bio || ''}</textarea></label><br>
      <label>Location:<br><input type="text" id="location" value="${profile.location || ''}" /></label><br>
      <button type="submit">Update Profile</button>
    </form>
    <p id="status-message"></p>
  `;

  document.getElementById('profile-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const bio = document.getElementById('bio').value;
    const location = document.getElementById('location').value;

    const submitButton = e.target.querySelector("button[type='submit']");
    submitButton.disabled = true;

    const { error: updateError } = await supabase
      .from('profiles')
      .update({ name, email, bio, location })
      .eq('user_id', userId);

    document.getElementById('status-message').textContent =
      updateError ? '❌ Failed to update profile' : '✅ Profile updated!';

    submitButton.disabled = false;
  });
}

</script>