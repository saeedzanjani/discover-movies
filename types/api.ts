import { Action } from "@reduxjs/toolkit";
import { ProductionCompany, SpokenLanguage } from "./common";
import { Genre } from "./movie";

export interface Movie {
  id: number;
  title: string;
  tagline: string | null;
  overview: string;
  poster_path: string | null;
  release_date: string;
  runtime: number | null;
  vote_average: number;
  vote_count: number;
  budget: number;
  revenue: number;
  homepage: string | null;
  genres: Genre[];
  production_companies: ProductionCompany[];
  spoken_languages: SpokenLanguage[];
  original_title?: string;
  backdrop_path?: string | null;
  popularity?: number;
  status?: string;
  imdb_id?: string | null;
  belongs_to_collection?: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
}

export interface MovieDetails extends Movie {
  belongs_to_collection: {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  } | null;
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string | null;
  imdb_id: string | null;
  origin_country: string[];
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string | null;
}
export interface RTKQueryAction extends Action {
  meta?: {
    requestId?: string;
  };
}

export interface MovieSearchParams {
  page: number;
  search?: string;
  include_adult?: boolean;
  include_video?: boolean;
  language?: string;
  sort_by?: string;
  'release_date.gte'?: string;
}

export interface MovieResponse {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}
