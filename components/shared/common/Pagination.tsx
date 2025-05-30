import { memo, FC } from 'react';
import { PaginationProps } from '../../../types';
import Button from './Button';

const Pagination: FC<PaginationProps & React.HTMLAttributes<HTMLDivElement>> = ({
  currentPage,
  totalPages,
  onPageChange,
  className = "",
  ...props
}) => {
  if (totalPages <= 1) return null;

  return (
    <div className={`mt-8 flex justify-center space-x-2 ${className}`} {...props}>
      <Button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        variant="primary"
        className="disabled:opacity-50"
        aria-label="Previous page"
      >
        Previous
      </Button>
      <span className="flex items-center px-4">
        Page {currentPage} of {totalPages}
      </span>
      <Button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        variant="primary"
        className="disabled:opacity-50"
        aria-label="Next page"
      >
        Next
      </Button>
    </div>
  );
};

export default memo(Pagination);
