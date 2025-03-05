
import { Route, Switch } from "wouter";
import { Suspense, lazy } from "react";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Home from "./pages/home";
// Import other existing pages instead of the missing dashboard
import About from "./pages/about";
import Features from "./pages/features";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/" component={Home} />
            {/* Replace dashboard with existing pages */}
            <Route path="/about" component={About} />
            <Route path="/features" component={Features} />
            <Route>
              <div className="container mx-auto py-20 text-center">
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                <p className="mt-4">The page you are looking for doesn't exist.</p>
              </div>
            </Route>
          </Switch>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
