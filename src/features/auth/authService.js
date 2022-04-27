import axios from 'axios'

const API_URL = '/api/users/'

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL+'register', userData)

  /*if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }*/

  return response.data
}

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'login', userData)
  console.log(response)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}

// Login user
const verify = async (code) => {
  const response = await axios.get('/api/users/confirm/'+code)
  console.log(response)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}
// otp verify
// Login user
const verifyOtp = async (userData) => {
  const response = await axios.post(API_URL + 'otp', userData)
  console.log(response)
  if (response.data) {
    localStorage.setItem('user', JSON.stringify(response.data))
  }

  return response.data
}


// Logout user
const logout = () => {
  localStorage.removeItem('user')
}

const authService = {
  register,
  logout,
  login,verify, verifyOtp
}

export default authService
