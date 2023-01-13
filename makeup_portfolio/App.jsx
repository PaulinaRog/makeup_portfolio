import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from "./src/views/Index";
import "./src/styles/main.scss";
import { createRoot } from "react-dom/client";
import AboutMePage from "./src/views/AboutMePage";
import PortfolioPage from "./src/views/PortfolioPage";
import ContactPage from "./src/views/ContactPage";
import Login from "./src/views/Login";
import Dashboard from "./src/views/Dashboard";
import AboutMeSettings from "./src/components/settings/AboutMeSettings";
import PortfolioSettings from "./src/components/settings/PortfolioSettings";
import ContactSettings from "./src/components/settings/ContactSettings";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="aboutme" element={<AboutMePage />} />
          <Route path="portfolio" element={<PortfolioPage />}>
            <Route path=":id" element={<PortfolioPage />} />
          </Route>
          <Route path="contact" element={<ContactPage />} />
          <Route path="login" element={<Login />} />
          <Route path="dashboard" element={<Dashboard />}>
            <Route path="aboutmeset" element={<AboutMeSettings />} />
            <Route path="portfolioset" element={<PortfolioSettings />} />
            <Route path="contactset" element={<ContactSettings />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
const container = document.getElementById("app");
const root = createRoot(container);
root.render(<App />);
