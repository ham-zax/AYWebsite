import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface Concept {
  id: string;
  name: string;
  category: string;
  connections: string[];
}

const concepts: Concept[] = [
  { 
    id: "amm", 
    name: "Automated Market Maker", 
    category: "DeFi Basics",
    connections: ["lp", "dex", "impLoss"]
  },
  { 
    id: "lp", 
    name: "Liquidity Pool", 
    category: "Basic LP",
    connections: ["amm", "impLoss", "yield"]
  },
  { 
    id: "dex", 
    name: "Decentralized Exchange", 
    category: "DeFi Basics",
    connections: ["amm", "token"]
  },
  { 
    id: "impLoss", 
    name: "Impermanent Loss", 
    category: "Intermediate LP",
    connections: ["lp", "clp"]
  },
  { 
    id: "token", 
    name: "Token Pair", 
    category: "Basic LP",
    connections: ["dex", "lp"]
  },
  { 
    id: "yield", 
    name: "Yield Farming", 
    category: "DeFi Basics",
    connections: ["lp", "apr"]
  },
  { 
    id: "apr", 
    name: "APR", 
    category: "Basic LP",
    connections: ["yield", "apy"]
  },
  { 
    id: "apy", 
    name: "APY", 
    category: "Basic LP",
    connections: ["apr"]
  },
  { 
    id: "clp", 
    name: "Concentrated Liquidity", 
    category: "Meteora",
    connections: ["lp", "impLoss", "dlmm"]
  },
  { 
    id: "dlmm", 
    name: "DLMM", 
    category: "Meteora",
    connections: ["clp"]
  }
];

export default function ConceptsNetwork() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  // Function to get color based on category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case "DeFi Basics":
        return { bg: "bg-cyan-500/20", text: "text-cyan-500", border: "border-cyan-500/30" };
      case "Basic LP":
        return { bg: "bg-emerald-500/20", text: "text-emerald-500", border: "border-emerald-500/30" };
      case "Intermediate LP":
        return { bg: "bg-blue-500/20", text: "text-blue-500", border: "border-blue-500/30" };
      case "Meteora":
        return { bg: "bg-purple-500/20", text: "text-purple-500", border: "border-purple-500/30" };
      default:
        return { bg: "bg-amber-500/20", text: "text-amber-500", border: "border-amber-500/30" };
    }
  };
  
  // Draw connections between concepts
  useEffect(() => {
    if (!canvasRef.current) return;
    
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas dimensions
    const updateCanvasDimensions = () => {
      if (!canvas.parentElement) return;
      
      canvas.width = canvas.parentElement.offsetWidth;
      canvas.height = canvas.parentElement.offsetHeight;
      
      drawConnections();
    };
    
    // Function to draw connections
    const drawConnections = () => {
      if (!ctx) return;
      
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw connections
      concepts.forEach(concept => {
        const sourceElement = document.getElementById(`concept-${concept.id}`);
        if (!sourceElement) return;
        
        const sourceRect = sourceElement.getBoundingClientRect();
        const canvasRect = canvas.getBoundingClientRect();
        
        // Calculate source position relative to canvas
        const sourceX = sourceRect.left + sourceRect.width/2 - canvasRect.left;
        const sourceY = sourceRect.top + sourceRect.height/2 - canvasRect.top;
        
        // Draw connections to connected concepts
        concept.connections.forEach(targetId => {
          const targetElement = document.getElementById(`concept-${targetId}`);
          if (!targetElement) return;
          
          const targetRect = targetElement.getBoundingClientRect();
          
          // Calculate target position relative to canvas
          const targetX = targetRect.left + targetRect.width/2 - canvasRect.left;
          const targetY = targetRect.top + targetRect.height/2 - canvasRect.top;
          
          // Draw connection
          ctx.beginPath();
          ctx.moveTo(sourceX, sourceY);
          ctx.lineTo(targetX, targetY);
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.1)';
          ctx.lineWidth = 2;
          ctx.stroke();
        });
      });
    };
    
    // Initial draw
    updateCanvasDimensions();
    
    // Redraw on resize
    window.addEventListener('resize', updateCanvasDimensions);
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', updateCanvasDimensions);
    };
  }, []);
  
  return (
    <motion.div 
      className="relative w-full h-[500px] mb-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <canvas 
        ref={canvasRef} 
        className="absolute inset-0 w-full h-full z-0"
      />
      
      <div className="relative z-10 w-full h-full">
        {concepts.map((concept, index) => {
          const colors = getCategoryColor(concept.category);
          const position = {
            left: `${30 + Math.sin(index * 1.2) * 35}%`,
            top: `${20 + Math.cos(index * 1.5) * 30}%`,
          };
          
          return (
            <motion.div
              key={concept.id}
              id={`concept-${concept.id}`}
              className={`absolute ${colors.bg} ${colors.text} border ${colors.border} rounded-lg py-2 px-3 shadow-lg`}
              style={position}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.1, zIndex: 20 }}
            >
              <div className="text-sm font-medium whitespace-nowrap">{concept.name}</div>
            </motion.div>
          );
        })}
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4 p-4">
        {["DeFi Basics", "Basic LP", "Intermediate LP", "Meteora"].map(category => {
          const colors = getCategoryColor(category);
          return (
            <div key={category} className="flex items-center gap-2">
              <div className={`w-3 h-3 rounded-full ${colors.bg} border ${colors.border}`} />
              <span className="text-xs text-muted-foreground">{category}</span>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
