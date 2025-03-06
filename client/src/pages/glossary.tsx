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

  // Advanced LP Concepts
  {
    term: "Fee Tier Optimization",
    definition: "The process of selecting optimal fee tiers based on volatility profiles and trading volume to maximize yield while maintaining competitive pricing.",
    category: "Advanced",
    example: "Selecting a 1% fee tier for volatile token pairs during market turbulence to compensate for increased impermanent loss risk."
  },
  {
    term: "Range Orders",
    definition: "A liquidity provision strategy that acts as a limit order by providing single-sided liquidity in a specific price range.",
    category: "Advanced",
    example: "Setting a narrow range above current price to effectively create a limit sell order that earns fees while waiting to execute."
  },
  {
    term: "Position Delta Hedging",
    definition: "A risk management technique that offsets potential impermanent loss by taking complementary positions in related markets or derivatives.",
    category: "Advanced",
    example: "Hedging a SOL/USDC LP position with a partial short position in perpetual futures to reduce directional exposure."
  },

  // LP Concepts (For Intermediate Users)
  {
    term: "Impermanent Loss",
    definition: "A temporary loss that occurs when the price ratio of your provided tokens changes compared to just holding them. The loss is 'impermanent' until liquidity is withdrawn, as price recovery can reduce or eliminate the loss.",
    category: "Intermediate LP",
    example: "If SOL price doubles while USDC stays stable, an LP position might be worth 5.7% less than just holding the tokens separately."
  },
  {
    term: "Pool Weight",
    definition: "Your share of the total liquidity pool, determining what percentage of trading fees you earn.",
    category: "Intermediate LP",
    example: "If you provide 1 SOL to a pool with 100 SOL total, your pool weight is 1%."
  },
  {
    term: "Fee Reinvestment",
    definition: "The automated process of compounding earned trading fees back into the liquidity position to increase capital efficiency and long-term returns.",
    category: "Intermediate LP",
    example: "Reinvesting 2% earned fees daily can increase annual returns from 25% APR to 28.3% APY."
  },
  {
    term: "Price Impact",
    definition: "How much your trade affects the market price, especially important for larger trades.",
    category: "Intermediate LP",
    example: "Trading $1M worth of tokens might move the price more than trading $1K."
  },

  // Technical Concepts
  {
    term: "Time-Weighted Average Market Maker (TWAMM)",
    definition: "An automated market maker design that executes large orders gradually over time to minimize price impact and protect against front-running.",
    category: "Technical",
    example: "A TWAMM can split a $1M order into thousands of micro-transactions executed over 24 hours."
  },
  {
    term: "Virtual AMM (vAMM)",
    definition: "A synthetic AMM that doesn't require actual token reserves but simulates their behavior for derivatives trading using virtual balances.",
    category: "Technical",
    example: "Perpetual futures protocols often use vAMMs to determine synthetic asset prices without holding the underlying tokens."
  },
  {
    term: "MEV (Maximal Extractable Value)",
    definition: "The maximum value that can be extracted from transaction ordering, often through front-running, back-running, or sandwich attacks on DEX trades.",
    category: "Technical",
    example: "A bot observing a large pending swap might insert transactions before and after it to profit from the price movement."
  },
  {
    term: "Oracle",
    definition: "External data feeds that provide real-world price information to DeFi protocols.",
    category: "Technical",
    example: "Like having a trusted price reporter telling smart contracts the current market rates."
  },

  // Protocol Mechanics
  {
    term: "Automated Rebalancing",
    definition: "Algorithmic adjustment of liquidity positions to maintain optimal capital efficiency as market conditions change.",
    category: "Protocol Mechanics",
    example: "When a token pair's price drifts towards the edge of the configured range, the position is automatically recentered around the current price."
  },
  {
    term: "Range Utilization",
    definition: "The percentage of a liquidity position's configured price range that is actively being utilized based on current trading activity.",
    category: "Protocol Mechanics",
    example: "A position with 80% range utilization is efficiently deployed, while 20% utilization suggests suboptimal range configuration."
  },
  {
    term: "Fee Capture Ratio",
    definition: "The proportion of trading volume captured as fees by a liquidity position, determined by the position's concentration and proximity to the current trading price.",
    category: "Protocol Mechanics",
    example: "A tightly concentrated position might capture 5x more fees per dollar than a widely distributed position."
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

  const categories = ["Meteora", "Intermediate LP", "Advanced", "Technical", "Protocol Mechanics"];

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
          <h1 className="text-4xl font-bold mb-4">Technical Glossary</h1>
          <p className="text-lg text-muted-foreground">
            Advanced DeFi terminology and protocol-specific concepts for experienced users
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
              placeholder="Search technical terms..."
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
                      term.category === "Intermediate LP" ? "bg-blue-500/10 text-blue-500" :
                      term.category === "Advanced" ? "bg-amber-500/10 text-amber-500" :
                      term.category === "Technical" ? "bg-cyan-500/10 text-cyan-500" :
                      "bg-emerald-500/10 text-emerald-500"
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