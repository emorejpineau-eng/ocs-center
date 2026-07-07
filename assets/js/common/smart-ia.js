function renderSmartIA(containerId) {

  const container = document.getElementById(containerId);

  const alerts = Math.floor(Math.random() * 10);
  const workflows = Math.floor(Math.random() * 5);
  const recos = Math.floor(Math.random() * 6);

  container.innerHTML = `
    <div class="card smartia">

      <div style="color: var(--primary); font-weight: 600;">
        SMART-IA CORE
      </div>

      <div style="margin-top: 10px;">
        Bonjour Jérôme.
      </div>

      <div style="margin-top: 10px; color: var(--muted); font-size: 13px;">
        • ${alerts} alertes analysées<br>
        • ${workflows} workflows terminés<br>
        • ${recos} recommandations disponibles
      </div>

      <div style="margin-top: 12px;">
        <button onclick="pushNotification('Analyse lancée', 'success')">Analyse</button>
        <button onclick="pushNotification('Rapport généré', 'info')">Rapport</button>
        <button onclick="pushNotification('Workflow exécuté', 'warning')">Workflow</button>
      </div>

    </div>
  `;
}

const activities = [
  "[SMART-IA] Analysis completed",
  "[SECURITY] Firewall scan OK",
  "[AUTOMATION] Workflow executed",
  "[API] Request processed",
  "[USERS] New login detected",
  "[SYSTEM] Backup completed"
];

function startActivityStream() {
  setInterval(() => {
    const random = activities[Math.floor(Math.random() * activities.length)];
    pushNotification(random, "info");
  }, 5000);
}

startActivityStream();