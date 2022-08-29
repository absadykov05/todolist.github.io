import {combineReducers, configureStore} from '@reduxjs/toolkit'
import counterReducer from "./Slices/counterSlice";
import menuReducer from './Slices/contextMenuSlice';
import userReducer from './Slices/userSlice';
import sideBlockReducer from './Slices/sideBlockSlice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
    key: 'root',
    version: 1,
    storage: storage,
}
const rootReducer = combineReducers({
    counter: counterReducer,
    menu: menuReducer,
    user: userReducer,
    sideBlock: sideBlockReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

// blacklist: [counterReducer().text]
