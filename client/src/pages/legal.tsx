import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { AlertTriangle, Shield, Eye, Scale } from "lucide-react";
import { Helmet } from "react-helmet-async";

export default function Legal() {
  return (
    <div className="pt-24 pb-16">
      <Helmet>
        <title>Legal Information - AutoYield</title>
        <meta name="description" content="Terms of Service, Privacy Policy, and Risk Disclosures for AutoYield" />
      </Helmet>

      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <AlertTriangle className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
            <h1 className="text-4xl font-bold mb-4">Legal Information</h1>
            <p className="text-lg text-muted-foreground">
              Important disclaimers, terms, and risk disclosures for using AutoYield
            </p>
          </div>

          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6 mb-8">
            <div className="flex items-start gap-4">
              <AlertTriangle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-xl font-semibold text-yellow-500 mb-2">Protocol Risk Acknowledgment</h2>
                <p className="text-muted-foreground">
                  AutoYield is an experimental liquidity optimization protocol. By interfacing with our smart contracts, you acknowledge and accept that:
                </p>
                <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                  <li>• You assume full responsibility for all operations, interactions, and potential losses</li>
                  <li>• DeFi protocols entail inherent risks including smart contract vulnerabilities, oracle failures, MEV attacks, and impermanent loss</li>
                  <li>• Our protocol provides no guarantees of profit or principal protection</li>
                  <li>• Historical APY data does not predict future performance</li>
                </ul>
              </div>
            </div>
          </div>

          <Tabs defaultValue="terms">
            <TabsList className="mb-8">
              <TabsTrigger value="terms">
                <Scale className="h-4 w-4 mr-2" />
                Terms of Service
              </TabsTrigger>
              <TabsTrigger value="privacy">
                <Eye className="h-4 w-4 mr-2" />
                Privacy Policy
              </TabsTrigger>
              <TabsTrigger value="risks">
                <AlertTriangle className="h-4 w-4 mr-2" />
                Risk Disclosure
              </TabsTrigger>
            </TabsList>

            <TabsContent value="terms">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <h2>Terms of Service</h2>

                    <h3>1. Acceptance of Terms</h3>
                    <p>
                      By accessing or using AutoYield ("the Protocol"), you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you do not have permission to access the Protocol.
                    </p>

                    <h3>2. Protocol Description</h3>
                    <p>
                      AutoYield is an experimental protocol that facilitates automated liquidity provision on the Solana blockchain. The Protocol is provided "as is" and "as available" without any representations, warranties, or conditions of any kind.
                    </p>

                    <h3>3. No Financial Advice</h3>
                    <p>
                      Nothing in the Protocol constitutes financial advice. Any decisions to interact with the Protocol are made at your own risk and discretion. We strongly recommend conducting your own research and consulting with qualified professionals before making any financial decisions.
                    </p>

                    <h3>4. User Responsibilities</h3>
                    <p>
                      You are responsible for:
                    </p>
                    <ul>
                      <li>Understanding the risks involved in DeFi and cryptocurrency trading</li>
                      <li>Securing your private keys and wallet</li>
                      <li>Verifying all transaction details before confirmation</li>
                      <li>Ensuring compliance with your local regulations</li>
                      <li>Any tax obligations arising from your use of the Protocol</li>
                    </ul>

                    <h3>5. Disclaimer of Warranties</h3>
                    <p>
                      The Protocol is experimental software. We make no warranties regarding:
                    </p>
                    <ul>
                      <li>Protocol reliability or availability</li>
                      <li>Accuracy of data or calculations</li>
                      <li>Security of smart contracts</li>
                      <li>Financial returns or results</li>
                    </ul>

                    <h3>6. Limitation of Liability</h3>
                    <p>
                      Under no circumstances shall AutoYield, its developers, contributors, or affiliates be liable for any direct, indirect, incidental, special, consequential, or exemplary damages resulting from your use of the Protocol.
                    </p>

                    <h3>7. Protocol Modifications</h3>
                    <p>
                      We reserve the right to modify, suspend, or discontinue the Protocol at any time without notice. We shall not be liable to you or any third party for any modification, suspension, or discontinuation.
                    </p>

                    <h3>8. Governing Law</h3>
                    <p>
                      These terms shall be governed by and construed in accordance with applicable laws, without regard to conflict of law principles.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="privacy">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <h2>Privacy Policy</h2>

                    <h3>1. Information Collection</h3>
                    <p>
                      We collect the following information when you use AutoYield:
                    </p>
                    <ul>
                      <li>Public blockchain data (wallet addresses, transaction history)</li>
                      <li>Technical data (browser type, device information)</li>
                      <li>Usage data (interaction patterns, preferences)</li>
                    </ul>

                    <h3>2. Information Usage</h3>
                    <p>
                      We use collected information to:
                    </p>
                    <ul>
                      <li>Provide and maintain the Protocol</li>
                      <li>Improve user experience</li>
                      <li>Analyze usage patterns</li>
                      <li>Detect and prevent technical issues</li>
                    </ul>

                    <h3>3. Data Storage</h3>
                    <p>
                      Please note that blockchain data is public and immutable. We do not control and cannot delete on-chain data. Off-chain data is stored securely and retained only as long as necessary.
                    </p>

                    <h3>4. Third-Party Services</h3>
                    <p>
                      The Protocol may integrate with third-party services. We are not responsible for their privacy practices. Users should review the privacy policies of these services separately.
                    </p>

                    <h3>5. Security Measures</h3>
                    <p>
                      While we implement reasonable security measures, no system is completely secure. Users are responsible for securing their private keys and maintaining their wallet security.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="risks">
              <Card>
                <CardContent className="pt-6">
                  <div className="prose prose-invert max-w-none">
                    <h2>Risk Disclosure</h2>

                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-6 mb-8">
                      <h3 className="text-destructive mb-4">High-Risk Activity Warning</h3>
                      <p className="text-sm">
                        DeFi protocols and cryptocurrency trading are HIGH-RISK activities. You can lose ALL of your invested funds. Only use funds you can afford to lose completely.
                      </p>
                    </div>

                    <h3>1. Protocol Risks</h3>
                    <ul>
                      <li>
                        <strong>Smart Contract Risk:</strong> The Protocol's smart contracts may contain bugs or vulnerabilities that could result in loss of funds.
                      </li>
                      <li>
                        <strong>Economic Risk:</strong> The Protocol's economic model may not perform as expected under various market conditions.
                      </li>
                      <li>
                        <strong>Integration Risk:</strong> The Protocol integrates with other protocols and blockchains which may introduce additional risks.
                      </li>
                    </ul>

                    <h3>2. Market Risks</h3>
                    <ul>
                      <li>
                        <strong>Volatility:</strong> Cryptocurrency markets are highly volatile and can experience extreme price movements.
                      </li>
                      <li>
                        <strong>Liquidity Risk:</strong> Market conditions may make it difficult or impossible to exit positions at desired prices.
                      </li>
                      <li>
                        <strong>Impermanent Loss:</strong> Providing liquidity can result in losses due to price movements of paired assets.
                      </li>
                    </ul>

                    <h3>3. Technical Risks</h3>
                    <ul>
                      <li>
                        <strong>Network Risk:</strong> Blockchain networks may experience congestion, delays, or outages.
                      </li>
                      <li>
                        <strong>Oracle Risk:</strong> Price feeds and other external data sources may fail or provide incorrect information.
                      </li>
                      <li>
                        <strong>Wallet Risk:</strong> Loss of private keys or wallet compromise can result in complete loss of funds.
                      </li>
                    </ul>

                    <h3>4. Regulatory Risks</h3>
                    <ul>
                      <li>
                        <strong>Legal Risk:</strong> Changes in laws or regulations may impact the Protocol's operations or your ability to use it.
                      </li>
                      <li>
                        <strong>Compliance Risk:</strong> You are responsible for ensuring your use of the Protocol complies with applicable laws.
                      </li>
                    </ul>

                    <h3>5. Risk Mitigation</h3>
                    <p>
                      While the Protocol implements various risk management features, these are experimental and may not prevent losses. Users should:
                    </p>
                    <ul>
                      <li>Never invest more than they can afford to lose</li>
                      <li>Thoroughly research and understand the risks before participating</li>
                      <li>Diversify their investments</li>
                      <li>Monitor their positions regularly</li>
                      <li>Have an exit strategy</li>
                    </ul>

                    <div className="mt-8 p-6 bg-primary/10 border border-primary/20 rounded-lg">
                      <h3 className="text-primary mb-4">Acknowledgment</h3>
                      <p className="text-sm">
                        By using AutoYield, you acknowledge that you have read, understood, and accept all the risks outlined above. You agree that you are using the Protocol at your own risk and that AutoYield and its team bear no responsibility for any losses you may incur.
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