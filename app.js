const items = document.querySelectorAll(".item");
const container = document.querySelector(".container");
let pressedMouse = false;

items.forEach((item) => {
  item.addEventListener("mousedown", (e) => {
    let scrolled = e.pageX - e.clientX;
    pressedMouse = true;
    container.classList.add("active");

    item.onmousemove = function (e) {
      if (pressedMouse == true) {
        scrolled = Number(e.movementX);
        container.scrollLeft += -5 * scrolled;
      }
    };
  });
});

function handleEndofDrag(e) {
  pressedMouse = false;
  e.target.getBoundingClientRect().left = e.target.offsetLeft;
  container.classList.remove("active");
}

container.addEventListener("mouseup", handleEndofDrag);
container.addEventListener("mouseleave", handleEndofDrag);
