const axios = require('axios');

const { DATA_URL } = require('../config/server');

const PATH = `${DATA_URL}/users`;

// Add user
async function addUser(data) {
  try {
    const response = await axios.post(PATH, data);

    return response.data;
  } catch (error) {
    console.log('Error -', error);
    throw new Error('Something went wrong!');
  }
}

// Delete user
async function deleteUser({ id }) {
  try {
    const response = await axios.delete(`${PATH}/${id}`);

    return response.data;
  } catch (error) {
    console.log('Error -', error);
    throw new Error('Something went wrong!');
  }
}

// Get user
async function getUser({ id }) {
  try {
    const response = await axios.get(`${PATH}/${id}`);

    return response.data;
  } catch (error) {
    console.log('Error -', error);
    throw new Error('Something went wrong!');
  }
}

// Update user
async function updateUser({ id, ...data }) {
  try {
    const response = await axios.patch(`${PATH}/${id}`, data);

    return response.data;
  } catch (error) {
    console.log('Error -', error);
    throw new Error('Something went wrong!');
  }
}

module.exports = {
  addUser,
  deleteUser,
  getUser,
  updateUser
};
