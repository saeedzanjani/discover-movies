import { FC, memo } from 'react';
import { cn } from '@/utils/cn';
import { ButtonProps } from '../../../types';
import { BUTTON_BASE_STYLES, BUTTON_SIZES, BUTTON_VARIANTS } from '../../../constants/ui';

const Button: FC<ButtonProps> = ({
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled,
  ...props
}) => {

  return (
    <button
      className={cn(
        BUTTON_BASE_STYLES,
        BUTTON_VARIANTS[variant],
        BUTTON_SIZES[size],
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};

export default memo(Button);
