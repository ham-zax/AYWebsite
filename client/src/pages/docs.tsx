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
              Everything you need to know about AutoYield's features, functionality, and how to make the most of our platform
            </p>
          </div>

          <Tabs defaultValue="getting-started" className="mb-8">
            <TabsList className="grid grid-cols-3 w-full mb-8">
              <TabsTrigger value="getting-started" className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4" />
                <span>Getting Started</span>
              </TabsTrigger>
              <TabsTrigger value="platform-guide" className="flex items-center gap-2">
                <TrendingUp className="h-4 w-4" />
                <span>Platform Guide</span>
              </TabsTrigger>
              <TabsTrigger value="technical" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                <span>Technical Details</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started">
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-semibold m-0">Welcome to AutoYield</h2>
                    </div>

                    <div className="p-4 bg-primary/10 rounded-lg border border-primary/20 mb-6">
                      <p className="lead font-medium text-lg mb-0">
                        Ready to put your crypto to work? You're in the right place. We'll walk you through everything you need to know to start earning from your idle tokens.
                      </p>
                    </div>

                    <h3 className="flex items-center gap-2">
                      <Wallet className="h-5 w-5 text-primary" />
                      Before You Begin
                    </h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/20 text-primary p-1 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <span>A Solana wallet (we recommend Phantom or Solflare)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/20 text-primary p-1 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <span>Some SOL for transaction fees (around 0.1 SOL should be plenty)</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="bg-primary/20 text-primary p-1 rounded-full mt-1">
                          <CheckCircle className="h-4 w-4" />
                        </div>
                        <span>Tokens you'd like to provide as liquidity (USDC, SOL, etc.)</span>
                      </li>
                    </ul>

                    <h3 className="flex items-center gap-2 mt-8">
                      <TrendingUp className="h-5 w-5 text-primary" />
                      Your First Steps
                    </h3>
                    <ol className="space-y-6 my-6">
                      <li className="bg-card border rounded-lg p-4 shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 text-primary p-2 rounded-full flex-shrink-0">
                            <span className="font-bold">1</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-1">Set Up Your Wallet</h4>
                            <p className="text-muted-foreground">If you're new to Solana, install Phantom or Solflare. They're user-friendly and secure. Need help choosing? We've got a <a href="/defi101" className="text-primary hover:underline">comparison guide</a>.</p>
                          </div>
                        </div>
                      </li>
                      <li className="bg-card border rounded-lg p-4 shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 text-primary p-2 rounded-full flex-shrink-0">
                            <span className="font-bold">2</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-1">Connect to AutoYield</h4>
                            <p className="text-muted-foreground">Click "Connect Wallet" at the top of the page. Your wallet will ask for permission - this is just to view your address and request transaction approvals.</p>
                          </div>
                        </div>
                      </li>
                      <li className="bg-card border rounded-lg p-4 shadow-sm">
                        <div className="flex items-start gap-3">
                          <div className="bg-primary/20 text-primary p-2 rounded-full flex-shrink-0">
                            <span className="font-bold">3</span>
                          </div>
                          <div>
                            <h4 className="font-semibold text-lg mb-1">Start Small</h4>
                            <p className="text-muted-foreground">We recommend starting with a small amount while you get familiar with the platform. You can always add more later!</p>
                          </div>
                        </div>
                      </li>
                    </ol>

                    <div className="mt-8 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        <h4 className="text-lg font-semibold text-yellow-500 m-0">A Note on Security</h4>
                      </div>
                      <p className="mt-2 text-sm">
                        While we've built AutoYield with security in mind, remember that all DeFi activities carry inherent risks. Never invest more than you can afford to lose, and always DYOR (Do Your Own Research).
                      </p>
                    </div>

                    <div className="flex justify-center mt-8">
                      <a href="/defi101" className="bg-primary/20 hover:bg-primary/30 text-primary font-medium py-2 px-4 rounded-lg transition-colors flex items-center gap-2">
                        <HelpCircle className="h-4 w-4" />
                        <span>Learn more in our DeFi 101 Guide</span>
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
                      Making the Most of AutoYield
                    </h2>

                    <h3 className="flex items-center gap-2 mb-4">
                      <LineChart className="h-5 w-5 text-primary" />
                      Understanding Your Dashboard
                    </h3>
                    <div className="space-y-4">
                      <div className="flex items-start gap-4 p-4 bg-card rounded-lg border shadow-sm">
                        <TrendingUp className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Performance Metrics</h4>
                          <p className="text-sm text-muted-foreground">
                            Your dashboard shows real-time APR, earned fees, and position values. Green numbers mean you're profiting, while red might indicate it's time for our AI to rebalance.
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start gap-4 p-4 bg-card rounded-lg border shadow-sm">
                        <Shield className="h-6 w-6 text-primary flex-shrink-0" />
                        <div>
                          <h4 className="font-semibold">Risk Indicators</h4>
                          <p className="text-sm text-muted-foreground">
                            We display pool health scores and impermanent loss metrics to help you understand your position's status. Our AI uses these same indicators to make decisions.
                          </p>
                        </div>
                      </div>
                    </div>

                    <h3 className="flex items-center gap-2 mt-8 mb-4">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      Best Practices
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                      <div className="bg-card p-4 rounded-lg border shadow-sm">
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          <div className="bg-primary/20 p-1.5 rounded-full">
                            <span className="text-primary text-xs">1</span>
                          </div>
                          Diversification
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          Spread your liquidity across different pools to minimize risk
                        </p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border shadow-sm">
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          <div className="bg-primary/20 p-1.5 rounded-full">
                            <span className="text-primary text-xs">2</span>
                          </div>
                          Time Horizon
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          LP positions generally perform better over longer periods
                        </p>
                      </div>
                      <div className="bg-card p-4 rounded-lg border shadow-sm">
                        <h4 className="font-semibold flex items-center gap-2 mb-2">
                          <div className="bg-primary/20 p-1.5 rounded-full">
                            <span className="text-primary text-xs">3</span>
                          </div>
                          Regular Monitoring
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          While our AI handles the heavy lifting, check your dashboard weekly
                        </p>
                      </div>
                    </div>

                    <h3 className="flex items-center gap-2 mb-4">
                      <Shield className="h-5 w-5 text-primary" />
                      Risk Management
                    </h3>
                    <p className="mb-4">
                      Our platform includes several safety features:
                    </p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      <li className="flex items-start gap-2 bg-card border rounded-lg p-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">Automatic emergency withdrawals if pool health deteriorates</span>
                      </li>
                      <li className="flex items-start gap-2 bg-card border rounded-lg p-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">Slippage protection on all transactions</span>
                      </li>
                      <li className="flex items-start gap-2 bg-card border rounded-lg p-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">Real-time monitoring and alerts</span>
                      </li>
                      <li className="flex items-start gap-2 bg-card border rounded-lg p-3">
                        <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                        <span className="text-sm">Audited smart contracts</span>
                      </li>
                    </ul>

                    <div className="mt-6 p-5 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg border border-primary/20 shadow-md">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <Zap className="h-5 w-5 text-primary" />
                        Beta Program Note
                      </h4>
                      <p className="text-sm m-0">
                        We're constantly improving AutoYield based on user feedback. Your experience helps make the platform better for everyone. Found something that could work better? Let us know!
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="technical">
              <Card className="shadow-md">
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <div className="flex items-center gap-2 mb-6">
                      <Code className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-semibold m-0">Technical Details</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                      <div className="bg-card border rounded-lg p-5 shadow-sm">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <Settings className="h-5 w-5 text-primary" />
                          Smart Contract Architecture
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Our platform is built on thoroughly audited smart contracts that handle:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-sm">Automated position management</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-sm">Fee collection and reinvestment</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-sm">Emergency withdrawals</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-sm">Position rebalancing</span>
                          </li>
                        </ul>
                      </div>

                      <div className="bg-card border rounded-lg p-5 shadow-sm">
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                          <TrendingUp className="h-5 w-5 text-primary" />
                          AI Strategy Engine
                        </h3>
                        <p className="text-sm text-muted-foreground mb-4">
                          Our AI uses multiple data sources to optimize your positions:
                        </p>
                        <ul className="space-y-2">
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-sm">Historical price data and volatility patterns</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-sm">Trading volume analysis</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-sm">Pool health metrics</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <CheckCircle className="h-4 w-4 text-primary mt-0.5" />
                            <span className="text-sm">Gas price optimization</span>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <Code className="h-5 w-5 text-primary" />
                      API Integration
                    </h3>
                    <div className="bg-card border rounded-lg">
                      <div className="p-3 border-b bg-muted/50 text-sm font-mono">
                        Request format for position data
                      </div>
                      <pre className="bg-card p-4 rounded-b-lg m-0 overflow-x-auto">
                        <code className="text-sm">
                          {`GET /api/v1/positions/:wallet_address`}
                        </code>
                      </pre>
                    </div>

                    <div className="bg-card border rounded-lg mt-4">
                      <div className="p-3 border-b bg-muted/50 text-sm font-mono">
                        Response format
                      </div>
                      <pre className="bg-card p-4 rounded-b-lg m-0 overflow-x-auto">
                        <code className="text-sm">
                          {`{
  "positions": [{
    "pool_id": "string",
    "tokens": ["SOL", "USDC"],
    "value_usd": "number",
    "apr": "number",
    "health_score": "number"
  }]
}`}
                        </code>
                      </pre>
                    </div>

                    <div className="mt-8 p-5 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg border border-primary/20 shadow-md">
                      <h4 className="text-lg font-semibold mb-2 flex items-center gap-2">
                        <BookOpen className="h-5 w-5 text-primary" />
                        Developer Resources
                      </h4>
                      <p className="m-0">
                        Building on top of AutoYield? Check out our <a href="/docs/api" className="text-primary hover:text-primary/80">API documentation</a> or join our <a href="https://discord.gg/autoyield" className="text-primary hover:text-primary/80">Discord</a> for developer support.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          <div className="mt-8 text-sm text-muted-foreground text-center p-4 bg-card border rounded-lg shadow-sm">
            <p className="mb-0">
              AutoYield is in Beta. While we strive for excellence, please understand that DeFi involves inherent risks. Always do your own research and invest responsibly.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}