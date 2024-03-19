// Constants

// Functions

// on button click for READ button: save the button's ID to local storage and change color
function buttonClick(btnID, color){
  localStorage.setItem(btnID, "true");
  const btn = document.getElementById(btnID);
  btn.style.backgroundColor = color;
  /*
  if(btnID.includes("review")){ //if button clicked is "Mark for review": change color of row
    const row = document.getElementById("row" + btnID[6]);
    row.style.backgroundColor = "#E5E4E2";
    const row2 = document.getElementById("row" + btnID[6] + "a");
    row2.style.backgroundColor = "#E5E4E2";
    confirmFlag(btnID); // Call confirmFlag with the correct blog ID
  }
  */
}

function loadLocalStorage(){
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

function confirmFlag(btnID) { //when you click "Flag for review" but before actually flagging or canceling
  // Show the confirmation modal
  document.getElementById('confirmationModal').style.display = 'flex';

  // Parse the blog number from the button ID
  //const blogNumber = btnID.replace('review', '');

  // When the user confirms, flag the post
  document.getElementById('confirmFlag').onclick = function() {
      flagPost(btnID, true);
  };
  document.getElementById('cancelFlag').onclick = function() {
      flagPost(btnID, false);
  };
}

/*don't need to use this if it is just 1 line also "cancel" uses flagPost()
function closeModal() { //when the "confirmFlag() popup" disappears
  document.getElementById('confirmationModal').style.display = 'none';
}
*/

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
      case '1':
        reportMessage = "Flagging the S.S. Eternity's report is prudent; its spectral passengers may warrant an investigation.";
        break;
      case '2':
        reportMessage = "The studio's anomalies marked by your flag could uncover a bizarre phenomenon worth our attention.";
        break;
      // Repeat for other blog numbers
      case '3':
        reportMessage = "The studio's anomalies marked by your flag could uncover a bizarre phenomenon worth our attention.";
        break;
      default:
        reportMessage = "You've flagged a report. Our team will carefully review the details for supernatural activity.";
        break;
    }
  } else {
    switch(blogId) {
      case '1':
        reportMessage = "You chose not to flag the S.S. Eternity report. This could be an oversight if the phantoms manifest again.";
        break;
      case '2':
        reportMessage = "Not flagging the studio's strange occurrences might be judicious, assuming they're mere quirks of the mundane.";
        break;
        case '3':
        reportMessage = "Not flagging the studio's strange occurrences might be judicious, assuming they're mere quirks of the mundane.";
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



function main() { //happens before any html object is created
  console.log("site.js working");
  //localStorage.clear();
}

// let's get this party started
main();
