import { motion } from "framer-motion";
import Team from "@/components/sections/team";
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Heart, Lock, Users } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">Our Story</h1>
          <p className="text-lg text-muted-foreground">
            From DeFi enthusiasts to builders - here's why we created AutoYield
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card>
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                <h2>The Problem We're Solving</h2>
                <p>
                  Like many of you, we started our DeFi journey providing liquidity on various platforms. The potential returns were exciting, but the reality was different - constant monitoring, complex calculations, and the nagging worry about impermanent loss. We knew there had to be a better way.
                </p>

                <h2>Our Solution</h2>
                <p>
                  That's why we built AutoYield - to make liquidity provision accessible to everyone, not just full-time crypto traders. We combined our experience in DeFi with cutting-edge AI to create a platform that handles the complexities for you.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="p-4 bg-card rounded-lg border">
                    <div className="flex items-center gap-2 mb-2">
                      <Rocket className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold m-0">Our Mission</h3>
                    </div>
                    <p className="text-sm text-muted-foreground m-0">
                      To democratize DeFi by making sophisticated liquidity management accessible to everyone, regardless of their technical expertise.
                    </p>
                  </div>

                  <div className="p-4 bg-card rounded-lg border">
                    <div className="flex items-center gap-2 mb-2">
                      <Heart className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold m-0">Our Values</h3>
                    </div>
                    <p className="text-sm text-muted-foreground m-0">
                      We believe in transparency, user empowerment, and building tools that genuinely make DeFi better for everyone.
                    </p>
                  </div>
                </div>

                <h2>Why We Chose Solana</h2>
                <p>
                  After exploring various blockchains, we chose Solana for its perfect blend of speed, cost-effectiveness, and growing DeFi ecosystem. Its near-instant transactions and minimal fees mean our AI can optimize your positions more efficiently than ever possible before.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
                  <div className="p-4 bg-card rounded-lg border">
                    <div className="flex items-center gap-2 mb-2">
                      <Lock className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold m-0">Security First</h3>
                    </div>
                    <p className="text-sm text-muted-foreground m-0">
                      We take your trust seriously. Every line of code is audited, and we maintain strict security protocols to protect your assets.
                    </p>
                  </div>

                  <div className="p-4 bg-card rounded-lg border">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-primary" />
                      <h3 className="text-lg font-semibold m-0">Community Driven</h3>
                    </div>
                    <p className="text-sm text-muted-foreground m-0">
                      Your feedback shapes our platform. We're building AutoYield with and for our community.
                    </p>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-primary/10 rounded-lg border border-primary/20">
                  <h3 className="text-lg font-semibold mb-2">Join Us in Beta</h3>
                  <p className="m-0">
                    We're currently in Beta, working closely with our early users to refine and improve the platform. While we're proud of what we've built, we're just getting started. Your feedback and suggestions help us make AutoYield even better.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <Team />
      </div>
    </div>
  );
}