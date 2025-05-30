import React, { FC, memo } from 'react';
import { cn } from '@/utils/cn';
import { LOADING_SIZE_CLASSES } from '../../../constants/ui';
import { LoadingProps } from '../../../types';

const Loading: FC<LoadingProps & React.HTMLAttributes<HTMLDivElement>> = ({
  size = "md",
  fullScreen = false,
  variant = "default",
  className = "",
  ...props
}) => {
  const spinner = (
    <div
      className={cn(
        'animate-spin rounded-full border-primary border-t-transparent',
        LOADING_SIZE_CLASSES[size],
        variant === 'image' && 'absolute inset-0 flex items-center justify-center bg-gray-100',
        className
      )}
      role="status"
      aria-label="Loading"
      {...props}
    />
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50" {...props}>
        {spinner}
      </div>
    );
  }

  return spinner;
};

export default memo(Loading);
