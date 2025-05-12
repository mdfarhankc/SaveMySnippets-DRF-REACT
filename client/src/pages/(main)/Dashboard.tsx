import SnippetCard from "@/components/snippets/SnippetCard";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import CreateSnippetDialog from "@/components/snippets/CreateSnippetDialog";
import { useGetUserSnippets } from "@/hooks/snippets/useGetUserSnippets";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export default function DashboardPage() {
  const { userSnippets, isLoading, isError } = useGetUserSnippets();

  if (isError) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <p className="text-destructive">
          Failed to load snippets. Please try again later.
        </p>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <section className="container max-w-7xl mx-auto py-5 px-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p className="text-muted-foreground">Manage your code snippets</p>
          </div>
          <CreateSnippetDialog />
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
          ) : userSnippets.length === 0 ? (
            <p className="text-muted-foreground">
              You haven't created any snippets yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {userSnippets.map((snippet) => (
                <SnippetCard key={snippet.id} snippet={snippet} />
              ))}
            </div>
          )}
        </ScrollArea>
        <div className="p-5">
          <Pagination>
            <PaginationContent>
              <PaginationItem>
                <PaginationPrevious href="#" />
              </PaginationItem>
              <PaginationItem>
                <PaginationLink href="#">1</PaginationLink>
              </PaginationItem>
              <PaginationItem>
                <PaginationEllipsis />
              </PaginationItem>
              <PaginationItem>
                <PaginationNext href="#" />
              </PaginationItem>
            </PaginationContent>
          </Pagination>
        </div>
      </section>
    </main>
  );
}
