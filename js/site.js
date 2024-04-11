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
        reportMessage = "We sent teams to look into these houses and it turns out the author was most likely lying. The house we checked had a family of four living inside. Please do be more careful when reading other blogs as we will deduct from your pay for incorrect examinations.";
        break;
      case '4': // Deep in the Woods
        reportMessage = "Our sources tell us of other reports of the same incident occuring in these particular woods. While no one has still been able to identify the source of the sound we are still pursuing our leads until we have this anomaly discovered.";
        break;
      case '5': // Skinwalker
        reportMessage = "While sparse in the details we sent someone out to look into this skinwalker the author mentions. There is defenitely something afoot whether it be the skinwalker or something else but it will require more time to solve. Keep up the good work.";
        break;
      case '6': // Mayonaise national park
        reportMessage = "People talk about stories like these all the time. Usually it is a bear or some other animal that is hard to distinguish when it is nighttime. Do be more careful next time when reading these kinds of blogs as we will deduct pay and you might recieve a possible demotion";
        break;
      case '7': // Game review daily
        reportMessage = "While at first glance this blog may have been easily dismissed there have been a concerning number of other reports that have similar information. We are looking into shuting down blog posts like this one as a preventive measure so that no else decides to download this app. Keep looking out for these kinds of posts.";
        break;
      case '8': // Gold and Jules
        reportMessage = "This like many other blog posts recently have all been connected to this app, Viritual, that more and more people are finding and downloading. If you find other posts that are talking about this app be sure to flag the blog for review so we can take care of whatever is going on here.";
        break;
      case '9': // Ask Tech Support
        reportMessage = "It is good that you flagged this one for further review. We have been trying to gather as much information as we can about this Viritual app and the more evidence we can complie the better we can understand this phenomenon. Be on the look out for more blogs like this one.";
        break;
      default:
        reportMessage = "You've flagged a report. Our team will carefully review the details for supernatural activity.";
        break;
    }
  } else {
    switch(blogId) {
      case '1': //
        reportMessage = "You chose not to flag the S.S. Eternity blog. This could be an oversight if the phantoms manifest again.";
        break;
      case '2': // strange thing in studio
        reportMessage = "Not flagging the studio's strange occurrences might be judicious, assuming they're mere quirks of the mundane.";
        break;
      case '3': // The empty houses
        reportMessage = "Good work identifying that the author was making up this story. Continue doing work like this and you will become a natural in no time.";
        break;
      case '4': // Deep in the Woods
        reportMessage = "Perhaps you may have been to hasty to not flag this blog. We have gathered other accounts that tell of the same stories as this blog. Please pay more attention to the details. Your pay will be deducted accordingly";
        break;
      case '5': // Skinwalker
        reportMessage = "We checked in on the couple a few months after the post and they no longer seem to be living at the same house. In fact the whereabouts of the two our currently unknown. We can only speculate about what might have happened as the couple might have moved due to other circumstances. We might look into this matter further but for the moment you made the right decision.";
        break;
      case '6': // Mayonaise national park
        reportMessage = "This is one of those prime examples of the woods getting the better of people during the night. After contacting park rangers and listening to other peoples stories we can confirm that the authors story in this blog is mere conjecture.";
        break;
      case '7': // Game review daily
        reportMessage = "A number of other reports have had similar experinces like the author in this article. We have reason to beleieve that this author and others are taking part in the supernatural. Your pay has been deducted for overlooking this blog.";
        break;
      case '8': // Gold and Jules
        reportMessage = "It has come to our attention that blogs such as this one have some merit to them. There have been many other reports coming in that recount the same ideas. The main thing that is propping up is the word Viritual the name of this app that is leading to strange phenomena. Please review the blogs more closely next time as we continue to monitor the situation.";
        break;
      case '9': // Ask Tech Support
        reportMessage = "This is one of the blogs that should not be ignored. We have been collecting information about the app called Viritual and we have reasons to beleive the stories people tell in these posts are real. This blog along with other like it will be shut down to stop the app from receving further recognition on the internet. Your pay has been deducted due to the oversight you have made.";
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
  "Temporal distortions disrupt popular websites"
]

function ChangeMinorReports(){
  let whatTime = new Date();
	let tHour = whatTime.getHours();
  let x = document.getElementsByClassName("minorReport");  // Find the elements
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
      let randomNum = SpecialMinorReportCheck(tHour);
      if(specialList.includes(randomNum)){      //if it already exists then just put a normal minor report
        let randomNum = Math.floor(Math.random() * (reports.length - 0));
        while(minorList.includes(randomNum)){
          randomNum = Math.floor((Math.random() * (reports.length - 0)));
        }
        x[i].innerText = reports[randomNum];
        minorList.push(randomNum);
      }
      else{
        x[i].innerText = specialReports[randomNum];
        specialList.push(randomNum);
      }
    }
  }
}

function SpecialMinorReportCheck(time){ //checking if special report is possible
let num = Math.floor(Math.random() * (specialReports.length - 1));
  let timeOfDay = 0;
  if(time<6||time>=21){
  timeOfDay=4;
  }else if(time<=10){
    timeOfDay=1;
  }else if(time<=16){
    timeOfDay=2;
  }else{
    timeOfDay=3;
  }
  switch(num){
    case 0: //day
      if(timeOfDay==2){
        return num;
      }
      break;
    case 1:
      if(timeOfDay==2){
        return num;
      }
      break;
    case 2:
      if(timeOfDay==1){
        return num;
      }
      break;
    case 3:
      if(timeOfDay==1||timeOfDay==2){
        return num;
      }
      break;
    case 4:
      if(timeOfDay==3){
        return num;
      }
      break;
    case 5:
       if(timeOfDay==3){
        return num;
      }
      break;
    case 6:
       if(timeOfDay==3){
        return num;
      }
      break;
    case 7:
       if(timeOfDay==4){
        return num;
      }
      break;
    case 8:
       if(timeOfDay==4){
        return num;
      }
      break;
    case 9:
       if(timeOfDay==4){
        return num;
      }
      break;
    case 10:
      if(localStorage.getItem("review3")){
        return num;
      }
      break;
    case 11:
      if(localStorage.getItem("review6")){
        return num;
      }
      break;
    case 12:
      if(localStorage.getItem("read7")){
        return num;
      }
      break;
    case 13:
      if(localStorage.getItem("read8")){
        return num;
      }
      break;
    default:
      return 14;
  }
  return 14;
}

function main() { //happens before any html object is created
  console.log("site.js working");
  //localStorage.clear();
}

// let's get this party started
main();
