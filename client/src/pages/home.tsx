import Hero from "@/components/sections/hero";
import Benefits from "@/components/sections/benefits";
import CTA from "@/components/sections/cta";
import WaitlistForm from "@/components/sections/waitlist-form";
import { defaultMeta } from "@/lib/metadata";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{defaultMeta.title}</title>
        <meta name="description" content={defaultMeta.description} />
        <meta name="keywords" content={defaultMeta.keywords} />
      </Helmet>
      
      <div className="pt-16">
        <Hero />
        <Benefits />
        <WaitlistForm />
        <CTA />
      </div>
    </>
  );
}
import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-5xl mx-auto space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold md:text-6xl">
            Next-Generation DeFi Automation
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Empowering traders with AI-powered strategies on Solana
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Join the Waitlist</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
                <button className="bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 rounded-md">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
