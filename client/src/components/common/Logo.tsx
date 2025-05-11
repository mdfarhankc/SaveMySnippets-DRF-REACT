import { Code } from "lucide-react";
import { Link } from "react-router";

export default function Logo() {
  return (
    <Link to={"/"} className="flex items-center gap-2">
      <Code className="h-6 w-6 text-primary" />
      <h1 className="text-xl font-bold">SaveMySnippet</h1>
    </Link>
  );
}
