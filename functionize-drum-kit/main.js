// DRUM KIT (Modified Wes Bos JS30 Challenge)

// Listen for key events on the page
document.addEventListener("keydown", playSound);

// Event Function
function playSound(event) {
    let key = document.getElementById(event.keyCode);
    if(key == null) return;
    let audio = document.getElementById("a" + event.keyCode);
    audio.currentTime = 0;
    audio.play();
    key.classList.add("playing");
    setTimeout(() => { key.classList.remove("playing") }, 70);
}