import {createSlice} from '@reduxjs/toolkit'
import type {PayloadAction} from '@reduxjs/toolkit'
import {RootState} from "../redux-store";
import {DateNumber, TimeCurrent} from "../../Time";

export type Item = { id: number, title: string, status: 'active' | 'done' | 'archive', date: number[], stared: boolean }

export interface CounterState {
    items: Item[],
    text: string,
    textA: string,
    textEdit: string,
}

const initialState: CounterState = {
    items: [],
    text: '',
    textA: '',
    textEdit: '',
};

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addTask: (state) => {
            state.items = [...state.items, {
                id: state.items.length + 1, title: state.text, status: 'active',
                date: DateNumber, stared: false
            }];
            state.text = '';
        },
        addArchiveTask: (state) => {
            state.items = [...state.items, {
                id: state.items.length + 1, title: state.textA, status: 'archive',
                date: DateNumber, stared: false
            }];
            state.textA = '';
        },
        onChange: (state, action: PayloadAction<string>) => {
            state.text = action.payload;
        },
        onArchiveChange: (state, action: PayloadAction<string>) => {
            state.textA = action.payload;
        },
        finishTask: (state, action: PayloadAction<number>) => {
            state.items[action.payload].status = 'done';
        },
        deleteTask: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(obj => obj.id !== action.payload);
        },

        activateTask: (state, action: PayloadAction<number>) => {
            state.items[action.payload].status = 'active';
        },
        starTask: (state, action: PayloadAction<number>) => {
            state.items[action.payload].stared = !state.items[action.payload].stared;
        },
        archiveTask: (state, action: PayloadAction<number>) => {
            state.items[action.payload].status = 'archive';
        },

      /*  setTextEdit: (state, action: PayloadAction<number>) => {
            state.textEdit = state.items.filter(obj => obj.id !== action.payload).title;
        },*/
        titleEdit: (state, action: PayloadAction<{ index: number, text: string }>) => {
            state.items[action.payload.index].title = action.payload.text;
        },
    },
})

// Action creators are generated for each case reducer function
export const {
    addTask,
    onChange,
    finishTask,
    activateTask,
    deleteTask,
    starTask,
    archiveTask,
    onArchiveChange,
    addArchiveTask,
    titleEdit
} = counterSlice.actions
export const homeSelector = (state: RootState) => state.counter;

export default counterSlice.reducer;
