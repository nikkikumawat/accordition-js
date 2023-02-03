let para = document.querySelectorAll("p")
let icon = document.querySelectorAll("i")

for (let i = 0; i < icon.length; i++) {
    icon[i].onclick = function () {
        if (icon[i].classList.contains("fa-square-plus")) {
            icon[i].parentElement.nextElementSibling.classList.add("active")
            icon[i].classList.remove("fa-square-plus")
            icon[i].classList.add("fa-square-minus")
        }
        else {
            icon[i].parentElement.nextElementSibling.classList.remove("active")
            icon[i].classList.add("fa-square-plus")
            icon[i].classList.remove("fa-square-minus")
        }
    }

}