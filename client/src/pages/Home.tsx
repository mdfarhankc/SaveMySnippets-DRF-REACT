import { Button } from "@/components/ui/button";
import { Code, Globe, LockKeyhole, Save, Search, Tags } from "lucide-react";
import { Link } from "react-router";

export default function HomePage() {
  const session = false;
  return (
    <main className="flex-1">
      <section className="py-20 px-6 md:py-28 bg-gradient-to-b from-background to-muted/50">
        <div className="container max-w-5xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-primary/10 p-3 rounded-full">
              <Code className="h-12 w-12 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Organize Your Code Snippets
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Store, manage, and share your code snippets in one place. Perfect
            for developers who want to keep their code organized.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {session ? (
              <>
                <Button size="lg" asChild>
                  <Link to="/dashboard">Go to Dashboard</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/create">Create New Snippet</Link>
                </Button>
              </>
            ) : (
              <>
                <Button size="lg" asChild>
                  <Link to="/sign-up">Get Started</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link to="/explore">Explore Snippets</Link>
                </Button>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="py-16 px-6 bg-background">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Everything You Need to Organize Your Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-card p-6 rounded-lg border">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Save className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Save & Organize</h3>
              <p className="text-muted-foreground">
                Store all your code snippets in one place with powerful
                organization tools.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Tags className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Tag & Categorize</h3>
              <p className="text-muted-foreground">
                Add tags and categories to make your snippets easy to find when
                you need them.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Search & Find</h3>
              <p className="text-muted-foreground">
                Powerful search functionality helps you find the exact snippet
                you need, fast.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Code className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Syntax Highlighting
              </h3>
              <p className="text-muted-foreground">
                Beautiful syntax highlighting for all major programming
                languages.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <Globe className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Share & Collaborate
              </h3>
              <p className="text-muted-foreground">
                Share your snippets with others or keep them private - you
                decide.
              </p>
            </div>
            <div className="bg-card p-6 rounded-lg border">
              <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-4">
                <LockKeyhole className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Secure Storage</h3>
              <p className="text-muted-foreground">
                Your code is safely stored with proper authentication and
                authorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-16 px-6 bg-muted">
        <div className="container max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Start Organizing Your Code Today
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Join developers who use SaveMySnippet to keep their code snippets
            organized and accessible.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link to="/register">Sign Up for Free</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
