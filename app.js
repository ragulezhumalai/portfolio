let burger= document.querySelector(".burger");
let Links = document.querySelector(".nbar");

burger.addEventListener('click',()=>{
  Links.classList.toggle("nbar-active")
})


const root = document.documentElement;
const list = document.getElementsByClassName("theme");



Array.from(list).forEach(function (selectElement) {
  selectElement.addEventListener("change", function () {
    console.log(this.value);
    selectElement.style.setProperty("background-color",this.value)
    root.style.setProperty("--primary", this.value);
  });
});

root.style.setProperty("--primary", "rgba(140,0, 255, 0.996)");

// practice

function outer(n){
  return function inner(){
    return n++
  }
}

let call=outer(5)
console.log(call())
console.log(call())
console.log(call())