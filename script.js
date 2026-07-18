// ==============================
// Elements
// ==============================

const welcomeScreen = document.getElementById("welcome-screen");
const welcomeText = document.getElementById("welcome-text");
const tapHint = document.getElementById("tap-hint");

const experience = document.getElementById("experience");
const photo = document.getElementById("main-photo");
const message = document.getElementById("message");

const music = document.getElementById("bg-music");

// ==============================
// Initial Setup
// ==============================

message.innerText = config.message;

let currentLine = 0;
let finishedWelcome = false;

// ==============================
// Show Welcome Lines
// ==============================

function showNextLine() {

    welcomeText.classList.remove("fade-in");

    setTimeout(() => {

        welcomeText.textContent = config.welcome[currentLine];

        welcomeText.classList.add("fade-in");

        currentLine++;

        if (currentLine < config.welcome.length) {

            setTimeout(showNextLine, 2200);

        } else {

            setTimeout(() => {

                tapHint.classList.add("fade-in");
                tapHint.classList.add("pulse");

                finishedWelcome = true;

            }, 1800);

        }

    }, 500);

}

showNextLine();

// ==============================
// Start Experience
// ==============================

document.body.addEventListener("click", () => {

    if (!finishedWelcome) return;

    if (experience.classList.contains("fade-in")) return;

    // Small pause for dramatic effect
    setTimeout(() => {

        music.play().catch(() => {});

        welcomeScreen.classList.add("fade-out");

        setTimeout(() => {

            welcomeScreen.style.display = "none";

            experience.classList.add("fade-in");

            photo.classList.add("floating");

        }, 1800);

    }, 500);

});
