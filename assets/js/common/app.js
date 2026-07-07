function pushNotification(message, type = "info") {
  const colors = {
    info: "#00D4FF",
    success: "#00E676",
    warning: "#FFB020",
    danger: "#FF4D6D"
  };

  const notif = document.createElement("div");

  notif.innerText = message;

  notif.style.position = "fixed";
  notif.style.bottom = "20px";
  notif.style.right = "20px";
  notif.style.background = "#111B2E";
  notif.style.borderLeft = `4px solid ${colors[type]}`;
  notif.style.padding = "12px 16px";
  notif.style.borderRadius = "10px";
  notif.style.color = "white";
  notif.style.boxShadow = "0 10px 30px rgba(0,0,0,0.4)";
  notif.style.zIndex = "9999";

  document.body.appendChild(notif);

  setTimeout(() => {
    notif.remove();
  }, 4000);
}

function sendToSmartIA() {

  const input = document.getElementById("smartInput").value;

  const result = SmartIA.ingest(input);

  pushNotification(result.message, result.type);

  renderSmartIA("smartia");
}

document.getElementById("smartInput")
  .addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      sendToSmartIA();
    }
  });

  function getSmartMemory() {
  return SmartIA.memory.slice(-10);
}

function renderSmartIA(containerId) {

  const container = document.getElementById(containerId);

  const memoryCount = SmartIA.memory.length;

  container.innerHTML = `
    <div class="card smartia">

      <div style="color: var(--primary); font-weight: 600;">
        SMART-IA CORE v1
      </div>

      <div style="margin-top:10px;">
        Système actif
      </div>

      <div style="margin-top:10px; color:var(--muted); font-size:13px;">
        Mémoire active : ${memoryCount}<br>
        Statut : ONLINE<br>
        Mode : ORCHESTRATOR
      </div>

      <div style="margin-top:12px;">
        <input id="smartInput" placeholder="Command SMART-IA..." style="
          width:100%;
          padding:8px;
          background:#0B1220;
          border:none;
          color:white;
          border-radius:6px;
        ">
      </div>

    </div>
  `;
}

const wf = [
  { trigger: "login", action: "notify", status: "active" }
];

document.getElementById("wfBox").innerHTML =
  wf.map(w =>
    `${w.trigger} → ${w.action} (${w.status})`
  ).join("<br>");

  const links = document.querySelectorAll(".nav-item");

links.forEach(link => {
  if (link.href === window.location.href) {
    link.classList.add("active");
  }
});

console.log("OCS Enterprise Suite Loaded");

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => {
    console.log("Navigate:", item.textContent);
  });
});

console.log("OCS Loaded");

document.querySelectorAll(".nav-item").forEach(item => {
  item.addEventListener("click", () => {
    document.querySelectorAll(".nav-item").forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});