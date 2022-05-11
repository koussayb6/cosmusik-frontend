import axios from 'axios'

const API_URL = '/api/interactivecourse/'

// Create new interactivecourse
const createinteractivecourse = async (interactivecourseData) => {
 /* const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
*/
  const response = await axios.post(API_URL, interactivecourseData)

  return response.data
}

// Get user interactivecourse
const getinteractivecourses = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }

  const response = await axios.get(API_URL,config)
  console.log(response)
  return response.data

}
const getoneinteractivecourse = async (interactivecourseId) => {
  /*const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }*/

  const response = await axios.get(API_URL +
      'video/'+ interactivecourseId)
console.log(response)
  return response.data
}

// Delete user interactivecourse
const deleteinteractivecourse = async (interactivecourseId) => {
  /*const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }*/

  const response = await axios.delete(API_URL + interactivecourseId)

  return response.data
}

const interactivecourseService = {
  createinteractivecourse,
  getinteractivecourses,
  deleteinteractivecourse,
  getoneinteractivecourse
}

export default interactivecourseService
