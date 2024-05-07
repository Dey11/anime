import { Skeleton } from "@/components/ui/skeleton";

const loading = () => {
  return (
    <div className="grid grid-cols-6 pt-10">
      <Skeleton className="col-span-2 h-[500px] w-96"></Skeleton>
      <div className="gap-10">
        <Skeleton className="h-12 w-[800px] mb-10"></Skeleton>
        <Skeleton className="h-12 w-[500px] mb-10"></Skeleton>
        <Skeleton className="h-4 w-[800px] mb-2"></Skeleton>
        <Skeleton className="h-4 w-[800px] mb-2"></Skeleton>
        <Skeleton className="h-4 w-[800px] mb-2"></Skeleton>
        <Skeleton className="h-4 w-[800px] mb-2"></Skeleton>
        <Skeleton className="h-4 w-[800px] mb-2"></Skeleton>
        <Skeleton className="h-4 w-[800px] mb-2"></Skeleton>
        <Skeleton className="h-4 w-[800px] mb-2"></Skeleton>
        <Skeleton className="h-4 w-[800px] mb-2"></Skeleton>
        <Skeleton className="h-4 w-[800px] mb-2"></Skeleton>
        <Skeleton className="h-4 w-[800px] mb-2"></Skeleton>
        <Skeleton className="h-4 w-[800px] mb-2"></Skeleton>
        <Skeleton className="h-4 w-[800px] mb-2"></Skeleton>
        <Skeleton className="h-4 w-[800px] mb-2"></Skeleton>
      </div>
    </div>
  );
};

export default loading;
