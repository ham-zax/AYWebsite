import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import LiquidityFlowchart from "./LiquidityFlowchart";
import ImpermanentLossDiagram from "./ImpermanentLossDiagram";
import YieldComparison from "./YieldComparison";

export default function DiagramsHub() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      <Tabs defaultValue="liquidity" className="w-full">
        <TabsList className="grid grid-cols-3 mb-8">
          <TabsTrigger value="liquidity">LP Process</TabsTrigger>
          <TabsTrigger value="impermanent">Impermanent Loss</TabsTrigger>
          <TabsTrigger value="yields">Yield Comparison</TabsTrigger>
        </TabsList>
        
        <TabsContent value="liquidity" className="mt-0">
          <LiquidityFlowchart />
        </TabsContent>
        
        <TabsContent value="impermanent" className="mt-0">
          <ImpermanentLossDiagram />
        </TabsContent>
        
        <TabsContent value="yields" className="mt-0">
          <YieldComparison />
        </TabsContent>
      </Tabs>
    </div>
  );
}

// Export individual components for direct use
export { LiquidityFlowchart, ImpermanentLossDiagram, YieldComparison };
