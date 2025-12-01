import "./main.css";
import { Navbar } from "./components/Navbar";

import home from "./pages/etusivu.html?raw";
import hinnasto from "./pages/hinnasto.html?raw";
import ajanvaraus from "./pages/ajanvaraus.html?raw";
import galleria from "./pages/kuvagalleria.html?raw";
import yhteystiedot from "./pages/yhteystiedot.html?raw";
import admin from "./pages/admin.html?raw";


const routes: Record<string, string> = {
  "/": home,
  "/hinnasto": hinnasto,
  "/ajanvaraus": ajanvaraus,
  "/galleria": galleria,
  "/yhteystiedot": yhteystiedot,
  "/admin": admin,
};

async function loadApi() {
  const messageEl = document.getElementById("api-message");

  if (!messageEl) return; 
  try {
    const response = await fetch("http://127.0.0.1:8000/api/test");
    const data = await response.json();
    messageEl.textContent = data.message;
  } catch (err) {
    messageEl.textContent = "API error: " + err;
  }
}
function router() {
  const hash = location.hash.replace("#", "") || "/";
  const page = routes[hash] || "<h1>404 - Sivua ei löytynyt</h1>";

  const app = document.getElementById("app");
  if (app) {
    app.innerHTML = page;
  }

  loadApi();
}
document.getElementById("navbar")!.innerHTML = Navbar();
window.addEventListener("hashchange", router);

router();

// If a React mount node exists on the page, dynamically load and mount the Carousel component.
// This keeps the app single-entry (main.ts) while supporting the React carousel when requested.
async function mountReactCarousel() {
  const mount = document.getElementById('react-root');
  if (!mount) return;

  try {
    const React = await import('react');
    const { createRoot } = await import('react-dom/client');
    const module = await import('./components/carousel.jsx');
    const Carousel = module && module.default ? module.default : module;
    createRoot(mount).render(React.createElement(Carousel));
  } catch (err) {
    // Log errors to console; do not break the rest of the app
    // eslint-disable-next-line no-console
    console.error('Failed to mount React Carousel:', err);
  }
}

mountReactCarousel();
