import { Router, Route, Switch } from "wouter";
import Home from "./pages/home";
import Docs from "./pages/docs";
import Navbar from "./components/layout/navbar";
import Footer from "./components/layout/footer";

export function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/docs" component={Docs} />
          </Switch>
        </main>
        <Footer />
      </div>
    </Router>
  );
}