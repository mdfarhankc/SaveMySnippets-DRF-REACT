import CodeHighlighter from "@/components/snippets/CodeHighlighter";
import SnippetDetailSkeleton from "@/components/snippets/SnippetDetailSkeleton";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useGetSnippetBySlug } from "@/hooks/snippets/useGetSnippetBySlug";
import { ArrowLeft, Eye, Lock } from "lucide-react";
import { Link, useNavigate, useParams } from "react-router";

export default function SnippetDetailPage() {
  const navigate = useNavigate();
  const { slug } = useParams<{ slug: string }>();
  const { snippet, isLoading, isError } = useGetSnippetBySlug(slug!);

  if (isError) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <p className="text-destructive">Failed to load snippet.</p>
      </main>
    );
  }

  if (isLoading) {
    return <SnippetDetailSkeleton />;
  }

  if (!snippet) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <p className="text-destructive">Snippet not found!.</p>
      </main>
    );
  }
  return (
    <main className="flex-1">
      <section className="container max-w-7xl mx-auto py-8 space-y-6 px-3">
        <div className="flex justify-between items-center">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold">{snippet.title}</h1>
            <div className="flex gap-3">
              <Badge
                variant={snippet.is_public ? "success" : "destructive"}
                className="ml-2"
              >
                {snippet.is_public ? (
                  <Eye className="h-3 w-3 mr-1" />
                ) : (
                  <Lock className="h-3 w-3 mr-1" />
                )}
                {snippet.is_public ? "Public" : "Private"}
              </Badge>
              <Badge variant={"secondary"} className="uppercase">
                {snippet.language.name}
              </Badge>
            </div>
          </div>

          <div className="flex gap-2">
            <Button variant="secondary" asChild>
              <Link to={`/snippets/${snippet.id}/edit`}>Edit Snippet</Link>
            </Button>
            <Button variant={"outline"} onClick={() => navigate(-1)}>
              <ArrowLeft />
            </Button>
          </div>
        </div>

        {snippet.description && (
          <p className="text-base leading-relaxed text-muted-foreground">
            {snippet.description}
          </p>
        )}
        <div className="flex flex-wrap gap-2">
          {snippet.tags.map((tag, index) => (
            <Badge key={index}>{tag}</Badge>
          ))}
        </div>

        <CodeHighlighter
          language={snippet.language.extension.replace(".", "")}
          content={snippet.content}
          showCopyButton={true}
        />
      </section>
    </main>
  );
}
