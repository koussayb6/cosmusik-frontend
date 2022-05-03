import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import videocourseReducer from '../features/videocourse/videocourseSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    videocourses: videocourseReducer,

  },
})
