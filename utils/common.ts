import { SnackbarPosition } from "../types";

export const getPositionClasses = (position: SnackbarPosition) => {
  switch (position) {
    case "top-right":
      return "top-4 right-4";
    case "top-left":
      return "top-4 left-4";
    case "bottom-right":
      return "bottom-4 right-4";
    case "bottom-left":
      return "bottom-4 left-4";
    case "top-center":
      return "top-4 left-1/2 -translate-x-1/2";
    case "bottom-center":
      return "bottom-4 left-1/2 -translate-x-1/2";
    default:
      return "top-4 right-4";
  }
};
