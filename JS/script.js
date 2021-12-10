const toggle = document.querySelector(".toggle")

function toggle_modes(event) {
    if (toggle.checked) {
        document.querySelector("body").className = "dark-theme"
    } else {
        document.querySelector("body").className = "light-theme"
    }
}

toggle.addEventListener("click", toggle_modes)