// Cursor animations
const handCursor = document.querySelector(".custom-cursor-drag");
let mouseX = 0,
  mouseY = 0,
  posX = 0,
  posY = 0;

const cursorTimeline = gsap.timeline({ repeat: -1, duration: 0.02 });
cursorTimeline.eventCallback("onRepeat", function () {
  gsap.set(handCursor, {
    css: {
      top: mouseY,
      left: mouseX,
    },
  });
});
document.addEventListener("mousemove", (e) => {
  mouseX = e.pageX;
  mouseY = e.pageY;
});
const gridContainer = document.querySelector(".grid");
let imgCount = 1;
let limit;
while (imgCount <= 36) {
  // In order to not have a folder with dozens of images, the images will repeat after reaching the last (10th) one.
  // Might use an image API later instead.
  if (imgCount > 10) limit = 10;
  if (imgCount > 20) limit = 20;
  if (imgCount > 30) limit = 30;
  gridContainer.innerHTML += `
    <div class="img-wrapper">
      <img src="img/img-${
        imgCount > limit ? imgCount - limit : imgCount
      }.jpeg" />
    </div>
  `;
  imgCount++;
}
// Panzoom for dragging with your mouse around the screen
panzoom(document.querySelector(".grid"), {
  // Options to disable zooming with mouse scroll. Comment these out to enable zooming.
  minZoom: 1,
  maxZoom: 1,
});
