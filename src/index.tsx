import LandingPage from "./pages/LandingPage";
import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/index.css";

// i18n configuration import
import "./lib/i18n";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./styles/swiper.css";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>
);
