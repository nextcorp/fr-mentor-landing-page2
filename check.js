const validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
const text_input = document.querySelectorAll('input[type="email"]')
const submit_btn = document.querySelectorAll('button')
const msg_text = document.querySelectorAll(".input-status")

for (let i=0; i<submit_btn.length; i++) {
    submit_btn[i].addEventListener("click", (e) => {
        e.preventDefault()
        if (!validRegex.test(text_input[i].value)) {
            text_input[i].focus()
            msg_text[i].style.display = "block"
        } else {
            msg_text[i].style.display = "none"
        }
    })
}