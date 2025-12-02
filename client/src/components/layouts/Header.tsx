import { Link, useLocation } from "react-router";
import { cn } from "@/lib/utils";
import { useAuthStore } from "@/store";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { Button } from "@/components/ui/button";
import Logo from "@/components/common/Logo";
import UserButton from "@/components/common/UserButton";

const navLinks = [
  {
    name: "Explore",
    url: "/explore",
  },
  {
    name: "Contact",
    url: "/contact",
  },
];

export default function Header() {
  const { authUser } = useAuthStore();
  const location = useLocation();

  return (
    <header className="border-b sticky top-0 z-10 bg-background/40 backdrop-blur-lg">
      <div className="max-w-7xl container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
        <nav className="hidden md:flex gap-2 items-center justify-center">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              to={link.url}
              className={cn(
                "px-3 py-2 transition-colors",
                location.pathname === link.url
                  ? "font-semibold text-primary"
                  : "hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {authUser ? (
            <UserButton />
          ) : (
            <Button asChild>
              <Link to={"/sign-in"}>Login</Link>
            </Button>
          )}
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
