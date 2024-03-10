// Constants

// Functions

// on button click: save the button's ID to local storage and change color
function buttonClick(btnID, color){
  localStorage.setItem(btnID, "true");
  const btn = document.getElementById(btnID);
  btn.style.backgroundColor = color;
}

function loadLocalStorage(){
  console.log("begin local storage")
  let revWord = "review";
  for(var i = 1; i <= 9; i++){ //changing review buttons
    let x = revWord + i;
    if(localStorage.getItem(x)){
      const btn = document.getElementById(x);
      btn.style.backgroundColor = "#009F18";
    }
  }

  let readWord = "read";
  for(var i = 1; i <= 9; i++){ //changing review buttons
    let x = readWord + i;
    if(localStorage.getItem(x)){
      const btn = document.getElementById(x);
      btn.style.backgroundColor = "#A0A0A0";
    }
  }
}

function main() { //happens before any html object is created
  console.log("site.js working");
  //localStorage.clear();
}

// let's get this party started
main();
