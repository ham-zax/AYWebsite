import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { MousePointer, Brain, TrendingUp, Shield, Clock } from "lucide-react";

const benefits = [
  {
    title: "Complex LP Management in Just 3 Clicks",
    description: "We transform what traditionally requires hours of research, constant monitoring, and technical expertise into a simple 3-click process. Setup your position once and let our system handle everything else.",
    icon: MousePointer
  },
  {
    title: "Advanced Risk Mitigation Algorithms",
    description: "Our system detects potential impermanent loss before it happens. Using volatility prediction models, we automatically adjust your positions to protect your capital when market conditions change.",
    icon: Shield
  },
  {
    title: "Capital Efficiency Optimization",
    description: "Achieve 50-100x higher capital efficiency compared to traditional AMMs. Our concentrated liquidity positions precisely target the most active price ranges to maximize your trading fee revenue.",
    icon: TrendingUp
  },
  {
    title: "AI-Powered Strategy Execution",
    description: "Our algorithms continuously analyze on-chain data to identify optimal position parameters. These strategies would typically require 24/7 manual oversight, but are executed automatically for you.",
    icon: Brain
  },
  {
    title: "24/7 Automation",
    description: "Your positions are constantly monitored and adjusted even while you sleep. During high volatility periods, when manual intervention would be most critical (and stressful), our system works hardest.",
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