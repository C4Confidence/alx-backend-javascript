// Creating a simple user promise
function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}

export default signUpUser;
