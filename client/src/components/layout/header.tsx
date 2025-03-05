
import React from "react";
import { Link } from "wouter";
import { useLanguage } from "@/contexts/LanguageContext";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageSelector } from "@/components/ui/language-selector";

export function Header() {
  const { t } = useLanguage();

  return (
    <header className="border-b bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a className="flex items-center space-x-2">
                <span className="text-2xl font-bold">Logo</span>
              </a>
            </Link>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <Link href="/">
              <a className="text-foreground hover:text-primary transition-colors">
                {t("nav.home")}
              </a>
            </Link>
            <Link href="/features">
              <a className="text-foreground hover:text-primary transition-colors">
                {t("nav.features")}
              </a>
            </Link>
            <Link href="/pricing">
              <a className="text-foreground hover:text-primary transition-colors">
                {t("nav.pricing")}
              </a>
            </Link>
            <Link href="/docs">
              <a className="text-foreground hover:text-primary transition-colors">
                {t("nav.docs")}
              </a>
            </Link>
          </nav>
          
          <div className="flex items-center space-x-4">
            <LanguageSelector />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
