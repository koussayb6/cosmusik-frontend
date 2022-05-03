import axios from 'axios'

const API_URL = '/pi/videocourse/'

// Create new videocourse
const createvideocourse = async (videocourseData) => {
 /* const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }
*/
  const response = await axios.post(API_URL, videocourseData)

  return response.data
}

// Get user videocourse
const getvideocourses = async () => {
  /*const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }*/

  const response = await axios.get(API_URL)
  console.log(response)
  return response.data

}
const getonevideocourse = async (videocourseId) => {
  /*const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }*/

  const response = await axios.get(API_URL +
      'video/'+ videocourseId)
console.log(response)
  return response.data
}

// Delete user videocourse
const deletevideocourse = async (videocourseId) => {
  /*const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }*/

  const response = await axios.delete(API_URL + videocourseId)

  return response.data
}

const videocourseService = {
  createvideocourse,
  getvideocourses,
  deletevideocourse,
  getonevideocourse
}

export default videocourseService
