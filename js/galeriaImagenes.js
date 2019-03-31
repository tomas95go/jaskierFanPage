const next = document.getElementById("next");
const prev = document.getElementById("previous")
const imgNum = document.getElementsByClassName("Galery");

let num = 1;

const showImg = (num) => {
    let i;
    for (i = 0; i < imgNum.length; i++) {
        imgNum[i].style.display = "none"; 
      }
    imgNum[num-1].style.display = "block";
}

showImg(num)

const nextImg = event => {
    if (event.target.id === "next") {
        num = num + 1;
    } else {
        num = num -1;
    }
    if (num > imgNum.length) {
        num = 1;
    }
    if (num < 1) {
        num = imgNum.length;
    }
    showImg(num);
}

next.addEventListener("click", nextImg);
prev.addEventListener("click", nextImg);






