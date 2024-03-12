var navBtns = document.querySelectorAll(".navbar a");
var list = document.getElementById("navbar");
var btn = document.querySelector(".checkbtn")

var size = window.innerWidth;
var flag = false;
window.addEventListener("resize", () => {
    if (window.innerWidth < 840) {
        list.style.left = "200%";
        size = window.innerWidth;
        flag = false;
        for (var i = 0; i < navBtns.length; i++) {
            navBtns[i].addEventListener("click", () => {
                list.style.left = size + "px";
                flag = false;
            });
        }
        btn.addEventListener("click", buttons)
    } else {
        list.style.left = 0;
    }
});

function buttons() {
    if (flag) {
        flag = false;
        list.style.left = size + "px";
    } else {
        flag = true;
        list.style.left = size - 160 + "px";
        document.addEventListener("mousemove", (e) => {
            if (e.clientX < (size - 160) || e.clientY > 348) {
                list.style.left = size + "px";
                flag = false;
            }
        })
    }
}