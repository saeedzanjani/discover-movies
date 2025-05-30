import { useLoading } from '@/hooks/useLoading';
import { cn } from '@/utils/cn';
import { LoadingProviderProps } from '../../types';

export const LoadingProvider = ({
  position = 'center',
  blur = true
}: LoadingProviderProps) => {
  const { hasLoading, currentLoadingRequest } = useLoading();

  if (!hasLoading) return null;

  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'top-0';
      case 'bottom':
        return 'bottom-0';
      default:
        return 'top-1/2 -translate-y-1/2';
    }
  };

  return (
    <div
      className={cn(
        'fixed inset-0 z-50 flex items-center justify-center',
        blur && 'backdrop-blur-sm bg-black/10'
      )}
    >
      <div
        className={cn(
          'fixed left-1/2 -translate-x-1/2',
          getPositionClasses(),
          'flex flex-col items-center gap-2'
        )}
      >
        <div className="relative">
          {/* Outer spinning ring */}
          <div className="absolute inset-0 rounded-full border-4 border-primary/20" />
          {/* Inner spinning ring */}
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
        {currentLoadingRequest && (
          <p className="text-sm font-medium text-gray-700 bg-white/90 px-3 py-1 rounded-full shadow-sm">
            {currentLoadingRequest === 'getMovies' ? 'Loading movies...' :
             currentLoadingRequest === 'getMovieDetails' ? 'Loading movie details...' :
             'Loading...'}
          </p>
        )}
      </div>
    </div>
  );
};
