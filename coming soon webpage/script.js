// === nuwest.ai landing page script ===
// API Gateway endpoint (HTTPS) for Lambda contact handler
const API_BASE = "https://8yxgqdo111.execute-api.us-east-1.amazonaws.com";
const ENDPOINT = `${API_BASE}/subscribe`;

const form = document.getElementById("subscribeForm");
const statusEl = document.getElementById("status");

if (form) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    statusEl.textContent = "";
    const btn = form.querySelector("button");
    btn.disabled = true;

    // Collect form values
    const name = form.name.value.trim();
    const title = form.title.value.trim();
    const email = form.email.value.trim();

    // Basic validation
    if (!name || !email) {
      statusEl.textContent = "Please enter your name and a valid email.";
      btn.disabled = false;
      return;
    }

    try {
      // Send data to AWS API Gateway → Lambda
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, title, email }),
        mode: "cors"
      });

      const data = await res.json().catch(() => ({}));

      if (res.ok && data.ok) {
        // Success path
        form.reset();
        statusEl.textContent =
          data.message || "Thank you! We'll be in touch soon.";
      } else {
        // Lambda returned an error
        statusEl.textContent =
          data.error || data.message || `Submission failed (HTTP ${res.status}).`;
      }
    } catch (err) {
      // Network or CORS error
      console.error(err);
      statusEl.textContent = `Network error: ${String(err)}`;
    } finally {
      btn.disabled = false;
    }
  });
}
