// =====================================================
// 🔊 MEDIA FILES
// =====================================================

const clickSound = new Audio("click.mp3");

const bgMusic = new Audio("bg.mp3");

const horrorSound = new Audio("h.mp3");

const introMusic = new Audio("music.mp3");
introMusic.loop = true;

bgMusic.loop = true;

bgMusic.volume = 0.12;


// =====================================================
// 🔊 VOLUME SETTINGS
// =====================================================

// Intro background music volume
introMusic.volume = 0.35;

// Game background music volume
bgMusic.volume = 0.12;

// Horror sound volume
horrorSound.volume = 0.7;



// =====================================================
// 🎬 INTRO VIDEO ELEMENTS
// =====================================================

const introVideo =
  document.getElementById("introVideo");

introVideo.volume = 0.7;

const introContainer =
  document.getElementById("introVideoContainer");

const skipIntroBtn =
  document.getElementById("skipIntroBtn");


// =====================================================
// 🔊 CLICK SOUND
// =====================================================

function playClick() {

  clickSound.currentTime = 0;

  clickSound.volume = 0.5;

  clickSound.play().catch(() => {});
}


// =====================================================
// 🎬 INTRO FINISHED
// =====================================================

function startGameAfterIntro() {

  if (introFinished) return;

  introFinished = true;

  introContainer.style.display = "none";

  introContainer.style.pointerEvents = "none";

  introMusic.pause();

  introMusic.currentTime = 0;

  bgMusic.play().catch(() => {});

  horrorSound.volume = 0.7;

  horrorSound.play().catch(() => {});

  showQuestion();
}


// =====================================================
// ⏭️ SKIP INTRO
// =====================================================

skipIntroBtn.addEventListener("click", () => {

  playClick();

  introVideo.pause();

  introVideo.currentTime = 0;

  introContainer.style.display = "none";

  startGameAfterIntro();
});


// =====================================================
// 🎬 VIDEO ENDED
// =====================================================

introVideo.onended = startGameAfterIntro;