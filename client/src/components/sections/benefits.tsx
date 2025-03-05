import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Brain, Clock, TrendingUp, Shield, Zap } from "lucide-react";

const benefits = [
  {
    title: "No More Manual Management",
    description: "Forget about constantly monitoring pools and adjusting positions. Our AI handles everything while you focus on what matters to you.",
    icon: Clock
  },
  {
    title: "Smart Risk Management",
    description: "Sleep better knowing our AI actively protects your positions from market volatility and impermanent loss.",
    icon: Shield
  },
  {
    title: "Better Returns, Less Stress",
    description: "Our platform identifies the most profitable opportunities and automatically rebalances your positions for optimal yields.",
    icon: TrendingUp
  },
  {
    title: "Simple Yet Powerful",
    description: "Whether you're new to DeFi or a seasoned LP provider, we've made liquidity management as easy as a few clicks.",
    icon: Zap
  },
  {
    title: "AI-Powered Insights",
    description: "Get real-time analytics and predictions about your LP positions, helping you make informed decisions.",
    icon: Brain
  },
  {
    title: "Battle-Tested Security",
    description: "Built on Solana with multiple security layers and real-time monitoring to keep your assets safe.",
    icon: Shield
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