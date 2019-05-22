//BAM-custom-menu.js
//contains the custom main menu items for BAM

//BAM-custom-menu.js
//contains the custom main menu items for BAM

var mainMenuButtonHolder = {};

mainMenuButtonHolder.infoButton = '<button id="infoButton" class="accordion"><img src="images/open-iconic/info.svg" class="accordianImage" alt="info">&nbsp;&nbsp;&nbsp;&nbsp;Application Information</button>';

$( "#bamButtonHolder" ).append(mainMenuButtonHolder.infoButton);

 $('#infoButton').click(function() {
                $('.nonMapOverlay').hide(); //hide all the other overlays
                $('#infoBox').toggle(); //display ours
            });
            //
            // mainMenuButtonHolder.contributorsButton = '<button id="contributorsButton" class="accordion"><img src="images/open-iconic/info.svg" class="accordianImage" alt="info">&nbsp;&nbsp;&nbsp;&nbsp;Contributors and Sources</button>';
            //
            // $( "#bamButtonHolder" ).append(mainMenuButtonHolder.contributorsButton);
            //
            //  $('#contributorsButton').click(function() {
            //                 $('.nonMapOverlay').hide(); //hide all the other overlays
            //                $('#contributorsBox').toggle(); //display ours
            //             });

mainMenuButtonHolder.databaseLaunchButton = '<button id="databaseLaunchButton" class="accordion"><img src="images/open-iconic/list.svg" class="accordianImage" alt="info">&nbsp;&nbsp;&nbsp;&nbsp;Database Table</button>';

$( "#bamButtonHolder" ).append(mainMenuButtonHolder.databaseLaunchButton);

 $('#databaseLaunchButton').click(function() {
                $('.nonMapOverlay').hide(); //hide all the other overlays
               $('#databaseBox').toggle(); //display ours
            });


// <button id="infoButton" class="accordion" ><img src="images/list.svg" class="accordianImage" alt="info">&nbsp;&nbsp;&nbsp;&nbsp;Witness Table</button>
mainMenuButtonHolder.witnessLaunchButton = '<button id="witnessLaunchButton" class="accordion" ><img src="images/list.svg" class="accordianImage" alt="info">&nbsp;&nbsp;&nbsp;&nbsp;Hide Witness Table</button>'

$( "#bamButtonHolder" ).append(mainMenuButtonHolder.witnessLaunchButton);

$('#witnessLaunchButton').click(function() {

  $('.witness').hide(); //hide all the other overlays
 $('#witness').toggle(); //display ours

  switch(document.getElementById("witnessLaunchButton").innerHTML) {
  case "<img src=\"images/list.svg\" class=\"accordianImage\" alt=\"info\">&nbsp;&nbsp;&nbsp;&nbsp;Hide Witness Table":
  return document.getElementById("witnessLaunchButton").innerHTML = "<img src=\"images/list.svg\" class=\"accordianImage\" alt=\"info\">&nbsp;&nbsp;&nbsp;&nbsp;Show Witness Table";
// document.getElementById("witness")style.opacity=0
  break;
  case "<img src=\"images/list.svg\" class=\"accordianImage\" alt=\"info\">&nbsp;&nbsp;&nbsp;&nbsp;Show Witness Table":
  return document.getElementById("witnessLaunchButton").innerHTML = "<img src=\"images/list.svg\" class=\"accordianImage\" alt=\"info\">&nbsp;&nbsp;&nbsp;&nbsp;Hide Witness Table";
// document.getElementById("witness")style.opacity=1
  break;
  default:
    return false
      //  return feature.properties[categoryField] = 6;
    };
  // switch(document.getElementById("witness")style.opacity) {
  //   case 0:
  //   return 1
  //   break;
  //   case 1:
  //   return 0
  //   break;
  // }

// document.getElementById("witnessLaunchButton").innerHTML = "<img src=\"images/list.svg\" class=\"accordianImage\" alt=\"info\">&nbsp;&nbsp;&nbsp;&nbsp;Show Witness Table"
                $('.witness').hide(); //hide all the other overlays
               $('#witness').toggle(); //display ours
           });
