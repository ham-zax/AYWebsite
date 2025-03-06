import { Helmet, HelmetProvider } from "react-helmet-async";

type SeoProps = {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: "website" | "article" | "profile";
  twitterCard?: "summary" | "summary_large_image" | "app" | "player";
  noIndex?: boolean;
  canonicalUrl?: string;
  children?: React.ReactNode;
};

export function Seo({
  title = "AutoYield | AI-Powered DeFi on Solana",
  description = "AutoYield transforms complex DeFi liquidity provision into an automated, AI-managed experience on Solana, maximizing returns while minimizing risks.",
  keywords = "DeFi, Solana, liquidity provision, automated finance, yield farming, blockchain, cryptocurrency, AI finance",
  ogImage = "/og-image.png",
  ogUrl = "https://autoyield.io",
  ogType = "website",
  twitterCard = "summary_large_image",
  noIndex = false,
  canonicalUrl,
  children,
}: SeoProps) {
  const siteUrl = "https://autoyield.io";
  const fullUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : undefined;

  return (
    <HelmetProvider>
      <Helmet>
        {/* Basic Metadata */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        
        {/* Canonical URL */}
        {fullUrl && <link rel="canonical" href={fullUrl} />}
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content={ogType} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImage} />
        {ogUrl && <meta property="og:url" content={ogUrl} />}
        
        {/* Twitter */}
        <meta name="twitter:card" content={twitterCard} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={ogImage} />
        
        {/* No Index for dev/staging environments */}
        {noIndex && <meta name="robots" content="noindex, nofollow" />}
        
        {/* Mobile Optimization */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
        <meta name="theme-color" content="#7C3AED" /> {/* Primary purple color */}
        
        {/* App Install Banners */}
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="AutoYield" />
        
        {children}
      </Helmet>
    </HelmetProvider>
  );
}
