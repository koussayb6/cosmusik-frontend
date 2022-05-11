import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import interactivecourseReducer from '../features/interactivecourse/interactivecourseSlice'
import postReducer from "../features/posts/postSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    interactivecourses: interactivecourseReducer,
    posts: postReducer,
  },
})
