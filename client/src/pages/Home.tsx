import Footer from "@/components/layouts/Footer";
import { Button } from "@/components/ui/button";
import { useAuthStore } from "@/store";
import { Code, Globe, LockKeyhole, Save, Search, Tags } from "lucide-react";
import { Link } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import HeroImage from "@/assets/hero.png";

const features = [
  {
    icon: <Save className="h-6 w-6 text-primary" />,
    title: "Save & Organize",
    text: "Store all your code snippets in one place with powerful organization tools.",
  },
  {
    icon: <Tags className="h-6 w-6 text-primary" />,
    title: "Tag & Categorize",
    text: "Add tags and categories to make your snippets easy to find when you need them.",
  },
  {
    icon: <Search className="h-6 w-6 text-primary" />,
    title: "Search & Find",
    text: "Powerful search functionality helps you find the exact snippet you need, fast.",
  },
  {
    icon: <Code className="h-6 w-6 text-primary" />,
    title: "Syntax Highlighting",
    text: "Beautiful syntax highlighting for all major programming languages.",
  },
  {
    icon: <Globe className="h-6 w-6 text-primary" />,
    title: "Share & Collaborate",
    text: "Share your snippets with others or keep them private - you decide.",
  },
  {
    icon: <LockKeyhole className="h-6 w-6 text-primary" />,
    title: "Secure Storage",
    text: "Your code is safely stored with proper authentication and authorization.",
  },
];

export default function HomePage() {
  const { authUser } = useAuthStore();

  return (
    <>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 px-6 md:py-36 bg-linear-to-b from-background to-muted/50">
          <div className="container max-w-6xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-12 text-center lg:text-left">
            {/* Left Content */}
            <div className="flex-1">
              <div className="flex justify-center lg:justify-start mb-6">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Code className="h-12 w-12 text-primary" />
                </div>
              </div>
              <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold tracking-tight mb-4 text-shadow-primary text-shadow-md">
                Organize Your Code Snippets
              </h1>
              <p className="text-md sm:text-lg  md:text-xl text-muted-foreground max-w-3xl mb-8 mx-auto lg:mx-0">
                Store, manage, and share your code snippets in one place.
                Perfect for developers who want to keep their code organized.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                {authUser ? (
                  <>
                    <Button asChild>
                      <Link to="/dashboard">Go to Dashboard</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/explore">Explore Snippets</Link>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button asChild>
                      <Link to="/sign-up">Get Started</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link to="/explore">Explore Snippets</Link>
                    </Button>
                  </>
                )}
              </div>
            </div>
            {/* Right Image */}
            <div className="flex-1 hidden lg:flex">
              <img
                src={HeroImage}
                alt="Organize Code Snippets"
                className="w-full h-auto rounded-xl"
                style={{
                  boxShadow: "0 0 30px var(--primary)",
                }}
              />
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16 px-6 bg-background">
          <div className="container max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold text-center mb-12">
              Everything You Need to Organize Your Code
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map(({ icon, title, text }, i) => (
                <Card key={i} className="hover:border hover:border-primary">
                  <CardHeader>
                    <div className="bg-primary/10 w-12 h-12 flex items-center justify-center rounded-full mb-2">
                      {icon}
                    </div>
                    <CardTitle className="text-xl font-semibold">
                      {title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-16 px-6 bg-muted">
          <div className="container max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Start Organizing Your Code Today
            </h2>
            <p className="text-md sm:text-xl text-muted-foreground mb-8">
              Join developers who use SaveMySnippet to keep their code snippets
              organized and accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild>
                <Link to="/sign-up">Sign Up for Free</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
