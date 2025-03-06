import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MousePointer, Brain, TrendingUp, Shield, Clock } from "lucide-react";

const benefits = [
  {
    title: "Complex LP Management in Just 3 Clicks",
    description: "What normally requires constant monitoring, complex calculations, and DeFi expertise is simplified to a 3-click process. Deploy sophisticated strategies without the technical overhead.",
    icon: MousePointer
  },
  {
    title: "Advanced Risk Mitigation Algorithms",
    description: "Our proprietary position management algorithms predict and protect against impermanent loss vectors before they impact your capital using advanced volatility modeling.",
    icon: Shield
  },
  {
    title: "Capital Efficiency Optimization",
    description: "Dynamic position rebalancing maximizes your capital utilization by 50-100x compared to traditional AMMs, capturing optimal fee generation with minimal slippage.",
    icon: TrendingUp
  },
  {
    title: "AI-Powered Strategy Execution",
    description: "Machine learning algorithms analyze on-chain data for real-time position optimization, automatically executing complex strategies that would require 24/7 manual oversight.",
    icon: Brain
  },
  {
    title: "24/7 Automation",
    description: "Continuous monitoring and automated position management ensures your liquidity is always working optimally, even while you sleep or during volatile market conditions.",
    icon: Clock
  }
];

export default function Benefits() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-4">Why Choose AutoYield?</h2>
          <p className="text-lg text-muted-foreground">
            We're making DeFi liquidity provision simple, secure, and profitable for everyone. Here's how:
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <benefit.icon className="h-6 w-6 text-primary flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                      <p className="text-muted-foreground">{benefit.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}