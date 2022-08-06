const options = document.querySelectorAll(".btn");
const yourChoice = document.querySelector(".urchoice");
const compChoice = document.querySelector(".computerchoice");
const result = document.querySelector(".result");
let cChoice, status = "";
let uChoice;
let randNumber;
let values = ["Rock","Paper","Scissors"];
options.forEach(option =>{
  option.addEventListener("click",(e=>{
    uChoice = e.target.value;
    setImage(uChoice,yourChoice);
    randNumber = Math.floor(Math.random()*3);
    cChoice = values[randNumber]
    setImage(cChoice,compChoice);
    findResult();
  }))
})

function setImage(choice,element){
  if(choice === "Rock"){
    element.setAttribute("src","https://toppng.com/uploads/preview/rock-paper-scissors-png-clipart-rock-paper-scissors-11563211310xieroclgnt.png")
  }
  if(choice === "Paper"){
    element.setAttribute("src","https://www.vhv.rs/dpng/d/490-4906131_rock-paper-scissors-clipart-rock-paper-scissors-png.png")
  }
  if(choice === "Scissors"){
    element.setAttribute("src","https://www.kindpng.com/picc/m/502-5025794_rock-paper-scissors-clipart-hd-png-download.png")
  }
}


function findResult(){
  if(uChoice === cChoice)
  {
    addStatus("draw")
  }
  if(uChoice === "Rock" && cChoice === "Paper" ){
    addStatus("lose")
  }
  if(uChoice === "Rock" && cChoice === "Scissors" ){
    addStatus("win")
  }
  if(uChoice === "Paper" && cChoice === "Rock" ){
    addStatus("win")
  }
  if(uChoice === "Paper" && cChoice === "Scissors" ){
    addStatus("lose")
  }
  if(uChoice === "Scissors" && cChoice === "Paper" ){
    addStatus("win")
  }
  if(uChoice === "Scissors" && cChoice === "Rock" ){
    addStatus("lose")
  }
}
function addStatus(status){
  if(status === "win"){
    result.innerHTML = "You Won"
    result.classList.remove("fail")
    result.classList.add("pass")
  }
  else if(status === "lose"){
    result.innerHTML = "You Lost"
    result.classList.remove("pass")
    result.classList.add("fail")
  }
  else{
    result.innerHTML = "Its a draw"
    result.classList.remove("fail")
    result.classList.add("pass")
  }
} 
