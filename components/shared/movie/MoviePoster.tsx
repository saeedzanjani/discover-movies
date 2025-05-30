"use client";

import { useState, memo, FC, useMemo } from "react";
import Image from "next/image";
import { NoPoster } from "../common/NoPoster";
import { Loading } from '../common';
import { IMAGE_QUALITY, IMAGE_SIZE, ASPECT_RATIO } from "../../../constants/ui";
import { MoviePosterProps } from "../../../types";

const MoviePoster: FC<MoviePosterProps> = ({ posterPath, title }) => {
  const [imageError, setImageError] = useState(false);
  const [isLoadingImage, setIsLoadingImage] = useState(true);

  const hasPoster = Boolean(posterPath) && !imageError;

  const imageUrl = useMemo(() =>
    hasPoster
      ? `${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/${IMAGE_SIZE}${posterPath}`
      : "",
    [hasPoster, posterPath]
  );

  const handleImageError = () => setImageError(true);
  const handleImageLoad = () => setIsLoadingImage(false);

  const renderPoster = useMemo(() => {
    if (!hasPoster) return <NoPoster />;

    return (
      <>
        {isLoadingImage && <Loading variant="image" />}
        <Image
          src={imageUrl}
          alt={title}
          fill
          priority
          quality={IMAGE_QUALITY}
          className={`object-cover transition-opacity duration-300 ${
            isLoadingImage ? "opacity-0" : "opacity-100"
          }`}
          sizes="300px"
          onError={handleImageError}
          onLoad={handleImageLoad}
        />
      </>
    );
  }, [hasPoster, imageUrl, title, isLoadingImage]);

  return (
    <div className={`relative ${ASPECT_RATIO} w-full overflow-hidden rounded-lg bg-gray-100`}>
      {renderPoster}
    </div>
  );
};

export default memo(MoviePoster);
