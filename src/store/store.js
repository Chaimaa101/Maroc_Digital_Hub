import { configureStore } from "@reduxjs/toolkit"
import authReducer from './AuthSlice'
import globalReducer from './GlobalSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        allData: globalReducer,
      
    }
})