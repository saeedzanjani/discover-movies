import { baseApi } from './apis/baseApi';
import { loadingReducer, snackbarReducer } from './slices';

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  snackbar: snackbarReducer,
  loading: loadingReducer,
} as const;

export type RootReducer = typeof rootReducer;
