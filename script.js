const introScreen = document.getElementById("introScreen");
const ticketScreen = document.getElementById("ticketScreen");
const closedScreen = document.getElementById("closedScreen");

const openBtn = document.getElementById("openBtn");
const closeBtn = document.getElementById("closeBtn");
const backBtn = document.getElementById("backBtn");

const letterToggle = document.getElementById("letterToggle");
const letterIcon = document.getElementById("letterIcon");
const letterCard = document.getElementById("letterCard");

function showScreen(screenToShow) {
  [introScreen, ticketScreen, closedScreen].forEach((screen) => {
    screen.classList.remove("active");
  });

  screenToShow.classList.add("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

openBtn.addEventListener("click", () => {
  showScreen(ticketScreen);
});

letterToggle.addEventListener("click", () => {
  const isOpen = letterCard.classList.toggle("open");
  letterIcon.textContent = isOpen ? "close" : "open";
});

closeBtn.addEventListener("click", () => {
  showScreen(closedScreen);
});

backBtn.addEventListener("click", () => {
  showScreen(ticketScreen);
});