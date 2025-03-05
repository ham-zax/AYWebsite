import React from "react";
import { Route, Switch } from "wouter";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard";
import Docs from "./pages/docs";
import FAQ from "./pages/faq";
import NotFound from "./pages/not-found";
import "./App.css";

// Custom router for the application
function CustomRouter({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col dark:bg-background">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CustomRouter>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/docs" component={Docs} />
            <Route path="/faq" component={FAQ} />
            <Route component={NotFound} />
          </Switch>
        </CustomRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;