import { ArrowUp, Github, Mail } from "lucide-react";
import { useInView } from "@/lib/useInView";

const footerLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export const Footer = () => {
  const { ref, isInView } = useInView({ rootMargin: "0px 0px -4% 0px" });
  const year = new Date().getFullYear();

  return (
    <footer
      ref={ref}
      data-visible={isInView ? "true" : "false"}
      className="relative px-4 py-10 border-t border-border bg-card/70"
    >
      <div className="container mx-auto max-w-5xl">
        <div
          style={{ "--reveal-delay": "0ms" }}
          className="reveal-up footer-shell"
        >
          <div className="text-left">
            <a href="#hero" className="footer-brand">
              Wilson<span>Cho</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Building responsive software with practical design and reliable
              engineering.
            </p>
          </div>

          <div className="footer-actions">
            <a
              href="https://github.com/wilsoncxx"
              target="_blank"
              rel="noreferrer"
              className="footer-icon-button"
              aria-label="Open GitHub profile"
            >
              <Github className="h-4 w-4" />
            </a>
            <a
              href="mailto:xuanxian2001@gmail.com"
              className="footer-icon-button"
              aria-label="Email Wilson"
            >
              <Mail className="h-4 w-4" />
            </a>
            <a
              href="#hero"
              className="footer-top-button"
              aria-label="Back to top"
            >
              <ArrowUp size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
