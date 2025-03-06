import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, BookOpen, Coins, Wallet, Shield, Zap } from "lucide-react";

const DEFI_TERMS = [
  // Meteora Specific Terms
  {
    term: "DLMM (Dynamic Liquidity Market Maker)",
    definition: "Meteora's innovative market-making protocol that automatically adjusts liquidity concentration based on market conditions, optimizing returns for liquidity providers.",
    category: "Meteora",
    example: "When trading volume increases in a specific price range, DLMM automatically concentrates more liquidity there."
  },
  {
    term: "Concentrated Liquidity Range",
    definition: "A specific price range where liquidity providers focus their assets in Meteora's pools, allowing for more efficient capital usage.",
    category: "Meteora",
    example: "Instead of spreading $1000 across all prices, you concentrate it between $10-$12 for better yields."
  },
  {
    term: "Dynamic Fees",
    definition: "Meteora's adaptive fee system that adjusts based on market volatility and trading volume to optimize returns for liquidity providers.",
    category: "Meteora",
    example: "Fees might increase during high volatility periods to compensate LPs for higher risks."
  },

  // Basic LP Terms (Essential for Beginners)
  {
    term: "Liquidity Pool (LP)",
    definition: "A smart contract containing paired tokens that enables decentralized trading. When you provide liquidity, you're essentially becoming a market maker.",
    category: "Basic LP",
    example: "Like putting both SOL and USDC into a pool to help others trade between them."
  },
  {
    term: "APR (Annual Percentage Rate)",
    definition: "The basic rate of return on your liquidity provision over one year, not counting compound interest. This comes from trading fees and rewards.",
    category: "Basic LP",
    example: "A 10% APR means earning $100 on a $1000 investment over a year, not including reinvestment."
  },
  {
    term: "APY (Annual Percentage Yield)",
    definition: "The total return rate when including compound interest, where earnings are automatically reinvested to generate more returns.",
    category: "Basic LP",
    example: "A 10% APR can result in 10.5% APY if compounded daily."
  },
  {
    term: "Token Pair",
    definition: "Two cryptocurrencies that can be traded against each other in a liquidity pool. One is usually a stable asset.",
    category: "Basic LP",
    example: "SOL/USDC is a common pair where USDC acts as the stable reference."
  },

  // Intermediate LP Concepts
  {
    term: "Impermanent Loss",
    definition: "A temporary loss that occurs when the price ratio of your provided tokens changes compared to just holding them. 'Impermanent' because the loss only becomes real if you withdraw during a price imbalance.",
    category: "Intermediate LP",
    example: "If SOL price doubles while USDC stays stable, an LP position might be worth less than just holding SOL and USDC separately."
  },
  {
    term: "Pool Weight",
    definition: "Your share of the total liquidity pool, determining what percentage of trading fees you earn.",
    category: "Intermediate LP",
    example: "If you provide 1 SOL to a pool with 100 SOL total, your pool weight is 1%."
  },
  {
    term: "Slippage",
    definition: "The price difference between what you expect and what you get due to market movement during your transaction.",
    category: "Intermediate LP",
    example: "Trying to buy SOL at $100 but paying $101 due to market changes."
  },

  // DeFi Fundamentals (For Complete Beginners)
  {
    term: "Decentralized Exchange (DEX)",
    definition: "A platform where you can trade cryptocurrencies directly from your wallet without an intermediary.",
    category: "DeFi Basics",
    example: "Like a self-service trading platform, compared to traditional exchanges which are like banks."
  },
  {
    term: "Automated Market Maker (AMM)",
    definition: "A system that automatically sets prices based on the ratio of tokens in a pool, eliminating the need for traditional order books.",
    category: "DeFi Basics",
    example: "Instead of matching buyers and sellers, prices are determined by a mathematical formula."
  },
  {
    term: "Yield Farming",
    definition: "Providing liquidity or staking assets across different protocols to maximize returns through various reward mechanisms.",
    category: "DeFi Basics",
    example: "Like moving your money between different savings accounts to get the best interest rates."
  },
  {
    term: "Smart Contract",
    definition: "Self-executing programs on the blockchain that automatically handle transactions and enforce rules.",
    category: "DeFi Basics",
    example: "Like a vending machine that automatically gives you tokens when you deposit funds."
  },

  // Advanced Concepts
  {
    term: "Price Impact",
    definition: "How much your trade affects the market price, especially important for larger trades.",
    category: "Advanced",
    example: "Trading $1M worth of tokens might move the price more than trading $1K."
  },
  {
    term: "Oracle",
    definition: "External data feeds that provide real-world price information to DeFi protocols.",
    category: "Advanced",
    example: "Like having a trusted price reporter telling smart contracts the current market rates."
  },
  {
    term: "Arbitrage",
    definition: "Taking advantage of price differences between different markets or pools.",
    category: "Advanced",
    example: "Buying SOL for $98 on one DEX and selling for $100 on another."
  }
];

export default function Glossary() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const filteredTerms = DEFI_TERMS.filter(term => {
    const matchesSearch = term.term.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         term.definition.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !selectedCategory || term.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const categories = ["Meteora", "Basic LP", "Intermediate LP", "DeFi Basics", "Advanced"];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
          </div>
          <h1 className="text-4xl font-bold mb-4">DeFi Glossary</h1>
          <p className="text-lg text-muted-foreground">
            Your beginner-friendly guide to understanding DeFi terminology, with focus on Liquidity Provision and Meteora's features
          </p>
        </motion.div>

        <motion.div 
          className="max-w-xl mx-auto mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search terms..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full ${!selectedCategory ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-accent'}`}
            >
              All Terms
            </motion.button>
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full ${selectedCategory === category ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-accent'}`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 gap-6"
        >
          {filteredTerms.map((term, index) => (
            <motion.div
              key={term.term}
              variants={item}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold">{term.term}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      term.category === "Meteora" ? "bg-purple-500/10 text-purple-500" :
                      term.category === "Basic LP" ? "bg-emerald-500/10 text-emerald-500" :
                      term.category === "Intermediate LP" ? "bg-blue-500/10 text-blue-500" :
                      term.category === "DeFi Basics" ? "bg-cyan-500/10 text-cyan-500" :
                      "bg-amber-500/10 text-amber-500"
                    }`}>
                      {term.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground mb-4">{term.definition}</p>
                  {term.example && (
                    <div className="mt-4 p-4 bg-accent/50 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <Zap className="h-4 w-4 text-primary" />
                        <span className="font-medium">Example:</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{term.example}</p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}