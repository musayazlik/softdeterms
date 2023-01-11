import { configureStore, combineReducers, createStore } from '@reduxjs/toolkit'
import { Store } from 'redux'
import { createWrapper } from 'next-redux-wrapper'
import postsReducer from './postsSlices'

export interface State {
  posts: any
}

const reducer = combineReducers({
  posts: postsReducer,
})

const makeStore = () => configureStore({ reducer })

export const wrapper = createWrapper<Store<State>>(makeStore, { debug: true })
