let modules = [
  { name: "AI Threat Detector", type: "Security", installed: false },
  { name: "Workflow Booster", type: "Automation", installed: false },
  { name: "Smart Analytics Pro", type: "Analytics", installed: false },
  { name: "SOC Live Monitor", type: "Security", installed: false },
  { name: "AI Report Generator", type: "AI Agent", installed: false }
];

function renderModules() {

  const list = document.getElementById("moduleList");
  const installed = document.getElementById("installedList");

  list.innerHTML = "";
  installed.innerHTML = "";

  modules.forEach((m, index) => {

    const box = `
      <div style="
        padding:10px;
        margin-bottom:8px;
        background:#0B1220;
        border-radius:8px;
        display:flex;
        justify-content:space-between;
        align-items:center;
      ">
        <div>
          <strong>${m.name}</strong><br>
          <span style="color:var(--muted);font-size:12px;">${m.type}</span>
        </div>

        <button class="button" onclick="installModule(${index})">
          ${m.installed ? "Installed" : "Install"}
        </button>
      </div>
    `;

    if (m.installed) installed.innerHTML += box;
    else list.innerHTML += box;
  });
}

function installModule(index) {

  modules[index].installed = true;

  pushNotification("Module installed: " + modules[index].name, "success");

  renderModules();
}

renderModules();