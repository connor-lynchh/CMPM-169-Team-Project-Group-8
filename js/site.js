// Constants

// Functions
//Brendan: reviewClick() and readClick() are not used for right now because I want to see if I can just use 1 function
function reviewClick(button){
  console.log("review");
  button.style.backgroundColor = "#009F18";
  /*
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1; //needs to be Number() otherwise it is a string
  } else {
    localStorage.clickcount = 0;
  }
  console.log(localStorage.clickcount);
  */
}

function readClick(button){
  console.log("read");
  button.style.backgroundColor = "#A0A0A0";
  /*
  if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount) + 1;
  } else {
    localStorage.clickcount = 0;
  }
  console.log(localStorage.clickcount);
  */
}

// btn must be this.id because it will remember the id of the button clicked
// on button click save the button's ID to local storage
function buttonClick(btnID, color){
  localStorage.setItem(btnID, "true");
  const btn = document.getElementById(btnID);
  btn.style.backgroundColor = color;
}

function loadLocalStorage(){
  console.log("begin local storage")
  if(localStorage.getItem("button1")){
    const btn = document.getElementById("button1");
    btn.style.backgroundColor = "#009F18";
  }
  if(localStorage.getItem("button2")){
    const btn = document.getElementById("button2");
    btn.style.backgroundColor = "#009F18";
  }
  if(localStorage.getItem("button3")){
    const btn = document.getElementById("button3");
    btn.style.backgroundColor = "#009F18";
  }
  if(localStorage.getItem("button4")){
    const btn = document.getElementById("button4");
    btn.style.backgroundColor = "#009F18";
  }
  if(localStorage.getItem("button5")){
    const btn = document.getElementById("button5");
    btn.style.backgroundColor = "#009F18";
  }
  if(localStorage.getItem("button6")){
    const btn = document.getElementById("button6");
    btn.style.backgroundColor = "#009F18";
  }
}

function main() { //happens before any html object is created
  console.log("site.js working");
  //localStorage.clear();
}

// let's get this party started
main();
