document.addEventListener("DOMContentLoaded", function () {
  //Flashcard Viewer 
  let flipCard = document.querySelector(".card-inner");
  let flashcards = [
    { question: "What is HTML?", answer: "A markup language for creating web pages." },
    { question: "What is CSS?", answer: "A style sheet language to design HTML content." },
    { question: "What is JavaScript?", answer: "A programming language for web interactivity." }
  ];
  let cardIndex = 0;
  function updateFlashcard() {
    document.querySelector(".card-front").textContent = flashcards[cardIndex].question;
    document.querySelector(".card-back").textContent = flashcards[cardIndex].answer;
  }
  updateFlashcard();

  document.querySelector(".card-inner").addEventListener("click", () => {
    flipCard.classList.toggle("flip");
  });
  document.querySelector(".know").addEventListener("click", () => {
    if (cardIndex < flashcards.length - 1) {
      cardIndex++;
      flipCard.classList.remove("flip");
      updateFlashcard();
    }
  }
  )
  ;
  document.querySelector(".dontknow").addEventListener("click", () => {
    if (cardIndex < flashcards.length - 1) {
      cardIndex++;
      flipCard.classList.remove("flip");
      updateFlashcard();
    }
  }
)
;
  //Quiz App  
  let quizIndex = 0;
  let quizScore = 0;
  let quizQuestions = [
    {
      question: "2 + 2 = ?",
      options: ["3", "4", "5"],
      answer: "4"
    },
    {
      question: "Capital of India?",
      options: ["Delhi", "Mumbai", "Chennai"],
      answer: "Delhi"
    }
  ]
  ;
  function showQuiz() {
    let q = quizQuestions[quizIndex];
    document.getElementById("quiz-container").innerHTML = `
      <p>${q.question}</p>
      ${q.options.map(opt => `<button onclick="checkAnswer('${opt}')">${opt}</button>`).join("<br>")}
    `;
  }
  window.checkAnswer = function (selected) {
    if (selected === quizQuestions[quizIndex].answer) quizScore++;
    quizIndex++;
    if (quizIndex < quizQuestions.length) showQuiz();
    else document.getElementById("quiz-container").innerHTML = `Score: ${quizScore} / ${quizQuestions.length}`;
  }
  ;
  if (document.getElementById("quiz-container")) showQuiz();

  //Habit Checklist 
  document.querySelectorAll("#habit-list input[type=checkbox]").forEach(chk => {
    chk.addEventListener("change", () => {
      let total = document.querySelectorAll("#habit-list input").length;
      let done = document.querySelectorAll("#habit-list input:checked").length;
      let progress = Math.round((done / total) * 100);
      document.getElementById("habit-progress").value = progress;
    }
   )
   ;
  }
   )
   ;

  //Reading Log Sorting
  window.sortReading = function (col) {
    let table = document.getElementById("reading-table");
    let rows = Array.from(table.rows).slice(1);
    rows.sort((a, b) => a.cells[col].innerText.localeCompare(b.cells[col].innerText));
    rows.forEach(row => table.appendChild(row));
  };

  //Course Catalog
  document.getElementById("course-filter")?.addEventListener("input", e => {
    let val = e.target.value.toLowerCase();
    document.querySelectorAll("#course-list div").forEach(div => {
      div.style.display = div.textContent.toLowerCase().includes(val) ? "block" : "none";
    }
   )
   ;
  }
   )
   ;

  //Markdown Editor
  const markdownInput = document.getElementById("markdown-input");
  const markdownPreview = document.getElementById("markdown-preview");
  if (markdownInput && markdownPreview) {
    markdownInput.addEventListener("input", () => {
      markdownPreview.innerHTML = markdownInput.value.replace(/\n/g, "<br>");
    }
    )
    ;
  }

  //Adaptive Quiz
  let difficulty = 1;
  const pool = {
    1: ["Easy Q1", "Easy Q2"],
    2: ["Medium Q1", "Medium Q2"],
    3: ["Hard Q1", "Hard Q2"]
  };
  let adaptiveIndex = 0;
  function showAdaptiveQuestion() {
    document.getElementById("adaptive-container").textContent = pool[difficulty][adaptiveIndex % 2];
  }
  document.getElementById("adaptive-next")?.addEventListener("click", () => {
    adaptiveIndex++;
    if (adaptiveIndex % 2 === 0) difficulty = Math.min(3, difficulty + 1);
    showAdaptiveQuestion();
  }
   )
   ;
  if (document.getElementById("adaptive-container")) showAdaptiveQuestion();

  //Spaced Repetition
  let spacedIndex = 0;
  const spacedData = ["Term 1", "Term 2", "Term 3"];
  function loadSpaced() {
    document.getElementById("spaced-card").textContent = spacedData[spacedIndex];
  }
  document.getElementById("spaced-next")?.addEventListener("click", () => {
    spacedIndex = (spacedIndex + 1) % spacedData.length;
    loadSpaced();
  }
  )
  ;
  if (document.getElementById("spaced-card")) loadSpaced();

  //Timeline Tracker Drag 
  document.querySelectorAll("#timeline li").forEach(item => {
    item.setAttribute("draggable", true);
    item.addEventListener("dragstart", e => e.dataTransfer.setData("text/plain", e.target.id));
  }
  )
  ;
  const timeline = document.getElementById("timeline");
  if (timeline) {
    timeline.addEventListener("dragover", e => e.preventDefault());
    timeline.addEventListener("drop", e => {
      const id = e.dataTransfer.getData("text/plain");
      const dragged = document.getElementById(id);
      const target = e.target.closest("li");
      if (target && dragged !== target) {
        timeline.insertBefore(dragged, target);
      }
    }
   )
   ;
  }

  //Video Comments 
  document.getElementById("comment-submit")?.addEventListener("click", () => {
    const time = document.getElementById("comment-time").value;
    const text = document.getElementById("comment-text").value;
    const list = document.getElementById("comment-list");
    const li = document.createElement("li");
    li.textContent = `(${time}) ${text}`;
    list.appendChild(li);
  }
  )
  ;
  }
  )
  ;
