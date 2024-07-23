function getResponseFromAPI() {
  return new Promise((resolve) => {
    // Simulate API call with a timeout
    setTimeout(() => {
      // For example purposes, let's resolve the promise with some data
      const data = { message: 'API call successful' };
      resolve(data);
    }, 1000); // Simulate a delay of 1 second
  });
}

export default getResponseFromAPI;
