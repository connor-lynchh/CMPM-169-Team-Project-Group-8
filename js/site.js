// Constants

// Functions
function confirmFlag(btnID) { //when you click "Flag for review" but before actually flagging or canceling
  // Show the confirmation modal
  document.getElementById('confirmationModal').style.display = 'flex';

  // When the user confirms, flag the post
  document.getElementById('confirmFlag').onclick = function() {
      flagPost(btnID, true);
  };
  document.getElementById('cancelFlag').onclick = function() {
      flagPost(btnID, false);
  };
}

function flagPost(btnID, boolean) { //when you click on "flag" or "cancel"
  if(boolean){    //change colors
    localStorage.setItem(btnID, "true");
    const btn = document.getElementById(btnID);
    btn.style.backgroundColor = "#009F18";
    const row = document.getElementById("row" + btnID[6]);
    row.style.backgroundColor = "#E5E4E2";
    const row2 = document.getElementById("row" + btnID[6] + "a");
    row2.style.backgroundColor = "#E5E4E2";
  }
  document.getElementById('confirmationModal').style.display = 'none';
  generateReport(btnID.replace('review', ''), boolean);
}

function generateReport(blogId, flagged) {
  let reportMessage = '';

   if (flagged) {
    switch(blogId) {
      case '1': // S.S Eternity
        reportMessage = "Flagging the S.S. Eternity's report is prudent; its spectral passengers may warrant an investigation. ";
        break;
      case '2': // Strange thing in studio
        reportMessage = "The studio's anomalies marked by your flag could uncover a bizarre phenomenon worth our attention.";
        break;
      case '3': // The empty houses
        reportMessage = "Which blog will this go to who knows.";
        break;
      case '4': // Deep in the Woods
        reportMessage = "Which blog will this go to who knows.";
        break;
      case '5': // Skinwalker
        reportMessage = "Which blog will this go to who knows.";
        break;
      case '6': // Mayonaise national park
        reportMessage = "Which blog will this go to who knows.";
        break;
      case '7': // Game review daily
        reportMessage = "Which blog will this go to who knows.";
        break;
      case '8': // Gold and Jules
        reportMessage = "Which blog will this go to who knows.";
        break;
      case '9': // Ask Tech Support
        reportMessage = "Which blog will this go to who knows.";
        break;
      default:
        reportMessage = "You've flagged a report. Our team will carefully review the details for supernatural activity.";
        break;
    }
  } else {
    switch(blogId) {
      case '1': //
        reportMessage = "You chose not to flag the S.S. Eternity report. This could be an oversight if the phantoms manifest again.";
        break;
      case '2': // strange thing in studio
        reportMessage = "Not flagging the studio's strange occurrences might be judicious, assuming they're mere quirks of the mundane.";
        break;
      case '3': // The empty houses
        reportMessage = "Which blog will this go to who knows.";
        break;
      case '4': // Deep in the Woods
        reportMessage = "Which blog will this go to who knows.";
        break;
      case '5': // Skinwalker
        reportMessage = "Which blog will this go to who knows.";
        break;
      case '6': // Mayonaise national park
        reportMessage = "Which blog will this go to who knows.";
        break;
      case '7': // Game review daily
        reportMessage = "Which blog will this go to who knows.";
        break;
      case '8': // Gold and Jules
        reportMessage = "Which blog will this go to who knows.";
        break;
      case '9': // Ask Tech Support
        reportMessage = "Which blog will this go to who knows.";
        break;
      // Repeat for other blog numbers
      default:
        reportMessage = "You didn't flag this post. We'll consider it a closed chapter unless more evidence surfaces.";
        break;
    }
  }

  // You might want to use a more user-friendly way to display this message, like injecting it into the DOM
  // Inject the report message into the DOM
  document.getElementById('reportMessage').textContent = reportMessage;

  // Show the report box
  document.getElementById('reportBox').style.display = 'flex';
}

function closeReportBox() {
  // Hide the report box
  document.getElementById('reportBox').style.display = 'none';
}

function readButton(btnID){
  localStorage.setItem(btnID, "true");
  const btn = document.getElementById(btnID);
  btn.style.backgroundColor = '#A0A0A0';
}

function resetFlagsAndReads() {
  // Loop through all possible buttons and reset their styles
  for (let i = 1; i <= 9; i++) {
    // Reset "Flag for review" buttons and rows
    let reviewBtnID = "review" + i;
    let readBtnID = "read" + i;
    
    if (localStorage.getItem(reviewBtnID)) {
      localStorage.removeItem(reviewBtnID);
      const reviewBtn = document.getElementById(reviewBtnID);
      reviewBtn.style.backgroundColor = ""; // Reset to default color, or use your original color

      const row = document.getElementById("row" + i);
      row.style.backgroundColor = ""; // Reset to default color, or use your original color

      const rowA = document.getElementById("row" + i + "a");
      rowA.style.backgroundColor = ""; // Reset to default color, or use your original color
    }
    
    // Reset "Mark as Read" buttons
    if (localStorage.getItem(readBtnID)) {
      localStorage.removeItem(readBtnID);
      const readBtn = document.getElementById(readBtnID);
      readBtn.style.backgroundColor = ""; // Reset to default color, or use your original color
    }
  }

  // After resetting, reload the page to reflect changes
  // Note: Remove this line if you prefer to update the styles without reloading
  location.reload();
}

function LoadLocalStorage(){
  console.log("begin local storage")
  for(var i = 1; i <= 9; i++){ //changing review buttons
    let x = "review" + i;
    if(localStorage.getItem(x)){
      const btn = document.getElementById(x);
      btn.style.backgroundColor = "#009F18";

      //change color of row
      const row = document.getElementById("row" + i); //row next to buttons
      row.style.backgroundColor = "#E5E4E2";
      const row2 = document.getElementById("row" + i + "a"); //row with the buttons
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

let reports = [
  "Earthquakes across Malaysia cause strange ruptures that look like a maple tree",
  "Wild boars suddenly appear on Taiwan streets",
  "Russian snow flurry slows down finally",
  "Water bottle shortage",
  "North American alligator farm found and captured",
  "Missing kids found across continent",
  "Churches are outraged about popular new mobile game with “satanic influences”",
  "Surge in missing cats attributed to increase in coyote population",
  "San Francisco teens claim to have found an enormous skeleton on the beach",
  "Suspect in murder case claims to have been possessed by a demon",
  "Popular canned soup recalled after a new species of parasite was discovered within the soup cans",
  "Ouija Boards sold out after new Instagram trend",
  "New anti-aging cream linked to disorientation and strange hallucinations",
]

let specialReports = [  //time or report dependent
  "WARNING: DO NOT LEAVE THE BUILDING. A TEMPORAL DISTORTION HAS BEEN DETECTED IN YOUR AREA", //day
  "Doctors perplexed by occurrences of severe sunburns after only a few minutes spent outdoors", //day
  "Los Angeles residents concerned about a “purple traffic light” spotted along their morning commute", //morning
  "Craigslist adjusts policies to restrict sale of haunted items", //morning or afternoon
  "City council considers enacting curfew after an increase in missing persons cases", //evening
  "WARNING: DO NOT LEAVE THE BUILDING. AN UNIDENTIFIED SUPERNATURAL PRESENCE HAS BEEN DETECTED IN YOUR AREA", //evening
  "Gas leak in downtown subway station causes passengers to report “descending into Hell”", //evening
  "Trending TikTok videos claim to show “werewolf sightings”", //night
  "Victim of mugging claims to have been “attacked by a vampire”", //night
  "WARNING: DO NOT ANSWER YOUR DOOR. RELIABLE REPORTS INDICATE AN ACTIVE VAMPIRE IN YOUR AREA", //night
  "Child in Maryland accidentally causes police investigation", //flag Blog 3
  "National Park closed to the public after strange disappearances", //flag Blog 6
  "Critics of popular game “Viritual” claim it has damaged their phones", //read blog 7
  "Rise in schizophrenia diagnoses linked with popular game “Viritual”", //read Blog 8
]

function ChangeMinorReports(){
  let x=document.getElementsByClassName("minorReport");  // Find the elements
  let minorList = []; let specialList = [];
  for(var i = 0; i < x.length; i++){
    let whichType = Math.floor((Math.random() * (2 - 0))); //50% chance to use special report
    if(whichType == 0){
      let randomNum = Math.floor(Math.random() * (reports.length - 0));//get item from reportList using random number
      while(minorList.includes(randomNum)){      //keep finding new item if it already exists
        randomNum = Math.floor((Math.random() * (reports.length - 0)));
      }
      x[i].innerText = reports[randomNum];
      minorList.push(randomNum);
    }
    
    else{
      let randomNum = SpecialMinorReportCheck();
      while(specialList.includes(randomNum)){      //keep finding new item if it already exists
        randomNum = SpecialMinorReportCheck();
      }
      x[i].innerText = specialReports[randomNum];
      specialList.push(randomNum);
    }
    
  }
}

function SpecialMinorReportCheck(){ //checking if special report is possible
  let num = Math.floor(Math.random() * (specialReports.length - 0));
  switch(num){
    case 0: //day
      break;
    case 1:
      break;
    case 2:
      break;
    case 3:
      break;
    case 4:
      break;
    case 5:
      break;
    case 6:
      break;
    case 7:
      break;
    case 8:
      break;
    case 9:
      break;
    case 10:
      console.log("test review3")
      if(localStorage.getItem("review3")){
        console.log("success review3")
        return num;
      }
    case 11:
      console.log("test review6")
      if(localStorage.getItem("review6")){
        console.log("success review6")
        return num;
      }
      break;
    case 12:
      console.log("test read7")
      if(localStorage.getItem("read7")){
        console.log("success read7")
        return num;
      }
    case 13:
      console.log("test read8")
      if(localStorage.getItem("read8")){
        console.log("success read8")
        return num;
      }
    default:
      return num;
  }
  return num;
}

function main() { //happens before any html object is created
  console.log("site.js working");
  //localStorage.clear();
}

// let's get this party started
main();
