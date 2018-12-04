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

            mainMenuButtonHolder.contributorsButton = '<button id="contributorsButton" class="accordion"><img src="images/open-iconic/info.svg" class="accordianImage" alt="info">&nbsp;&nbsp;&nbsp;&nbsp;Contributors and Sources</button>';

            $( "#bamButtonHolder" ).append(mainMenuButtonHolder.contributorsButton);

             $('#contributorsButton').click(function() {
                            $('.nonMapOverlay').hide(); //hide all the other overlays
                           $('#contributorsBox').toggle(); //display ours
                        });

mainMenuButtonHolder.databaseLaunchButton = '<button id="databaseLaunchButton" class="accordion"><img src="images/open-iconic/magnifying-glass.svg" class="accordianImage" alt="info">&nbsp;&nbsp;&nbsp;&nbsp;Database Table</button>';

$( "#bamButtonHolder" ).append(mainMenuButtonHolder.databaseLaunchButton);

 $('#databaseLaunchButton').click(function() {
                $('.nonMapOverlay').hide(); //hide all the other overlays
               $('#databaseBox').toggle(); //display ours
            });
