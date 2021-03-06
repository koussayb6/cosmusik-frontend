import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import interactivecourseReducer from '../features/interactivecourse/interactivecourseSlice'
import postReducer from "../features/posts/postSlice";
import videocourseReducer from '../features/videocourse/videocourseSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    interactivecourses: interactivecourseReducer,
    posts: postReducer,
    videocourses: videocourseReducer,

  },
})
