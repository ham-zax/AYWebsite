import { Link } from "wouter";
import { FOOTER_LINKS, SOCIAL_LINKS } from "@/lib/constants";
import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card mt-16 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
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
            <p className="mt-2 text-xs text-muted-foreground">
              AutoYield is currently in Beta. Always research and understand DeFi risks before investing.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                      {item.label}
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/legal">
                  <div className="text-sm text-muted-foreground hover:text-primary transition-colors cursor-pointer">
                    Legal Information
                  </div>
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.twitter} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.discord} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaDiscord className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.telegram} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaTelegram className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                <FaGithub className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t">
          <p className="text-sm text-center text-muted-foreground">
            © {new Date().getFullYear()} AutoYield. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}