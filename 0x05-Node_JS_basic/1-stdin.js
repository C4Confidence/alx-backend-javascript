#!/usr/bin/node

// Display the message and prompt
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Listen for data from the user
process.stdin.on('data', (data) => {
  const name = data.toString().trim(); // Convert buffer to string
  process.stdout.write(`Your name is: ${name}\n`);

  // End program with closing message
  process.stdout.write('This important software is now closing\n');
  process.exit(); // Exit the program
});
