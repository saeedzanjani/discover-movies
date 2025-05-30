import { forwardRef, memo } from 'react';
import { cn } from '@/utils/cn';
import InputIcon from './InputIcon';
import InputHelper from './InputHelper';
import { baseStyles, sizes, variants } from '../../../../constants/input';
import { InputProps } from '../../../../types';


const Input = forwardRef<HTMLInputElement, InputProps>(({
  className = '',
  label,
  error,
  variant = 'default',
  size = 'md',
  icon,
  iconPosition = 'left',
  helperText,
  fullWidth = true,
  id,
  disabled,
  ...props
}, ref) => {
  const containerClasses = cn(
    fullWidth ? 'w-full' : '',
    'relative'
  );

  const inputClasses = cn(
    baseStyles,
    variants[variant],
    sizes[size],
    error && 'border-red-500 focus:border-red-500 focus:ring-red-500/50',
    icon && iconPosition === 'left' && 'pl-10',
    icon && iconPosition === 'right' && 'pr-10',
    className
  );

  const input = (
    <input
      ref={ref}
      id={id}
      className={inputClasses}
      disabled={disabled}
      aria-invalid={error ? 'true' : 'false'}
      aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
      {...props}
    />
  );

  const hasIcon = icon || (variant === 'search' && iconPosition === 'left');
  const hasHelperContent = label || error || helperText;

  if (!hasHelperContent && !hasIcon) {
    return input;
  }

  return (
    <div className={containerClasses}>
      {label && (
        <label
          htmlFor={id}
          className="mb-1.5 block text-sm font-medium text-gray-700"
        >
          {label}
        </label>
      )}
      <div className="relative">
        <InputIcon
          icon={icon}
          iconPosition={iconPosition}
          size={size}
          variant={variant}
        />
        {input}
      </div>
      <InputHelper
        id={id}
        error={error}
        helperText={helperText}
      />
    </div>
  );
});

Input.displayName = 'Input';

export default memo(Input);
