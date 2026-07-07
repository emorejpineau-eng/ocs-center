console.log("Automation Studio Loaded");

document.querySelectorAll(".node").forEach(node => {
  node.addEventListener("click", () => {
    alert("Node selected: " + node.innerText);
  });
});