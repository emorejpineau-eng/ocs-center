const threats = [
  "Suspicious login attempt blocked",
  "Firewall rule triggered",
  "Unknown IP detected",
  "API rate anomaly",
  "Brute force attempt prevented",
  "Unusual data access pattern"
];

const devices = [
  { name: "Laptop - Jérôme", status: "secure" },
  { name: "Server MAIN", status: "secure" },
  { name: "API Gateway", status: "secure" },
  { name: "Mobile Device", status: "warning" }
];

function initSecurity() {
  renderDevices();
  startThreatFeed();
  startLogs();
}

function renderDevices() {
  const box = document.getElementById("deviceList");

  box.innerHTML = devices.map(d => `
    <div style="
      padding:8px;
      margin-bottom:6px;
      background:#0B1220;
      border-radius:8px;
      color:${d.status === "warning" ? "#FF4D6D" : "#00E676"};
    ">
      ${d.name} — ${d.status.toUpperCase()}
    </div>
  `).join("");
}

function startThreatFeed() {
  const box = document.getElementById("threatFeed");

  setInterval(() => {
    const t = threats[Math.floor(Math.random() * threats.length)];

    box.innerHTML = `
      <div style="padding:8px;background:#0B1220;border-radius:8px;">
        🔴 ${t}
      </div>
    ` + box.innerHTML;
  }, 4000);
}

function startLogs() {
  const logBox = document.getElementById("logBox");

  setInterval(() => {
    const msg = `[SECURITY] ${threats[Math.floor(Math.random() * threats.length)]}`;

    logBox.innerHTML += msg + "<br>";
  }, 3000);
}

function runSecurityScan() {

  const score = Math.floor(Math.random() * 30 + 70);

  const level =
    score > 90 ? "LOW" :
    score > 75 ? "MEDIUM" : "HIGH";

  document.getElementById("riskScore").innerText = level;

  pushNotification("Security scan completed", "success");
}

function askSmartIA() {
  pushNotification("SMART-IA analyzing security layer...", "info");
}

initSecurity();

