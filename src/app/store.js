import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import interactivecourseReducer from '../features/interactivecourse/interactivecourseSlice'


export const store = configureStore({
  reducer: {
    auth: authReducer,
    interactivecourses: interactivecourseReducer,
  },
})
