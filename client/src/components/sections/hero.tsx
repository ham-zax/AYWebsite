import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Coins, Bot, LineChart, Clock, ArrowDown } from "lucide-react";

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
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <Bot className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Smart Automated LP Management</span>
            </div>
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Let Your Crypto Work Harder Without the Hassle
          </motion.h1>

          <motion.p 
            className="text-xl text-muted-foreground mb-4 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Provide liquidity and earn while our smart system manages everything for you. No more constant monitoring or complex decisions.
          </motion.p>

          <motion.div
            className="text-2xl font-bold text-primary mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Earn <span className="underline decoration-wavy decoration-primary/50">20-500% APR</span> on Your Tokens
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600">
              Start Earning Now <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              View Performance Stats <LineChart className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border">
              <Clock className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Always Working</h3>
              <p className="text-sm text-muted-foreground text-center">
                24/7 monitoring and automatic adjustments for best returns
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border">
              <Shield className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Smart Protection</h3>
              <p className="text-sm text-muted-foreground text-center">
                Built-in safeguards against market risks and losses
              </p>
            </div>
            <div className="flex flex-col items-center p-6 rounded-lg bg-card border">
              <Coins className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-semibold mb-2">Better Returns</h3>
              <p className="text-sm text-muted-foreground text-center">
                Optimized positions to maximize your earning potential
              </p>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button variant="ghost" size="sm" className="text-muted-foreground" onClick={() => {
              const nextSection = document.getElementById('features');
              if (nextSection) {
                nextSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}>
              Learn More <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>

          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex items-center gap-8 text-sm text-muted-foreground"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-emerald-500 rounded-full" />
              <span>24/7 Monitoring</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full" />
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-cyan-500 rounded-full" />
              <span>Solana Speed</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}