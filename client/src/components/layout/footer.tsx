import { Link } from "wouter";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from "react-icons/fa";

export default function Footer() {
  const handleLinkClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Combined navigation and legal links
  const combinedLinks = [
    { path: "/", label: "Home" },
    { path: "/features", label: "Features" },
    { path: "/docs", label: "Documentation" },
    { path: "/defi101", label: "DeFi 101" },
    { path: "/glossary", label: "Glossary" },
    { path: "/blog", label: "Blog" },
    { path: "/about", label: "About Us" },
    { path: "/legal", label: "Terms & Privacy" }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-card mt-16 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <Link href="/" onClick={handleLinkClick}>
              <div className="cursor-pointer">
                <div className="relative inline-block">
                  <div className="text-2xl font-bold">
                    <span className="bg-gradient-to-r from-purple-500 via-violet-500 to-cyan-500 bg-clip-text text-transparent">
                      Auto
                    </span>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 bg-clip-text text-transparent">
                      Yield
                    </span>
                  </div>
                  <div className="absolute -top-1 -right-2 w-2 h-2 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full animate-pulse" />
                </div>
              </div>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              Simplifying DeFi liquidity provision with AI-powered management on Solana
            </p>
            <div className="mt-4 flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
              <span className="text-sm text-muted-foreground">All Systems Operational</span>
            </div>
          </div>

          {/* Combined Navigation and Legal Links */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {combinedLinks.map((item) => (
                <Link key={item.path} href={item.path} onClick={handleLinkClick}>
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer py-1">
                    {item.label}
                  </div>
                </Link>
              ))}
              <a href="mailto:support@autoyield.com" className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer py-1">
                Contact Support
              </a>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="font-semibold mb-4 text-lg">Community</h3>
            <div className="grid grid-cols-2 gap-4">
              <a 
                href={SOCIAL_LINKS.twitter} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="bg-card p-2 rounded-full">
                  <FaTwitter className="h-4 w-4" />
                </div>
                <span>Twitter</span>
              </a>
              <a 
                href={SOCIAL_LINKS.discord} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="bg-card p-2 rounded-full">
                  <FaDiscord className="h-4 w-4" />
                </div>
                <span>Discord</span>
              </a>
              <a 
                href={SOCIAL_LINKS.telegram} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="bg-card p-2 rounded-full">
                  <FaTelegram className="h-4 w-4" />
                </div>
                <span>Telegram</span>
              </a>
              <a 
                href={SOCIAL_LINKS.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="bg-card p-2 rounded-full">
                  <FaGithub className="h-4 w-4" />
                </div>
                <span>GitHub</span>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-muted">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-center md:text-left text-muted-foreground">
              © {new Date().getFullYear()} AutoYield. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="/legal" onClick={handleLinkClick}>
                <div className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Privacy Policy
                </div>
              </Link>
              <span className="text-muted-foreground">•</span>
              <Link href="/legal" onClick={handleLinkClick}>
                <div className="text-xs text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                  Terms of Service
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}