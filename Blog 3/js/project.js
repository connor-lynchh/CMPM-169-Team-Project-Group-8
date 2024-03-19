function loadLocalStorage(){
    console.log("local storage start")
    const x = document.getElementById("SPECIAL"); //find a section with id: SPECIAL
    if(x){
        console.log("special text exists");
        if(localStorage.getItem("review3")){
            console.log("reveal special text");
            x.style.display = "block";
        }
        else{
            console.log("review button not clicked so hide special text")
            x.style.display = "none";
        }
    }
    else{
        console.log("No special text exists (ignore if you don't care)")
    }
}
