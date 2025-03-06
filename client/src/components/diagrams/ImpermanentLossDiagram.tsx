import { useState } from "react";
import { motion } from "framer-motion";
import { Slider } from "@/components/ui/slider";
import { Card, CardContent } from "@/components/ui/card";
import { InfoIcon } from "lucide-react";

export default function ImpermanentLossDiagram() {
  const [priceChange, setPriceChange] = useState<number>(0); // -100 to 100 representing % change
  
  // Calculate impermanent loss based on price ratio change
  const calculateImpermanentLoss = (priceRatio: number) => {
    // Common formula for impermanent loss: 2*sqrt(priceRatio)/(1+priceRatio) - 1
    const r = priceRatio;
    return (2 * Math.sqrt(r) / (1 + r)) - 1;
  };
  
  // Convert slider value to price ratio
  const priceRatio = Math.pow(2, priceChange / 100 * 3); // Exaggerate effect for visualization
  
  // Calculate impermanent loss percentage
  const impLossPercent = calculateImpermanentLoss(priceRatio) * 100;
  
  // Calculate token amounts after price change
  // When token B price increases relative to A, you end up with more A and less B
  const tokenARatio = Math.sqrt(1/priceRatio);
  const tokenBRatio = Math.sqrt(priceRatio);
  
  // Initial portfolio value set to 100 for simplicity
  const initialValue = 100;
  
  // Calculate portfolio values
  const lpValue = initialValue * (1 + impLossPercent/100);
  const holdValue = initialValue * (1 + priceChange/200); // Simplification - assume 50/50 holding
  
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
          Impermanent loss occurs when the price of your tokens changes after you deposit them in a liquidity pool. 
          Move the slider to see how token price changes affect your liquidity position.
        </p>
        
        <Card className="mb-8">
          <CardContent className="pt-6">
            <div className="space-y-8">
              <div>
                <label className="text-sm font-medium mb-2 block">
                  Token price change: {priceChange > 0 ? '+' : ''}{priceChange}%
                </label>
                <Slider 
                  value={[priceChange]} 
                  onValueChange={(values) => setPriceChange(values[0])}
                  min={-100}
                  max={100}
                  step={5}
                  className="mb-2"
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>-100% (Token A up)</span>
                  <span>No change</span>
                  <span>+100% (Token B up)</span>
                </div>
              </div>
              
              {/* Visual comparison */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-medium mb-4 flex items-center">
                    Initial Position
                    <span className="ml-2 text-muted-foreground">(50/50 Split)</span>
                  </h4>
                  
                  <div className="flex gap-4 items-center">
                    <div className="bg-primary/20 w-full h-20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="font-medium">Token A</div>
                        <div>50%</div>
                      </div>
                    </div>
                    <div className="bg-indigo-500/20 w-full h-20 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <div className="font-medium">Token B</div>
                        <div>50%</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-medium mb-4">Current Position</h4>
                  
                  <div className="flex gap-4 items-center">
                    <div 
                      className="bg-primary/20 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{ 
                        width: `${tokenARatio * 50}%`,
                        height: '5rem'
                      }}
                    >
                      <div className="text-center">
                        <div className="font-medium">Token A</div>
                        <div>{(tokenARatio * 50).toFixed(1)}%</div>
                      </div>
                    </div>
                    <div 
                      className="bg-indigo-500/20 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{ 
                        width: `${tokenBRatio * 50}%`,
                        height: '5rem'
                      }}
                    >
                      <div className="text-center">
                        <div className="font-medium">Token B</div>
                        <div>{(tokenBRatio * 50).toFixed(1)}%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Value comparison */}
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
                  </div>
                  
                  <div className="p-4 bg-card border rounded-lg">
                    <h5 className="font-medium flex items-center mb-2">
                      HODL Value
                      {holdValue > lpValue && (
                        <span className="ml-2 text-sm px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500">
                          Better by ${(holdValue - lpValue).toFixed(2)}
                        </span>
                      )}
                    </h5>
                    <div className="text-2xl font-bold">${holdValue.toFixed(2)}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 p-4 bg-amber-500/10 border border-amber-500/20 rounded-lg flex gap-4">
              <InfoIcon className="h-5 w-5 text-amber-500 flex-shrink-0 mt-0.5" />
              <div>
                <h5 className="font-medium text-amber-500">Why "Impermanent" Loss?</h5>
                <p className="text-sm text-muted-foreground">
                  The loss is only realized if you withdraw during a price imbalance. If token prices return to their original ratio, the impermanent loss disappears. Trading fees often offset or exceed these losses over time.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
