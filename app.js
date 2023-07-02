//Menu bar action
let burger= document.querySelector(".burger");
let Links = document.querySelector(".nbar");

burger.addEventListener('click',()=>{
  Links.classList.toggle("nbar-active")
})
// Theme changing code------
const root = document.documentElement;
const list = document.getElementsByClassName("theme");
// Default color
root.style.setProperty("--primary", "rgba(140,0, 255, 0.996)");

Array.from(list).map((selected)=>{
  selected.addEventListener("change",()=>{
    console.log(selected.value)
    // for changing BG-color of selected option.
    selected.style.setProperty("background-color",selected.value)
root.style.setProperty("--primary",selected.value);})})