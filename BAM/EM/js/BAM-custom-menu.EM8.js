//BAM-custom-menu.js
//contains the custom main menu items for BAM

//BAM-custom-menu.js
//contains the custom main menu items for BAM

var mainMenuButtonHolder = {};

mainMenuButtonHolder.infoButton = '<button id="infoButton"><img src="images/open-iconic/info.svg" class="accordianImage" alt="info">&nbsp;&nbsp;About this site</button>';

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
//database table toggle
// TODO you can style this to the bottom with style="position:fixed;left:0px;bottom:0px;"
mainMenuButtonHolder.databaseLaunchButton = '<button id="databaseLaunchButton"><img src="images/open-iconic/list.svg" class="accordianImage" alt="info">&nbsp;&nbsp;Early Form Descriptions</button>';

$( "#bamButtonHolder" ).append(mainMenuButtonHolder.databaseLaunchButton);

 $('#databaseLaunchButton').click(function() {
                $('.nonMapOverlay').hide(); //hide all the other overlays
               $('#witnessPanel').toggle(); //display ours
            });


// <button id="infoButton" class="accordion" ><img src="images/list.svg" class="accordianImage" alt="info">&nbsp;&nbsp;&nbsp;&nbsp;Witness Table</button>
