import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface sideBlockSlice {
    isVisible: boolean,
    index: number,
}

const initialState: sideBlockSlice = {
    isVisible: false,
    index: 1,
};

export const sideBlockSlice = createSlice({
    name: 'sideBlock',
    initialState,
    reducers: {
        showBlock: (state, action: PayloadAction<number>) => {
            state.isVisible = false;
            state.isVisible = true;
            state.index = action.payload;
        },
        hideBlock: (state) => {
            state.isVisible = false;
        },
    },
})

// Action creators are generated for each case reducer function
export const { showBlock, hideBlock } = sideBlockSlice.actions

export default sideBlockSlice.reducer
