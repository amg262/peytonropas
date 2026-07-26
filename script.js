const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- rotating compliments ---------- */

const lines = [
  "Some people are pretty. You're the kind that makes a room quieter.",
  "Whoever designed you was clearly showing off.",
  "You have a face that makes people lose their train of thought mid-sentence.",
  "Sunsets are fine, but they've never made anyone forget what they were doing.",
  "Pretty is an understatement, and understatements are all we've got.",
  "There should be a rule about smiling like that in public.",
  "You're the reason the phrase \"take my breath away\" survived this long.",
  "Golden hour has been trying to copy you for years.",
  "Beautiful in the way that's still there when nobody's looking.",
  "Somewhere a poet just quit, and it's your fault.",
];

const el = document.getElementById("compliment");
const btn = document.getElementById("again");

let pool = [];
function nextLine() {
  if (!pool.length) {
    pool = lines.filter((l) => l !== el.textContent);
    pool.sort(() => Math.random() - 0.5);
  }
  return pool.pop();
}

btn.addEventListener("click", () => {
  el.classList.add("fade");
  setTimeout(() => {
    el.textContent = nextLine();
    el.classList.remove("fade");
  }, reduced ? 0 : 400);
});

/* ---------- cards reveal on scroll ---------- */

const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (!entry.isIntersecting) return;
      setTimeout(() => entry.target.classList.add("in"), reduced ? 0 : i * 130);
      io.unobserve(entry.target);
    });
  },
  { threshold: 0.25 }
);

document.querySelectorAll(".card").forEach((card) => io.observe(card));

/* ---------- falling petals ---------- */

if (!reduced) {
  const field = document.querySelector(".petals");
  const COUNT = window.innerWidth < 640 ? 12 : 22;

  for (let i = 0; i < COUNT; i++) {
    const p = document.createElement("div");
    p.className = "petal";
    const size = 5 + Math.random() * 9;

    p.style.left = Math.random() * 100 + "vw";
    p.style.width = size + "px";
    p.style.height = size * 0.8 + "px";
    p.style.setProperty("--sway", (Math.random() * 24 - 12) + "vw");
    p.style.animationDuration = 11 + Math.random() * 13 + "s";
    p.style.animationDelay = -Math.random() * 22 + "s";

    field.appendChild(p);
  }
}
