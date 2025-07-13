const $ = id => document.getElementById(id);
const texts = [
 "Bananas are called berries, but strawberries are not.",
"A day on Venus is longer than one whole year there!",
"Octopuses have three hearts, and two stop when they swim.",
"Wombats poop in cubes so it won’ t roll away.",
"Some jellyfish can live forever by starting life over.",
"Rhubarb makes a funny sound when it grows in the dark!"
];
let start, current;
function startTest() {
  current = texts[Math.random() * texts.length | 0];
  $("sentence").innerText = current;
  $("input").value = "";
  $("input").disabled = false;
  $("input").focus();
  $("result").innerText = "";
  start = new Date();
}
function endTest() {
  $("input").disabled = true;
  const typed = $("input").value.trim().split(" "), orig = current.split(" ");
  const time = (new Date() - start) / 1000, words = typed.filter(Boolean).length;
  const speed = Math.round((words / time) * 60);
  const correct = typed.filter((w, i) => w === orig[i]).length;
  const acc = Math.round((correct / orig.length) * 100);
  $("result").innerText = `Speed: ${speed} WPM\nAccuracy: ${acc}%`;
}
