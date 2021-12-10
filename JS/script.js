// light and dark mode toggling

const toggle = document.querySelector(".toggle")

function toggle_modes(event) {
    if (toggle.checked) {
        document.querySelector("body").className = "dark-theme"
    } else {
        document.querySelector("body").className = "light-theme"
    }
}

toggle.addEventListener("click", toggle_modes)


// contact form submit button

const button = document.querySelector("#frm-btn")

button.addEventListener("click", function(e) {
    e.preventDefault()
    newFormObj = {}
    let msg = document.querySelector("#msg")
    let name = document.querySelector('#name')
    let email = document.querySelector('#email')
    
    newFormObj.email = email.value
    newFormObj.name = name.value
    newFormObj.message = msg.value
    
    console.log(newFormObj)    
})