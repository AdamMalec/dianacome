// https://www.youtube.com/watch?v=kYA4fAsKAxU
// https://codepen.io/GottZ/pen/XbxBXw?editors=1010

const eye = {};
const n_eye = document.querySelector(".eye");
const n_iris = n_eye.querySelector(".eye__iris");
const size = n_eye.clientWidth;

(window.onresize = () => {
  eye.x = n_eye.offsetLeft + size / 2;
  eye.y = n_eye.scrollHeight + size / 2;
})();

window.onmousemove = e => {
  const m = {
    x: e.clientX - eye.x,
    y: e.clientY - eye.y
  };
  const dist = Math.min(60, Math.max(-60, Math.sqrt(m.x**2 + m.y**2) / 6));
  const dir = Math.atan2(m.x, m.y);
  m.rx = dist * -Math.cos(dir);
  m.ry = dist * Math.sin(dir);

  n_iris.style.transform = `rotateX(${m.rx}deg) rotateY(${m.ry}deg) translateZ(98px)`;
}
