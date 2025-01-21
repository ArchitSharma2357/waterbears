const bcrypt = require('bcrypt'); // Optional, if you want to hash passwords
const users = [
  {
    email: "user@example.com", // Example email
    password: "password123",   // Example password (plaintext or hashed)
  }
];

exports.handler = async (event, context) => {
  // Parse the request body (which will be a JSON object)
  const { email, password } = JSON.parse(event.body);

  // Check if the email exists in the "database" (in this case, a simple array)
  const user = users.find(user => user.email === email);

  if (!user) {
    return {
      statusCode: 401, // Unauthorized
      body: JSON.stringify({ message: "Invalid email or password" }),
    };
  }

  // If the password matches (if hashing, use bcrypt.compare() here)
  if (user.password === password) {
    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Login successful" }),
    };
  } else {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Invalid email or password" }),
    };
  }
};