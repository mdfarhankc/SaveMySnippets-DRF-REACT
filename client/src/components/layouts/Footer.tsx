import { Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Code className="h-6 w-6 mr-2" />
            <span className="font-semibold">SaveMySnippet</span>
          </div>
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SaveMySnippet. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
