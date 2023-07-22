let h2 = document.querySelector("h1");
let btn = document.querySelector(".bir");
let btn2 = document.querySelector(".ikki");

let son = 0;

btn.addEventListener("click", () => {
  son++;
  h2.innerText = son;
});

btn2.addEventListener("click", () => {
  son = 0;
  h2.innerText = son;
});

// if(son == 0){
//     alert("Subhanalloh")
// } else if(son == 33){
//     alert("Alhamdulillah")
// } else if(son >= 66){
//     alert("AllohuAkbar")
// }
