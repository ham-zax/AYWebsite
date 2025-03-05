export const SOCIAL_LINKS = {
  twitter: "https://twitter.com/autoyield",
  discord: "https://discord.gg/autoyield",
  telegram: "https://t.me/autoyield",
  github: "https://github.com/autoyield"
};

export const MENU_ITEMS = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Documentation", path: "/docs" },
  { label: "About", path: "/about" }
];

export const FOOTER_LINKS = [
  { label: "Home", path: "/" },
  { label: "Features", path: "/features" },
  { label: "Documentation", path: "/docs" },
  { label: "About", path: "/about" },
  { label: "Blog", path: "/blog" }
];

export const TEAM_MEMBERS = [
  {
    name: "Alex Chen",
    role: "Founder & CEO",
    bio: "DeFi veteran with 10+ years in algorithmic trading",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=alex"
  },
  {
    name: "Sarah Kim",
    role: "Head of Engineering",
    bio: "Former lead developer at major DEX platforms",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah"
  },
  {
    name: "Michael Singh",
    role: "Chief Research Officer",
    bio: "PhD in Financial Mathematics, AI/ML expert",
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael"
  }
];

// Sample blog posts - this would typically be loaded from a CMS or markdown files
export const BLOG_POSTS = [
  {
    slug: "welcome-to-autoyield",
    title: "Welcome to AutoYield: The Future of LP Management",
    excerpt: "Learn how AutoYield is revolutionizing liquidity provision with AI-powered automation.",
    date: "2024-03-05",
    author: "Alex Chen",
    readTime: "5 min read",
    content: `
      <p>We're excited to introduce AutoYield, a revolutionary platform that's making DeFi liquidity provision accessible to everyone. Our AI-powered system handles all the complexities of LP management, so you can focus on what matters most - earning returns.</p>

      <h2>Why We Built AutoYield</h2>
      <p>As DeFi enthusiasts ourselves, we understood the challenges of managing liquidity positions. The constant monitoring, complex calculations, and risk of impermanent loss made it difficult for most people to participate effectively in DeFi.</p>

      <h2>How It Works</h2>
      <p>AutoYield uses advanced AI algorithms to:</p>
      <ul>
        <li>Monitor market conditions 24/7</li>
        <li>Optimize position sizing and timing</li>
        <li>Automatically rebalance when needed</li>
        <li>Protect against impermanent loss</li>
      </ul>

      <h2>What's Next</h2>
      <p>This is just the beginning. We're working on several exciting features that will make AutoYield even more powerful and user-friendly. Stay tuned for updates!</p>
    `
  },
  {
    slug: "understanding-lp-basics",
    title: "LP Basics: A Guide for Beginners",
    excerpt: "Everything you need to know about liquidity provision, explained in simple terms.",
    date: "2024-03-04",
    author: "Sarah Kim",
    readTime: "8 min read",
    content: `
      <p>Liquidity provision is a fundamental aspect of DeFi, but it can be intimidating for newcomers. In this guide, we'll break down the basics and help you understand how it works.</p>

      <h2>What is Liquidity Provision?</h2>
      <p>Think of liquidity provision like being a market maker at your local farmers' market. You're providing pairs of assets that others can trade between, and earning fees from these trades.</p>

      <h2>Key Concepts</h2>
      <ul>
        <li>Liquidity Pools: Smart contracts that hold token pairs</li>
        <li>Trading Fees: Your reward for providing liquidity</li>
        <li>Impermanent Loss: A potential risk when token prices change</li>
        <li>APR vs APY: Understanding your potential returns</li>
      </ul>

      <h2>Best Practices</h2>
      <p>While AutoYield handles the complex parts automatically, it's still good to understand some basic principles:</p>
      <ul>
        <li>Start small and learn the mechanics</li>
        <li>Diversify across different pools</li>
        <li>Monitor your positions regularly</li>
        <li>Stay informed about market conditions</li>
      </ul>
    `
  }
];