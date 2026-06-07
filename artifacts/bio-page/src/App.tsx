import { Router as WouterRouter, Switch, Route } from "wouter";
import { EditModeProvider } from "@/context/edit-mode";
import { SiteStateProvider } from "@/context/site-state";
import HomePage from "@/pages/home";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <EditModeProvider>
      <SiteStateProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <Router />
        </WouterRouter>
      </SiteStateProvider>
    </EditModeProvider>
  );
}

export default App;
