import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "What exactly is liquidity provision?",
    answer: "Liquidity provision means adding your tokens to decentralized exchange pools, enabling others to trade. As a liquidity provider, you earn fees from these trades. AutoYield automates this process, managing your positions to maximize returns while minimizing risks."
  },
  {
    question: "How does AutoYield make LP management easier?",
    answer: "We handle all the complex parts of LP management - monitoring pool health, rebalancing positions, and optimizing for best returns. You simply deposit your tokens, and our system takes care of everything else. No more constant monitoring or manual adjustments needed."
  },
  {
    question: "Is my investment safe with AutoYield?",
    answer: "Security is our top priority. We use battle-tested smart contracts, real-time monitoring, and multiple security layers. Our system also helps protect against impermanent loss by automatically adjusting positions based on market conditions."
  },
  {
    question: "What returns can I expect?",
    answer: "Returns vary based on market conditions and trading activity in your chosen pools. You'll earn a share of trading fees from each transaction that uses your provided liquidity. Our system helps optimize these returns by positioning your assets in the most active pools."
  },
  {
    question: "How much technical knowledge do I need?",
    answer: "Very little! We've designed AutoYield to be accessible to everyone. If you can connect a wallet and approve transactions, you can use our platform. We handle all the technical complexity behind the scenes."
  },
  {
    question: "How does the AI optimize my positions?",
    answer: "Our AI continuously analyzes market data, trading volumes, and price movements to identify the most profitable opportunities. It automatically adjusts your positions to maximize yields while managing risks like impermanent loss."
  }
];

export default function FAQ() {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex justify-center mb-4">
            <HelpCircle className="h-8 w-8 text-primary" />
          </div>
          <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about automated liquidity provision with AutoYield
          </p>
        </motion.div>

        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardContent className="p-6">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}