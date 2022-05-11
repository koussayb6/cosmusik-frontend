import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import interactivecourseService from './interactivecourseService'

const initialState = {
  interactivecourses: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
}

// Create new interactivecourse
export const createinteractivecourse = createAsyncThunk(
    'interactivecourses/create',
    async (interactivecourseData, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await interactivecourseService.createinteractivecourse(interactivecourseData, token)
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

// Get user interactivecourses
export const getinteractivecourses = createAsyncThunk(
    'interactivecourses/getAll',
    async (_, thunkAPI) => {
      try {
        const token = thunkAPI.getState().auth.user.token
        return await interactivecourseService.getinteractivecourses(token)
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
export const getoneinteractivecourse = createAsyncThunk(
    'interactivecourses/getOne',
    async (id, thunkAPI) => {
        try {
           // const token = thunkAPI.getState().auth.user.token
            return await interactivecourseService.getoneinteractivecourse(id)
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

// Delete user interactivecourse
export const deleteinteractivecourse = createAsyncThunk(
    'interactivecourses/delete',
    async (id, thunkAPI) => {
      try {
       // const token = thunkAPI.getState().auth.user.token
        return await interactivecourseService.deleteinteractivecourse(id)
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

export const interactivecourseSlice = createSlice({
  name: 'interactivecourse',
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
        .addCase(createinteractivecourse.pending, (state) => {
          state.isLoading = true
        })
        .addCase(createinteractivecourse.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.interactivecourses.push(action.payload)
        })
        .addCase(createinteractivecourse.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getinteractivecourses.pending, (state) => {
          state.isLoading = true
        })
        .addCase(getinteractivecourses.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.interactivecourses = action.payload
        })
        .addCase(getinteractivecourses.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
        .addCase(getoneinteractivecourse.pending, (state) => {
            state.isLoading = true
        })
        .addCase(getoneinteractivecourse.fulfilled, (state, action) => {
            state.isLoading = false
            state.isSuccess = true
            state.interactivecourses = action.payload
        })
        .addCase(getoneinteractivecourse.rejected, (state, action) => {
            state.isLoading = false
            state.isError = true
            state.message = action.payload
        })
        .addCase(deleteinteractivecourse.pending, (state) => {
          state.isLoading = true
        })
        .addCase(deleteinteractivecourse.fulfilled, (state, action) => {
          state.isLoading = false
          state.isSuccess = true
          state.interactivecourses = state.interactivecourses.filter(
              (interactivecourse) => interactivecourse._id !== action.payload.id
          )
        })
        .addCase(deleteinteractivecourse.rejected, (state, action) => {
          state.isLoading = false
          state.isError = true
          state.message = action.payload
        })
  },
})

export const { reset } = interactivecourseSlice.actions
export default interactivecourseSlice.reducer
