import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { ThemeToggle } from "./ThemeToggle";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={cn(
          "fixed left-0 top-0 z-50 w-full transition-all duration-300",
          isScrolled
            ? "py-3 bg-background/80 backdrop-blur-md shadow-xs"
            : "py-5"
        )}
      >
        <div className="relative mx-auto flex w-full max-w-[1400px] box-border items-center justify-between gap-3 px-4 sm:px-8">
          <a
            className="flex min-w-0 flex-1 items-center pr-24 text-base font-bold text-primary sm:text-xl md:pr-0"
            href="#hero"
          >
            <span className="relative z-10 truncate whitespace-nowrap">
              <span className="text-glow text-foreground"> Wilson's </span>{" "}
              Portfolio
            </span>
          </a>

          <div className="hidden shrink-0 items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 transition-colors duration-100 hover:text-primary"
              >
                {item.name}
              </a>
            ))}
            <ThemeToggle />
          </div>

          <div className="absolute right-4 top-1/2 flex shrink-0 -translate-y-1/2 items-center gap-2 sm:right-8 md:hidden">
            <ThemeToggle />
            <button
              type="button"
              onClick={() => setIsMenuOpen((prev) => !prev)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground transition-colors duration-300 hover:bg-foreground/10 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-primary/60"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-controls="mobile-navigation"
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <div
        id="mobile-navigation"
        className={cn(
          "fixed inset-0 z-40 flex min-h-screen flex-col items-center justify-center bg-background/95 px-6 backdrop-blur-md md:hidden",
          "transition-all duration-300",
          isMenuOpen
            ? "visible opacity-100 pointer-events-auto"
            : "invisible opacity-0 pointer-events-none"
        )}
      >
        <div
          className={cn(
            "flex flex-col items-center space-y-8 text-xl transition-all duration-300",
            isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          )}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-foreground/95 transition-colors duration-100 hover:text-primary"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>
    </>
  );
};
