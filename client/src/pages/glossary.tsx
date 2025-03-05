import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const DEFI_TERMS = [
  // Basic LP Terms
  {
    term: "Liquidity Pool (LP)",
    definition: "A smart contract containing paired tokens that enables decentralized trading. Users who provide liquidity earn fees from trades.",
    category: "Basic LP"
  },
  {
    term: "APR (Annual Percentage Rate)",
    definition: "The nominal rate of return on an LP position over one year, not accounting for compounding. Calculated from trading fees and rewards.",
    category: "Basic LP"
  },
  {
    term: "APY (Annual Percentage Yield)",
    definition: "The effective annual rate of return when accounting for compound interest. Usually higher than APR as it includes reinvestment of earnings.",
    category: "Basic LP"
  },
  {
    term: "Token Pair",
    definition: "Two cryptocurrencies that can be traded against each other in a liquidity pool, like SOL/USDC or ETH/USDT.",
    category: "Basic LP"
  },
  // Advanced LP Concepts
  {
    term: "Impermanent Loss",
    definition: "The temporary loss of funds experienced by liquidity providers when the price ratio of paired tokens changes compared to when they were deposited.",
    category: "Advanced LP"
  },
  {
    term: "Pool Weight",
    definition: "The relative size of your liquidity provision compared to the total pool, determining your share of trading fees and rewards.",
    category: "Advanced LP"
  },
  {
    term: "Slippage",
    definition: "The difference between expected and actual trading prices due to changes in liquidity pool reserves during transaction processing.",
    category: "Advanced LP"
  },
  {
    term: "Concentrated Liquidity",
    definition: "A method allowing LPs to provide liquidity within specific price ranges, potentially increasing capital efficiency and returns.",
    category: "Advanced LP"
  },
  // General DeFi Terms
  {
    term: "Yield Farming",
    definition: "The practice of providing liquidity or staking assets across different protocols to maximize returns through various reward mechanisms.",
    category: "DeFi Basics"
  },
  {
    term: "Total Value Locked (TVL)",
    definition: "The total value of cryptocurrency assets deposited in a DeFi protocol, often used as a metric for protocol adoption and security.",
    category: "DeFi Basics"
  },
  {
    term: "Automated Market Maker (AMM)",
    definition: "A type of DEX protocol that uses mathematical formulas to determine asset prices and enable permissionless trading.",
    category: "DeFi Basics"
  },
  {
    term: "Smart Contract",
    definition: "Self-executing contracts with the terms directly written into code, forming the backbone of DeFi applications.",
    category: "DeFi Basics"
  },
  // Technical Concepts
  {
    term: "Price Impact",
    definition: "The effect your trade has on the market price, typically larger for bigger trades or less liquid pools.",
    category: "Technical"
  },
  {
    term: "Bonding Curve",
    definition: "A mathematical formula that determines the relationship between token price and supply in an AMM.",
    category: "Technical"
  },
  {
    term: "Gas Fees",
    definition: "Transaction costs paid to network validators for processing blockchain operations, varying by network congestion.",
    category: "Technical"
  },
  {
    term: "Oracle",
    definition: "External data feeds that provide real-world price information to DeFi protocols for accurate asset valuation.",
    category: "Technical"
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

  const categories = ["Basic LP", "Advanced LP", "DeFi Basics", "Technical"];

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
          <h1 className="text-4xl font-bold mb-4">DeFi Glossary</h1>
          <p className="text-lg text-muted-foreground">
            Your comprehensive guide to understanding DeFi terminology, with focus on Liquidity Provision
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
              All
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
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {filteredTerms.map((term, index) => (
            <motion.div
              key={term.term}
              variants={item}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold">{term.term}</h3>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      term.category === "Basic LP" ? "bg-emerald-500/10 text-emerald-500" :
                      term.category === "Advanced LP" ? "bg-violet-500/10 text-violet-500" :
                      term.category === "DeFi Basics" ? "bg-blue-500/10 text-blue-500" :
                      "bg-amber-500/10 text-amber-500"
                    }`}>
                      {term.category}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{term.definition}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}