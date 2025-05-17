import SnippetCard from "@/components/snippets/SnippetCard";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetPublicSnippets } from "@/hooks/snippets/useGetPublicSnippets";

export default function ExplorePage() {
  const { snippets, isLoading } = useGetPublicSnippets();
  return (
    <main className="flex-1">
      <section className="container max-w-7xl mx-auto py-5 px-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Explore snippets</h1>
          </div>
        </div>
      </section>
      <Separator />
      <section className="container max-w-7xl mx-auto py-5">
        <ScrollArea>
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <Card key={i} className="p-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-8 w-3/5" />
                    <Skeleton className="h-8 w-1/4" />
                  </div>
                  <Skeleton className="h-40 w-full" />
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-5 w-1/2" />
                    <Skeleton className="h-5 w-1/5" />
                  </div>
                </Card>
              ))}
            </div>
          ) : snippets.length === 0 ? (
            <p className="text-muted-foreground">
              No public snippets available.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {snippets.map((snippet) => (
                <SnippetCard key={snippet.id} snippet={snippet} isPublic={true} />
              ))}
            </div>
          )}
        </ScrollArea>
      </section>
    </main>
  );
}
