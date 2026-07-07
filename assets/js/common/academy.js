let currentCourse = null;
let quizIndex = 0;

const courses = {
  "IA Basics": [
    "Introduction à l'intelligence artificielle",
    "Les modèles IA",
    "Applications pratiques"
  ],
  "Cyber Security": [
    "Menaces modernes",
    "SOC & monitoring",
    "Protection des systèmes"
  ],
  "Automation": [
    "Workflows",
    "Triggers",
    "Orchestration IA"
  ],
  "Data Analytics": [
    "KPIs",
    "Graphs",
    "AI insights"
  ]
};

const quiz = [
  "Qu'est-ce que l'IA ?",
  "Quel est le rôle d'un SOC ?",
  "Définir un workflow",
  "Pourquoi l'automation est importante ?"
];

function openCourse(name) {

  currentCourse = name;

  const content = courses[name];

  document.getElementById("courseContent").innerHTML = `
    <strong>${name}</strong><br><br>
    ${content.map(c => "• " + c).join("<br>")}
  `;

  pushNotification("Course loaded: " + name, "info");
}

function startQuiz() {

  quizIndex = 0;

  document.getElementById("quizBox").innerHTML =
    quiz[quizIndex];

  pushNotification("Quiz started", "success");
}

function nextQuestion() {

  quizIndex++;

  if (quizIndex >= quiz.length) {
    document.getElementById("quizBox").innerHTML =
      "Quiz terminé 🎉";

    pushNotification("Quiz completed", "success");
    return;
  }

  document.getElementById("quizBox").innerHTML =
    quiz[quizIndex];
}

function askCoach() {

  const responses = [
    "Continue, tu progresses bien.",
    "Concentre-toi sur les fondamentaux.",
    "Excellente question technique.",
    "Tu devrais revoir les workflows.",
    "Très bon niveau actuel."
  ];

  const msg = responses[Math.floor(Math.random() * responses.length)];

  document.getElementById("coach").innerText = msg;

  pushNotification("SMART-IA Coach replied", "info");
}