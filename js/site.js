// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen
  var elems = document.getElementsByClassName("flag-for-review");
  for (var i = 0; i < elems.length; i++) {
    elems[i].onclick = function() {
      var color = window.getComputedStyle(this, null)
                  .getPropertyValue("background-color");
      this.style.backgroundColor = color === "rgb(255, 255, 0)" 
                                  ? "rgb(255, 165, 0)" : "rgb(255, 255, 0)";
    };
  };
}

// let's get this party started
main();
