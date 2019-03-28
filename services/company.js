const axios = require('axios');

const { DATA_URL } = require('../config/server');

const PATH = `${DATA_URL}/companies`;

// Add company
async function addCompany(data) {
  try {
    const response = await axios.post(PATH, data);

    return response.data;
  } catch (error) {
    console.log('Error -', error);
    throw new Error('Something went wrong!');
  }
}

// Delete company
async function deleteCompany({ id }) {
  try {
    const response = await axios.delete(`${PATH}/${id}`);

    return response.data;
  } catch (error) {
    console.log('Error -', error);
    throw new Error('Something went wrong!');
  }
}

// Get company
async function getCompany({ id }) {
  try {
    const response = await axios.get(`${PATH}/${id}`);

    return response.data;
  } catch (error) {
    console.log('Error -', error);
    throw new Error('Something went wrong!');
  }
}

// Get users
async function getUsers({ id }) {
  try {
    const response = await axios.get(`${PATH}/${id}/users`);

    return response.data;
  } catch (error) {
    console.log('Error -', error);
    throw new Error('Something went wrong!');
  }
}

// Update company
async function updateCompany({ id, ...data }) {
  try {
    const response = await axios.patch(`${PATH}/${id}`, data);

    return response.data;
  } catch (error) {
    console.log('Error -', error);
    throw new Error('Something went wrong!');
  }
}

module.exports = {
  addCompany,
  deleteCompany,
  getCompany,
  getUsers,
  updateCompany
};
