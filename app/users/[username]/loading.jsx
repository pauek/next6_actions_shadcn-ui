import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="p-4 pt-11">
      <Skeleton className="w-40 h-4 rounded-lg mb-2" />
      <Skeleton className="w-36 h-36 rounded-full" />

      <Skeleton className="h-4 w-60 rounded mt-5" />
      <Skeleton className="h-4 w-72 rounded mt-3" />
      <Skeleton className="h-4 w-80 rounded mt-3" />
      <Skeleton className="h-4 w-28 rounded mt-3" />
    </div>
  );
}
