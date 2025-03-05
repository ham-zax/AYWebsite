import { motion } from "framer-motion";
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const DEFI_TERMS = [
  {
    term: "Liquidity Pool (LP)",
    definition: "A smart contract containing paired tokens that enables decentralized trading. Users who provide liquidity earn fees from trades.",
    category: "Basic"
  },
  {
    term: "APY",
    definition: "Annual Percentage Yield - The real rate of return earned on an investment, taking into account the effect of compounding interest.",
    category: "Basic"
  },
  {
    term: "Impermanent Loss",
    definition: "A temporary loss of funds experienced by liquidity providers due to the volatility of paired tokens in a pool.",
    category: "Advanced"
  },
  {
    term: "Yield Farming",
    definition: "The practice of staking or lending crypto assets to generate returns in the form of additional cryptocurrency.",
    category: "Advanced"
  },
  {
    term: "Smart Contract",
    definition: "Self-executing contracts with the terms of the agreement directly written into code that runs on the blockchain.",
    category: "Basic"
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
            Your interactive guide to understanding DeFi terminology
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

          <div className="flex justify-center gap-4 mt-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory(null)}
              className={`px-4 py-2 rounded-full ${!selectedCategory ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-accent'}`}
            >
              All
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory("Basic")}
              className={`px-4 py-2 rounded-full ${selectedCategory === "Basic" ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-accent'}`}
            >
              Basic
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setSelectedCategory("Advanced")}
              className={`px-4 py-2 rounded-full ${selectedCategory === "Advanced" ? 'bg-primary text-primary-foreground' : 'bg-card hover:bg-accent'}`}
            >
              Advanced
            </motion.button>
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
                      term.category === "Basic" ? "bg-emerald-500/10 text-emerald-500" : "bg-violet-500/10 text-violet-500"
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
