import { FC, memo } from 'react';
import { cn } from '@/utils/cn';
import { ButtonProps } from '../../../types';
import { BUTTON_BASE_STYLES, BUTTON_SIZES, BUTTON_VARIANT_STYLES } from '../../../constants/ui';

const Button: FC<ButtonProps> = ({
  type = 'button',
  children,
  className = '',
  variant = 'primary',
  size = 'md',
  disabled,
  ...props
}) => {

  return (
    <button
      type={type}
      className={cn(
        BUTTON_BASE_STYLES,
        BUTTON_VARIANT_STYLES[variant],
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
