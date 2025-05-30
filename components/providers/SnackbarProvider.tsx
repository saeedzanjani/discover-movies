import { useMemo } from 'react';
import { useSnackbar } from '@/hooks/useSnackbar';
import { SnackbarProviderProps } from '../../types';
import { getPositionClasses } from '../../utils/common';

export const SnackbarProvider = ({ position = 'top-right' }: SnackbarProviderProps) => {
  const { isOpen, message, severity, hide } = useSnackbar();

  const getSeverityClasses = useMemo(() => {
    switch (severity) {
      case 'error':
        return 'bg-red-50 text-red-700 border-red-200';
      case 'success':
        return 'bg-green-50 text-green-700 border-green-200';
      case 'warning':
        return 'bg-yellow-50 text-yellow-700 border-yellow-200';
      default:
        return 'bg-blue-50 text-blue-700 border-blue-200';
    }
  }, [severity]);

   if (!isOpen) return null;

  return (
    <div className={`fixed ${getPositionClasses(position)} z-50`}>
      <div
        className={`${getSeverityClasses} min-w-[300px] max-w-md rounded-lg border p-4 shadow-lg transition-all duration-300 ease-in-out`}
        role="alert"
      >
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{message}</p>
          <button
            onClick={hide}
            className="ml-4 text-current hover:opacity-70 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current rounded-full p-1"
            aria-label="Close notification"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
