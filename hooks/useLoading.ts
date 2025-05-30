import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const useLoading = () => {
  const { isLoading, loadingRequests } = useSelector(
    (state: RootState) => state.loading
  );

  return {
    isLoading,
    loadingRequests,
    hasLoading: loadingRequests.length > 0,
    currentLoadingRequest: loadingRequests[loadingRequests.length - 1] || null,
  };
};
