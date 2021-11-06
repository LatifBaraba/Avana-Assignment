import { createSlice } from '@reduxjs/toolkit'
import { menus } from '../utilities/constants/data'

const initialState = {
    data: menus,
}

export const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        changeAllowed: (state, { payload }) => {
            state.data.forEach(value => {
                if (value.id === payload ) {
                    value.isAllowed = !value.isAllowed
                }
            })
        },
        changeShowed: (state, { payload }) => {
            state.data.forEach(value => {
                if (value.id === payload ) {
                    value.isShowed = !value.isShowed
                }
            })
        },
    },
})

export const { changeAllowed, changeShowed } = menu.actions

export default menu.reducer
