import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import Resources from "@/pages/Resources";
import Pricing from "@/pages/Pricing";
import Blog from "@/pages/Blog";
import Profile from "@/pages/Profile";
import Evidence from "@/pages/Evidence";
import Notes from "@/pages/Notes";
import History from "@/pages/History";

function Router() {
  return (
    <Switch>
      {/* Original Routes */}
      <Route path="/home" component={Home} />
      <Route path="/resources" component={Resources} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/blog" component={Blog} />
      
      {/* FBI Criminal Profile Routes */}
      <Route path="/" component={Profile} />
      <Route path="/evidence" component={Evidence} />
      <Route path="/notes" component={Notes} />
      <Route path="/history" component={History} />
      
      <Route component={NotFound} />
    </Switch>
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