import { configureStore } from '@reduxjs/toolkit'
import searchReducer from './search-slice'

export const store = configureStore({
  reducer: {
    movieSearch: searchReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch