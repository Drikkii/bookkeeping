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

// Stereotyps - button

let myDiv = document.querySelector(".stereot-first-1");
let increaseButton = document.querySelector(".arr-1");
let myDiv2 = document.querySelector(".stereot-first-2");
let increaseButton2 = document.querySelector(".arr-2");
let myDiv3 = document.querySelector(".stereot-first-3");
let increaseButton3 = document.querySelector(".arr-3");
let increaseText1 = document.querySelector(".text-stereot-1");
let increaseText2 = document.querySelector(".text-stereot-2");
let increaseText3 = document.querySelector(".text-stereot-3");

increaseButton.addEventListener("click", function () {
  myDiv.classList.toggle("class-hight");
  increaseText1.classList.toggle("class-opasity");
  myDiv2.classList.remove("class-hight");
  increaseText2.classList.remove("class-opasity");
  myDiv3.classList.remove("class-hight");
  increaseText3.classList.remove("class-opasity");
});
increaseButton2.addEventListener("click", function () {
  myDiv.classList.remove("class-hight");
  increaseText1.classList.remove("class-opasity");
  myDiv3.classList.remove("class-hight");
  increaseText3.classList.remove("class-opasity");
  myDiv2.classList.toggle("class-hight");
  increaseText2.classList.toggle("class-opasity");
});
increaseButton3.addEventListener("click", function () {
  myDiv.classList.remove("class-hight");
  increaseText1.classList.remove("class-opasity");
  myDiv2.classList.remove("class-hight");
  increaseText2.classList.remove("class-opasity");
  myDiv3.classList.toggle("class-hight");
  increaseText3.classList.toggle("class-opasity");
});

// slider
// Исходные данные по слайдеру (const)
const sliderImages = document.querySelectorAll(".img1-div"),
  sliderLine = document.querySelector(".max-img-container"),
  sliderDots = document.querySelectorAll(".pagination-click"),
  sliderBtnNext = document.querySelector(".carret-rig"),
  sliderBtnPrev = document.querySelector(".carret-lef");

// Переменные
let sliderCount = 0,
  sliderWidth;

// Адаптивность слайдера
window.addEventListener("resize", showSlide);

// Кнопки листания слайдов вперед и назад
sliderBtnNext.addEventListener("click", nextSlide);
sliderBtnPrev.addEventListener("click", prevSlide);

// Автоматическое перелистывание слайдов
// setInterval(() => {
//     nextSlide()
// }, 3000);

// Функции ==================
// Задает нужную ширину картинки и sliderLine
function showSlide() {
  sliderWidth = document.querySelector(".img1").offsetWidth;
  sliderLine.style.width = sliderWidth * sliderImages.length + "px";
  //   sliderImages.forEach((item) => (item.style.width = sliderWidth + "px"));

  rollSlider();
}
showSlide();

// Перелистывает слайд вперед
function nextSlide() {
  sliderCount++;
  if (sliderCount >= sliderImages.length) sliderCount = 0;

  rollSlider();
  thisSlide(sliderCount);
}

// Перелистывает слайд назад
function prevSlide() {
  sliderCount--;
  if (sliderCount < 0) sliderCount = 4;

  rollSlider();
  thisSlide(sliderCount);
}

// Задает шаг перемещения слайдов
function rollSlider() {
  sliderLine.style.transform = `translateX(${-sliderCount * sliderWidth}px)`;
}

// Указывает как слайд по счету активен
function thisSlide(index) {
  sliderDots.forEach((item) => item.classList.remove("active-brown"));
  sliderDots[index].classList.add("active-brown");
}

// Вешает клик на brown
sliderDots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    sliderCount = index;
    rollSlider();
    thisSlide(sliderCount);
  });
});

// need help menu

let RegMenu = document.querySelector(".register"); // окно регистрации
let Regbackground = document.querySelector(".backgrey"); //серый фон в регестрации
let closeBtn = document.querySelector(".close-btn"); // кнопка закрития окна регистрации
let SignUpCard = document.querySelector(".sing-up");
let LoginReg = document.querySelector(".log-inreg");
let zayavka = document.querySelector(".zayavka");
let zayavka1 = document.querySelector(".zayavka1");
let zayavka2 = document.querySelector(".zayavka2");
let zayavka3 = document.querySelector(".zayavka3");

// Open zayavka
zayavka.addEventListener("click", function () {
  if (Regbackground.classList.contains("hidden")) {
    Regbackground.classList.remove("hidden");
    RegMenu.classList.remove("hidden");
    setTimeout(function () {
      Regbackground.classList.remove("visual");
    }, 500);
    setTimeout(function () {
      RegMenu.classList.remove("visual");
    }, 100);
  }
});
zayavka1.addEventListener("click", function () {
  if (Regbackground.classList.contains("hidden")) {
    Regbackground.classList.remove("hidden");
    RegMenu.classList.remove("hidden");
    setTimeout(function () {
      Regbackground.classList.remove("visual");
    }, 500);
    setTimeout(function () {
      RegMenu.classList.remove("visual");
    }, 100);
  }
});
zayavka2.addEventListener("click", function () {
  if (Regbackground.classList.contains("hidden")) {
    Regbackground.classList.remove("hidden");
    RegMenu.classList.remove("hidden");
    setTimeout(function () {
      Regbackground.classList.remove("visual");
    }, 500);
    setTimeout(function () {
      RegMenu.classList.remove("visual");
    }, 100);
  }
});
zayavka3.addEventListener("click", function () {
  if (Regbackground.classList.contains("hidden")) {
    Regbackground.classList.remove("hidden");
    RegMenu.classList.remove("hidden");
    setTimeout(function () {
      Regbackground.classList.remove("visual");
    }, 500);
    setTimeout(function () {
      RegMenu.classList.remove("visual");
    }, 100);
  }
});

// Меняем Крестики на цвет (сосед) в меню регистрации!
let One = document.getElementById("crossTwo");
document.getElementById("crossOne").addEventListener("mouseover", function () {
  One.style.background = "#ba55d3";
  this.addEventListener("mouseout", function () {
    One.style.background = "";
  });
});
let Two = document.getElementById("crossOne");
document.getElementById("crossTwo").addEventListener("mouseover", function () {
  Two.style.background = "#ba55d3";
  this.addEventListener("mouseout", function () {
    Two.style.background = "";
  });
});

// closing
Regbackground.addEventListener("click", function () {
  if (!Regbackground.classList.contains("hidden")) {
    Regbackground.classList.add("visual");
    RegMenu.classList.add("visual");
    setTimeout(function () {
      Regbackground.classList.add("hidden");
    }, 300);
    setTimeout(function () {
      RegMenu.classList.add("hidden");
    }, 300);
  }
});

closeBtn.addEventListener("click", function () {
  if (!Regbackground.classList.contains("hidden")) {
    Regbackground.classList.add("visual");
    RegMenu.classList.add("visual");
    setTimeout(function () {
      Regbackground.classList.add("hidden");
    }, 300);
    setTimeout(function () {
      RegMenu.classList.add("hidden");
    }, 300);
  }
});
