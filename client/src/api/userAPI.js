import axios from 'axios';

export const loginUser = async (dataToSubmit) => {
  try {
    const response = await axios.post('/api/users/login', dataToSubmit);
    return response;
  } catch (err) {
    console.error(err);
  }
}
