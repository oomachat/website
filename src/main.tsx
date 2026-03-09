import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import { AboutPage } from "./pages/About";
import { PrivacyPage } from "./pages/Privacy";
import { TermsPage } from "./pages/Terms";
import { CookiePolicyPage } from "./pages/CookiePolicy";
import { FaqPage } from "./pages/Faq";
import { ScrollToTop } from "./ScrollToTop";
import "./styles/index.css";

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/privacy" element={<PrivacyPage />} />
      <Route path="/terms" element={<TermsPage />} />
      <Route path="/cookie-policy" element={<CookiePolicyPage />} />
      <Route path="/faq" element={<FaqPage />} />
    </Routes>
  </BrowserRouter>,
);
