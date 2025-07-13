let startTime;

const sentences = [
  "The quick brown fox jumps over the lazy dog.",
  "Typing isn’t just speed; it’s precision, posture, and patience.",
  "Pseudopseudohypoparathyroidism is a real medical condition.",
  "She sells seashells by the seashore, swiftly and silently.",
  "Clean code is better than clever code.",
  "Focus on typing correctly before typing fast.",
  "Practice makes a person perfect in everything.",
  "If you're reading this, you're already halfway through success.",
  "Beware of bugs in the above code; I’ve only proved it correct.",
  "Even the most obscure syntax becomes natural with repetition."
];
const sentenceEl = document.getElementById("sentence");
const inputEl = document.getElementById("input");
const selectedSentence = sentences[Math.floor(Math.random() * sentences.length)];
sentenceEl.innerText = selectedSentence;
inputEl.addEventListener("focus", () => {
  startTime = new Date().getTime();
});
function checkSpeed() {
  const endTime = new Date().getTime();
  const totalTime = (endTime - startTime) / 1000;
  const typedText = inputEl.value.trim();
  const wordCount = typedText.split(/\s+/).length;
  const wpm = Math.round((wordCount / totalTime) * 60);
  document.getElementById("result").innerText = `Typing Speed: ${wpm} WPM`;
  if (typedText === selectedSentence) {
    document.getElementById("accuracy").innerText = "✅ Typed correctly!";
    document.getElementById("accuracy").style.color = "lightgreen";
  } else {
    document.getElementById("accuracy").innerText = "❌ Incorrect typing.";
    document.getElementById("accuracy").style.color = "tomato";
  }
}
