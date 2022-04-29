import axios from 'axios';

export const updateInventoryData = async (dataToSubmit) => {
  try {
    const url = `/api/inventories/edit/${dataToSubmit.sku}`;
    let response = await axios.post(url, dataToSubmit);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const addInventoryData = async (dataToSubmit) => {
  try {
    const response = await axios.post('/api/inventories', dataToSubmit);
    return response;
  } catch (err) {
    console.error(err);
  }
};

export const getInventoryData = async () => {
  try {
    const response = await axios.get('/api/inventories');
    return response;
  } catch (err) {
    console.error(err);
  }
};
