import { ReactNode } from "react";
import { Movie } from "./api";

export interface MovieGridProps {
  movies: Movie[];
  isLoading?: boolean;
  error?: unknown;
}

export interface MovieCardProps {
  movie: Movie;
  index?: number;
}

export interface MovieCardMetadataProps {
  movie: Movie;
  className?: string;
}

export interface MovieTitleBaseProps {
  title: string;
  tagline?: string | null;
  className?: string;
  headingLevel?: "h1" | "h2" | "h3";
  showTagline?: boolean;
  children?: ReactNode;
}

export interface MovieMetadataProps {
  movie: Movie;
}

export interface MovieStatusProps {
  movie: MovieMetadataProps["movie"];
}

export interface MovieReleaseDateProps {
  releaseDate: string;
}

export interface MovieRatingProps {
  voteAverage: number;
  voteCount: number;
}

export interface MoviePosterProps {
  posterPath: string | null;
  title: string;
}

export interface MovieOverviewBaseProps {
  overview: string;
  className?: string;
  showHeading?: boolean;
  maxLines?: number;
  children?: ReactNode;
}

export type MovieMetadataVariant = "card" | "details";

export interface UnifiedMovieMetadataProps extends MovieMetadataProps {
  variant?: MovieMetadataVariant;
  className?: string;
}

export interface MovieDetailsMetadataProps {
  movie: Movie;
  className?: string;
}
