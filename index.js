function contactMe() {
  let myModal = document.querySelector(".myModalO");
  myModal.style.display = "block";
}

function closeModal() {
let myModal = document.querySelector(".myModalO");
let closeModal = document.querySelector(".closeModal");
  myModal.style.display = "none";
  myModal.style.transition = "1s";

}

function sendMessage() {
  let myModal = document.querySelector(".myModalO");
  let sendMessageBtn = document.querySelector(".sendMessageBtn");
  
  alert("Message Has Been Sent! :)");
  myModal.style.display = "none";
}
