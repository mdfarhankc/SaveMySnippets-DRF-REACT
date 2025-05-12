import Logo from "../common/Logo";

export default function Footer() {
  return (
    <footer className="py-6 border-t">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Logo className="text-sm" iconClassName="h-5 w-5" />
          <div className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} SaveMySnippet. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
}
