import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import siteConfig from "./content/site-config";

document.documentElement.classList.add("dark");

const { theme } = siteConfig;
document.documentElement.style.setProperty("--theme-bg", theme.backgroundColor);
document.documentElement.style.setProperty("--theme-primary", theme.primaryColor);
document.documentElement.style.setProperty("--theme-card-radius", theme.cardRadius);

createRoot(document.getElementById("root")!).render(<App />);
