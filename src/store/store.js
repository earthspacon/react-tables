import { configureStore } from '@reduxjs/toolkit'
import { dataAPI } from '../api/DataService'

export const store = configureStore({
  reducer: {
    [dataAPI.reducerPath]: dataAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(dataAPI.middleware),
})
