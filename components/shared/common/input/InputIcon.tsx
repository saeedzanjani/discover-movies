import { ReactElement, isValidElement, cloneElement, FC, useMemo, memo } from 'react';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { cn } from '@/utils/cn';
import { iconSizes } from '@/constants/input';
import { InputIconProps } from '../../../../types';

const InputIcon: FC<InputIconProps> = ({ icon, iconPosition, size = 'md', variant }) => {
  const iconClasses = useMemo(() => cn(
    'pointer-events-none absolute inset-y-0 flex items-center',
    iconPosition === 'left' ? 'left-0 pl-3' : 'right-0 pr-3'
  ), [iconPosition]);

  const iconNode = useMemo(() => {
    if (!icon && !(variant === 'search' && iconPosition === 'left')) {
      return null;
    }

    let node = null;
    if (icon) {
      if (isValidElement(icon) && 'props' in icon) {
        node = cloneElement(icon as ReactElement<{ className?: string }>, {
          className: cn((icon as ReactElement<{ className?: string }>).props.className, iconSizes[size], 'text-gray-400'),
        });
      } else {
        node = icon;
      }
    } else if (variant === 'search' && iconPosition === 'left') {
      node = (
        <MagnifyingGlassIcon
          className={cn(iconSizes[size], 'text-gray-400')}
          aria-hidden="true"
        />
      );
    }
    return node ? <span className="flex items-center justify-center">{node}</span> : null;
  }, [icon, iconPosition, size, variant]);

  if (!icon && !(variant === 'search' && iconPosition === 'left')) {
    return null;
  }

  return (
    <div className={iconClasses}>
      {iconNode}
    </div>
  );
};

export default memo(InputIcon);
