//BAM-custom-panels.js
//holds all of the panels for the application. These are HIGHLY variable for each individual app


var searchIDs = []
var xx = [];
y = ['2', '4', '7']
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

var databaseBoxHtml = '<div id="databaseBox" class="nonMapOverlay"> <div id="databaseBoxTop"> <b> Manuscript Results </b>';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxClose" class="popupCloseCarte">x</div> <hr /></div>';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxContents" class="allow-scroll">';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxHolder" class="display darkText"><table id="bamMainTable" class="display darkText cell-border" width="100%"></table></div>';
databaseBoxHtml = databaseBoxHtml + '</div> </div>';

$("#panelHolder").append(databaseBoxHtml);
//this box holds the "popup" of the layer

overlayPanelsList.databaseBox = 'overlay';


// searchData contains the values selected by the user
//   {
//       'materials': ["Birchbark", "Palm Leaf"],
//       'languages': ...
//   }
var returns = [];
var val;
var searchData;
let paramTypes = ['languages', 'contexts', 'forms', 'materials'];
let keys = ['id', 'manuscript', 'languages', 'geopolitical_context', 'terminus_post_quem', 'terminus_ante_quem', 'forms', 'materials'];
let witnessKeys = ['id', 'author', 'terminus_post_quem', 'terminus_ante_quem', 'forms', 'materials', 'text'];
//  broken attempt to have slider govern date range box

//Math.round(((0.1*(slideVal^3))+(0.05*(slideVal^2))+(0.05*slideVal)))

function showValstart(slideVal) {
  var x = slideVal;
  var y = 0.5*(x*x)+x*0.5;
  document.getElementById('startDate').value = y;
  let startTag = document.getElementById('startDate');
	let endTag = document.getElementById('endDate');

	// Make sure two integers were input
  // Check whether the user selected BCE or CE
  let startSelect = document.getElementById('startNegOrPos');
  if (!startSelect.selectedIndex) startSelect.selectedIndex = 0;  // User didn't touch the selector -- default value is BCE
  let endSelect = document.getElementById('endNegOrPos');
  if (!endSelect.selectedIndex) endSelect.selectedIndex = 0;

  // Make the selected date positive or negative depending on user selected
  let start = startSelect.options[startSelect.selectedIndex].value === 'ce' ? parseInt(startTag.value, 10) : -parseInt(startTag.value, 10);
  let end = endSelect.options[endSelect.selectedIndex].value === 'ce' ? parseInt(endTag.value, 10) : -parseInt(endTag.value, 10);

  // Make sure the range is valid
  if (end <= start) {
    document.getElementById('dateValidCheck').style.opacity=1;
    return;

} else {
 document.getElementById('dateValidCheck').style.opacity=0;
 return;
}
}

function showValend(slideVal) {
  var x = slideVal;
  var y = 0.5*(x*x)+x*0.5;
  document.getElementById('endDate').value = y;
  let startTag = document.getElementById('startDate');
	let endTag = document.getElementById('endDate');


  // Check whether the user selected BCE or CE
  let startSelect = document.getElementById('startNegOrPos');
  if (!startSelect.selectedIndex) startSelect.selectedIndex = 0;  // User didn't touch the selector -- default value is BCE
  let endSelect = document.getElementById('endNegOrPos');
  if (!endSelect.selectedIndex) endSelect.selectedIndex = 0;

  // Make the selected date positive or negative depending on user selected
  let start = startSelect.options[startSelect.selectedIndex].value === 'ce' ? parseInt(startTag.value, 10) : -parseInt(startTag.value, 10);
  let end = endSelect.options[endSelect.selectedIndex].value === 'ce' ? parseInt(endTag.value, 10) : -parseInt(endTag.value, 10);

  // Make sure the range is valid
  if (end <= start) {
    document.getElementById('dateValidCheck').style.opacity=1;
    return;

} else {
 document.getElementById('dateValidCheck').style.opacity=0;
 return;
}
}

function clearParams() {
	// Clear the selected search parameters
	searchData = {
		'languages': [],
		'contexts': [],
		'forms': [],
		'materials': [],
		'startDate': null,
		'endDate': null
	};

	// Clear the display table
	for (let i in paramTypes) {
		document.getElementById('selected_' + paramTypes[i]).innerHTML = '';
	}
	document.getElementById('selected_date_range').innerHTML = '';
}

function toggleWitnessTable() {

  console.log("this works")
document.getElementById('witness').style.opacity = .1;

}

function readdParam(paramType, val) {
	console.log('something')
}

function removeParam(paramType, val) {

 switch (document.getElementById('b' + paramType + '_' + val).innerHTML) {
	case '<u>remove</u>':
	document.getElementById('i' + paramType + '_' + val).style.opacity = .4;
	document.getElementById('b' + paramType + '_' + val).innerHTML = '<u>add</u>';
	 let index = searchData[paramType].indexOf(val);
	 searchData[paramType].splice(index, 1);
	 break;
	case '<u>add</u>':
				searchData[paramType].push(val);
				document.getElementById('i' + paramType + '_' + val).style.opacity = 1;
				document.getElementById('b' + paramType + '_' + val).innerHTML = '<u>remove</u>';
	break;
	default:
	alert("Something went wrong");
}

}

function removeDateRange() {
	document.getElementById('selected_date_range').innerHTML = "";
	searchData['startDate'] = null;
	searchData['endDate'] = null;
}

function addDateRange() {
	let startTag = document.getElementById('startDate');
	let endTag = document.getElementById('endDate');

	// Make sure two integers were input
	if (!startTag.checkValidity() || !endTag.checkValidity()) {
		console.log("Invalid date entered");
		return;
	}

	// Check whether the user selected BCE or CE
	let startSelect = document.getElementById('startNegOrPos');
	if (!startSelect.selectedIndex) startSelect.selectedIndex = 0;  // User didn't touch the selector -- default value is BCE
	let endSelect = document.getElementById('endNegOrPos');
	if (!endSelect.selectedIndex) endSelect.selectedIndex = 0;

	// Make the selected date positive or negative depending on user selected
	let start = startSelect.options[startSelect.selectedIndex].value === 'ce' ? parseInt(startTag.value, 10) : -parseInt(startTag.value, 10);
	let end = endSelect.options[endSelect.selectedIndex].value === 'ce' ? parseInt(endTag.value, 10) : -parseInt(endTag.value, 10);

	// Make sure the range is valid
	if (end <= start) {
		console.log("Invalid date range entered");
		return;
	}

	// Add the dates to the search parameters and the display table
	searchData['startDate'] = start;
	searchData['endDate'] = end;

	let ul = document.getElementById('selected_date_range');
	let startText = start < 0 ? -start + " BCE" : start + " CE";
	let endText = end < 0 ? -end + " BCE" : end + " CE";
	ul.innerHTML = `<li>${startText} - ${endText} <button class="remove-button" onclick="removeDateRange()"><u>remove</u></button></li>`;
}

function addSearchParam(selectID) {
	// Get the selected dropdown item
	let selectTag = document.getElementById(selectID);
	if (!selectTag.selectedIndex) selectTag.selectedIndex = 0;
	let val = selectTag.options[selectTag.selectedIndex].innerText;
	if (val === "N/A") return;

	// Only add the value to the list if it was not previously selected
	if (!searchData[selectTag.id].includes(val)) {
		searchData[selectTag.id].push(val);
		document.getElementById('selected_' + selectTag.id).innerHTML += '<li>' + val + ' <button class="remove-button" onclick="removeParam(\'' + selectID + '\', \'' + val + '\')"><u>remove</u></button></li>';
	}
}

function search() {
  tableMain.clear();
	if (searchData['languages'].length < 1) return alert('You must select a language to search');
	let data = {'functionName': 'searchDB2'};

	// For each of the values the user selected, combine their arrays of
	// multiple-valued strings (e.g. "Palm Leaf; Birchbark; Leather") into one
	// large array for each paramType
	paramTypes.forEach(function(paramType) {
		data[paramType] = searchData[paramType];
	});

	if (searchData['startDate']) {
		data['startDate'] = searchData['startDate'];
		data['endDate'] = searchData['endDate'];
	}
	$.ajax({
		type: 'POST',
		url: 'https://s-lib024.lib.uiowa.edu/greekandlatincanons/eurasian_manuscripts/inc/api.php',
		data: data,
		success: function(res) {
			let results = JSON.parse(res);
xx = []
console.log(results.manuscripts);
searchIDs = results.manuscripts;

var formattedresults = searchIDs


for (i in searchIDs) {
  xx[i] = searchIDs[i].id;

}


// put it in BAM tables
tableMain.rows.add(results.manuscripts);
//tableMain.rows.add(formattedresults);
if (results['textual_witnesses'] != null) {
	//TODO I need to make a place for these		// Populate the witnesses table
			tableBody = document.getElementById('witness-results-table');
			tableBody.innerHTML = '';
			results['textual_witnesses'].forEach(function(item) {
				let tableRow = "<tr>";

				// Go through each column and add it to the table if the column is in witnessKeys
				witnessKeys.forEach(function(key) {
					tableRow += "<td>";
					// The paramTypes keys have array values
					if (paramTypes.includes(key)) {
						tableRow += item[key].join(", ");
					} else if (key == 'terminus_post_quem' || key == 'terminus_ante_quem') {
						tableRow += (item[key] < 0 ? (-item[key] + ' BCE') : (item[key] + ' CE'));
					} else {
						tableRow += item[key];
					}
					tableRow += "</td>";
				});
				tableRow += "</tr>";
				tableBody.innerHTML += tableRow;
			});
    }
// TODO that was the end of the witness table

		},
    error: function(XMLHttpRequest, errorThrown) {
        // console.log("Status: " + textStatus);
        console.log("Error: " + errorThrown);
        console.log(XMLHttpRequest);
      },
      complete: function(res) {
          //just resetting all the values, as spaces and nulls were driving the search PHP insane
          //get from form
          var id = [];
          var manuscript = [];
          var language = [];
          var locations = [];
          var geopolitical_context = [];
          var terminus_post_quem = [];
          var terminus_ante_quem = [];
          var form = [];
          var substrate_material = [];
          //redraw table
          tableMain.draw();
showHell();

    //show the table!
    $('#databaseBox').show();
  //  refreshMap();
      }
	});
}

function removeAll() {
//clearParams();
paramTypes.forEach(function(paramType) {
for (let index in returns[paramType]) {
	val = returns[paramType][index]
	document.getElementById('i' + paramType + '_' + val).style.opacity = .4;
	document.getElementById('b' + paramType + '_' + val).innerHTML = '<u>add</u>';
	 let ind = searchData[paramType].indexOf(val);
	 searchData[paramType].splice(ind, 1);
}
});
}

function removeAllparameter(paramType) {
  for (let index in returns[paramType]) {
    // menu.innerHTML += `<option>${returns[paramType][index]}</option>`;
    val = returns[paramType][index]
  document.getElementById('i' + paramType + '_' + val).style.opacity = .4;
  document.getElementById('b' + paramType + '_' + val).innerHTML = '<u>add</u>';
   let i = searchData[paramType].indexOf(val);
   searchData[paramType].splice(i, 1);
  		}
}

function addAllparameter(paramType) {

  for (let i in paramType) {
    document.getElementById('selected_' + paramType).innerHTML = '';
  };

		// Add the single-valued parameters to the options lists
		// let menu = document.getElementById(paramType);
		// menu.innerHTML = '';
		for (let index in returns[paramType]) {
			// menu.innerHTML += `<option>${returns[paramType][index]}</option>`;
			val = returns[paramType][index]
							searchData[paramType].push(val);
			document.getElementById('selected_' + paramType).innerHTML += '<li id="i'+ paramType + '_' + val + '">' + val + ' <button id="b' + paramType + '_' + val + '" class="remove-button" onclick="removeParam(\'' + paramType + '\', \'' + val + '\')"><u>remove</u></button></li>';


		}
		// if (menu.innerHTML === '') menu.innerHTML = `<option>N/A</option>`;

}

function addAlladdAll() {
	clearParams();

	paramTypes.forEach(function(paramType) {
		// Add the single-valued parameters to the options lists
		// let menu = document.getElementById(paramType);
		// menu.innerHTML = '';
		for (let index in returns[paramType]) {
			// menu.innerHTML += `<option>${returns[paramType][index]}</option>`;
			val = returns[paramType][index]
							searchData[paramType].push(val);
			document.getElementById('selected_' + paramType).innerHTML += '<li id="i'+ paramType + '_' + val + '">' + val + ' <button id="b' + paramType + '_' + val + '" class="remove-button" onclick="removeParam(\'' + paramType + '\', \'' + val + '\')"><u>remove</u></button></li>';


		}
		// if (menu.innerHTML === '') menu.innerHTML = `<option>N/A</option>`;
	});
}

$(document).ready(function() {
// console.log("hello")
clearParams();

$.ajax({
  type: 'POST',
  url: 'https://s-lib024.lib.uiowa.edu/greekandlatincanons/eurasian_manuscripts/inc/api.php',
  data: {'functionName': 'getUniqueValues2'},
  success: function(res) {
		// console.log(res);
		let results = JSON.parse(res);
returns = results
		paramTypes.forEach(function(paramType) {
			// Add the single-valued parameters to the options lists
			// let menu = document.getElementById(paramType);
			// menu.innerHTML = '';
			for (let index in results[paramType]) {
				// menu.innerHTML += `<option>${results[paramType][index]}</option>`;
				val = results[paramType][index]
								searchData[paramType].push(val);
				document.getElementById('selected_' + paramType).innerHTML += '<li id="i'+ paramType + '_' + val + '">' + val + ' <button id="b' + paramType + '_' + val + '" class="remove-button" onclick="removeParam(\'' + paramType + '\', \'' + val + '\')"><u>remove</u></button></li>';


			}
			// if (menu.innerHTML === '') menu.innerHTML = `<option>N/A</option>`;
		});


	}
});

//add new step here


});
