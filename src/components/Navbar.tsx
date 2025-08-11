import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [open, setOpen] = useState(false);

  const NavLinks = (
    <ul className="flex flex-col md:flex-row md:items-center gap-6 text-sm">
      <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
      <li><a href="#demo" className="text-muted-foreground hover:text-foreground transition-colors">Demo</a></li>
      <li><a href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">Pricing</a></li>
      <li><a href="#testimonials" className="text-muted-foreground hover:text-foreground transition-colors">Reviews</a></li>
    </ul>
  );

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <nav className="container h-16 flex items-center justify-between">
        <a href="/" className="text-base font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">AI Avatar</a>

        <div className="hidden md:flex items-center gap-8">
          {NavLinks}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden lg:inline-flex">Sign in</Button>
            <Button variant="hero" size="lg">Get a Demo</Button>
          </div>
        </div>

        <Button variant="ghost" size="icon" className="md:hidden" aria-label="Toggle menu" onClick={() => setOpen(v => !v)}>
          {open ? <X /> : <Menu />}
        </Button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background"> 
          <div className="container py-4 flex flex-col gap-6">
            {NavLinks}
            <div className="flex items-center gap-3">
              <Button variant="ghost">Sign in</Button>
              <Button variant="hero" className="flex-1">Get a Demo</Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
