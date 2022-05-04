import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import videocourseService from './videocourseService'

const initialState = {
  videocourses: [],
  isError: false,
  isSuccess: false,
  isLoading: true,
  message: '',
}

// Create new videocourse
export const createvideocourse = createAsyncThunk(
    'videocourses/create',
    async (videocourseData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await videocourseService.createvideocourse(videocourseData, token)
      } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
)

// Create new review
export const createReview = createAsyncThunk(
    'videocourses/createReview',
    async (review, thunkAPI) => {
        try {
            const token = thunkAPI.getState().auth.user.token
            return await videocourseService.addReview(review, token)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Get user videocourses
export const getvideocourses = createAsyncThunk(
    'videocourses/getAll',
    async (_, thunkAPI) => {
      try {
        //const token = thunkAPI.getState().auth.user.token
        return await videocourseService.getvideocourses()
      } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
)
export const getonevideocourse = createAsyncThunk(
    'videocourses/getOne',
    async (id, thunkAPI) => {
        try {
           // const token = thunkAPI.getState().auth.user.token
            return await videocourseService.getonevideocourse(id)
        } catch (error) {
            const message =
                (error.response &&
                    error.response.data &&
                    error.response.data.message) ||
                error.message ||
                error.toString()
            return thunkAPI.rejectWithValue(message)
        }
    }
)

// Delete user videocourse
export const deletevideocourse = createAsyncThunk(
    'videocourses/delete',
    async (id, thunkAPI) => {
      try {
       // const token = thunkAPI.getState().auth.user.token
        return await videocourseService.deletevideocourse(id)
      } catch (error) {
        const message =
            (error.response &&
                error.response.data &&
                error.response.data.message) ||
            error.message ||
            error.toString()
        return thunkAPI.rejectWithValue(message)
      }
    }
)

export const videocourseSlice = createSlice({
  name: 'videocourse',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
        .addCase(createvideocourse.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createvideocourse.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.videocourses.push(action.payload)
        })
        .addCase(createvideocourse.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getvideocourses.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getvideocourses.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.videocourses = action.payload
        })
        .addCase(getvideocourses.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getonevideocourse.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getonevideocourse.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.videocourses = action.payload
        })
        .addCase(getonevideocourse.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deletevideocourse.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deletevideocourse.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.videocourses = state.videocourses.filter(
              (videocourse) => videocourse._id !== action.payload.id
          )
        })
        .addCase(deletevideocourse.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(createReview.pending, (state) => {
            state.isLoading = true
        })
        .addCase(createReview.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.videocourses.reviews.push(action.payload)
        })
        .addCase(createReview.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
  },
})

export const { reset } = videocourseSlice.actions
export default videocourseSlice.reducer
