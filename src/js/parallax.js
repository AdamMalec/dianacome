// Only designed to work with one frame at the moment.
const root = document.documentElement;
const frame = document.querySelector(".parallax__container");
let scrollPos = null;

function parallaxFrame() {
  // Get position of frame
  const frameRect = frame.getBoundingClientRect();
  const viewportHeight = window.innerHeight;

  // Only calculate while the frame is visible
  if (frameRect.bottom <= 0 || frameRect.top >= viewportHeight) {
    window.requestAnimationFrame(parallaxFrame);
    return;
  }

  // Calculate how much of the frame is in view (0 to 1)
  let progress = (viewportHeight - frameRect.top) / (viewportHeight + frameRect.height);
  progress = Math.max(0, Math.min(1, progress)); // Keep between 0-1

  // Only update if value has changes enough, to prevent ALL the calls.
  if (Math.abs(progress - scrollPos) > 0.01) {
    // console.log(progress);
    root.style.setProperty("--scrollPos", progress);
    scrollPos = progress;
  }

  // Continue anim loop
  window.requestAnimationFrame(parallaxFrame);
}

// Initial Start
window.requestAnimationFrame(parallaxFrame);
