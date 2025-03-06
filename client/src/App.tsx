import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import Home from "@/pages/home";
import Features from "@/pages/features";
import Docs from "@/pages/docs";
import Blog from "@/pages/blog";
import BlogPost from "@/pages/blog/[slug]";
import About from "@/pages/about";
import Glossary from "@/pages/glossary";
import DeFi101 from "@/pages/defi101";
import Legal from "@/pages/legal";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/features" component={Features} />
          <Route path="/docs" component={Docs} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog/:slug" component={BlogPost} />
          <Route path="/about" component={About} />
          <Route path="/glossary" component={Glossary} />
          <Route path="/defi101" component={DeFi101} />
          <Route path="/legal" component={Legal} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;