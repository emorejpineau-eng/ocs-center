function initAnalytics() {
  drawGraphs();
  startLiveInsights();
}

function drawGraphs() {
  drawSimpleGraph("mainGraph");
  drawSimpleGraph("trendGraph");
  drawSimpleGraph("securityGraph");

  setInterval(() => {
    drawSimpleGraph("mainGraph");
    drawSimpleGraph("trendGraph");
    drawSimpleGraph("securityGraph");
  }, 3000);
}

function generateFakeData(points = 20) {
  const data = [];
  let base = 50;

  for (let i = 0; i < points; i++) {
    base += (Math.random() - 0.5) * 15;
    data.push(Math.max(5, Math.min(100, base)));
  }

  return data;
}

function drawSimpleGraph(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  if (!canvas) return;

  const data = generateFakeData(25);

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.strokeStyle = "#00D4FF";
  ctx.lineWidth = 2;
  ctx.beginPath();

  const step = canvas.width / (data.length - 1);

  data.forEach((value, i) => {
    const x = i * step;
    const y = canvas.height - (value / 100) * canvas.height;

    if (i === 0) ctx.moveTo(x, y);
    else ctx.lineTo(x, y);
  });

  ctx.stroke();
}

const insights = [
  "Les pics d'activité sont corrélés aux automations.",
  "Une anomalie légère est détectée sur les API calls.",
  "Le système montre une stabilité globale élevée.",
  "Les utilisateurs actifs augmentent de 12%.",
  "Les workflows réduisent la latence système."
];

function generateInsight() {
  const text = insights[Math.floor(Math.random() * insights.length)];

  document.getElementById("aiInsight").innerHTML = `
    🧠 ${text}
  `;

  pushNotification("New AI Insight generated", "info");
}

function startLiveInsights() {
  setInterval(() => {
    generateInsight();
  }, 6000);
}

initAnalytics();