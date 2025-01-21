const bcrypt = require('bcrypt');

// Example user database (replace with a real database)
const users = [
  { email: "user@example.com", passwordHash: bcrypt.hashSync("password123", 10) }
];

exports.handler = async (event, context) => {
  const { email, password } = JSON.parse(event.body);

  // Find user
  const user = users.find((u) => u.email === email);
  if (!user) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "User not found" }),
    };
  }

  // Validate password
  const isValid = await bcrypt.compare(password, user.passwordHash);
  if (!isValid) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: "Invalid credentials" }),
    };
  }

  // Authentication successful
  return {
    statusCode: 200,
    body: JSON.stringify({ message: "Login successful" }),
  };
};