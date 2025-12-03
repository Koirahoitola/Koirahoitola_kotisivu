import "./main.css";
import "./styles/layout.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import React from 'react';
import { createRoot } from 'react-dom/client';
import Yhteystiedot from './pages/Yhteystiedot.jsx';
import Kuvagalleria from './pages/Kuvagalleria.jsx';
import Hinnasto from './pages/Hinnasto.jsx';
import Etusivu from './pages/Etusivu.jsx';
import Ajanvaraus from './pages/Ajanvaraus.jsx';
import Admin from './pages/Admin.jsx';

//import home from "./pages/etusivu.html?raw";
//import hinnasto from "./pages/hinnasto.html?raw";
//import ajanvaraus from "./pages/ajanvaraus.html?raw";
//import galleria from "./pages/kuvagalleria.html?raw";
//import yhteystiedot from "./pages/yhteystiedot.html?raw";
//import admin from "./pages/admin.html?raw";


const routes: Record<string, string> = {
 // "/": home,
  //"/hinnasto": hinnasto,
 // "/ajanvaraus": ajanvaraus,
 // "/galleria": galleria,
 // "/yhteystiedot": yhteystiedot,
//  "/admin": admin,
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
let appReactRoot: any = null;

async function router() {
  const hash = location.hash.replace("#", "") || "/";
  const page = routes[hash] || "<h1>404 - Sivua ei löytynyt</h1>";

  const app = document.getElementById("app");
  if (app) {
    // Render the contact page as a React component
    if (hash === "/") {
      if (!appReactRoot) appReactRoot = createRoot(app);
      appReactRoot.render(React.createElement(Etusivu));
    } else if (hash === "/yhteystiedot") {
      if (!appReactRoot) appReactRoot = createRoot(app);
      appReactRoot.render(React.createElement(Yhteystiedot));
    } else if (hash === "/galleria") {
      if (!appReactRoot) appReactRoot = createRoot(app);
      appReactRoot.render(React.createElement(Kuvagalleria));
    } else if (hash === "/hinnasto") {
      if (!appReactRoot) appReactRoot = createRoot(app);
      appReactRoot.render(React.createElement(Hinnasto));
    } else if (hash === "/ajanvaraus") {
      if (!appReactRoot) appReactRoot = createRoot(app);
      appReactRoot.render(React.createElement(Ajanvaraus));
    } else if (hash === "/admin") {
      if (!appReactRoot) appReactRoot = createRoot(app);
      appReactRoot.render(React.createElement(Admin));
    } else {
      // If a React root was previously mounted, unmount it before injecting raw HTML
      if (appReactRoot) {
        appReactRoot.unmount();
        appReactRoot = null;
      }
      app.innerHTML = page;
    }
  }

  // populate footer (pages include a <div id="footer"></div>)
  const footerEl = document.getElementById("footer");
  if (footerEl) {
    footerEl.innerHTML = Footer();
  } else {
    // if a page forgot the marker, append footer to body
    const f = document.createElement('div');
    f.id = 'footer';
    f.innerHTML = Footer();
    document.body.appendChild(f);
  }

  // update year if present
  const yearEl = document.getElementById('footer-year');
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  loadApi();

  // ensure any react components in the newly-inserted page get mounted
  await autoMountReactComponents();
}
document.getElementById("navbar")!.innerHTML = Navbar();
window.addEventListener("hashchange", () => { void router(); });

void router();

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
        // try .jsx first, then .tsx so both JS and TS components are supported
        let mod: any = null;
        try {
          mod = await import(`./components/${name}.jsx`);
        } catch (e) {
          try {
            mod = await import(`./components/${name}.tsx`);
          } catch (e2) {
            throw e2;
          }
        }
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
