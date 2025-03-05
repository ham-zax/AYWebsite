import { useRoute } from "wouter";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { format } from "date-fns";
import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { Helmet } from "react-helmet";
import { BLOG_POSTS } from "@/lib/constants";

export default function BlogPost() {
  const [, params] = useRoute("/blog/:slug");
  const post = BLOG_POSTS.find(p => p.slug === params?.slug);

  if (!post) {
    return (
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Post not found</h1>
            <Link href="/blog">
              <div className="text-primary hover:text-primary/80 cursor-pointer inline-flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </div>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <Helmet>
        <title>{post.title} - AutoYield Blog</title>
        <meta name="description" content={post.excerpt} />
        <meta property="og:title" content={`${post.title} - AutoYield Blog`} />
        <meta property="og:description" content={post.excerpt} />
        <meta name="twitter:title" content={`${post.title} - AutoYield Blog`} />
        <meta name="twitter:description" content={post.excerpt} />
      </Helmet>

      <div className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog">
              <div className="text-primary hover:text-primary/80 cursor-pointer inline-flex items-center mb-8">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Blog
              </div>
            </Link>

            <Card>
              <CardContent className="pt-6">
                <div className="prose prose-invert max-w-none">
                  <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
                  <div className="flex items-center justify-between text-sm text-muted-foreground mb-8">
                    <div>
                      {format(new Date(post.date), 'MMMM d, yyyy')} • {post.readTime}
                    </div>
                    <div>
                      By {post.author}
                    </div>
                  </div>
                  
                  <div dangerouslySetInnerHTML={{ __html: post.content || post.excerpt }} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </>
  );
}
