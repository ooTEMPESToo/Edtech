// let currentLevel = 0;
// let correctMatches = 0;

// const gameArea = document.getElementById("gameArea");
// const result = document.getElementById("result");
// const nextBtn = document.getElementById("nextBtn");
// const levelDisplay = document.getElementById("levelDisplay");
// const progressBarFill = document.getElementById("progressBarFill");
// const successSound = document.getElementById("successSound");
// const failSound = document.getElementById("failSound");

// function updateProgressBar(level) {
//   const percentage = ((level + 1) / levels.length) * 100;
//   progressBarFill.style.width = `${percentage}%`;
// }

// function loadLevel(level) {
//   gameArea.innerHTML = '';
//   result.textContent = '';
//   nextBtn.classList.add("hidden");
//   correctMatches = 0;

//   const data = levels[level];
//   levelDisplay.textContent = `Level: ${data.level}`;
//   updateProgressBar(level);

//   const letters = document.createElement("div");
//   letters.className = "flex flex-wrap gap-4 justify-center";

//   const targets = document.createElement("div");
//   targets.className = "flex flex-wrap gap-4 justify-center";

//   data.items.forEach((item) => {
//     const letter = document.createElement("div");
//     letter.className = "drag-item bg-pink-400 w-16 h-16 rounded-full text-white flex items-center justify-center text-2xl cursor-move shadow-lg";
//     letter.setAttribute("draggable", true);
//     letter.id = `letter-${item.letter}`;
//     letter.textContent = item.letter;
//     letter.addEventListener("dragstart", e => {
//       letter.classList.add("dragging");
//       e.dataTransfer.setData("text/plain", letter.id);
//     });
//     letter.addEventListener("dragend", () => {
//       letter.classList.remove("dragging");
//     });
//     letters.appendChild(letter);

//     const dropBox = document.createElement("div");
//     dropBox.className = "drop-box w-32 h-32 bg-green-100 border-2 border-green-400 rounded-lg flex flex-col items-center justify-center p-2";
//     dropBox.id = `drop-${item.word.toLowerCase()}`;
//     dropBox.innerHTML = `<img src="${item.image}" class="w-full h-24 mb-2 rounded-xl object-cover" alt="${item.word}" />`;

//     dropBox.addEventListener("dragover", e => {
//       e.preventDefault();
//       dropBox.classList.add("border-dashed", "border-4");
//     });

//     dropBox.addEventListener("dragleave", () => {
//       dropBox.classList.remove("border-dashed", "border-4");
//     });

//     dropBox.addEventListener("drop", e => {
//       e.preventDefault();
//       dropBox.classList.remove("border-dashed", "border-4");
//       const draggedId = e.dataTransfer.getData("text/plain");
//       const dragged = document.getElementById(draggedId);
//       const expectedId = `letter-${item.letter}`;

//       if (draggedId === expectedId && dropBox.id === `drop-${item.word.toLowerCase()}`) {
//         dropBox.appendChild(dragged);
//         dragged.setAttribute("draggable", false);
//         correctMatches++;
//         successSound.play();
//         if (correctMatches === data.items.length) {
//           result.textContent = "🎉 Great job! Level Complete!";
//           nextBtn.classList.remove("hidden");
//         }
//       } else {
//         result.textContent = "❌ Oops! Try Again.";
//         failSound.play();
//       }
//     });

//     targets.appendChild(dropBox);
//   });

//   gameArea.appendChild(letters);
//   gameArea.appendChild(targets);
// }

// nextBtn.addEventListener("click", () => {
//   currentLevel++;
//   if (currentLevel < levels.length) {
//     loadLevel(currentLevel);
//   } else {
//     result.textContent = "🏆 All levels completed! You are a genius!";
//     nextBtn.classList.add("hidden");
//   }
// });

// loadLevel(currentLevel);

let currentLevel = 0;
let correctMatches = 0;

const dropTargets = document.getElementById("dropTargets");
const draggableLetters = document.getElementById("draggableLetters");
const result = document.getElementById("result");
const nextBtn = document.getElementById("nextBtn");
const levelDisplay = document.getElementById("levelDisplay");
const progressBarFill = document.getElementById("progressBarFill");
const successSound = document.getElementById("successSound");
const failSound = document.getElementById("failSound");

function updateProgressBar(level) {
  const percentage = ((level + 1) / levels.length) * 100;
  progressBarFill.style.width = `${percentage}%`;
}

function loadLevel(level) {
  dropTargets.innerHTML = "";
  draggableLetters.innerHTML = "";
  result.textContent = "";
  nextBtn.classList.add("hidden");
  correctMatches = 0;

  const data = levels[level];
  levelDisplay.textContent = `Level: ${data.level}`;
  updateProgressBar(level);

  data.items.forEach((item) => {
    // Drop target
    const dropBox = document.createElement("div");
    dropBox.className =
      "drop-box p-4 border-2 border-transparent rounded-xl flex flex-col items-center bg-transparent hover:bg-green-100 transition-colors duration-200";
    dropBox.id = `drop-${item.word.toLowerCase()}`;
    dropBox.innerHTML = `<img src="${item.image}" class="w-70 h-64 object-cover mb-2" alt="${item.word}" />`;

    dropBox.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropBox.classList.add("border-dashed", "border-4");
    });

    dropBox.addEventListener("dragleave", () => {
      dropBox.classList.remove("border-dashed", "border-4");
    });

    dropBox.addEventListener("drop", (e) => {
      e.preventDefault();
      dropBox.classList.remove("border-dashed", "border-4");
      const draggedId = e.dataTransfer.getData("text/plain");
      const dragged = document.getElementById(draggedId);
      const expectedId = `letter-${item.letter}`;

      if (draggedId === expectedId) {
        dropBox.appendChild(dragged);
        dragged.setAttribute("draggable", false);
        correctMatches++;
        successSound.play();

        if (correctMatches === data.items.length) {
          result.textContent = "🎉 Great job! Level Complete!";
          nextBtn.classList.remove("hidden");
        }
      } else {
        result.textContent = "❌ Oops! Try Again.";
        failSound.play();
      }
    });

    dropTargets.appendChild(dropBox);

    // Draggable item
    const letter = document.createElement("div");
    letter.className =
      "drag-item bg-[#e3e3dd] text-[#161612] px-4 py-2 rounded-full text-sm font-bold cursor-move";
    letter.setAttribute("draggable", true);
    letter.id = `letter-${item.letter}`;
    letter.textContent = item.letter;

    letter.addEventListener("dragstart", (e) => {
      letter.classList.add("dragging");
      e.dataTransfer.setData("text/plain", letter.id);
    });

    letter.addEventListener("dragend", () => {
      letter.classList.remove("dragging");
    });

    draggableLetters.appendChild(letter);
  });
}

nextBtn.addEventListener("click", () => {
  currentLevel++;
  if (currentLevel < levels.length) {
    loadLevel(currentLevel);
  } else {
    result.textContent = "🏆 All levels completed! You're amazing!";
    nextBtn.classList.add("hidden");
  }
});

loadLevel(currentLevel);
