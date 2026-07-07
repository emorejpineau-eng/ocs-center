let users = [
  { name: "Jérôme", role: "admin" }
];

let adminMode = true;

function renderUsers() {

  const box = document.getElementById("userList");

  box.innerHTML = users.map(u => `
    <div style="
      padding:8px;
      margin-bottom:6px;
      background:#0B1220;
      border-radius:8px;
    ">
      👤 ${u.name} — ${u.role}
    </div>
  `).join("");
}

function addUser() {

  const name = document.getElementById("userName").value;

  users.push({
    name,
    role: adminMode ? "admin" : "user"
  });

  renderUsers();
  pushAudit(`User created: ${name}`);
}

function toggleRole() {

  adminMode = !adminMode;

  pushAudit("Admin mode: " + adminMode);

  document.getElementById("roleBox").innerHTML = `
    Mode: ${adminMode ? "ADMIN" : "USER"}
  `;
}

function shutdownSystem() {

  document.getElementById("sysStatus").innerText = "OFFLINE";

  pushNotification("System shutdown initiated", "danger");
  pushAudit("SYSTEM SHUTDOWN");
}

function restartSystem() {

  document.getElementById("sysStatus").innerText = "ONLINE";

  pushNotification("System restarted", "success");
  pushAudit("SYSTEM RESTART");
}

function pushAudit(msg) {

  const box = document.getElementById("auditLogs");

  const entry = `[AUDIT] ${msg}<br>`;

  box.innerHTML += entry;
}

renderUsers();