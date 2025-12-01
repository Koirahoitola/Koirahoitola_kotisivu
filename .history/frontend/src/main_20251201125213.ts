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



/**
 * Auto-mount React components declared in HTML via `data-react-component="name"`.
 * Example: <div data-react-component="carousel" data-props='{"foo":1}'></div>
 */
async function autoMountReactComponents() {
  const nodes = Array.from(document.querySelectorAll<HTMLElement>('[data-react-component]'));
  if (nodes.length === 0) return;

  try {
    const React = await import('react');
    const { createRoot } = await import('react-dom/client');

    for (const node of nodes) {
      const name = node.dataset.reactComponent;
      if (!name) continue;

      try {
        // expect component file to be at ./components/{name}.jsx or .tsx
        const mod = await import(`./components/${name}.jsx`);
        const Comp = mod && mod.default ? mod.default : mod;

        // parse props if provided
        let props = {} as any;
        if (node.dataset.props) {
          try {
            props = JSON.parse(node.dataset.props);
          } catch (e) {
            // eslint-disable-next-line no-console
            console.warn('Failed to parse data-props for', name, e);
          }
        }

        createRoot(node).render(React.createElement(Comp, props));
      } catch (compErr) {
        // eslint-disable-next-line no-console
        console.error(`Failed to load component ${name}:`, compErr);
      }
    }
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error('Failed to mount React components:', err);
  }
}

autoMountReactComponents();
