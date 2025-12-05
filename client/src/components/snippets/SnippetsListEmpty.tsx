import { Code2Icon } from "lucide-react";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import CreateSnippetDialog from "./CreateSnippetDialog";

export default function SnippetsListEmpty() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Code2Icon />
        </EmptyMedia>
        <EmptyTitle>No Snippets Yet</EmptyTitle>
        <EmptyDescription>
          You haven&apos;t created any snippets yet. Get started by creating
          your first snippet.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <CreateSnippetDialog />
      </EmptyContent>
    </Empty>
  );
}
