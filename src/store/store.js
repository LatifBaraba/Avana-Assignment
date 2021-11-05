import { configureStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import menuReducer from './menu'

export const store = configureStore({
    reducer: {
        menu: menuReducer,
    },
    middleware: [thunk],
})
