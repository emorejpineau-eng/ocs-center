let documents = [];
let selectedDoc = null;

function uploadDoc() {

  const name = document.getElementById("docName").value;
  const content = document.getElementById("docContent").value;

  const doc = {
    id: Date.now(),
    name,
    content,
    created: new Date().toISOString()
  };

  documents.push(doc);

  renderDocs();
  pushNotification("Document saved", "success");
}

function renderDocs() {

  const list = document.getElementById("docList");

  list.innerHTML = documents.map(d => `
    <div style="
      padding:10px;
      margin-bottom:8px;
      background:#0B1220;
      border-radius:8px;
      cursor:pointer;
    " onclick="selectDoc(${d.id})">
      📄 ${d.name}
    </div>
  `).join("");
}

function selectDoc(id) {
  selectedDoc = documents.find(d => d.id === id);

  document.getElementById("summaryBox").innerHTML =
    "Document selected: " + selectedDoc.name;
}

function generateSummary() {

  if (!selectedDoc) return;

  const words = selectedDoc.content.split(" ").length;

  const summary = `
    🧠 AI SUMMARY

    Document: ${selectedDoc.name}
    Words: ${words}

    Insight:
    ${selectedDoc.content.slice(0, 120)}...
  `;

  document.getElementById("summaryBox").innerText = summary;

  pushNotification("AI Summary generated", "info");
}

function searchDocs() {

  const query = document.getElementById("searchDoc").value.toLowerCase();

  const results = documents.filter(d =>
    d.name.toLowerCase().includes(query) ||
    d.content.toLowerCase().includes(query)
  );

  document.getElementById("searchResults").innerHTML = results.map(r => `
    <div style="padding:8px;background:#0B1220;margin-top:6px;border-radius:6px;">
      🔎 ${r.name}
    </div>
  `).join("");
}

document.getElementById("searchDoc").addEventListener("input", searchDocs);