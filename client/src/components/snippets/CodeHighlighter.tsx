import Prism from "prismjs";
// Ensure correct language import
// For Theme
import "prismjs/themes/prism-tomorrow.css";
// For Code Highlight
import "prismjs/components/prism-bash.min.js";
import "prismjs/components/prism-json.min.js";
import "prismjs/components/prism-markup-templating.min.js";
import "prismjs/components/prism-markup.min.js";
import "prismjs/components/prism-markdown.min.js";
import "prismjs/components/prism-css.min.js";
import "prismjs/components/prism-scss.min.js";
import "prismjs/components/prism-sql.min.js";
import "prismjs/components/prism-go.min.js";
import "prismjs/components/prism-python.min.js";
import "prismjs/components/prism-javascript.min.js";
import "prismjs/components/prism-typescript.min.js";
import "prismjs/components/prism-markup.min.js";
import "prismjs/components/prism-php.min.js";
import "prismjs/components/prism-yaml.min.js";
import type { ClassValue } from "class-variance-authority/types";
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "../ui/button";
import { Check, Copy } from "lucide-react";

const languageMap: Record<string, string> = {
  py: "python",
  php: "php",
  js: "javascript",
  ts: "typescript",
  html: "markup",
  markup: "markup",
  yaml: "yaml",
  yml: "yaml",
  json: "json",
  css: "css",
  scss: "scss",
  sql: "sql",
  go: "go",
  sh: "bash",
};

export default function CodeHighlighter({
  language,
  content,
  showCopyButton = false,
  className = "",
}: {
  language: string;
  content: string;
  showCopyButton?: boolean;
  className?: ClassValue;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  const prismLang = languageMap[language] ?? "plaintext";

  return (
    <div className="relative">
      {showCopyButton && (
        <Button
          variant="ghost"
          size="icon"
          onClick={handleCopy}
          className="absolute cursor-pointer right-2 top-2 z-10"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
        </Button>
      )}

      <pre
        className={cn(
          `language-${prismLang} p-4 rounded-lg overflow-auto`,
          className
        )}
      >
        <code
          className={`language-${prismLang} block`}
          dangerouslySetInnerHTML={{
            __html: Prism.highlight(
              content,
              Prism.languages[prismLang],
              language
            ),
          }}
        />
      </pre>
    </div>
  );
}
