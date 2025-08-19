// Mobile Navigation
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
if (hamburger && navMenu) {
  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded") === "true";
    hamburger.setAttribute("aria-expanded", String(!expanded));
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-menu a").forEach((link) => {
    link.addEventListener("click", () => {
      hamburger.classList.remove("active");
      navMenu.classList.remove("active");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });
}

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach((a) => {
  a.addEventListener("click", (e) => {
    const href = a.getAttribute("href");
    if (!href || href === "#" || href === "#top") return;
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  });
});

// Simple fade-in on viewport
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1";
        entry.target.style.transform = "translateY(0)";
      }
    });
  },
  { threshold: 0.1 }
);

document
  .querySelectorAll(".doc-card, .support-card, .download-card, .step, .feature-card")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(18px)";
    el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    observer.observe(el);
  });

// Download modal
const modal = document.getElementById("downloadModal");
const downloadBtns = document.querySelectorAll("#downloadBtn, #mainDownloadBtn");
const closeBtn = document.querySelector(".modal .close");
const finalDownloadBtn = document.getElementById("finalDownloadBtn");
const countdownDisplay = document.getElementById("countdownDisplay");
const countdownSpan = document.getElementById("countdown");
let countdownTimer;
let timeLeft = 5;

function openModal() {
  if (!modal) return;
  modal.style.display = "flex";
  startCountdown();
}
function closeModal() {
  if (!modal) return;
  modal.style.display = "none";
  resetCountdown();
}

downloadBtns.forEach((btn) => btn && btn.addEventListener("click", openModal));
closeBtn && closeBtn.addEventListener("click", closeModal);
window.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });

function startCountdown() {
  timeLeft = 5;
  if (finalDownloadBtn) finalDownloadBtn.disabled = true;
  updateCountdownDisplay();
  countdownTimer = setInterval(() => {
    timeLeft--;
    updateCountdownDisplay();
    if (timeLeft <= 0) {
      clearInterval(countdownTimer);
      enableDownload();
    }
  }, 1000);
}

function updateCountdownDisplay() {
  if (countdownDisplay) countdownDisplay.textContent = timeLeft;
  if (countdownSpan && timeLeft <= 0) {
    countdownSpan.style.display = "none";
    const info = document.querySelector(".countdown-info");
    if (info) info.style.display = "none";
  }
}

function enableDownload() {
  if (!finalDownloadBtn) return;
  finalDownloadBtn.disabled = false;
  finalDownloadBtn.classList.remove("disabled");
  const text = document.getElementById("downloadText");
  if (text) text.textContent = "Descargar ahora";
}

function resetCountdown() {
  if (countdownTimer) clearInterval(countdownTimer);
  timeLeft = 5;
  if (finalDownloadBtn) {
    finalDownloadBtn.disabled = true;
    const text = document.getElementById("downloadText");
    if (text) text.textContent = "Descargar";
  }
  if (countdownSpan) countdownSpan.style.display = "inline";
  const info = document.querySelector(".countdown-info");
  if (info) info.style.display = "block";
  updateCountdownDisplay();
}

finalDownloadBtn &&
  finalDownloadBtn.addEventListener("click", () => {
    if (finalDownloadBtn.disabled) return;
    const link = document.createElement("a");
    link.href = "lista-de-precios-con-aumentos-usd.zip";
    link.download = "lista-de-precios-con-aumentos-usd.zip";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(closeModal, 800);
  });

// Add minimal loading effect on buttons
const style = document.createElement("style");
style.textContent = `
.loading{position:relative;pointer-events:none}
.loading::after{content:'';position:absolute;width:14px;height:14px;border:2px solid transparent;border-top-color:currentColor;border-radius:50%;animation:spin 1s linear infinite;inset:0;margin:auto}
@keyframes spin{to{transform:rotate(360deg)}}
`;
document.head.appendChild(style);
document.querySelectorAll("button,.btn").forEach((btn)=>{
  btn.addEventListener("click",function(){
    if(!this.classList.contains("loading")){
      this.classList.add("loading");
      setTimeout(()=>this.classList.remove("loading"),1500);
    }
  });
});
