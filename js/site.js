// Constants

// Functions

// on button click: save the button's ID to local storage and change color
function buttonClick(btnID, color){
  localStorage.setItem(btnID, "true");
  const btn = document.getElementById(btnID);
  btn.style.backgroundColor = color;
  if(btnID.includes("review")){ //if button clicked is "Mark for review": change color of row
    const row = document.getElementById("row" + btnID[6]);
    row.style.backgroundColor = "#E5E4E2";
    const row2 = document.getElementById("row" + btnID[6] + "a");
    row2.style.backgroundColor = "#E5E4E2";
  }
  
}

function loadLocalStorage(){
  console.log("begin local storage")
  for(var i = 1; i <= 9; i++){ //changing review buttons
    let x = "review" + i;
    if(localStorage.getItem(x)){
      const btn = document.getElementById(x);
      btn.style.backgroundColor = "#009F18";

      //change color of row
      const row = document.getElementById("row" + i);
      row.style.backgroundColor = "#E5E4E2";
      const row2 = document.getElementById("row" + i + "a");
      row2.style.backgroundColor = "#E5E4E2";
    }
  }

  for(var i = 1; i <= 9; i++){ //changing read buttons
    let x = "read" + i;
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
