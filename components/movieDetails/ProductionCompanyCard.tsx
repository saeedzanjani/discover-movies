"use client";

import { memo, FC } from "react";
import Image from "next/image";
import { ProductionCompanyCardProps } from "../../types";

const ProductionCompanyCard: FC<ProductionCompanyCardProps> = ({ company }) => (
  <div
    key={company?.id}
    className="flex items-center gap-2 rounded-lg bg-white p-2 shadow-sm"
  >
    {company?.logo_path ? (
      <div className="relative h-8 w-8">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGE_BASE_URL}/w92${company?.logo_path}`}
          alt={company?.name}
          fill
          className="object-contain"
          sizes="32px"
        />
      </div>
    ) : (
      <div className="h-8 w-8 rounded-full bg-gray-100" />
    )}
    <span className="text-sm font-medium">{company?.name}</span>
  </div>
);

export default memo(ProductionCompanyCard);
