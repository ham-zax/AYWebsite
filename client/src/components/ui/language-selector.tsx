
import * as React from "react";
import { Globe } from "lucide-react";
import { Language, useLanguage } from "@/contexts/LanguageContext";
import { cn } from "@/lib/utils";

export function LanguageSelector({ className }: { className?: string }) {
  const { language, setLanguage, t } = useLanguage();
  const [isOpen, setIsOpen] = React.useState(false);

  const languages: { code: Language; label: string }[] = [
    { code: "en", label: t("lang.english") },
    { code: "es", label: t("lang.spanish") },
    { code: "fr", label: t("lang.french") },
    { code: "de", label: t("lang.german") },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "flex items-center gap-2 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-primary",
          isOpen ? "bg-primary text-primary-foreground" : "bg-secondary",
          className
        )}
        aria-expanded={isOpen}
      >
        <Globe className="h-5 w-5" />
        <span className="hidden sm:inline">{languages.find(lang => lang.code === language)?.label || "English"}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md bg-card shadow-lg ring-1 ring-black ring-opacity-5 z-50">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
            {languages.map((lang) => (
              <button
                key={lang.code}
                className={cn(
                  "block w-full text-left px-4 py-2 text-sm",
                  language === lang.code
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-accent hover:text-accent-foreground"
                )}
                role="menuitem"
                onClick={() => {
                  setLanguage(lang.code);
                  setIsOpen(false);
                }}
              >
                {lang.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
