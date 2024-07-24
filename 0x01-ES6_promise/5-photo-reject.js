// a a function that returns a promise rejecting with an Error.
export default function uploadPhoto(filename) {
  return Promise.reject(Error(`${filename} cannot be processed`));
}
