import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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
              <TabsTrigger value="guides">User Guides</TabsTrigger>
              <TabsTrigger value="api">API Reference</TabsTrigger>
            </TabsList>

            <TabsContent value="getting-started">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">Quick Start Guide</h2>
                  <div className="prose prose-invert max-w-none">
                    <h3>Prerequisites</h3>
                    <ul>
                      <li>Solana wallet (Phantom, Solflare, etc.)</li>
                      <li>SOL tokens for gas fees</li>
                    </ul>

                    <h3>Connecting Your Wallet</h3>
                    <p>
                      Click the "Connect Wallet" button in the top right corner of the app.
                      Select your preferred Solana wallet and approve the connection request.
                    </p>

                    <h3>Depositing Funds</h3>
                    <p>
                      Navigate to the "Deposit" section and select the token you wish to provide
                      as liquidity. Enter the amount and confirm the transaction in your wallet.
                    </p>

                    <h3>Managing Positions</h3>
                    <p>
                      Monitor your positions in the dashboard. Our AI system will automatically
                      optimize your liquidity positioning for maximum yields.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="guides">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">User Guides</h2>
                  <div className="prose prose-invert max-w-none">
                    <h3>Understanding Yield Optimization</h3>
                    <p>
                      AutoYield uses advanced AI algorithms to analyze market conditions and
                      optimize your liquidity positions across different pools.
                    </p>

                    <h3>Risk Management</h3>
                    <p>
                      Learn about our risk management strategies and how we protect your assets
                      while maximizing returns.
                    </p>

                    <h3>Performance Analytics</h3>
                    <p>
                      Detailed guide on interpreting your performance metrics and analytics
                      dashboard.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="api">
              <Card>
                <CardContent className="pt-6">
                  <h2 className="text-2xl font-semibold mb-4">API Documentation</h2>
                  <div className="prose prose-invert max-w-none">
                    <p>
                      Our REST API allows you to integrate AutoYield's functionality into your
                      own applications.
                    </p>

                    <h3>Authentication</h3>
                    <p>
                      API requests are authenticated using JWT tokens. Obtain your API key from
                      the dashboard settings.
                    </p>

                    <h3>Rate Limits</h3>
                    <p>
                      Standard API accounts are limited to 100 requests per minute. Contact us
                      for higher limits.
                    </p>
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
