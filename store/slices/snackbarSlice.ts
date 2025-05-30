import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type SnackbarSeverity = 'success' | 'error' | 'info' | 'warning';

interface SnackbarState {
  open: boolean;
  message: string;
  severity: SnackbarSeverity;
  autoHideDuration: number;
}

const initialState: SnackbarState = {
  open: false,
  message: '',
  severity: 'info',
  autoHideDuration: 6000,
};

const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    showSnackbar: (state, action: PayloadAction<Omit<SnackbarState, 'open'>>) => {
      state.open = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.autoHideDuration = action.payload.autoHideDuration;
    },
    hideSnackbar: (state) => {
      state.open = false;
    },
  },
});

export const { showSnackbar, hideSnackbar } = snackbarSlice.actions;
export default snackbarSlice.reducer;
