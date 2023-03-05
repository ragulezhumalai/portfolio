let burger= document.querySelector(".burger");
let Links = document.querySelector(".nbar");

burger.addEventListener('click',()=>{
  Links.classList.toggle("nbar-active")
})