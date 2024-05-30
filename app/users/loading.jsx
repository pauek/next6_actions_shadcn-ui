import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="p-4 flex flex-col gap-1 pt-8">
      <Skeleton className="w-80 h-16" />
      <Skeleton className="w-80 h-16" />
      <Skeleton className="w-80 h-16" />
      <Skeleton className="w-80 h-16" />
      <Skeleton className="w-80 h-16" />
      <Skeleton className="w-80 h-16" />
      <Skeleton className="w-80 h-16" />
      <Skeleton className="w-80 h-16" />
      <Skeleton className="w-80 h-16" />
    </div>
  );
}
