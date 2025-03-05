import { motion } from "framer-motion";
import Team from "@/components/sections/team";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">About AutoYield</h1>
          <p className="text-lg text-muted-foreground">
            Building the future of automated DeFi on Solana
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                <h2>Our Mission</h2>
                <p>
                  At AutoYield, we're on a mission to democratize access to sophisticated DeFi
                  trading strategies through artificial intelligence. By leveraging the power
                  of Solana's high-performance blockchain, we're building a platform that makes
                  professional-grade liquidity provisioning accessible to everyone.
                </p>

                <h2>Our Vision</h2>
                <p>
                  We envision a future where DeFi participants of all sizes can benefit from
                  advanced trading algorithms and automated portfolio management. Our platform
                  combines cutting-edge AI technology with the speed and efficiency of Solana
                  to create a new standard in DeFi liquidity provisioning.
                </p>

                <h2>Our Values</h2>
                <ul>
                  <li>
                    <strong>Innovation:</strong> Pushing the boundaries of what's possible in DeFi
                  </li>
                  <li>
                    <strong>Security:</strong> Maintaining the highest standards of asset protection
                  </li>
                  <li>
                    <strong>Transparency:</strong> Operating with complete openness and clarity
                  </li>
                  <li>
                    <strong>Community:</strong> Building and growing together with our users
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <Team />
      </div>
    </div>
  );
}
