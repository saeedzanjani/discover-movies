import { FC, memo } from 'react';
import { cn } from '@/utils/cn';
import { SkeletonProps } from '../../../types';

const Skeleton: FC<SkeletonProps> = ({
  className,
  children,
  asContainer = false,
  ...props
}) => {
  const baseClasses = cn(
    'animate-pulse rounded bg-gray-200',
    className
  );

  if (asContainer) {
    return (
      <div className={cn('animate-pulse', className)} {...props}>
        {children}
      </div>
    );
  }

  return (
    <div className={baseClasses} {...props}>
      {children}
    </div>
  );
};

export default memo(Skeleton);
