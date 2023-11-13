// animacion
function onEntry(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show");
    }
  });
}
function onEntry2(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show-right");
    }
  });
}
function onEntry3(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show-left");
    }
  });
}
function onEntry4(entry) {
  entry.forEach((change) => {
    if (change.isIntersecting) {
      change.target.classList.add("element-show-up");
    }
  });
}

let options = {
  threshold: [0.5],
};
let observer = new IntersectionObserver(onEntry, options);
let observer2 = new IntersectionObserver(onEntry2, options);
let observer3 = new IntersectionObserver(onEntry3, options);
let observer4 = new IntersectionObserver(onEntry4, options);
let elements = document.querySelectorAll(".element-animation");
let elements2 = document.querySelectorAll(".element-animation-right");
let elements3 = document.querySelectorAll(".element-animation-left");
let elements4 = document.querySelectorAll(".element-animation-up");

for (let elm of elements) {
  observer.observe(elm);
}
for (let elm of elements2) {
  observer2.observe(elm);
}
for (let elm of elements3) {
  observer3.observe(elm);
}
for (let elm of elements4) {
  observer4.observe(elm);
}
