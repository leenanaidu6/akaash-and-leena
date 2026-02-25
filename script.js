const loveBtn = document.getElementById("loveBtn");
const surpriseText = document.getElementById("surpriseText");

const surprises = [
  "You + me = my favorite plan.",
  "I choose you. Still. Always.",
  "Somehow, everything feels easier with you.",
  "You’re my calm and my chaos (in the best way).",
  "If love had a ZIP code, it would be wherever you are."
];

if (loveBtn && surpriseText) {
  loveBtn.addEventListener("click", () => {
    const msg = surprises[Math.floor(Math.random() * surprises.length)];
    surpriseText.textContent = msg;
  });
}
