//BAM-custom-panels.js
//holds all of the panels for the application. These are HIGHLY variable for each individual app




//the attribute box holds attributes for the map selection
var attributeBoxHtml = '<div id="attributeBox" class="nonMapOverlay"> <div id="attributeBoxClose" class="popupCloseCarte">x</div> <div id="attributeBoxContents"></div> </div>';
$( "#panelHolder" ).append(attributeBoxHtml);
//this box holds the "popup" of the layer
overlayPanelsList.attributeBox = 'overlay';


var aboutBoxHtml = '<div id="infoBox" class="nonMapOverlay"> <b> Application Information </b>';
    aboutBoxHtml = aboutBoxHtml + '<div id="infoBoxClose" class="popupCloseCarte">x</div> <hr />';
    aboutBoxHtml = aboutBoxHtml + '<div id="infoBoxContent">';
    aboutBoxHtml = aboutBoxHtml + 'This is a development demonstration of some simple ICAAW functions.'
    aboutBoxHtml = aboutBoxHtml + ' Click the \"Database Table\" in this panel to see a table of works. '
    aboutBoxHtml = aboutBoxHtml + ' In addition to reading database information, you may click the reference number or catalogue entry field to open a new tab, or click a BAM Id button to send that work into the right hand panel.<br/>'
    aboutBoxHtml = aboutBoxHtml + 'The Iowa Canon of Classical Authors and Works is the most complete';
    aboutBoxHtml = aboutBoxHtml + ' list of Latin literature from its beginnings to the sixth century CE.';
    aboutBoxHtml = aboutBoxHtml + ' The goal is to include all known writings, whether they survive in full, in part, or have been completely lost.';
    aboutBoxHtml = aboutBoxHtml + ' For each work, all available information regarding author, title, place and date of composition, genre, status as poetry or prose, and as Christian or non-Christian, is collected, as well as other relevant metadata.  Paul Dilley is the PI of the Canon, Ryan Horne the lead developer.';
    aboutBoxHtml = aboutBoxHtml + ' The following students have contributed research to the Canon: Noah Anderson, Kenneth Elliott, Elijah Fleming, Tyler Fyotek, Sara Hales, Ed Keogh, Caitlin Marley, Peter Miller, Bob Morley, Daniel Munn, Echo Smith, Dana Spyridakos, Jeremy Swist, Ryan Tribble, Wenxuan Xu, Jonathan Young (data collection and analysis); Noah Anderson and Spencer Schmalz (development).';
	aboutBoxHtml = aboutBoxHtml + '</p>';
    aboutBoxHtml = aboutBoxHtml + ' The code and interface was built by <a href="https://rmhorne.org/" target="_blank">Ryan Horne</a>. Additional features are being developed by Ed Keogh and Noah Anderson.';
    aboutBoxHtml = aboutBoxHtml + '<span class="bottomContainer">';
    aboutBoxHtml = aboutBoxHtml + '<a href="https://bigancientmediterranean.wordpress.com/" target="_blank"><img src="images/BAM-icon.svg" alt="BAM Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Built with the <b><a href=" https://bigancientmediterranean.wordpress.com/" target="_blank">Big Ancient Mediterranean </a></b>framework.';
    aboutBoxHtml = aboutBoxHtml + '<br /> <a href="https://github.com/Big-Ancient-Mediterranean" target="_blank"><img src="images/githublogo.svg" alt="GitHub Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Get map data and code from our <b><a href="https://github.com/AWMC" target="_blank">GitHub </a></b>page.';
    aboutBoxHtml = aboutBoxHtml + '<br /></span></div> </div>';

//add to the panel holder
$( "#panelHolder" ).append(aboutBoxHtml);

//add to the list so we can perform functions on it
overlayPanelsList.infoBox = 'overlay';


//the database box holds a list of all the people in the application

var databaseBoxHtml = '<div id="databaseBox" class="nonMapOverlay"> <div id="databaseBoxTop"> <b> ICAAW Database (demo) </b>';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxClose" class="popupCloseCarte">x</div> <hr /></div>';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxContents" class="allow-scroll">';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxHolder" class="display darkText"><table id="bamMainTable" class="display darkText cell-border" width="100%"></table></div>';
databaseBoxHtml = databaseBoxHtml + '</div> </div>';

$("#panelHolder").append(databaseBoxHtml);
//this box holds the "popup" of the layer

overlayPanelsList.databaseBox = 'overlay';
