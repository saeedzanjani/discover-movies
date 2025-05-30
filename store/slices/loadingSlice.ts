import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LoadingState {
  isLoading: boolean;
  loadingRequests: string[];
}

const initialState: LoadingState = {
  isLoading: false,
  loadingRequests: [],
};

const loadingSlice = createSlice({
  name: 'loading',
  initialState,
  reducers: {
    startLoading: (state, action: PayloadAction<string>) => {
      state.loadingRequests.push(action.payload);
      state.isLoading = true;
    },
    stopLoading: (state, action: PayloadAction<string>) => {
      state.loadingRequests = state.loadingRequests.filter(
        (request) => request !== action.payload
      );
      state.isLoading = state.loadingRequests.length > 0;
    },
  },
});

export const { startLoading, stopLoading } = loadingSlice.actions;
export default loadingSlice.reducer;
