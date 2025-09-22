const playButtons = document.querySelectorAll('.play-button');
const audioPlayer = new Audio(); // Using one shared audio player
let currentlyPlayingButton = null;

playButtons.forEach(button => {
  button.addEventListener('click', function () {
    const audioSrc = button.getAttribute('data-audio');
    const icon = button.querySelector('i');

    if (!audioSrc) {
      console.warn('No data-audio found on this button.');
      return;
    }

    // If the same button is clicked again, toggle play/pause
    if (currentlyPlayingButton === button) {
      if (!audioPlayer.paused) {
        audioPlayer.pause();
        icon.classList.remove('fa-pause');
        icon.classList.add('fa-play');
      } else {
        audioPlayer.play();
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
      }
      return;
    }

    // Reset previous button's icon
    if (currentlyPlayingButton) {
      const prevIcon = currentlyPlayingButton.querySelector('i');
      prevIcon.classList.remove('fa-pause');
      prevIcon.classList.add('fa-play');
    }

    // Play new audio
    currentlyPlayingButton = button;
    audioPlayer.src = audioSrc;
    audioPlayer.play();

    icon.classList.remove('fa-play');
    icon.classList.add('fa-pause');
  });
});

// Reset icon when audio ends
audioPlayer.addEventListener('ended', function () {
  if (currentlyPlayingButton) {
    const icon = currentlyPlayingButton.querySelector('i');
    icon.classList.remove('fa-pause');
    icon.classList.add('fa-play');
    currentlyPlayingButton = null;
  }
});