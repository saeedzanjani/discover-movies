export const iconSizes = {
  sm: "h-4 w-4",
  md: "h-5 w-5",
  lg: "h-6 w-6",
} as const;

export type InputSize = keyof typeof iconSizes;
export type IconPosition = 'left' | 'right';

export const baseStyles =
  "rounded-md border bg-white text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary disabled:cursor-not-allowed disabled:opacity-50 py-2.5 px-4";

export const variants = {
  default: "border-gray-300",
  search: "border-gray-300",
  outline: "border-gray-200 hover:border-gray-300",
} as const;

export const sizes = {
  sm: "px-2.5 py-1.5 text-xs",
  md: "px-3 py-2",
  lg: "px-4 py-2.5 text-base",
} as const;

export type InputVariant = keyof typeof variants;
