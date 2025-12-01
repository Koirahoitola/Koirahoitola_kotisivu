import './style.css'

async function loadApi() {
    const messageEl = document.getElementById("api-message");

    try {
        const response = await fetch("http://127.0.0.1:8000/api/test");
        const data = await response.json();
        messageEl!.textContent = data.message;
    } catch (err) {
        messageEl!.textContent = "API error: " + err;
    }
}

const appEl = document.getElementById("app");
if (appEl) {

loadApi();
