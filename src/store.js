import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/CounterSlice'
import movieReducer from './features/movie/movieSlice'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    movie: movieReducer
  },
})