import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface PostsType {
  data: Array<any>
  filterData: Array<any>
  currentPage: number
  dataShowLenght: number
}

const initialState: PostsType = {
  data: [],
  filterData: [],
  currentPage: 1,
  dataShowLenght: 4,
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    SET_POSTS: (state, action: PayloadAction<any>) => {
      state.data = action.payload
      state.currentPage = 1
    },
    POST_ADDED: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload)
    },
    FILTER_POSTS: (state, action: PayloadAction<any>) => {
      state.filterData = action.payload
    },
    SET_CURRENT_PAGE: (state, action: PayloadAction<any>) => {
      state.currentPage = action.payload
    },
  },
})

export const { SET_POSTS, POST_ADDED, FILTER_POSTS, SET_CURRENT_PAGE } =
  postsSlice.actions
export default postsSlice.reducer
