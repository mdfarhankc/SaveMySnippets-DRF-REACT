import Prism from "prismjs";
// Ensure correct language import
// For Theme
import "prismjs/themes/prism-tomorrow.css";
// For Code Highlight
import "prismjs/components/prism-python.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-typescript.min.js";
import "prismjs/components/prism-markup.min.js";
import type { ClassValue } from "class-variance-authority/types";
import { cn } from "@/lib/utils";

export default function CodeHighlighter({
  language,
  content,
  className = "",
}: {
  language: string;
  content: string;
  className?: ClassValue;
}) {
  return (
    <pre
      className={cn(
        `language-${language} p-4 rounded-lg`,
        className
      )}
    >
      <code
        className={`language-${language} block`}
        dangerouslySetInnerHTML={{
          __html: Prism.highlight(content, Prism.languages[language], language),
        }}
      />
    </pre>
  );
}
