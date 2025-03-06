import { motion } from "framer-motion";
import { Building, LineChart, Clock, Coins, BadgePercent, Building2, AlertTriangle } from "lucide-react";

export default function YieldComparison() {
  const tradFiYields = [
    { name: "Savings Account", value: "0.5-1%", icon: Building },
    { name: "Certificate of Deposit", value: "2-4%", icon: Building2 },
    { name: "Stock Market (Avg)", value: "7-10%", icon: LineChart }
  ];

  const defiYields = [
    { name: "Basic LP", value: "5-20%", icon: Coins, note: "Higher volume pools" },
    { name: "Optimized LP", value: "15-50%", icon: BadgePercent, note: "With active management" },
    { name: "AI-Managed LP", value: "20-500%*", icon: Clock, note: "Optimal conditions" }
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
          DeFi potentially offers higher returns than traditional finance options, though with different risk profiles.
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
            <div className="bg-card border rounded-lg p-6 shadow-md">
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
                  <span className="text-sm text-muted-foreground">Typical Annual Returns</span>
                  <span className="text-xl font-bold text-blue-500">~5%</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Lower risk, established regulations, and more predictable outcomes
                </p>
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
            <div className="bg-card border rounded-lg p-6 shadow-md">
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
                      {item.note && (
                        <p className="text-xs text-muted-foreground">{item.note}</p>
                      )}
                    </div>
                    <div className="text-lg font-bold text-primary">{item.value}</div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-border">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Potential Annual Returns</span>
                  <span className="text-xl font-bold text-primary">5-500%*</span>
                </div>
                <p className="text-xs text-muted-foreground mt-2">
                  Higher risk, more volatile conditions, and potential for impermanent loss
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mt-8 p-4 bg-card border rounded-lg">
          <div className="flex items-start gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-muted-foreground">
              <p className="font-medium text-amber-500 mb-2">Important Disclaimers:</p>
              <ul className="list-disc ml-4 space-y-2">
                <li>
                  <strong>Not Financial Advice:</strong> The yields shown are illustrative and based on historical data. They are not guarantees of future performance.
                </li>
                <li>
                  <strong>Risk Correlation:</strong> Higher yields typically come with significantly higher risks. DeFi yields can fluctuate dramatically based on market conditions, trading volumes, and token volatility.
                </li>
                <li>
                  <strong>Exceptional Cases:</strong> While returns exceeding 100% APR are possible in certain scenarios, they are rare, temporary, and often come with substantial risks or represent early-stage protocols with unsustainable tokenomics.
                </li>
                <li>
                  <strong>*High-End Returns:</strong> The upper range represents exceptional performance under ideal market conditions, which are not typical or guaranteed.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}