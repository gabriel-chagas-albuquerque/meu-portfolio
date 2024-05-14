const buttonBackToTop = document.querySelector(".btn-back-to-top")
window.addEventListener('scroll', (event) => {
    if(window.scrollY <= 0){
        buttonBackToTop.classList.remove("visible")
    }else{
        buttonBackToTop.classList.add("visible")
    }
})