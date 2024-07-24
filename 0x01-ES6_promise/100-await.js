// Import both functions from utils.js
import { uploadPhoto, createUser } from './utils';

async function asyncUploadUser() {
  try {
    // Attempt to call uploadPhoto and createUser
    const photo = await uploadPhoto('fileName');
    const user = await createUser();
    return { photo, user };
  } catch (error) {
    return { photo: null, user: null };
  }
}
export default asyncUploadUser;
