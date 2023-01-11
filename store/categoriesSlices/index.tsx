import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CategoriesType {
  data: Array<any>
}

const initialState: CategoriesType = {
  data: [],
}

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    SET_CATEGORIES: (state, action: PayloadAction<any>) => {
      state.data = action.payload
    },
    POST_CATEGORIES: (state, action: PayloadAction<any>) => {
      state.data.push(action.payload)
    },
  },
})

export const { SET_CATEGORIES, POST_CATEGORIES } = categoriesSlice.actions
export default categoriesSlice.reducer
