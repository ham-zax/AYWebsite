import { motion } from "framer-motion";
import { ArrowRight, Coins, TrendingUp, BarChart3, RefreshCcw } from "lucide-react";

export default function LiquidityFlowchart() {
  const steps = [
    {
      icon: Coins,
      title: "Deposit Tokens",
      description: "Provide equal value of two tokens (e.g., SOL + USDC)",
      color: "bg-emerald-500/20 text-emerald-500 border-emerald-500/30"
    },
    {
      icon: TrendingUp,
      title: "Pool Adds Liquidity",
      description: "Your tokens join the trading pool, enabling others to trade",
      color: "bg-blue-500/20 text-blue-500 border-blue-500/30"
    },
    {
      icon: BarChart3,
      title: "Trading Occurs",
      description: "Traders pay fees to swap between the tokens in your pool",
      color: "bg-violet-500/20 text-violet-500 border-violet-500/30"
    },
    {
      icon: Coins,
      title: "Earn Fee Share",
      description: "You earn a portion of trading fees based on your pool share",
      color: "bg-amber-500/20 text-amber-500 border-amber-500/30"
    },
    {
      icon: RefreshCcw,
      title: "AutoYield Optimizes",
      description: "Our AI rebalances positions to maximize your returns",
      color: "bg-primary/20 text-primary border-primary/30"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="py-8">
      <motion.div 
        className="max-w-4xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <h3 className="text-2xl font-bold text-center mb-8">How Liquidity Provision Works</h3>
        
        <div className="relative">
          {/* Connection Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-violet-500 to-primary -z-10 hidden md:block" />
          
          <motion.div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={index}
                className="flex flex-col md:flex-row items-center gap-4"
                variants={itemVariants}
              >
                <div className={`flex items-center justify-center w-16 h-16 rounded-full ${step.color} border`}>
                  <step.icon className="w-8 h-8" />
                </div>
                
                <div className="relative flex-1">
                  {/* Arrow for desktop */}
                  {index < steps.length - 1 && (
                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block">
                      <ArrowRight className="w-6 h-6 text-muted-foreground rotate-90" />
                    </div>
                  )}
                  
                  <div className="bg-card border rounded-lg p-4 md:p-6 text-center md:text-left">
                    <h4 className="text-lg font-semibold mb-1">{step.title}</h4>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
