import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { format } from "date-fns";
import { Link } from "wouter";

// This will be populated from the filesystem
const BLOG_POSTS = [
  {
    slug: "welcome-to-autoyield",
    title: "Welcome to AutoYield: The Future of LP Management",
    excerpt: "Learn how AutoYield is revolutionizing liquidity provision with AI-powered automation.",
    date: "2024-03-05",
    author: "Alex Chen",
    readTime: "5 min read"
  },
  {
    slug: "understanding-lp-basics",
    title: "LP Basics: A Guide for Beginners",
    excerpt: "Everything you need to know about liquidity provision, explained in simple terms.",
    date: "2024-03-04",
    author: "Sarah Kim",
    readTime: "8 min read"
  }
];

export default function Blog() {
  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold mb-4">AutoYield Blog</h1>
          <p className="text-lg text-muted-foreground">
            Insights, updates, and guides from the AutoYield team
          </p>
        </motion.div>

        <motion.div 
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid gap-6">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`}>
                <Card className="cursor-pointer transition-colors hover:bg-accent">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className="text-sm text-muted-foreground">
                        {format(new Date(post.date), 'MMMM d, yyyy')} • {post.readTime}
                      </div>
                      <div className="text-sm text-primary">
                        By {post.author}
                      </div>
                    </div>
                    <CardTitle className="text-2xl">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      {post.excerpt}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
