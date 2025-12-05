import { useParams } from "react-router";
import SnippetDetailSkeleton from "@/components/snippets/SnippetDetailSkeleton";
import { useGetSnippetBySlug } from "@/hooks/snippets/useGetSnippetBySlug";
import SnippetForm from "@/components/snippets/SnippetForm";
import BackButton from "@/components/common/BackButton";

export default function EditSnippetPage() {
  const { slug } = useParams<{ slug: string }>();
  const { snippet, isLoading, isError } = useGetSnippetBySlug(slug!);

  if (isLoading) return <SnippetDetailSkeleton />;

  if (isError || !snippet) {
    return (
      <main className="flex-1 flex items-center justify-center">
        <p className="text-destructive">Snippet not found.</p>
      </main>
    );
  }

  return (
    <main className="flex-1">
      <section className="max-w-7xl mx-auto py-8 space-y-6 px-3">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-6">Edit Snippet</h1>
          <BackButton />
        </div>
        <SnippetForm mode="edit" snippet={snippet} />
      </section>
    </main>
  );
}
