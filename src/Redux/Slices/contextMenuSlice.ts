import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface contextMenuSlice {
 isVisible: boolean,
 position: number[],
 index: number,
 id: number,
}

const initialState: contextMenuSlice = {
    isVisible: false,
    position: [],
    index: 0,
    id: 0,
};

export const contextMenuSlice = createSlice({
    name: 'menu',
    initialState,
    reducers: {
        showNewMenu: (state, action: PayloadAction<{ position: number[], index: number, id: number }>) => {
           state.isVisible = false;
           state.position = action.payload.position;
           state.isVisible = true;
           state.index = action.payload.index;
           state.id = action.payload.id;
        },
        hideMenu: (state) => {
            state.isVisible = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { showNewMenu, hideMenu } = contextMenuSlice.actions

export default contextMenuSlice.reducer
