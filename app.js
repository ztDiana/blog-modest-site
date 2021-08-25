let btn_send_message=document.querySelector(".btn-send-message");
console.log(btn_send_message)

let modal=document.querySelector(".modal")
console.log(modal)

let close_btn=document.querySelector(".form-cansel")

btn_send_message.addEventListener("click", open)
close_btn.addEventListener("click",close)

function open(){
    modal.classList.add("show")
    modal.classList.remove("hidden")
}
function close(){
    modal.classList.remove("show")
    modal.classList.add("hidden")
}