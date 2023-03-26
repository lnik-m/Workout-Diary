import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'

import mockReducer from './slices/mockSlice'
import countReducer from './slices/countSlice'
import exerciseReducer from "./slices/exerciseSlice";

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        items: mockReducer,
        exercises: exerciseReducer
    })
)

export const store = configureStore({
    reducer: {
        // a reducer which data is saved in localStorage
        saved: persistedReducer,
        // other reducers
        count: countReducer
    },
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })
})

export const persistor = persistStore(store)
