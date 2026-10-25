const wishes = [
  { chapter:"A gentle reminder", title:"Don't give up.", text:"Keep waiting for the real time. It will come. Just keep believing.", note:"Beautiful things can take time." },
  { chapter:"Trust your journey", title:"Your time will come.", text:"You may not see the whole picture yet, but every little step is shaping a future you cannot imagine today.", note:"You are not behind. You are becoming." },
  { chapter:"For the hard days", title:"Rest, but don't quit.", text:"It's okay to feel tired. It's okay to pause. Give your heart a moment to breathe, then begin again when you're ready.", note:"A pause is not the end of your story." },
  { chapter:"Keep the faith", title:"Believe a little longer.", text:"Some doors take time to open. Don't let today's silence convince you that tomorrow has nothing beautiful waiting for you.", note:"Keep room in your heart for hope." },
  { chapter:"Look how far you've come", title:"You are growing.", text:"Even when progress feels invisible, you are learning, healing, and becoming stronger in ways that matter.", note:"Small steps still move you forward." },
  { chapter:"Let go of comparison", title:"Your path is your own.", text:"You don't have to bloom at someone else's pace. Their season is theirs. Your season will arrive in its own beautiful time.", note:"There is no deadline for becoming you." },
  { chapter:"A little courage", title:"Try one more time.", text:"A setback is a chapter, not the whole book. You can change direction, learn something new, and still reach something wonderful.", note:"Your next chapter can surprise you." },
  { chapter:"Make space for good things", title:"Hope is still here.", text:"Even after a difficult season, life can bring new people, fresh chances, peaceful mornings, and reasons to smile again.", note:"The story is still being written." },
  { chapter:"A promise to yourself", title:"Keep showing up.", text:"Choose patience over panic. Choose courage over fear. Keep doing what you can with what you have, one day at a time.", note:"You don't need every answer today." },
  { chapter:"Your little surprise", title:"The real time will come. ✨", text:"So please, don't give up. Keep waiting, keep working, keep praying if that brings you peace, and keep believing. One day, you may look back and understand why you had to keep going.", note:"Until then, be gentle with yourself. You deserve the hope you give to others. ♥" }
];
let current = 0;
const $ = id => document.getElementById(id);
const title = $("wishTitle"), text = $("wishText"), chapter = $("chapter"), note = $("wishNote");
const content = $("wishContent"), fill = $("progressFill"), label = $("pageLabel");
const back = $("backBtn"), next = $("nextBtn"), dots = $("dots"), toast = $("toast");
function render() {
  const w = wishes[current];
  content.style.animation = "none"; void content.offsetWidth; content.style.animation = "";
  chapter.textContent = w.chapter; title.textContent = w.title; text.textContent = w.text; note.textContent = w.note;
  label.textContent = String(current + 1).padStart(2, "0") + " / " + String(wishes.length).padStart(2, "0");
  fill.style.width = ((current + 1) / wishes.length * 100) + "%";
  back.disabled = current === 0;
  next.innerHTML = current === wishes.length - 1 ? 'Read again <span>↻</span>' : 'Next page <span>→</span>';
  dots.innerHTML = "";
  wishes.forEach((_, i) => {
    const b = document.createElement("button"); b.className = "dot" + (i === current ? " active" : "");
    b.type = "button"; b.setAttribute("aria-label", "Go to page " + (i + 1));
    b.addEventListener("click", () => { current = i; render(); }); dots.appendChild(b);
  });
}
back.addEventListener("click", () => { if (current > 0) { current--; render(); } });
next.addEventListener("click", () => {
  if (current < wishes.length - 1) { current++; render(); }
  else { current = 0; render(); showToast("A fresh start. Keep believing ✨"); }
});
function showToast(message) { toast.textContent = message; toast.classList.add("show"); setTimeout(() => toast.classList.remove("show"), 2200); }
$("sparkleBtn").addEventListener("click", () => {
  const symbols = ["✦", "✧", "♡", "✴"];
  for (let i = 0; i < 12; i++) {
    const s = document.createElement("span"); s.className = "sparkle"; s.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    s.style.left = (12 + Math.random() * 76) + "vw"; s.style.top = (35 + Math.random() * 45) + "vh";
    s.style.fontSize = (12 + Math.random() * 16) + "px"; s.style.animationDelay = (Math.random() * .35) + "s";
    document.body.appendChild(s); setTimeout(() => s.remove(), 1900);
  }
  showToast("Your wish is on its way to the stars ✨");
});
document.addEventListener("keydown", e => {
  if (e.key === "ArrowRight" && current < wishes.length - 1) { current++; render(); }
  if (e.key === "ArrowLeft" && current > 0) { current--; render(); }
});
render();
