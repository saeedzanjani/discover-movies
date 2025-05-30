"use client";

import { memo, FC } from "react";
import {MovieDetailsMetadataProps } from "../../../types";
import GenreTag from "./GenreTag";
import ProductionCompanyCard from "../../movieDetails/ProductionCompanyCard";
import MovieStats from "./MovieStatus";
import MovieOverview from "./MovieOverview";
import MoviePageLink from "../../movieDetails/MoviePageLink";
import { MovieTitle } from "./index";

const MovieDetailsMetadata: FC<MovieDetailsMetadataProps> = ({ movie, className = "" }) => {
  const hasProductionCompanies = movie.production_companies?.length > 0;
  const hasHomepage = Boolean(movie.homepage);

  return (
    <div className={`space-y-6 ${className}`}>
      <MovieTitle title={movie.title} tagline={movie.tagline} />

      <div className="flex flex-wrap gap-4">
        {movie.genres?.map((genre) => (
          <GenreTag key={genre.id} genre={genre} />
        ))}
      </div>

      <MovieStats movie={movie} />
      <MovieOverview overview={movie.overview} />

      {hasProductionCompanies && (
        <div>
          <h2 className="mb-2 text-lg font-semibold">Production Companies</h2>
          <div className="flex flex-wrap gap-4">
            {movie.production_companies.map((company) => (
              <ProductionCompanyCard key={company.id} company={company} />
            ))}
          </div>
        </div>
      )}

      {hasHomepage && <MoviePageLink url={movie.homepage!} />}
    </div>
  );
};


export default memo(MovieDetailsMetadata);
