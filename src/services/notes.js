import axios from 'axios'

const getData = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }
/*
const addData = newObject => {
//  console.log(newObject)
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
} */

// Alla oleva muutos tarvittiin että errorit saadaan vastauksesta frontendille
const addData = newObject => {
  console.log('Adding new object:', newObject);
  const request = axios.post(baseUrl, newObject);
  return request.then(response => response.data)
    .catch(error => {
      if (error.response && error.response.data && error.response.data.error) {
        throw new Error(error.response.data.error);
      }
    });
};

const updateData = (existingId, modifiedData) => {
  console.log(existingId, modifiedData)
  const request = axios.post(`${baseUrl}/${existingId}`, modifiedData)
  return request.then(response => response.data)
}

const deleteData = userId => {
  const request = axios.delete(`${baseUrl}/${userId}`)
  return request.then(response => response.data)
}

export default { getData, addData, deleteData, updateData }