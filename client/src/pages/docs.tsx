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
  AlertTriangle
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
              <TabsTrigger value="guides">Platform Guide</TabsTrigger>
              <TabsTrigger value="api">API Reference</TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <div className="flex items-center gap-2 mb-4">
                      <BookOpen className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-semibold m-0">Quick Start Guide</h2>
                    </div>

                    <h3>Prerequisites</h3>
                    <ul>
                      <li>A Solana wallet (we recommend Phantom or Solflare)</li>
                      <li>SOL tokens for gas fees (approximately 0.1 SOL)</li>
                      <li>Tokens you want to provide as liquidity (USDC, SOL, etc.)</li>
                    </ul>

                    <h3>Step 1: Wallet Setup</h3>
                    <ol>
                      <li>Install a Solana wallet extension (Phantom/Solflare)</li>
                      <li>Transfer SOL to your wallet for gas fees</li>
                      <li>Acquire the tokens you want to provide as liquidity</li>
                    </ol>

                    <h3>Step 2: Platform Connection</h3>
                    <ol>
                      <li>Click "Connect Wallet" in the top-right corner</li>
                      <li>Select your wallet from the available options</li>
                      <li>Approve the connection request in your wallet</li>
                    </ol>

                    <h3>Step 3: Making Your First Deposit</h3>
                    <ol>
                      <li>Navigate to the "Pools" section</li>
                      <li>Choose a liquidity pool with your preferred tokens</li>
                      <li>Enter the amount you wish to deposit</li>
                      <li>Approve the transaction in your wallet</li>
                    </ol>

                    <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/20">
                      <div className="flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-5 w-5 text-yellow-500" />
                        <h4 className="text-lg font-semibold text-yellow-500 m-0">Important Security Notes</h4>
                      </div>
                      <ul className="mt-2 text-sm">
                        <li>Never share your wallet's private key or seed phrase</li>
                        <li>Start with a small amount to test the platform</li>
                        <li>Verify all transaction details before signing</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="defi-basics">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-semibold mb-6">Understanding DeFi</h2>

                    <h3>What is DeFi?</h3>
                    <p>
                      Decentralized Finance (DeFi) represents a shift from traditional financial systems to peer-to-peer finance enabled by blockchain technology. Unlike traditional banks, DeFi platforms are automated and don't require intermediaries.
                    </p>

                    <h3>Key DeFi Concepts</h3>
                    <ul>
                      <li>
                        <strong>Liquidity Pools:</strong> Smart contracts that hold pairs of tokens, enabling decentralized trading
                      </li>
                      <li>
                        <strong>APR/APY:</strong> Annual Percentage Rate/Yield - Your potential returns from providing liquidity
                      </li>
                      <li>
                        <strong>Impermanent Loss:</strong> Potential temporary loss due to price changes in token pairs
                      </li>
                      <li>
                        <strong>Yield Farming:</strong> Strategy of moving assets between different protocols to maximize returns
                      </li>
                    </ul>

                    <h3>Why Solana?</h3>
                    <p>
                      Solana offers several advantages for DeFi applications:
                    </p>
                    <ul>
                      <li>Fast transactions (400ms block times)</li>
                      <li>Low transaction fees ($0.00025 average)</li>
                      <li>High throughput (65,000 TPS)</li>
                      <li>Growing ecosystem of DeFi protocols</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="guides">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <h2 className="text-2xl font-semibold mb-6">Platform Features</h2>

                    <h3>AI-Powered Yield Optimization</h3>
                    <p>
                      Our AI algorithms continuously analyze market conditions, token prices, and pool performance to:
                    </p>
                    <ul>
                      <li>Identify the most profitable liquidity pools</li>
                      <li>Time entry and exit positions</li>
                      <li>Adjust positions to minimize impermanent loss</li>
                      <li>Compound rewards automatically</li>
                    </ul>

                    <h3>Risk Management</h3>
                    <p>
                      AutoYield implements multiple layers of risk management:
                    </p>
                    <ul>
                      <li>Real-time monitoring of pool health</li>
                      <li>Automatic position rebalancing</li>
                      <li>Slippage protection</li>
                      <li>Smart contract audit verification</li>
                    </ul>

                    <h3>Understanding Your Dashboard</h3>
                    <p>
                      Your dashboard provides real-time insights into:
                    </p>
                    <ul>
                      <li>Current positions and their performance</li>
                      <li>Historical returns and APR</li>
                      <li>Pool-specific metrics and health indicators</li>
                      <li>Transaction history and rewards</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <div className="flex items-center gap-2 mb-4">
                      <Code className="h-6 w-6 text-primary" />
                      <h2 className="text-2xl font-semibold m-0">API Documentation</h2>
                    </div>

                    <p>
                      AutoYield provides a comprehensive REST API for integrating our platform's functionality into your applications.
                    </p>

                    <h3>Authentication</h3>
                    <pre className="bg-card p-4 rounded-lg">
                      <code>
                        {`
// Request an API key
POST /api/v1/auth/api-key

// Use the API key in headers
Authorization: Bearer YOUR_API_KEY
                        `}
                      </code>
                    </pre>

                    <h3>Common Endpoints</h3>
                    <ul>
                      <li><code>GET /api/v1/pools</code> - List all available pools</li>
                      <li><code>GET /api/v1/pools/:id/stats</code> - Get pool statistics</li>
                      <li><code>GET /api/v1/user/positions</code> - Get user positions</li>
                      <li><code>POST /api/v1/positions</code> - Create a new position</li>
                    </ul>

                    <h3>Rate Limits</h3>
                    <ul>
                      <li>100 requests per minute for standard API keys</li>
                      <li>Custom limits available for enterprise users</li>
                      <li>Rate limit headers included in responses</li>
                    </ul>

                    <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                      <h4 className="text-lg font-semibold mb-2">Getting Support</h4>
                      <p className="m-0">
                        For API support or custom integration assistance, contact our developer team at api@autoyield.io
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </div>
  );
}