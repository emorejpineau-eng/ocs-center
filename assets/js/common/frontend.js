async function loadWorkflows() {

  try {
    const res = await fetch("http://localhost:3000/workflows");

    if (!res.ok) throw new Error("HTTP error");

    const wf = await res.json();

    document.getElementById("wfBox").innerHTML =
      wf.map(w =>
        `⚙️ ${w.trigger} → ${w.action} (${w.status})`
      ).join("<br>");

  } catch (err) {
    console.error(err);

    document.getElementById("wfBox").innerHTML =
      "⚠️ Error loading workflows";
  }
}

loadWorkflows();
setInterval(loadWorkflows, 3000);

