const productImage = document.querySelector("#sofa");
const changeIcon = document.querySelector("#icon");

changeIcon.addEventListener("click", toggleImageToGif);

function toggleImageToGif() {
    if (changeIcon.classList.contains("active")){
        productImage.src = "src/imgs/sofa-animated.gif";
        changeIcon.src = "src/imgs/icon-close.svg"
        changeIcon.classList.remove('active')
    }else {
        productImage.src = "src/imgs/sofa.svg";
        changeIcon.src = "src/imgs/icon-360g.svg"
        changeIcon.classList.add("active")
    }
}