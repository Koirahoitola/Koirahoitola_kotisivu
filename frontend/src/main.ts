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
