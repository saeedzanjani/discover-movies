"use client";

import { FC, memo } from 'react';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { BackButtonProps } from '../../../types';

const BackButton: FC<BackButtonProps> = ({
  pathname,
  label = 'Back',
  className,
  ...props
}) => {
  return (
    <Link
      href={pathname}
      className={cn(
        "inline-flex items-center text-sm text-gray-600 hover:text-primary",
        className
      )}
      {...props}
    >
      <span className="mr-1">←</span>
      {label}
    </Link>
  );
};

export default memo(BackButton);
