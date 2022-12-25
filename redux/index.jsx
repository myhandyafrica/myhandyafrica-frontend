import { configureStore, combineReducers,createSlice } from '@reduxjs/toolkit'
import workerReducer from './slices/worker.slices'
import customerReducer from './slices/customer.slices'
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/es/storage';

// const persistConfig = {
//     key: 'root',
//     version: 1,
//     storage:AsyncStorage,
// };

const rootReducers = combineReducers({
    handy_user: workerReducer,
    customer: customerReducer,
})
const store = configureStore({
    reducer: rootReducers,
})


export default store