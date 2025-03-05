import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Coins, Bot } from "lucide-react";

export default function Hero() {
  return (
    <div className="relative min-h-[calc(100vh-4rem)] flex items-center">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#9333ea,#06b6d4)]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239333ea' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }} />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Put Your Crypto to Work with Smart Liquidity Management
          </motion.h1>

          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Tired of constantly monitoring your LP positions? We get it. Let our AI handle the complex stuff while you earn 20-500% APR from providing liquidity. It's like having a crypto expert working for you 24/7.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
              Start Providing Liquidity <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              How It Works
            </Button>
          </motion.div>

          <motion.div 
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col items-center">
              <Shield className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-lg font-semibold">Smart Protection</h3>
              <p className="text-sm text-muted-foreground">We watch your positions so you don't have to</p>
            </div>
            <div className="flex flex-col items-center">
              <Coins className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-lg font-semibold">Optimized Returns</h3>
              <p className="text-sm text-muted-foreground">Let your idle tokens earn their keep</p>
            </div>
            <div className="flex flex-col items-center">
              <Bot className="h-8 w-8 text-primary mb-2" />
              <h3 className="text-lg font-semibold">Peace of Mind</h3>
              <p className="text-sm text-muted-foreground">Set it and actually forget it</p>
            </div>
          </motion.div>

          <motion.p
            className="mt-12 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            Currently in Beta. DeFi involves risks - please do your own research and invest responsibly.
          </motion.p>
        </div>
      </div>
    </div>
  );
}