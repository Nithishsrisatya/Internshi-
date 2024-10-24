const drums = document.querySelectorAll('.drum');
const keyboardKeys = ["b", "n", "v", "m", "g", "h", "j", "i", "t"];  // Typo fixed in variable name

// Adding event listeners for touch input
for (let i = 0; i < drums.length; i++) {
    drums[i].addEventListener("touchstart", () => play(drums[i]));
}

function play(drum) {
    const audio = document.getElementById(drum.dataset.note);
    audio.currentTime = 0;  // Fixed typo: 'currentTime'
    audio.play();
    
    drum.classList.add('drum-active');  // Apply active class when drum is played
    
    // Remove the 'drum-active' class after 50ms to simulate drum hit
    setTimeout(() => {
        drum.classList.remove('drum-active');  // Fixed the removal of the class
    }, 50);
}

// Handling keyboard input
document.addEventListener('keydown', e => {
    if (e.repeat) return;  // Prevent repeated keydown events when key is held down
    
    const key = e.key;
    const keyIndex = keyboardKeys.indexOf(key);
    
    if (keyIndex > -1) {
        play(drums[keyIndex]);
    }
});
