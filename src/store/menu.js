import { createSlice } from '@reduxjs/toolkit'
import { menus } from '../utilities/constants/data'

const initialState = {
    data: menus,
}

export const menu = createSlice({
    name: 'menu',
    initialState,
    reducers: {
    },
})

// export const { getRandom, getRandomSuccess, getRandomFailure } = user.actions

export default menu.reducer
