let buttons = document.querySelectorAll('button');
let buttonId;

var calculator = document.querySelector(".calculator");
var display = calculator.querySelector(".display");
var displayOld = display.querySelector("#dold");
var displayNew = display.querySelector("#dnew");
var memoriaGeral;


function getId (buttons){
  buttonId = buttons.id;
  console.log(buttonId);

 
 
 
 
  //Controller das operações aritméticas
  
  switch (buttonId)
  {
    case "igual":
      console.log("vai passar para memoria e mostrar no newDisplay e oldDisplay");
    break;
    case "sub":
      console.log("vai acrescentar - e mostrar no newDisplay");
    break;
    case "sum":
      console.log("vai acrescentar + e mostrar no newDisplay");
      soma(memoriaGeral, b)
    break;
    case "prod":
      console.log("vai acrescentar * e mostrar no newDisplay");
    break;
    case "div":
      console.log("vai acrescentar / e mostrar no newDisplay");
    break;
    case "del":
      console.log("vai deletar 1 campo da memoria e atualizar no newDisplay");
    break;
    case "ac":
      console.log("vai deletar a memoria e atualizar no newDisplay");
    break;
  }
  if(buttons.className == "number"|| buttons.className == "aritmetica")
  {
    displayNew.textContent += buttons.value;
  }
}


function soma (newNumber,memory){
  return memory + newNumber;
}