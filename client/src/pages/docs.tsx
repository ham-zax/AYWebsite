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
  Zap
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
          <h1 className="text-4xl font-bold mb-8">Documentation</h1>

          <Tabs defaultValue="getting-started">
            <TabsList className="mb-8">
              <TabsTrigger value="getting-started">Getting Started</TabsTrigger>
              <TabsTrigger value="defi-basics">DeFi Basics</TabsTrigger>
              <TabsTrigger value="platform-guide">Platform Guide</TabsTrigger>
              <TabsTrigger value="technical">Technical Details</TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-semibold m-0">Welcome to AutoYield</h2>
                    </div>

                    <p className="lead">
                      Ready to put your crypto to work? You're in the right place. We'll walk you through everything you need to know to start earning from your idle tokens.
                    </p>

                    <h3>Before You Begin</h3>
                    <ul>
                      <li>A Solana wallet (we recommend Phantom or Solflare)</li>
                      <li>Some SOL for transaction fees (around 0.1 SOL should be plenty)</li>
                      <li>Tokens you'd like to provide as liquidity (USDC, SOL, etc.)</li>
                    </ul>

                    <h3>Your First Steps</h3>
                    <ol>
                      <li>
                        <strong>Set Up Your Wallet</strong>
                        <p>If you're new to Solana, install Phantom or Solflare. They're user-friendly and secure. Need help choosing? We've got a comparison guide below.</p>
                      </li>
                      <li>
                        <strong>Connect to AutoYield</strong>
                        <p>Click "Connect Wallet" at the top of the page. Your wallet will ask for permission - this is just to view your address and request transaction approvals.</p>
                      </li>
                      <li>
                        <strong>Start Small</strong>
                        <p>We recommend starting with a small amount while you get familiar with the platform. You can always add more later!</p>
                      </li>
                    </ol>

                    <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        <h4 className="text-lg font-semibold text-yellow-500 m-0">A Note on Security</h4>
                      </div>
                      <p className="mt-2 text-sm">
                        While we've built AutoYield with security in mind, remember that all DeFi activities carry inherent risks. Never invest more than you can afford to lose, and always DYOR (Do Your Own Research).
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="defi-basics">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-semibold mb-6">Understanding DeFi & Liquidity Provision</h2>

                    <h3>What is Liquidity Provision?</h3>
                    <p>
                      Think of liquidity provision like being a market maker at your local farmers' market. Just as a market maker keeps stock of different goods to facilitate trade, liquidity providers supply pairs of tokens to DEXs (Decentralized Exchanges) so others can trade them easily.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                      <div className="p-4 bg-card rounded-lg border">
                        <h4 className="flex items-center gap-2 font-semibold">
                          <DollarSign className="h-5 w-5 text-primary" />
                          Earning from LP
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          You earn a share of trading fees whenever someone uses the pool you've provided liquidity to. The more trading activity, the more fees you earn.
                        </p>
                      </div>

                      <div className="p-4 bg-card rounded-lg border">
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

                    <h3>Why Solana?</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-start gap-2">
                        <Zap className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Lightning Fast</h4>
                          <p className="text-sm text-muted-foreground">400ms block times mean near-instant transactions</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <LineChart className="h-5 w-5 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">High Throughput</h4>
                          <p className="text-sm text-muted-foreground">65,000 TPS for smooth trading</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="platform-guide">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-semibold mb-6">Making the Most of AutoYield</h2>

                    <h3>Understanding Your Dashboard</h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
                        <TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Performance Metrics</h4>
                          <p className="text-sm text-muted-foreground">
                            Your dashboard shows real-time APR, earned fees, and position values. Green numbers mean you're profiting, while red might indicate it's time for our AI to rebalance.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-card rounded-lg border">
                        <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Risk Indicators</h4>
                          <p className="text-sm text-muted-foreground">
                            We display pool health scores and impermanent loss metrics to help you understand your position's status. Our AI uses these same indicators to make decisions.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="mt-8">Best Practices</h3>
                    <ul>
                      <li>
                        <strong>Diversification:</strong> Consider spreading your liquidity across different pools to minimize risk
                      </li>
                      <li>
                        <strong>Time Horizon:</strong> LP positions generally perform better over longer periods
                      </li>
                      <li>
                        <strong>Regular Monitoring:</strong> While our AI handles the heavy lifting, it's good to check your dashboard weekly
                      </li>
                    </ul>

                    <h3>Risk Management</h3>
                    <p>
                      Our platform includes several safety features:
                    </p>
                    <ul>
                      <li>Automatic emergency withdrawals if pool health deteriorates</li>
                      <li>Slippage protection on all transactions</li>
                      <li>Real-time monitoring and alerts</li>
                      <li>Audited smart contracts</li>
                    </ul>

                    <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <h4 className="text-lg font-semibold mb-2">Beta Program Note</h4>
                      <p className="text-sm m-0">
                        We're constantly improving AutoYield based on user feedback. Your experience helps make the platform better for everyone. Found something that could work better? Let us know!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technical">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <div className="flex items-center gap-2 mb-4">
                      <Code className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-semibold m-0">Technical Details</h2>
                    </div>

                    <h3>Smart Contract Architecture</h3>
                    <p>
                      Our platform is built on thoroughly audited smart contracts that handle:
                    </p>
                    <ul>
                      <li>Automated position management</li>
                      <li>Fee collection and reinvestment</li>
                      <li>Emergency withdrawals</li>
                      <li>Position rebalancing</li>
                    </ul>

                    <h3>AI Strategy Engine</h3>
                    <p>
                      Our AI uses multiple data sources to optimize your positions:
                    </p>
                    <ul>
                      <li>Historical price data and volatility patterns</li>
                      <li>Trading volume analysis</li>
                      <li>Pool health metrics</li>
                      <li>Gas price optimization</li>
                    </ul>

                    <h3>API Integration</h3>
                    <pre className="bg-card p-4 rounded-lg">
                      <code>
                        {`
// Request format for position data
GET /api/v1/positions/:wallet_address

// Response format
{
  "positions": [{
    "pool_id": "string",
    "tokens": ["SOL", "USDC"],
    "value_usd": "number",
    "apr": "number",
    "health_score": "number"
  }]
}
                        `}
                      </code>
                    </pre>

                    <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <h4 className="text-lg font-semibold mb-2">Developer Resources</h4>
                      <p className="m-0">
                        Building on top of AutoYield? Check out our <a href="/docs/api" className="text-primary hover:text-primary/80">API documentation</a> or join our <a href="https://discord.gg/autoyield" className="text-primary hover:text-primary/80">Discord</a> for developer support.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-sm text-muted-foreground text-center">
            AutoYield is in Beta. While we strive for excellence, please understand that DeFi involves inherent risks. Always do your own research and invest responsibly.
          </div>
        </motion.div>
      </div>
    </div>
  );
}