export interface LoadingProviderProps {
  position?: "center" | "top" | "bottom";
  blur?: boolean;
}

export type SnackbarPosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left"
  | "top-center"
  | "bottom-center";

export interface SnackbarProviderProps {
  position?: SnackbarPosition;
}
