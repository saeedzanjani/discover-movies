import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { baseApi } from './apis/baseApi';
import { rootReducer } from './reducers';
import { apiResponseMiddleware } from '../utils/api';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(baseApi.middleware)
      .concat(apiResponseMiddleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
