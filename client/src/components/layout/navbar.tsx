import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { MENU_ITEMS } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [location] = useLocation();

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <div className="flex items-center space-x-2 cursor-pointer">
              <div className="relative">
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
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-purple-500/10 text-purple-500 border border-purple-500/20">Beta</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {MENU_ITEMS.map((item) => (
              <Link key={item.path} href={item.path}>
                <div
                  className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                    location === item.path ? "text-primary" : "text-muted-foreground"
                  }`}
                >
                  {item.label}
                </div>
              </Link>
            ))}
            <Button>Launch App</Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4">
            <div className="flex flex-col space-y-4">
              {MENU_ITEMS.map((item) => (
                <Link key={item.path} href={item.path}>
                  <div
                    className={`text-sm font-medium transition-colors hover:text-primary cursor-pointer ${
                      location === item.path ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {item.label}
                  </div>
                </Link>
              ))}
              <Button className="w-full">Launch App</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}