import { configureStore, combineReducers, createStore } from '@reduxjs/toolkit'
import { AnyAction, Store } from 'redux'
import { createWrapper, HYDRATE } from 'next-redux-wrapper'
import postsReducer from './postsSlices'
import categoriesReducer from './categoriesSlices'

export interface State {
  posts: any
  categories: any
}

const reducers = combineReducers({
  posts: postsReducer,
  categories: categoriesReducer,
})

const reducer = (state: any, action: AnyAction) => {
  if (action.type === HYDRATE) {
    let nextState = {
      ...state,
      ...action.payload,
    }
    return nextState
  } else {
    return reducers(state, action)
  }
}

const makeStore = () => configureStore({ reducer })

export const wrapper = createWrapper<Store<State>>(makeStore)
