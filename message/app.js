const msg = document.querySelector('#msg');
const msgBtn = document.querySelector('#msgBtn');
const lastMsg = document.querySelector('#lastMsg');
lastMsg.value = "";

msgBtn.addEventListener('click', msgSend);

function msgSend() {
    if (msg.value === "") {
        alert("보내실 메시지를 입력해 주세요!");
        return false;
    }
    // console.log(msg.value);
    lastMsg.innerHTML = msg.value;
    msg.value = "";
}