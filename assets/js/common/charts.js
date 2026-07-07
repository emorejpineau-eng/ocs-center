function generateFakeData(points = 12) {
  const data = [];
  let base = 60;

  for (let i = 0; i < points; i++) {
    base += (Math.random() - 0.5) * 20;
    data.push(Math.max(10, Math.min(100, base)));
  }

  return data;
}

function drawSimpleGraph(canvasId) {
  const canvas = document.getElementById(canvasId);
  const ctx = canvas.getContext("2d");

  const data = generateFakeData(18);

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

setInterval(() => {
  drawSimpleGraph("activityGraph");
}, 2000);