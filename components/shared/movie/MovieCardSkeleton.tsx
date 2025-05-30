import { Skeleton } from "../common";

const MovieCardSkeleton: React.FC = () => {
  return (
    <div className="group relative aspect-[2/3] w-full overflow-hidden rounded-lg bg-gray-100">
      <Skeleton className="h-full w-full" />
      <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 to-transparent p-4">
        <Skeleton className="mb-2 h-6 w-3/4" />
        <div className="flex items-center gap-2">
          <Skeleton className="h-4 w-16" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
    </div>
  );
};

export default MovieCardSkeleton;
