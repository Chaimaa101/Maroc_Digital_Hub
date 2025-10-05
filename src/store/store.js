import { configureStore } from "@reduxjs/toolkit"
import authReducer from './AuthSlice'
import startupReducer from './StartupSlice'
import eventReducer from './EventSlice'
import forumReducer from './ForumSlice'
import sectorReducer from './SectorSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        startups: startupReducer,
        events: eventReducer,
        forum: forumReducer,
        sectors: sectorReducer,
    }
})