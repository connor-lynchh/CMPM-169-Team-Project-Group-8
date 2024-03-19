function loadLocalStorage(){
  console.log("local storage start")
  const x = document.getElementById("SPECIAL"); //find a section with id: SPECIAL
  if(x){
      console.log("found special text");
      if(localStorage.getItem("review1")){
          console.log("reveal special text");
          x.style.display = "block";
      }
      else{
          console.log("review button not clicked so hide special text")
          x.style.display = "none";
      }
  }
  else{
      console.log("No special text found (ignore if you don't care)")
  }
}
