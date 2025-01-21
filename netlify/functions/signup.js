const bcrypt = require('bcryptjs');
const { writeFileSync } = require('fs'); // Simulated database (for demo purposes)
const usersDBPath = './users.json'; // File to store user data

exports.handler = async (event, context) => {
  const { email, password } = JSON.parse(event.body);

  // Check if email already exists (in a real app, you'd use a database)
  const users = require(usersDBPath);
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Email already exists.' }),
    };
  }

  // Hash the password before storing it
  const hashedPassword = await bcrypt.hash(password, 10);

  // Store user in a "database" (for demo purposes, we're writing to a JSON file)
  users.push({ email, password: hashedPassword });
  writeFileSync(usersDBPath, JSON.stringify(users, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Signup successful!' }),
  };
};
