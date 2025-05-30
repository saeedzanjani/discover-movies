'use client';

import { Provider } from 'react-redux';
import { SnackbarProvider } from '@/components/providers/SnackbarProvider';
import { LoadingProvider } from '@/components/providers/LoadingProvider';
import { store } from '../store/store';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      {children}
      <SnackbarProvider position="bottom-right" />
      <LoadingProvider position="center" blur={true} />
    </Provider>
  );
}
