import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  BookOpen, 
  Wallet, 
  TrendingUp, 
  Shield, 
  RefreshCcw,
  DollarSign,
  LineChart,
  Zap,
  CheckCircle,
  ArrowRight,
  HelpCircle,
  Info
} from "lucide-react";
import DiagramsHub from "@/components/diagrams";

export default function DeFi101() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Hero Section */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-4 rounded-full mb-6">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent inline-block">DeFi 101</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your comprehensive guide to understanding Decentralized Finance and Liquidity Provision on Solana
            </p>
          </div>

          <Card className="mb-12 shadow-xl overflow-hidden border-t-4 border-t-primary">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                {/* Introduction Section */}
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent inline-block">Understanding DeFi & Liquidity Provision</h2>

                  <div className="p-6 bg-gradient-to-r from-card/80 to-background rounded-xl border shadow-md mb-8">
                    <h3 className="flex items-center gap-2 text-xl font-semibold mb-3">
                      <Info className="h-5 w-5 text-primary" />
                      What is Liquidity Provision?
                    </h3>
                    <p className="text-muted-foreground mb-0">
                      Think of liquidity provision like being a market maker at your local farmers' market. Just as a market maker keeps stock of different goods to facilitate trade, liquidity providers supply pairs of tokens to DEXs (Decentralized Exchanges) so others can trade them easily.
                    </p>
                  </div>

                  {/* Add the DiagramsHub component here */}
                  <div className="my-8">
                    <DiagramsHub />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                    <div className="p-5 bg-card rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h4 className="flex items-center gap-2 font-semibold text-lg mb-3">
                        <div className="bg-primary/20 p-2 rounded-full">
                          <DollarSign className="h-5 w-5 text-primary" />
                        </div>
                        Earning from LP
                      </h4>
                      <p className="text-muted-foreground">
                        You earn a share of trading fees whenever someone uses the pool you've provided liquidity to. The more trading activity, the more fees you earn.
                      </p>
                    </div>

                    <div className="p-5 bg-card rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h4 className="flex items-center gap-2 font-semibold text-lg mb-3">
                        <div className="bg-primary/20 p-2 rounded-full">
                          <RefreshCcw className="h-5 w-5 text-primary" />
                        </div>
                        Impermanent Loss
                      </h4>
                      <p className="text-muted-foreground">
                        If token prices change significantly, you might earn less than if you'd just held them. Our AI helps minimize this risk through smart rebalancing.
                      </p>
                    </div>
                  </div>
                </div>

                {/* AutoYield Advantage Section */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-primary" />
                    The AutoYield Advantage
                  </h3>
                  <div className="p-5 bg-gradient-to-br from-background to-card rounded-lg border shadow-md mb-6">
                    <p className="mb-4">
                      Traditional LP management requires constant attention to:
                    </p>
                    <ul className="space-y-3 mb-0">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Monitor price movements and trading volumes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Calculate optimal entry and exit points</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Rebalance positions to minimize losses</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Track and reinvest earned fees</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative pl-5 border-l-2 border-primary">
                    <p className="text-lg font-medium">
                      Our AI handles all of this automatically, saving you time and potentially increasing your returns through more efficient management.
                    </p>
                  </div>
                </div>

                {/* Why Solana Section */}
                <div className="p-8 my-12 bg-gradient-to-r from-violet-900/30 to-cyan-900/30 rounded-xl border border-violet-500/20 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6 text-center">Why Solana?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Lightning Fast</h4>
                        <p className="text-muted-foreground">400ms block times mean near-instant transactions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                        <LineChart className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">High Throughput</h4>
                        <p className="text-muted-foreground">65,000 TPS for smooth trading</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Security</h4>
                        <p className="text-muted-foreground">Battle-tested with institutional adoption</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                        <Wallet className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Low Fees</h4>
                        <p className="text-muted-foreground">Transactions cost fractions of a cent</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Getting Started Section */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 justify-center">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <CheckCircle className="h-5 w-5 text-primary" />
                    </div>
                    Getting Started
                  </h3>
                  <ol className="space-y-4 mb-8">
                    <li className="p-5 bg-card rounded-lg border shadow-md transform transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-primary/30 to-primary/10 p-3 rounded-full flex-shrink-0">
                          <span className="text-primary font-bold text-lg">1</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Set Up Your Wallet</h4>
                          <p className="text-muted-foreground">Install Phantom or Solflare to store and manage your tokens.</p>
                          <div className="mt-2 text-sm text-primary flex items-center gap-1">
                            <ArrowRight className="h-3 w-3" />
                            <span>Compatible with mobile devices and desktop browsers</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-5 bg-card rounded-lg border shadow-md transform transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-primary/30 to-primary/10 p-3 rounded-full flex-shrink-0">
                          <span className="text-primary font-bold text-lg">2</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Connect to AutoYield</h4>
                          <p className="text-muted-foreground">Click "Connect Wallet" and approve the connection request.</p>
                          <div className="mt-2 text-sm text-primary flex items-center gap-1">
                            <ArrowRight className="h-3 w-3" />
                            <span>One-time approval for secure interactions</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-5 bg-card rounded-lg border shadow-md transform transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-primary/30 to-primary/10 p-3 rounded-full flex-shrink-0">
                          <span className="text-primary font-bold text-lg">3</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Choose a Strategy</h4>
                          <p className="text-muted-foreground">Select a liquidity strategy that matches your risk tolerance and goals.</p>
                          <div className="mt-2 text-sm text-primary flex items-center gap-1">
                            <ArrowRight className="h-3 w-3" />
                            <span>Customizable based on your preferences</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-5 bg-card rounded-lg border shadow-md transform transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="flex items-start gap-4">
                        <div className="bg-gradient-to-br from-primary/30 to-primary/10 p-3 rounded-full flex-shrink-0">
                          <span className="text-primary font-bold text-lg">4</span>
                        </div>
                        <div>
                          <h4 className="font-semibold text-lg mb-1">Deposit Funds</h4>
                          <p className="text-muted-foreground">Start with a small amount while you get familiar with how everything works.</p>
                          <div className="mt-2 text-sm text-primary flex items-center gap-1">
                            <ArrowRight className="h-3 w-3" />
                            <span>You can withdraw anytime</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="text-center">
            <motion.div
              className="p-6 bg-gradient-to-r from-violet-500/20 to-cyan-500/20 rounded-xl border border-primary/30 shadow-lg"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3 flex items-center justify-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                Ready to Learn More?
              </h3>
              <p className="text-muted-foreground mb-4 max-w-2xl mx-auto">
                Explore our interactive glossary to understand all the DeFi terminology, or connect your wallet to start your DeFi journey with AutoYield's AI-powered liquidity management.
              </p>
              <div className="flex items-center justify-center flex-wrap gap-4">
                <a href="/glossary" className="bg-primary/90 hover:bg-primary text-primary-foreground font-medium py-2 px-6 rounded-lg transition-colors flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Explore Glossary
                </a>
                <a href="/features" className="bg-card hover:bg-accent text-foreground font-medium py-2 px-6 rounded-lg border transition-colors flex items-center gap-2">
                  <TrendingUp className="h-4 w-4" />
                  View Platform Features
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}