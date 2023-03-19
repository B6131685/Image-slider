const rigth = document.querySelector(".right");
const left = document.querySelector(".left");
const arrImgs = document.getElementsByClassName("img__container");
const arrLi = document.getElementsByTagName("li");
const ul = document.querySelector("ul");
let ImgIndex = 0;
let nIntervId;
let disableClick = true;

const setShow = (select) => {
  for (let index = 0; index < arrImgs.length; index++) {
    if (index === select) {
      arrImgs[index].classList.remove("hidden");
      arrLi[index].classList.add("dot-active");
    } else {
      arrImgs[index].classList.add("hidden");
      arrLi[index].classList.remove("dot-active");
    }
  }
  clearInterval(nIntervId);
  start();
};

const slideToRight = () => {
  ImgIndex === arrImgs.length - 1 ? (ImgIndex = 0) : ImgIndex++;
  setShow(ImgIndex);
}

const start = () => (nIntervId = setInterval(slideToRight, 2000));

const initial = () => {
  for (let index = 0; index < arrImgs.length; index++) {
    let li = document.createElement("li");
    li.addEventListener("click", () => {
      ImgIndex = index;
      setShow(ImgIndex);
    });
    if (index === ImgIndex) {
      li.classList.add("dot-active");
    }
    ul.appendChild(li);
  }

  start();
};

initial();

left.addEventListener("click", () => {
   ImgIndex === 0 ? (ImgIndex = arrImgs.length - 1) : ImgIndex--;
   setShow(ImgIndex);
   setTimeout(()=>{},350)
});

rigth.addEventListener("click", slideToRight);
