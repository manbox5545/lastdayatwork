// =====================================================
// 🎮 GAME VARIABLES
// =====================================================

let started = false;

let introFinished = false;

// Random guest username
let currentUser =
  "Guest_" + Math.floor(Math.random() * 9999);


// =====================================================
// 🖥️ FULLSCREEN
// =====================================================

function toggleFullscreen() {

  const elem = document.documentElement;

  if (!document.fullscreenElement) {

    elem.requestFullscreen().catch((err) => {
      console.log(err);
    });

  } else {

    document.exitFullscreen();
  }
}




// =====================================================
// 🎮 MAIN MENU
// =====================================================

const mainMenu =
  document.getElementById("mainMenu");

const playBtn =
  document.getElementById("playBtn");

const exitBtn =
  document.getElementById("exitBtn");


// =====================================================
// ▶️ PLAY BUTTON
// =====================================================

playBtn.addEventListener("click", async () => {

  playClick();

  started = true;

  // Hide menu
  mainMenu.style.display = "none";

  // Reset video
  introVideo.pause();

  introVideo.currentTime = 0;

  // Show intro
  introContainer.style.display = "flex";

  try {
    introMusic.currentTime = 0;

    introMusic.play().catch(() => {});

    await introVideo.play();

  } catch (err) {

    console.log(err);
  }
});


// =====================================================
// ❌ EXIT BUTTON
// =====================================================

exitBtn.addEventListener("click", () => {

  playClick();

  window.close();

  alert("You can now close the tab.");
});