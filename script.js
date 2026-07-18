// =========================
// Get Elements
// =========================

const introTitle = document.getElementById("intro-title");
const introSubtitle = document.getElementById("intro-subtitle");
const title = document.getElementById("title");
const message = document.getElementById("message");

// =========================
// Fill Content
// =========================

introTitle.textContent = config.introTitle;
introSubtitle.innerHTML = config.introSubtitle.replace(/\n/g, "<br>");

title.textContent = config.pageTitle;
message.innerHTML = config.message.replace(/\n/g, "<br>");
