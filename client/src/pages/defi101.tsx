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
  Zap
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
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="bg-primary/20 p-3 rounded-full">
              <BookOpen className="h-6 w-6 text-primary" />
            </div>
            <h1 className="text-4xl font-bold">DeFi 101</h1>
          </div>
          
          <p className="text-xl text-center text-muted-foreground mb-12 max-w-3xl mx-auto">
            Your comprehensive guide to understanding Decentralized Finance and Liquidity Provision on Solana
          </p>

          <Card className="mb-12">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent inline-block">Understanding DeFi & Liquidity Provision</h2>

                <h3>What is Liquidity Provision?</h3>
                <p>
                  Think of liquidity provision like being a market maker at your local farmers' market. Just as a market maker keeps stock of different goods to facilitate trade, liquidity providers supply pairs of tokens to DEXs (Decentralized Exchanges) so others can trade them easily.
                </p>

                {/* Add the DiagramsHub component here */}
                <div className="my-8">
                  <DiagramsHub />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="p-4 bg-card rounded-lg border shadow-md">
                    <h4 className="flex items-center gap-2 font-semibold">
                      <DollarSign className="h-5 w-5 text-primary" />
                      Earning from LP
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      You earn a share of trading fees whenever someone uses the pool you've provided liquidity to. The more trading activity, the more fees you earn.
                    </p>
                  </div>

                  <div className="p-4 bg-card rounded-lg border shadow-md">
                    <h4 className="flex items-center gap-2 font-semibold">
                      <RefreshCcw className="h-5 w-5 text-primary" />
                      Impermanent Loss
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      If token prices change significantly, you might earn less than if you'd just held them. Our AI helps minimize this risk through smart rebalancing.
                    </p>
                  </div>
                </div>

                <h3>The AutoYield Advantage</h3>
                <p>
                  Traditional LP management requires constant attention to:
                </p>
                <ul>
                  <li>Monitor price movements and trading volumes</li>
                  <li>Calculate optimal entry and exit points</li>
                  <li>Rebalance positions to minimize losses</li>
                  <li>Track and reinvest earned fees</li>
                </ul>
                <p>
                  Our AI handles all of this automatically, saving you time and potentially increasing your returns through more efficient management.
                </p>

                <div className="p-6 my-8 bg-gradient-to-r from-violet-900/30 to-cyan-900/30 rounded-xl border border-violet-500/20">
                  <h3 className="text-xl font-semibold mb-4">Why Solana?</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-3">
                      <Zap className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Lightning Fast</h4>
                        <p className="text-sm text-muted-foreground">400ms block times mean near-instant transactions</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <LineChart className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">High Throughput</h4>
                        <p className="text-sm text-muted-foreground">65,000 TPS for smooth trading</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Security</h4>
                        <p className="text-sm text-muted-foreground">Battle-tested with institutional adoption</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Wallet className="h-6 w-6 text-primary flex-shrink-0" />
                      <div>
                        <h4 className="font-semibold">Low Fees</h4>
                        <p className="text-sm text-muted-foreground">Transactions cost fractions of a cent</p>
                      </div>
                    </div>
                  </div>
                </div>

                <h3>Getting Started</h3>
                <ol className="space-y-4">
                  <li className="p-4 bg-card rounded-lg border shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                        <span className="text-primary font-bold">1</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Set Up Your Wallet</h4>
                        <p className="text-sm text-muted-foreground">Install Phantom or Solflare to store and manage your tokens.</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-4 bg-card rounded-lg border shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                        <span className="text-primary font-bold">2</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Connect to AutoYield</h4>
                        <p className="text-sm text-muted-foreground">Click "Connect Wallet" and approve the connection request.</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-4 bg-card rounded-lg border shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                        <span className="text-primary font-bold">3</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Choose a Strategy</h4>
                        <p className="text-sm text-muted-foreground">Select a liquidity strategy that matches your risk tolerance and goals.</p>
                      </div>
                    </div>
                  </li>
                  <li className="p-4 bg-card rounded-lg border shadow-md">
                    <div className="flex items-start gap-3">
                      <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                        <span className="text-primary font-bold">4</span>
                      </div>
                      <div>
                        <h4 className="font-semibold">Deposit Funds</h4>
                        <p className="text-sm text-muted-foreground">Start with a small amount while you get familiar with how everything works.</p>
                      </div>
                    </div>
                  </li>
                </ol>
              </div>
            </CardContent>
          </Card>

          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
              Ready to put your knowledge into practice? Connect your wallet and start your DeFi journey with AutoYield's AI-powered liquidity management.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
