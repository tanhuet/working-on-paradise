import { configureStore } from '@reduxjs/toolkit';

import authSlice from './auth-slice';

const store = configureStore({
    reducer: { 
        auth: authSlice.reducer,
        //slice different 
    },
});

export default store;