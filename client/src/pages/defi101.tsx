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
  Code,
  Landmark,
  Activity
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
          {/* Hero Section - Updated for intermediate users */}
          <div className="flex flex-col items-center text-center mb-10">
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 p-4 rounded-full mb-6">
              <Code className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent inline-block">Advanced DeFi</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Optimizing liquidity strategies and maximizing capital efficiency on Solana
            </p>
          </div>

          <Card className="mb-12 shadow-xl overflow-hidden border-t-4 border-t-primary">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                {/* Advanced LP Mechanics Section */}
                <div className="mb-12">
                  <h2 className="text-2xl font-semibold mb-6 text-center bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent inline-block">Optimizing Liquidity Position Management</h2>

                  <div className="p-6 bg-gradient-to-r from-card/80 to-background rounded-xl border shadow-md mb-8">
                    <h3 className="flex items-center gap-2 text-xl font-semibold mb-3">
                      <Activity className="h-5 w-5 text-primary" />
                      Advanced Concentration Strategies
                    </h3>
                    <p className="text-muted-foreground mb-0">
                      Beyond basic liquidity provision, concentrated positions in specific price ranges can significantly boost capital efficiency by up to 4000x compared to traditional AMMs. These concentrated positions maximize fee generation when markets trade within your specified range.
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
                          <TrendingUp className="h-5 w-5 text-primary" />
                        </div>
                        Capital Efficiency Optimization
                      </h4>
                      <p className="text-muted-foreground">
                        Concentrated positions enable capital utilization of 50-100x traditional models. Our AI dynamically rebalances these positions based on volatility metrics and price action momentum.
                      </p>
                    </div>

                    <div className="p-5 bg-card rounded-lg border shadow-md hover:shadow-lg transition-shadow duration-300">
                      <h4 className="flex items-center gap-2 font-semibold text-lg mb-3">
                        <div className="bg-primary/20 p-2 rounded-full">
                          <RefreshCcw className="h-5 w-5 text-primary" />
                        </div>
                        Mitigating Impermanent Loss Vector
                      </h4>
                      <p className="text-muted-foreground">
                        Our position management algorithm uses Bollinger Bands and MACD crossover signals to predict potential range breakouts, adjusting positions before significant IL events occur.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Technical Advantage Section */}
                <div className="mb-12">
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Code className="h-5 w-5 text-primary" />
                    Technical Edge Architecture
                  </h3>
                  <div className="p-5 bg-gradient-to-br from-background to-card rounded-lg border shadow-md mb-6">
                    <p className="mb-4">
                      Our on-chain position management system utilizes:
                    </p>
                    <ul className="space-y-3 mb-0">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>MEV-resistant execution pathways for rebalancing operations</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Multi-hop flash loans to optimize gas and minimize slippage</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Time-weighted average price (TWAP) oracles for accurate price discovery</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span>Neptune programmatic composite order routing for minimal execution impact</span>
                      </li>
                    </ul>
                  </div>
                  <div className="relative pl-5 border-l-2 border-primary">
                    <p className="text-lg font-medium">
                      Our systems achieve 32% higher risk-adjusted returns compared to static liquidity provision strategies by using advanced execution algorithms borrowed from HFT quantitative finance.
                    </p>
                  </div>
                </div>

                {/* Solana Technical Advantages */}
                <div className="p-8 my-12 bg-gradient-to-r from-violet-900/30 to-cyan-900/30 rounded-xl border border-violet-500/20 shadow-lg">
                  <h3 className="text-2xl font-semibold mb-6 text-center">Solana Technical Advantages</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                        <Zap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Sub-400ms Finality</h4>
                        <p className="text-muted-foreground">Enables extremely efficient cross-DEX arbitrage and position rebalancing</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                        <LineChart className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Parallelized Execution</h4>
                        <p className="text-muted-foreground">Gulf Stream and Sealevel enable 65,000 TPS with transaction parallelization</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                        <Shield className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Turbine Protocol</h4>
                        <p className="text-muted-foreground">Block propagation protocol enables more complex DeFi composability</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="bg-primary/20 p-3 rounded-full flex-shrink-0">
                        <Wallet className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg">Account Model</h4>
                        <p className="text-muted-foreground">Solana's account model reduces gas overhead compared to EVM's storage model</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Advanced Strategy Deployment - Fixed for mobile */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2 justify-center">
                    <div className="bg-primary/20 p-2 rounded-full">
                      <Landmark className="h-5 w-5 text-primary" />
                    </div>
                    Advanced Strategy Deployment
                  </h3>
                  <ol className="space-y-4 mb-8">
                    <li className="p-5 bg-card rounded-lg border shadow-md transform transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="flex flex-wrap items-start gap-4">
                        <div className="bg-gradient-to-br from-primary/30 to-primary/10 p-3 rounded-full flex-shrink-0">
                          <span className="text-primary font-bold text-lg">1</span>
                        </div>
                        <div className="flex-1 min-w-[200px]">
                          <h4 className="font-semibold text-lg mb-1">Multi-DEX Liquidity Deployment</h4>
                          <p className="text-muted-foreground">Deploy capital across multiple DEXs (Orca, Raydium, Jupiter) simultaneously to capture fee generation from varying price coefficient protocols.</p>
                          <div className="mt-2 text-sm text-primary flex items-center gap-1">
                            <ArrowRight className="h-3 w-3" />
                            <span>Diversification reduces protocol-specific risk exposure</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-5 bg-card rounded-lg border shadow-md transform transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="flex flex-wrap items-start gap-4">
                        <div className="bg-gradient-to-br from-primary/30 to-primary/10 p-3 rounded-full flex-shrink-0">
                          <span className="text-primary font-bold text-lg">2</span>
                        </div>
                        <div className="flex-1 min-w-[200px]">
                          <h4 className="font-semibold text-lg mb-1">Range Optimization Parameters</h4>
                          <p className="text-muted-foreground">Configure volatility thresholds and oracle confidence intervals to optimize position range width for your risk profile.</p>
                          <div className="mt-2 text-sm text-primary flex items-center gap-1">
                            <ArrowRight className="h-3 w-3" />
                            <span>Tighter ranges yield higher APY with increased range-exit risk</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-5 bg-card rounded-lg border shadow-md transform transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="flex flex-wrap items-start gap-4">
                        <div className="bg-gradient-to-br from-primary/30 to-primary/10 p-3 rounded-full flex-shrink-0">
                          <span className="text-primary font-bold text-lg">3</span>
                        </div>
                        <div className="flex-1 min-w-[200px]">
                          <h4 className="font-semibold text-lg mb-1">Rebalancing Trigger Strategy</h4>
                          <p className="text-muted-foreground">Set custom MEV-resistant rebalancing parameters based on price drift, range utilization, and gas optimization metrics.</p>
                          <div className="mt-2 text-sm text-primary flex items-center gap-1">
                            <ArrowRight className="h-3 w-3" />
                            <span>AutoYield default uses 75% range utilization threshold</span>
                          </div>
                        </div>
                      </div>
                    </li>
                    <li className="p-5 bg-card rounded-lg border shadow-md transform transition-transform duration-300 hover:translate-y-[-2px]">
                      <div className="flex flex-wrap items-start gap-4">
                        <div className="bg-gradient-to-br from-primary/30 to-primary/10 p-3 rounded-full flex-shrink-0">
                          <span className="text-primary font-bold text-lg">4</span>
                        </div>
                        <div className="flex-1 min-w-[200px]">
                          <h4 className="font-semibold text-lg mb-1">Analytics & Risk Management</h4>
                          <p className="text-muted-foreground">Access real-time analytics including position delta, gamma exposure, and rebalance opportunity cost metrics.</p>
                          <div className="mt-2 text-sm text-primary flex items-center gap-1">
                            <ArrowRight className="h-3 w-3" />
                            <span>Risk models include cross-pair correlation matrices</span>
                          </div>
                        </div>
                      </div>
                    </li>
                  </ol>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}