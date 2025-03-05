import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Bot, Zap, LineChart, Shield, Coins, Clock } from "lucide-react";

const features = [
  {
    title: "AI-Powered Trading",
    description: "Advanced algorithms analyze market data to optimize your LP positions in real-time",
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
    <section className="py-24 bg-background" id="features">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            How AutoYield Works
          </motion.h2>
          <motion.p 
            className="text-lg text-muted-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Our platform combines advanced technology with simplicity to help you earn more from your crypto
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="h-full"
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
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
    </section>
  );
}
