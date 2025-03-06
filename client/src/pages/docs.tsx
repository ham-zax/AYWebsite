import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  BookOpen, 
  Wallet, 
  TrendingUp, 
  Shield, 
  Settings, 
  Code,
  AlertTriangle,
  RefreshCcw,
  DollarSign,
  LineChart,
  Zap,
  HelpCircle,
  CheckCircle
} from "lucide-react";

export default function Docs() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col items-center text-center mb-8">
            <div className="bg-primary/10 p-3 rounded-full mb-4">
              <BookOpen className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl font-bold mb-3">Documentation</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Technical specifications, advanced strategies, and implementation details for AutoYield's liquidity optimization protocols
            </p>
          </div>

          <Tabs defaultValue="getting-started" className="mb-8">
            <TabsList className="grid grid-cols-2 w-full mb-8">
              <TabsTrigger value="getting-started" className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Implementation Guide</span>
              </TabsTrigger>
              <TabsTrigger value="platform-guide" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>Strategy Optimization</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started">
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-semibold m-0">AutoYield Integration</h2>
                    </div>

                    <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mb-6">
                      <p className="lead font-medium text-lg mb-0">
                        This guide assumes familiarity with Solana development, SPL tokens, and basic DeFi mechanics. We'll focus on optimal implementation patterns and advanced configuration.
                      </p>
                    </div>

                    <h3 className="flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-primary" />
                      Technical Prerequisites
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/20 text-primary p-1 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <span>Solana-compatible wallet with web3 auth capabilities (Phantom/Solflare)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/20 text-primary p-1 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <span>Sufficient SOL for transaction fees (~0.1 SOL minimum for multiple operations)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/20 text-primary p-1 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <span>SPL tokens for position initialization and protocol interactions</span>
                      </li>
                    </ul>

                    <h3 className="flex items-center gap-2 mt-8">
                      <Code className="h-5 w-5 text-primary" />
                      Integration Implementation
                    </h3>
                    <ol className="space-y-6 my-6">
                      <li className="bg-card border rounded-lg p-4 shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                            <span className="font-bold">1</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-1">Wallet Interface Setup</h4>
                            <p className="text-muted-foreground">
                              Implement <code>@solana/wallet-adapter-react</code> or equivalent adapter to handle transaction signing and wallet state management. Initialize connection with optimal commitment level (<code>confirmed</code> recommended, <code>finalized</code> for high-value operations).
                            </p>
                          </div>
                        </div>
                      </li>
                      <li className="bg-card border rounded-lg p-4 shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                            <span className="font-bold">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-1">Protocol Authorization</h4>
                            <p className="text-muted-foreground">Configure program-derived address (PDA) authorization for AutoYield's protocol interfaces. Our SDK provides <code>createPositionManagerAuth()</code> utility for streamlined authorization flows.</p>
                          </div>
                        </div>
                      </li>
                      <li className="bg-card border rounded-lg p-4 shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 p-2 rounded-full flex-shrink-0">
                            <span className="font-bold">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-1">Strategy Parameter Configuration</h4>
                            <p className="text-muted-foreground">Select volatility thresholds, rebalancing parameters, and execution preferences through our configuration interface or directly via program instructions.</p>
                          </div>
                        </div>
                      </li>
                    </ol>

                    <div className="bg-card border rounded-lg p-5 mb-8">
                      <h4 className="font-semibold text-lg mb-3">Implementation Example</h4>
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        <code className="text-xs md:text-sm">
{`// Example integration with AutoYield protocol
import { Connection, PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';
import { AutoYield, PositionConfig, RiskLevel } from '@autoyield/sdk';

// Initialize protocol connection
const connection = new Connection(rpcUrl, 'confirmed');
const { publicKey, signTransaction } = useWallet();

// Create AutoYield client instance
const autoYield = new AutoYield({
  connection,
  wallet: { publicKey, signTransaction },
  config: {
    rebalanceThreshold: 0.75, // 75% position utilization
    slippageTolerance: 0.005, // 0.5% max slippage
    gasOptimizationLevel: 'high',
    riskProfile: RiskLevel.MODERATE
  }
});

// Initialize new position
const createPosition = async () => {
  const tx = await autoYield.createPosition({
    tokenPair: {
      baseToken: new PublicKey('SOL_MINT_ADDRESS'),
      quoteToken: new PublicKey('USDC_MINT_ADDRESS')
    },
    initialDeposit: {
      baseAmount: 5 * 1e9, // 5 SOL
      quoteAmount: 500 * 1e6 // 500 USDC
    },
    concentrationRange: {
      lowerTick: -10, // ~10% below current price
      upperTick: 10,  // ~10% above current price
    },
    autoCompound: true
  });

  return tx.signature;
};`}
                        </code>
                      </pre>
                    </div>

                    <div className="mt-8 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        <h4 className="text-lg font-semibold text-yellow-500 m-0">Advanced Integration Notes</h4>
                      </div>
                      <p className="mt-2 text-sm">
                        For high throughput applications, consider implementing transaction batching via our <code>batchTransactions()</code> utility. Remember that custom position management strategies require additional authorization via program-derived addresses (PDAs).
                      </p>
                    </div>

                    <div className="flex justify-center mt-8">
                      <a href="/defi101" className="bg-primary/20 hover:bg-primary/30 text-primary font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
                        <HelpCircle className="h-4 w-4" />
                        <span>View Advanced DeFi Strategies</span>
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="platform-guide">
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                      <TrendingUp className="h-6 w-6 text-primary" />
                      Strategy Optimization Framework
                    </h2>

                    <h3 className="flex items-center gap-2 mb-4">
                      <LineChart className="h-5 w-5 text-primary" />
                      Advanced Analytics Dashboard
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-card rounded-lg border shadow-sm">
                        <TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Real-time Performance Vectors</h4>
                          <p className="text-sm text-muted-foreground">
                            Position delta, gamma exposure, and fee accrual metrics displayed with sub-minute latency. Custom threshold alerts can be configured for key performance indicators and position status changes.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-card rounded-lg border shadow-sm">
                        <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Advanced Risk Modeling</h4>
                          <p className="text-sm text-muted-foreground">
                            Multi-factor risk assessment including impermanent loss forecasting, volatility prediction, and cross-pair correlation analysis. Our proprietary IL-Vector™ algorithm anticipates impermanent loss before conventional indicators.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="flex items-center gap-2 mt-8 mb-4">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Optimization Techniques
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-card p-4 rounded-lg border shadow-sm">
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          <div className="bg-primary/20 p-1.5 rounded-full">
                            <span className="text-primary text-xs">1</span>
                          </div>
                          Algorithmic Range Selection
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Dynamic price range calibration based on volatility metrics and trading volume profiles
                        </p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border shadow-sm">
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          <div className="bg-primary/20 p-1.5 rounded-full">
                            <span className="text-primary text-xs">2</span>
                          </div>
                          Fee Tier Optimization
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Automated fee tier selection optimizing for maximum capital efficiency in varying market conditions
                        </p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border shadow-sm">
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          <div className="bg-primary/20 p-1.5 rounded-full">
                            <span className="text-primary text-xs">3</span>
                          </div>
                          Adaptive Rebalancing
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          MEV-resistant execution with gas optimization and multi-factor timing algorithms
                        </p>
                      </div>
                    </div>

                    <h3 className="flex items-center gap-2 mb-4">
                      <Settings className="h-5 w-5 text-primary" />
                      Protocol Security Mechanisms
                    </h3>
                    <p className="mb-4">
                      Our platform includes enterprise-grade security features:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <li className="flex items-start gap-2 bg-card border rounded-lg p-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">Granular position health monitoring with circuit breaker mechanisms</span>
                      </li>
                      <li className="flex items-start gap-2 bg-card border rounded-lg p-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">TWAP-based execution for position adjustments to minimize slippage</span>
                      </li>
                      <li className="flex items-start gap-2 bg-card border rounded-lg p-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">Real-time oracle verification with multi-source data validation</span>
                      </li>
                      <li className="flex items-start gap-2 bg-card border rounded-lg p-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">Audited protocol contracts with time-locked upgrades</span>
                      </li>
                    </ul>

                    <div className="mt-6 p-5 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg border border-primary/20 shadow-md">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        AutoYield V2 Beta Features
                      </h4>
                      <p className="text-sm m-0">
                        Our upcoming V2 protocol introduces cross-protocol arbitrage, advanced composability with lending platforms, and leveraged positions with automated liquidation protection. Beta participants gain early access to these features.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-sm text-muted-foreground text-center p-4 bg-card border rounded-lg shadow-sm">
            <p className="mb-0">
              AutoYield is in Beta. While our protocol has undergone security audits, all DeFi interactions carry inherent risks. Optimize your position sizing based on your risk tolerance.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}