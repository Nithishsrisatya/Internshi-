const pianoKeys = document.querySelectorAll(".piano-keys .key"),
      volumeSlider = document.querySelector(".volume-slider input"),
      keysCheckbox = document.querySelector(".keys-checkbox input");

let allKeys = [],
    activeKeys = {}; // Object to track pressed keys

// Function to play the sound for a given key
const playTune = (key) => {
    if (activeKeys[key]) return; // Prevent multiple sounds for the same key

    const audio = new Audio(`${key}.wav`);
    audio.loop = true;  // Loop the sound while the key is held down
    audio.volume = volumeSlider.value; // Set the initial volume from the slider
    audio.play();
    
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    
    activeKeys[key] = audio; // Store the audio reference for this key
};

// Function to stop the sound for a given key
const stopTune = (key) => {
    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    if (clickedKey) {
        clickedKey.classList.remove("active");
    }

    if (activeKeys[key]) {
        activeKeys[key].pause();
        activeKeys[key].currentTime = 0; // Reset audio to the start
        delete activeKeys[key]; // Remove from the active keys list
    }
};

// Adjust the volume for all currently playing sounds
const handleVolume = (e) => {
    const volume = e.target.value;
    Object.keys(activeKeys).forEach(key => {
        activeKeys[key].volume = volume; // Update volume for each active audio
    });
};

pianoKeys.forEach(key => {
    allKeys.push(key.dataset.key);
    key.addEventListener("mousedown", () => playTune(key.dataset.key));  // Play on mouse down
    key.addEventListener("mouseup", () => stopTune(key.dataset.key));    // Stop on mouse up
    key.addEventListener("mouseleave", () => stopTune(key.dataset.key)); // Stop when leaving the key
});

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"));
};

// Handle key press and play sound
const pressedKey = (e) => {
    const key = e.key.toLowerCase();
    if (allKeys.includes(key)) {
        playTune(key);
    }
};

// Handle key release and stop sound
const releasedKey = (e) => {
    const key = e.key.toLowerCase();
    if (allKeys.includes(key)) {
        stopTune(key);
    }
};

// Event listeners for keyboard interactions
document.addEventListener("keydown", pressedKey);
document.addEventListener("keyup", releasedKey);

// Event listener for volume slider
volumeSlider.addEventListener("input", handleVolume);

// Toggle visibility of the keys
keysCheckbox.addEventListener("click", showHideKeys);
