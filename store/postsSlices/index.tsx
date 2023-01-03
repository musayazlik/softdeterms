import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostsType {
  data: Array<any>
  loading: boolean
  error: string | null
  payload: any
}

const initialState: PostsType = {
  data: [],
  loading: false,
  error: null,
  payload: null,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    SET_POSTS: (state, action: PayloadAction<any>) => {
      state.data = action.payload
      state.loading = false
    },
    POST_ADDED: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload)
      state.loading = false
    },
  },
})

export const { SET_POSTS, POST_ADDED } = postsSlice.actions
export default postsSlice.reducer
