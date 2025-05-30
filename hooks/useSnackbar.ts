import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { showSnackbar, hideSnackbar } from '@/store/slices/snackbarSlice';
import { useEffect } from 'react';
import { UseSnackbarOptions } from '../types';

export const useSnackbar = () => {
  const dispatch = useDispatch();
  const { open, message, severity, autoHideDuration } = useSelector(
    (state: RootState) => state.snackbar
  );

  const show = ({ message, severity = 'info', autoHideDuration = 3000 }: UseSnackbarOptions) => {
    dispatch(showSnackbar({ message, severity, autoHideDuration }));
  };

  const hide = () => {
    dispatch(hideSnackbar());
  };

  useEffect(() => {
    if (open) {
      const timer = setTimeout(() => {
        hide();
      }, autoHideDuration);
      return () => clearTimeout(timer);
    }
  }, [open, autoHideDuration]);

  return {
    show,
    hide,
    isOpen: open,
    message,
    severity,
  };
};
