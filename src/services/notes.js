import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/persons'

const getData = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
  }

const addData = newObject => {
//  console.log(newObject)
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

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