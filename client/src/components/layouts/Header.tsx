import { Link } from "react-router";
import { useAuthStore } from "@/store";
import Logo from "../common/Logo";
import { ThemeToggle } from "../theme/ThemeToggle";
import { Button } from "../ui/button";
import UserButton from "../common/UserButton";

export default function Header() {
  const { authUser } = useAuthStore();

  return (
    <header className="border-b sticky top-0 z-10 bg-white/40 dark:bg-black/40 backdrop-blur-lg">
      <div className="max-w-7xl container mx-auto px-4 py-3 flex justify-between items-center">
        <Logo />
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
