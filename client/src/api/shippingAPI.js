import axios from 'axios';

export const updateShippingData = async (dataToSubmit) => {
  try {
    const url = `/api/shipping/edit/${dataToSubmit.orderId}`;
    let response = await axios.post(url, dataToSubmit);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const addShippingData = async (dataToSubmit) => {
  try {
    const response = await axios.post('/api/shipping', dataToSubmit);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const getShippingData = async () => {
  try {
    const response = await axios.get('/api/shipping');
    return response;
  } catch (err) {
    console.error(err);
  }
};
