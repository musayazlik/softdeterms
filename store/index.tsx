import { configureStore } from '@reduxjs/toolkit'
import postsReducer from './postsSlices'

export const store = configureStore({
  reducer: {
    posts: postsReducer,
  },
})

export default store
