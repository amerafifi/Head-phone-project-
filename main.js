

let bar = document.querySelector("header nav > i")
let navBar = document.querySelector("header nav ul")
let linkBar = document.querySelectorAll(".link")
let icons = document.querySelector(".icons")
console.log(linkBar
)
bar.onclick = function () {

    if (navBar.style.display === "flex") {
        navBar.style.display = "none"
    }
    else {
        navBar.style.display = "flex"

    }



}
