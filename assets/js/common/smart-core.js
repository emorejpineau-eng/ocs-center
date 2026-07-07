const SmartIA = {

  memory: [],

  ingest(input) {
    this.memory.push({
      input,
      timestamp: new Date().toISOString()
    });

    return this.analyze(input);
  },

  analyze(input) {

    const text = input.toLowerCase();

    let intent = "unknown";

    if (text.includes("rapport")) intent = "report";
    if (text.includes("analyse")) intent = "analysis";
    if (text.includes("workflow")) intent = "workflow";
    if (text.includes("sécurité") || text.includes("security")) intent = "security";
    if (text.includes("utilisateur") || text.includes("users")) intent = "users";

    return this.route(intent, input);
  },

  route(intent, input) {

    switch (intent) {

      case "analysis":
        return this.buildResponse("Analyse système lancée", "info");

      case "report":
        return this.buildResponse("Rapport généré et stocké", "success");

      case "workflow":
        return this.buildResponse("Workflow exécuté avec succès", "warning");

      case "security":
        return this.buildResponse("Scan sécurité terminé", "danger");

      case "users":
        return this.buildResponse("Analyse utilisateurs en cours", "info");

      default:
        return this.buildResponse("Commande non reconnue", "info");
    }
  },

  buildResponse(message, type) {
    return { message, type };
  }
};

async function loadMetrics() {

  const users = await fetch("http://localhost:3000/users").then(r => r.json());
  const logs = await fetch("http://localhost:3000/logs").then(r => r.json());
  const workflows = await fetch("http://localhost:3000/workflows").then(r => r.json());

  document.getElementById("usersCount").innerText = users.length;
  document.getElementById("logsCount").innerText = logs.length;
  document.getElementById("wfCount").innerText = workflows.length;
}

loadMetrics();

async function loadWorkflows() {

  try {
    const res = await fetch("http://localhost:3000/workflows");
    const wf = await res.json();

    document.getElementById("wfBox").innerHTML =
      wf.map(w =>
        `⚙️ ${w.trigger} → ${w.action} (${w.status})`
      ).join("<br>");

  } catch (err) {
    document.getElementById("wfBox").innerHTML =
      "⚠️ Error loading workflows";
    console.error(err);
  }
}

// IMPORTANT : premier appel immédiat
loadWorkflows();

// puis refresh
setInterval(loadWorkflows, 3000);

app.get("/workflows", (req, res) => {
  const db = readDB();
  res.json(db.workflows);
});

