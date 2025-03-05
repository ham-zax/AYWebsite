import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bot, Zap, LineChart, Shield, Coins, Clock } from "lucide-react";

const features = [
  {
    title: "AI-Powered Trading",
    description: "Advanced machine learning algorithms optimize trading strategies in real-time",
    icon: Bot
  },
  {
    title: "Lightning Fast Execution",
    description: "Leverage Solana's high-speed network for instant trade execution",
    icon: Zap
  },
  {
    title: "Advanced Analytics",
    description: "Deep insights into your portfolio performance and market trends",
    icon: LineChart
  },
  {
    title: "Enterprise Security",
    description: "Multi-layer security protocols to protect your assets",
    icon: Shield
  },
  {
    title: "Competitive Yields",
    description: "Maximize returns through optimized liquidity provisioning",
    icon: Coins
  },
  {
    title: "24/7 Automation",
    description: "Continuous monitoring and automated position management",
    icon: Clock
  }
];

export default function Features() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Platform Features
          </motion.h1>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Discover how AutoYield leverages cutting-edge technology to optimize your DeFi returns
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <feature.icon className="h-10 w-10 text-primary mb-4" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
