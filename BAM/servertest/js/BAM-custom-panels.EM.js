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
    aboutBoxHtml = aboutBoxHtml + ' In addition to reading database information, you may click the reference number or catalogue entry field to open a new tab, or the row to send that work into the right hand panel.<br/><br/>'
    // aboutBoxHtml = aboutBoxHtml + '<b>Information on authors and works is gathered from standard references, both print and online.</b>[should this be deleted?]<br/>';
    aboutBoxHtml = aboutBoxHtml + 'The Iowa Canon of Classical Authors and Works is the most complete';
    aboutBoxHtml = aboutBoxHtml + ' list of Latin literature from its beginnings to the sixth century,';
    aboutBoxHtml = aboutBoxHtml + ' and aims to develop text analysis functionality for works with open-access electronic editions.';
    aboutBoxHtml = aboutBoxHtml + ' Information on authors and works is collected from standard references, both print and online, including metadata relating to author, title, place and date of composition, genre, status as poetry or prose, and as Christian or non-Christian.<br/><br/>';
    // aboutBoxHtml = aboutBoxHtml + 'See below for a partial key to canonical references:<br/>';
    // aboutBoxHtml = aboutBoxHtml + 'CANT=Clavis Apocryphorum Novi Testamenti<br/>';
    // aboutBoxHtml = aboutBoxHtml + 'CGL=Corpus Grammaticorum Latinorum<br/>';
    // aboutBoxHtml = aboutBoxHtml + 'CPL=Clavis Patrum Latinorum<br/>';
    // aboutBoxHtml = aboutBoxHtml + 'DLT=digilibLT<br/>';
    // aboutBoxHtml = aboutBoxHtml + 'DPA=Dictionnaire des Philosophes Antiques<br/>';
    // aboutBoxHtml = aboutBoxHtml + 'FRH=Fragmentary Roman Historians<br/>';
    // aboutBoxHtml = aboutBoxHtml + 'PL=Patrologia Latina<br/><br/>';
    // aboutBoxHtml = aboutBoxHtml + 'See below for a list of electronic text sources by type:<br/>';
    aboutBoxHtml = aboutBoxHtml + 'Paul Dilley is the PI of the Canon, Ryan Horne the lead developer.';
    // aboutBoxHtml = aboutBoxHtml + ' The following students have contributed research to the Canon: Noah Anderson, Kenneth Elliott, Elijah Fleming, Tyler Fyotek, Sara Hales, Ed Keogh, Caitlin Marley, Peter Miller, Bob Morley, Daniel Munn, Echo Smith, Dana Spyridakos, Jeremy Swist, Ryan Tribble, Wenxuan Xu, Jonathan Young (data collection and analysis); Noah Anderson and Spencer Schmalz (development).';
	aboutBoxHtml = aboutBoxHtml + '</p>';
    aboutBoxHtml = aboutBoxHtml + ' The code and interface was built by <a href="https://rmhorne.org/" target="_blank">Ryan Horne</a>. Additional features are being developed by Ed Keogh and Noah Anderson.';
    aboutBoxHtml = aboutBoxHtml + '<span class="bottomContainer">';
    aboutBoxHtml = aboutBoxHtml + '<a href="https://bigancientmediterranean.wordpress.com/" target="_blank"><img src="images/BAM-icon.svg" alt="BAM Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Built with the <b><a href=" https://bigancientmediterranean.wordpress.com/" target="_blank">Big Ancient Mediterranean </a></b>framework.';
    aboutBoxHtml = aboutBoxHtml + '<br /> <a href="https://github.com/Big-Ancient-Mediterranean" target="_blank"><img src="images/githublogo.svg" alt="GitHub Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Get map data and code from our <b><a href="https://github.com/AWMC" target="_blank">GitHub </a></b>page.';
    aboutBoxHtml = aboutBoxHtml + '<br/><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.';
    aboutBoxHtml = aboutBoxHtml + '<br /></span></div> </div>';

//add to the panel holder
$( "#panelHolder" ).append(aboutBoxHtml);

//add to the list so we can perform functions on it
overlayPanelsList.infoBox = 'overlay';


//the database box holds a list of all the people in the application

var databaseBoxHtml = '<div id="databaseBox" class="nonMapOverlay"> <div id="databaseBoxTop"> <b> Eurasian Manuscripts CLSA 2127 </b>';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxClose" class="popupCloseCarte">x</div> <hr /></div>';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxContents" class="allow-scroll">';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxHolder" class="display darkText"><table id="bamMainTable" class="display darkText cell-border" width="100%"></table></div>';
databaseBoxHtml = databaseBoxHtml + '</div> </div>';

$("#panelHolder").append(databaseBoxHtml);
//this box holds the "popup" of the layer

overlayPanelsList.databaseBox = 'overlay';

//the database box holds a list of all the people in the application http://digiliblt.lett.unipmn.it   http://www.mlat.uzh.ch/MLS/     http://www.mlat.uzh.ch/MLS/xanfang.php?corpus=13
//
// var contributorsBoxHtml = '<div id="contributorsBox" class="nonMapOverlay"> <div id="contributorsBoxTop"> <b> Contributors and Sources</b>';
// contributorsBoxHtml = contributorsBoxHtml + '<div id="contributorsBoxClose" class="popupCloseCarte">x</div> <hr /></div>';
// contributorsBoxHtml = contributorsBoxHtml + '<div id="contributorsBoxContents" class="allow-scroll">';
// contributorsBoxHtml = contributorsBoxHtml + ' The following students have contributed research to the Canon: Noah Anderson, Kenneth Elliott, Elijah Fleming, Tyler Fyotek, Sara Hales, Ed Keogh, Caitlin Marley, Peter Miller, Bob Morley, Daniel Munn, Echo Smith, Dana Spyridakos, Jeremy Swist, Ryan Tribble, Wenxuan Xu, Jonathan Young (data collection and analysis); Noah Anderson and Spencer Schmalz (development).';
// contributorsBoxHtml = contributorsBoxHtml + '</p>';
// contributorsBoxHtml = contributorsBoxHtml + '<p>See below for a partial key to canonical references:<span class="tab">See below for a list of electronic text sources by type:</span></p>';
// contributorsBoxHtml = contributorsBoxHtml + '<p>CANT&nbsp;=&nbsp;Clavis Apocryphorum Novi Testamenti<span class="tab">Classical&nbsp;=&nbsp;<a href=\"http://www.perseus.tufts.edu/\" target=\"_blank\">Perseus Digital Library</a></span><br/>';
// contributorsBoxHtml = contributorsBoxHtml + 'CGL&nbsp;=&nbsp;Corpus Grammaticorum Latinorum<span class="tab">Late Antique/Non-Christian&nbsp;=&nbsp;<a href=\"http://digiliblt.lett.unipmn.it\" target=\"_blank\">digilibLT</a></span><br/>';
// contributorsBoxHtml = contributorsBoxHtml + 'CPL&nbsp;=&nbsp;Clavis Patrum Latinorum<span class="tab">Late Antique/Christian&nbsp;=&nbsp;<a href=\"http://www.mlat.uzh.ch/MLS/xanfang.php?corpus=2\" target=\"_blank\">Corpus Corporum (Patrologia Latina)</a></span><br/>';
// contributorsBoxHtml = contributorsBoxHtml + 'DLT&nbsp;=&nbsp;<a href=\"http://digiliblt.lett.unipmn.it\" target=\"_blank\">digilibLT</a><span class="tab">Grammarians&nbsp;=&nbsp;<a href=\"http://www.mlat.uzh.ch/MLS/xanfang.php?corpus=13\" target=\"_blank\">Corpus Grammaticorum Latinorum</a></span><br/>';
// contributorsBoxHtml = contributorsBoxHtml + 'DPA&nbsp;=&nbsp;Dictionnaire des philosophes antiques<span class="tab">Tokenization and lemmatization are achieved through programs from the <b><a href=\"http://cltk.org/\" target=\"_blank\">Classical Language Toolkit</a></b></span><br/>';
// contributorsBoxHtml = contributorsBoxHtml + 'FRH&nbsp;=&nbsp;Fragments of the Roman Historians<br/>';
// contributorsBoxHtml = contributorsBoxHtml + 'P&nbsp;=&nbsp;Packard Humanities Institute (via <a href=\"http://catalog.perseus.org/\" target=\"_blank\">Perseus Catalog</a>)<br/>';
// contributorsBoxHtml = contributorsBoxHtml + 'PL&nbsp;=&nbsp;Patrologia Latina<br/>';
// contributorsBoxHtml = contributorsBoxHtml + 'Stoa&nbsp;=&nbsp;Stoa Consortium (via <a href=\"http://catalog.perseus.org/\" target=\"_blank\">Perseus Catalog</a>)</p>';
// contributorsBoxHtml = contributorsBoxHtml + '<div id="contributorsBoxHolder" class="display darkText"><table id="bamMainTable" class="display darkText cell-border" width="100%"></table></div>';
// contributorsBoxHtml = contributorsBoxHtml + '</div> </div>';
//
// $("#panelHolder").append(contributorsBoxHtml);
// //this box holds the "popup" of the layer
//
// overlayPanelsList.contributorsBox = 'overlay';
