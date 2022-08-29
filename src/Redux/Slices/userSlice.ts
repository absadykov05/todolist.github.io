import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface userSliceType {
    email: string,
    token: string,
    id: string,
    isOpen: boolean,
}

const initialState: userSliceType = {
    email: '',
    token: '',
    id: '',
    isOpen: false,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<{email: string, token: string, id: string}>) => {
            state.email = action.payload.email;
            state.token = action.payload.token;
            state.id = action.payload.id;
            alert('new account logged in' + state.token)
        },
        removeUser: (state) => {
            state.email = '';
            state.token = '';
            state.id = '';
            alert('old account deleted')
        },
        setOpenMenu: (state) => {
            state.isOpen = !state.isOpen;
        },
        closeMenu: (state) => {
            state.isOpen = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser, removeUser, setOpenMenu, closeMenu } = userSlice.actions

export default userSlice.reducer
