import { Skeleton } from "../ui/skeleton";

export default function SnippetDetailSkeleton() {
  return (
    <main className="flex-1">
      <section className="container max-w-7xl mx-auto py-8 space-y-6">
        <div className="flex justify-between items-center">
          <div className="space-y-3">
            <Skeleton className="h-10 w-md" />
            <div className="flex gap-3">
              <Skeleton className="h-6 w-20" />
              <Skeleton className="h-6 w-20" />
            </div>
          </div>

          <div className="flex gap-2">
            <Skeleton className="h-10 w-24" />
            <Skeleton className="h-10 w-10" />
          </div>
        </div>

        <Skeleton className="h-6 w-full" />
        <div className="flex flex-wrap gap-2">
          {[1, 2, 3, 4, 5].map((index) => (
            <Skeleton key={index} className="h-6 w-16" />
          ))}
        </div>

        <Skeleton className="h-96 w-full" />
      </section>
    </main>
  );
}
