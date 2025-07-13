let startTime;

const sentences = [
  "She sells seashells by the seashore, swiftly and silently.",
  "Typing isn’t just speed; it’s precision, posture, and patience.",
  "If you're reading this, you're already halfway through success.",
  "A truly great developer is constantly learning and unlearning.",
  "Success comes to those who dare, not just those who dream.",
  "Beware of bugs in the above code; I’ve only proved it correct.",
  "Pseudopseudohypoparathyroidism is a real medical condition.",
  "Even the most obscure syntax becomes natural with repetition.",
  "The lazy programmer jumped swiftly over the tangled logic.",
  "A debugged program is one that was never truly tested."
];

const sentenceText = document.getElementById("sentence");
const randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
sentenceText.innerText = randomSentence;

const input = document.getElementById("input");

input.addEventListener("focus", () => {
  startTime = new Date().getTime();
});

function checkSpeed() {
  const endTime = new Date().getTime();
  const totalTime = (endTime - startTime) / 1000;

  const userInput = input.value.trim();
  const wordCount = userInput.split(/\s+/).length;
  const wpm = Math.round((wordCount / totalTime) * 60);

  document.getElementById("result").innerText =
    `Typing Speed: ${wpm} WPM`;

  if (userInput === randomSentence) {
    document.getElementById("accuracy").innerText = "✅ Typed correctly!";
    document.getElementById("accuracy").style.color = "lightgreen";
  } else {
    document.getElementById("accuracy").innerText = "❌ Incorrect typing.";
    document.getElementById("accuracy").style.color = "tomato";
  }
}
