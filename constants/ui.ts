// Image related constants
export const IMAGE_QUALITY = 90;
export const IMAGE_SIZE = "w500";
export const ASPECT_RATIO = "aspect-[2/3]";

// Loading spinner constants
export const LOADING_SPINNER_SIZE = "h-8 w-8";

export const LOADING_SIZE_CLASSES = {
  sm: "h-4 w-4 border-2",
  md: "h-8 w-8 border-4",
  lg: "h-12 w-12 border-4",
} as const;

// Button styles
export const BUTTON_BASE_STYLES =
  "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

export const BUTTON_VARIANT_STYLES = {
  primary: "!bg-primary !text-white",
  secondary: "!bg-gray-100 !text-gray-900",
  outline: "!border !border-gray-300 !bg-transparent",
} as const;

export const BUTTON_SIZES = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4",
  lg: "h-12 px-6 text-lg",
} as const;
