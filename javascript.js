const totop = document.querySelector(".up-icon");
window.addEventListener("scroll", () => {
    if(window.pageYOffset > 200){
        totop.classList.add("active");
    }else{
        totop.classList.remove("active");
    }
})