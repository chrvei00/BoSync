import { configureStore } from '@reduxjs/toolkit';
import { collectiveReducer } from './features/collective/collectiveReducer';

const rootReducer = {
    collective: collectiveReducer
};

export const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
