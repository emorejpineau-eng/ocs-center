function sendMessage() {
  const input = document.getElementById("input");
  const chat = document.getElementById("chat");

  const text = input.value;
  if (!text) return;

  // user message
  const userMsg = document.createElement("div");
  userMsg.className = "msg user";
  userMsg.innerText = text;
  chat.appendChild(userMsg);

  input.value = "";

  // fake AI response
  setTimeout(() => {
    const botMsg = document.createElement("div");
    botMsg.className = "msg bot";
    botMsg.innerText = "OCS AI: traitement de la demande...";
    chat.appendChild(botMsg);

    chat.scrollTop = chat.scrollHeight;
  }, 800);
}