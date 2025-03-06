import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { InfoIcon, AlertTriangle } from "lucide-react";

export default function ImpermanentLossDiagram() {
  const [priceChange, setPriceChange] = useState<number>(0); // -100 to 100 representing % change

  // Calculate impermanent loss based on price ratio change
  // Formula: 2*sqrt(priceRatio)/(1+priceRatio) - 1
  const calculateImpermanentLoss = (priceRatio: number) => {
    return (2 * Math.sqrt(priceRatio) / (1 + priceRatio)) - 1;
  };

  // Convert slider value to price ratio (relative price change)
  // When price change is 100%, price ratio is 2 (doubled)
  // When price change is -50%, price ratio is 0.5 (halved)
  const getPriceRatio = (percentChange: number) => {
    return 1 + (percentChange / 100);
  };

  const priceRatio = getPriceRatio(priceChange);

  // Calculate impermanent loss percentage
  const impLossPercent = calculateImpermanentLoss(priceRatio) * 100;

  // For visualization: When token B price changes relative to A,
  // you end up with more A and less B (or vice versa)
  const tokenARatio = Math.sqrt(1/priceRatio);
  const tokenBRatio = Math.sqrt(priceRatio);

  // Initial portfolio value set to 100 for simplicity
  const initialValue = 100;

  // Calculate portfolio values
  const lpValue = initialValue * (1 + impLossPercent/100);
  const holdValue = initialValue * (0.5 + 0.5 * priceRatio); // 50/50 holding, correct calculation

  // Function to get appropriate color based on value
  const getValueColor = (value: number) => {
    return value < 0 ? "text-red-500" : "text-emerald-500";
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
        <h3 className="text-2xl font-bold text-center mb-6">Understanding Impermanent Loss</h3>
        <p className="text-center text-muted-foreground mb-8 max-w-2xl mx-auto">
          Impermanent loss occurs when the price of tokens in your liquidity pool changes compared to when you deposited them. 
          Use the slider to see how price changes affect your position.
        </p>

        <Card className="mb-8 shadow-lg">
          <CardContent className="pt-6">
            <div className="space-y-8">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Token B price change: {priceChange > 0 ? '+' : ''}{priceChange}%
                </label>
                <Slider 
                  value={[priceChange]} 
                  onValueChange={(values) => setPriceChange(values[0])}
                  min={-90}
                  max={200}
                  step={10}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>-90% (Price drops)</span>
                  <span>No change</span>
                  <span>+200% (Price rises)</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-medium mb-2">Initial Position</h4>
                  <div className="bg-card border rounded-lg p-4">
                    <div className="flex gap-4 items-center mb-4">
                      <div className="bg-primary/20 w-full h-20 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-medium">Token A</div>
                          <div>50 tokens</div>
                          <div className="text-sm text-muted-foreground">($50)</div>
                        </div>
                      </div>
                      <div className="bg-indigo-500/20 w-full h-20 rounded-lg flex items-center justify-center">
                        <div className="text-center">
                          <div className="font-medium">Token B</div>
                          <div>50 tokens</div>
                          <div className="text-sm text-muted-foreground">($50)</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      Total value: $100
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-medium mb-2">Current Position</h4>
                  <div className="bg-card border rounded-lg p-4">
                    <div className="flex gap-4 items-center mb-4">
                      <div 
                        className="bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300"
                        style={{ 
                          width: `${tokenARatio * 50}%`,
                          height: '5rem'
                        }}
                      >
                        <div className="text-center text-sm">
                          <div className="font-medium">Token A</div>
                          <div>{(tokenARatio * 50).toFixed(1)} tokens</div>
                          <div className="text-xs text-muted-foreground">
                            (${(tokenARatio * 50).toFixed(2)})
                          </div>
                        </div>
                      </div>
                      <div 
                        className="bg-indigo-500/20 rounded-lg flex items-center justify-center transition-all duration-300"
                        style={{ 
                          width: `${tokenBRatio * 50}%`,
                          height: '5rem'
                        }}
                      >
                        <div className="text-center text-sm">
                          <div className="font-medium">Token B</div>
                          <div>{(tokenBRatio * 50).toFixed(1)} tokens</div>
                          <div className="text-xs text-muted-foreground">
                            (${(tokenBRatio * 50 * priceRatio).toFixed(2)})
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="text-center text-sm text-muted-foreground">
                      New Distribution Based on Price Change
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t">
                <h4 className="text-lg font-medium mb-4">Value Comparison</h4>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="p-4 bg-card border rounded-lg">
                    <h5 className="font-medium flex items-center mb-2">
                      LP Position Value
                      {impLossPercent < 0 && (
                        <span className="ml-2 text-sm px-2 py-0.5 rounded-full bg-red-500/10 text-red-500">
                          {impLossPercent.toFixed(2)}% loss
                        </span>
                      )}
                    </h5>
                    <div className="text-2xl font-bold">${lpValue.toFixed(2)}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Impermanent Loss: <span className={getValueColor(impLossPercent)}>{impLossPercent.toFixed(2)}%</span>
                    </div>
                  </div>

                  <div className="p-4 bg-card border rounded-lg">
                    <h5 className="font-medium flex items-center mb-2">
                      HODL Value (50/50 split)
                      {holdValue > lpValue && (
                        <span className="ml-2 text-sm px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500">
                          Better by ${(holdValue - lpValue).toFixed(2)}
                        </span>
                      )}
                    </h5>
                    <div className="text-2xl font-bold">${holdValue.toFixed(2)}</div>
                    <div className="text-sm text-muted-foreground mt-1">
                      Change: <span className={holdValue > 100 ? "text-emerald-500" : "text-red-500"}>
                        {((holdValue - 100)).toFixed(2)}%
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg flex gap-4">
              <InfoIcon className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-medium text-amber-500">Why "Impermanent" Loss?</h5>
                <p className="text-sm text-muted-foreground">
                  The loss is only realized if you withdraw during a price imbalance. If token prices return to their original ratio, the impermanent loss disappears. Trading fees collected often offset these losses over time.
                </p>
              </div>
            </div>

            <div className="mt-4 p-4 bg-card border rounded-lg">
              <div className="flex items-start gap-2">
                <AlertTriangle className="h-5 w-5 text-muted-foreground flex-shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  <strong>Disclaimer:</strong> This is a simplified educational visualization. Actual impermanent loss depends on many factors including pool fees, token volatility, and time in position. Always conduct thorough research before providing liquidity.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}