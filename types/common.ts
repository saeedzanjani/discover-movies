import Link from "next/link";
import { ButtonHTMLAttributes, ComponentPropsWithoutRef, HTMLAttributes, InputHTMLAttributes, ReactNode } from "react";
import { IconPosition, InputSize } from "../constants";
import { InputVariant } from "../constants";
import { SnackbarSeverity } from "../store/slices";

export interface Genre {
  id: number;
  name: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logo_path: string | null;
}

export interface SpokenLanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export interface BackButtonProps
  extends Omit<ComponentPropsWithoutRef<typeof Link>, "href"> {
  pathname: string;
  label?: string;
}

export interface LoadingProps {
  size?: "sm" | "md" | "lg";
  fullScreen?: boolean;
  variant?: "default" | "image";
  className?: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  label?: string;
  error?: string;
  variant?: InputVariant;
  size?: InputSize;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  helperText?: string;
  fullWidth?: boolean;
}

export interface InputIconProps {
  icon?: ReactNode;
  iconPosition: IconPosition;
  size: InputSize;
  variant: string;
}

export interface InputHelperProps {
  id?: string;
  error?: string;
  helperText?: string;
}

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  asContainer?: boolean;
  children?: React.ReactNode;
}

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

export interface UseSnackbarOptions {
  message: string;
  severity?: SnackbarSeverity;
  autoHideDuration?: number;
}
