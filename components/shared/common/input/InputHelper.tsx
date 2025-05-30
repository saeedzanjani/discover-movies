import { FC, memo } from 'react';
import { cn } from '@/utils/cn';
import { InputHelperProps } from '../../../../types';

const InputHelper: FC<InputHelperProps> = ({ id, error, helperText }) => {
  if (!error && !helperText) return null;

  return (
    <p
      id={error ? `${id}-error` : `${id}-helper`}
      className={cn(
        "mt-1.5 text-sm",
        error ? "text-red-500" : "text-gray-500"
      )}
      role={error ? "alert" : undefined}
    >
      {error || helperText}
    </p>
  );
};

export default memo(InputHelper);
