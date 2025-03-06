import { motion } from "framer-motion";
import { Building, LineChart, Clock, Coins, BadgePercent, Building2 } from "lucide-react";

export default function YieldComparison() {
  const tradFiYields = [
    { name: "Savings Account", value: "0.5%", icon: Building },
    { name: "Certificate of Deposit", value: "2-4%", icon: Building2 },
    { name: "Stock Market (Avg)", value: "7-10%", icon: LineChart }
  ];

  const defiYields = [
    { name: "Basic LP", value: "20-50%", icon: Coins },
    { name: "Optimized LP", value: "50-200%", icon: BadgePercent },
    { name: "AI-Managed LP", value: "100-500%", icon: Clock }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <h3 className="text-2xl font-bold text-center mb-6">Traditional Finance vs. DeFi Yields</h3>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          DeFi offers significantly higher potential returns than traditional finance options, though with different risk profiles.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Traditional Finance */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-card border rounded-lg p-6">
              <h4 className="text-xl font-bold mb-6 text-center">Traditional Finance</h4>

              <div className="space-y-4">
                {tradFiYields.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                    variants={itemVariants}
                  >
                    <div className="bg-blue-500/20 text-blue-500 p-3 rounded-full">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                    </div>
                    <div className="text-lg font-bold text-blue-500">{item.value}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Average Annual Returns</span>
                  <span className="text-xl font-bold text-blue-500">~5%</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* DeFi */}
          <motion.div
            className="space-y-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-card border rounded-lg p-6">
              <h4 className="text-xl font-bold mb-6 text-center">DeFi on Solana</h4>

              <div className="space-y-4">
                {defiYields.map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center gap-4 p-4 rounded-lg bg-muted/50"
                    variants={itemVariants}
                  >
                    <div className="bg-primary/20 text-primary p-3 rounded-full">
                      <item.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{item.name}</p>
                    </div>
                    <div className="text-lg font-bold text-primary">{item.value}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Potential Annual Returns</span>
                  <span className="text-xl font-bold text-primary">20-500%</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 p-4 bg-card border rounded-lg">
          <p className="text-sm text-muted-foreground">
            <strong>Note:</strong> Higher returns come with increased risk. DeFi yields can fluctuate dramatically based on market conditions, 
            trading volumes, and token volatility. AutoYield's AI helps manage these risks, but always remember that past performance 
            is not indicative of future results.
          </p>
        </div>
      </motion.div>
    </div>
  );
}