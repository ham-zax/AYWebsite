import { Link } from "wouter";
import { MENU_ITEMS, SOCIAL_LINKS } from "@/lib/constants";
import { FaTwitter, FaDiscord, FaTelegram, FaGithub } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-card mt-16 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/">
              <a className="text-2xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                AutoYield
              </a>
            </Link>
            <p className="mt-4 text-sm text-muted-foreground">
              AI-Powered DeFi Liquidity Provisioning Platform on Solana
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {MENU_ITEMS.map((item) => (
                <li key={item.path}>
                  <Link href={item.path}>
                    <a className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {item.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Community</h3>
            <div className="flex space-x-4">
              <a href={SOCIAL_LINKS.twitter} className="text-muted-foreground hover:text-primary transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.discord} className="text-muted-foreground hover:text-primary transition-colors">
                <FaDiscord className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.telegram} className="text-muted-foreground hover:text-primary transition-colors">
                <FaTelegram className="h-5 w-5" />
              </a>
              <a href={SOCIAL_LINKS.github} className="text-muted-foreground hover:text-primary transition-colors">
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
