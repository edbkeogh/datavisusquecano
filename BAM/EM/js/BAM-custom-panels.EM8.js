//BAM-custom-panels.js
//holds all of the panels for the application. These are HIGHLY variable for each individual app
var tableWitness = $('#witness').DataTable({

    data: null,
    dom: 'Bfrtip',
    buttons: [
        'colvis', 'copy', 'csv','print'
    ],
    "pageLength": 5,
    columns: [
      {
        data: 'id',
        title: 'ID'
    },
    {
        data: 'author',
        title: 'Author'
    },
    {
        data: 'work',
        title: 'Work'
    },
    {
        data: 'forms',
        title: 'Form(s)'
    },
    {
        data: 'materials',
        title: 'Substrate(s)'
    },
    {
        data: 'terminus_post_quem',
        title: 'Earliest'
    },
    {
        data: 'terminus_ante_quem',
        title: 'Latest'
    },
    {
        data: 'text',
        title: 'Text'
    },

    ]
});

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
     aboutBoxHtml = aboutBoxHtml + 'This resource was planned as an outgrowth of the 2016-2018 Mellon-Sawyer seminar at the University of Iowa, “Cultural and Textual Exchanges: The Manuscript across Pre-modern Eurasia.”  The goal is to present a broad overview of the development of manuscript materials and formats, in a variety of languages, scripts, locations, and periods, by entering data from a number of representative manuscripts, with an emphasis on the earliest known examples of particular materials and formats across regions.  Users can search the database in the left-hand panel and interact with the results through the central geospatial interface, to explore the spread of materials, formats, scripts and languages over time; more metadata is available for individual manuscripts that are selected by user, and displayed in the right panel.  Finally, relevant textual passages about materials and formats are also included in the search results, and can be explored in the bottom panel.'
     aboutBoxHtml = aboutBoxHtml + '<br/><br/>Paul Dilley is the PI of the Global Manuscript Cultures site.  The software is based on the basic architecture established by Ryan Horne for the Big Ancient Mediterranean project, which has been extensively developed by Ed Keogh.  Data analysis has been conducted by Paul Dilley and Melissa Moreton.  In the future, manuscript entries based on research papers by University of Iowa undergraduates in Paul Dilley’s Judaism, Christianity, and Islam class will be entered, and credited in their respective entries. '
    aboutBoxHtml = aboutBoxHtml + '<span class="bottomContainer">';
    aboutBoxHtml = aboutBoxHtml + '<a href="https://bigancientmediterranean.wordpress.com/" target="_blank"><img src="images/BAM-icon.svg" alt="BAM Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Built with the <b><a href=" https://bigancientmediterranean.wordpress.com/" target="_blank">Big Ancient Mediterranean </a></b>framework.';
    aboutBoxHtml = aboutBoxHtml + '<br /> <a href="https://github.com/Big-Ancient-Mediterranean" target="_blank"><img src="images/githublogo.svg" alt="GitHub Logo" style="width:28px;height:28px;"></a>&nbsp;&nbsp;Get map data and code from our <b><a href="https://github.com/AWMC" target="_blank">GitHub </a></b>page.';
    aboutBoxHtml = aboutBoxHtml + '<br/><a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/"></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.';
    aboutBoxHtml = aboutBoxHtml + '<br /></span></div> </div>';

$( "#panelHolder" ).append(aboutBoxHtml);

overlayPanelsList.infoBox = 'overlay';

var witnessHTML = '<div id="witnessPanel" class="nonMapOverlay" style="overflow:auto;"> <b> Form Witness Table </b><br/><p>sources from antiquity that describe the form(s) that are included in the filter';
witnessHTML = witnessHTML + '<div id="witnessPanelClose" class="popupCloseCarte">x</div> <hr />';
witnessHTML = witnessHTML + '<div id="witnessPanelContents">';
witnessHTML = witnessHTML + '<table id="witness" style="cursor: auto;"><thead><tr><td>ID</td><td>Author</td><td>Term. Post</td><td>Term. Ante</td><td>Form</td><td>Substrate</td><td>Text</td></tr></thead>'
witnessHTML = witnessHTML + '<tbody id="witness-results-table"></tbody></table>'
// witnessHTML = witnessHTML + '<div id="witness-results-table" class="display darkText"><table id="bamMainTable" class="display darkText cell-border" width="100%"></table></div>';
witnessHTML = witnessHTML + '</div>';

$("#panelHolder").append(witnessHTML);

overlayPanelsList.witnessPanel = 'overlay';

var databaseBoxHtml = '<div id="databaseBox" > <div id="databaseBoxTop"> <b> Manuscript Results </b>';
// databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxClose" >x</div> <hr /></div>';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxContents">';
databaseBoxHtml = databaseBoxHtml + '<div id="databaseBoxHolder"><table id="bamMainTable" class="display darkText cell-border compact" width="100%"></table></div>';
databaseBoxHtml = databaseBoxHtml + '</div>';

$("#low-side-panel").append(databaseBoxHtml);
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

search();
}

function removeDateRange() {
	document.getElementById('selected_date_range').innerHTML = "";
	searchData['startDate'] = null;
	searchData['endDate'] = null;
  search();
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
  search();
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
witnessData = results.textual_witnesses;
var formattedresults = searchIDs


for (i in searchIDs) {
  xx[i] = searchIDs[i].id;

}


// put it in BAM tables
tableMain.rows.add(results.manuscripts);
//tableMain.rows.add(formattedresults);

console.log(results)
if (results['textual_witnesses'] != null) {
// var geoJSONtemplate = {"type": "Feature", "properties": {}, "geometry": { "type": "Point", "coordinates": [0,0] } }
witnessGeoJSON =
{
  "type": "FeatureCollection",
  "features": [
    // {
    //   "type": "Feature",
    //   "properties": {},
    //   "geometry": {
    //     "type": "Point",
    //     "coordinates": [
    //       45.52734375,
    //       41.11246878918088
    //     ]
    //   }
    // }
  ]
};

for (i in results.textual_witnesses) {
// console.log(results.textual_witnesses[i]);
  // var props = "";
  // var j = 0;
  // var len = results.textual_witnesses[i].length;
  // // var text = "";
  // for (; j < len; j++) {
  //   // console.log(results.textual_witnesses[i][j]);
  //
  // }

  var geoJSONtemplate = {"type": "Feature", "properties": {"author": results.textual_witnesses[i].author, "bibliography": results.textual_witnesses[i].bibliography, "content": results.textual_witnesses[i].content, "forms": results.textual_witnesses[i].forms, "id": results.textual_witnesses[i].id, "materials": results.textual_witnesses[i].materials, "place_of_composition": results.textual_witnesses[i].place_of_composition, "religious_affiliation": results.textual_witnesses[i].religious_affiliation, "terminus_ante_quem": results.textual_witnesses[i].terminus_ante_quem, "terminus_post_quem": results.textual_witnesses[i].terminus_post_quem, "text": results.textual_witnesses[i].text, "work": results.textual_witnesses[i].work}, "geometry": { "type": "Point", "coordinates": [results.textual_witnesses[i].longitude, results.textual_witnesses[i].latitude] } }
witnessGeoJSON.features.push(geoJSONtemplate);

// console.log(geoJSONtemplate);


};

      console.log(results.textual_witnesses);
      // for (i in results.textual_witnesses) {
      //   console.log(results.textual_witnesses[i].text)
      // };
      // results.textual_witnesses[1].text = "hi"
      // console.log(results.textual_witnesses[1].text);

  tableWitness.clear();
  tableWitness.rows.add(results.textual_witnesses);
  tableWitness.draw();
  // var wit_table = results.textual_witnesses;



// var wit_table = results.textual_witnesses;
	//TODO I need to make a place for these		// Populate the witnesses table
			// tableBody = document.getElementById('witness-results-table');
			// tableBody.innerHTML = '';


      // tableWitness.rows.add(wit_table);

			// results['textual_witnesses'].forEach(function(item) {
			// 	let tableRow = "<tr>";
			// 	// Go through each column and add it to the table if the column is in witnessKeys
			// 	witnessKeys.forEach(function(key) {
			// 		tableRow += "<td>";
			// 		// The paramTypes keys have array values
			// 		if (paramTypes.includes(key)) {
			// 			tableRow += item[key].join(", ");
			// 		} else if (key == 'terminus_post_quem' || key == 'terminus_ante_quem') {
			// 			tableRow += (item[key] < 0 ? (-item[key] + ' BCE') : (item[key] + ' CE'));
			// 		} else {
			// 			tableRow += item[key];
			// 		}
			// 		tableRow += "</td>";
			// 	});
			// 	tableRow += "</tr>";
			// 	tableBody.innerHTML += tableRow;
			// });
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
    // $('#databaseBox').show();
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
   document.getElementById('selected_date_range').innerHTML = "";
   searchData['startDate'] = null;
   searchData['endDate'] = null;
}
});
search();
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

search();
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
search();
}

$.fn.dataTable.render.ellipsis = function ( cutoff, wordbreak, escapeHtml ) {
    var esc = function ( t ) {
        return t
            .replace( /&/g, '&amp;' )
            .replace( /</g, '&lt;' )
            .replace( />/g, '&gt;' )
            // .replace( /\?/g, '&quest;' )
            .replace( /"/g, '&quot;' );
    };

    return function ( d, type, row ) {
      // if (type === 'display' && data != null) {
      //   data = data.replace(/<(?:.|\\n)*?>/gm, '');
      //   if(data.length > 50) {
      //     return '<span class=\"show-ellipsis\">' + data.substr(0, 50) + '</span><span class=\"no-show\">' + data.substr(50) + '</span>';
      //   } else {
      //     return data;
      //   }
      // } else {
      //   return data;
      // }
        // Order, search and type get the original data
        if ( type !== 'display' ) {
            return d;
        }

        if ( typeof d !== 'number' && typeof d !== 'string' ) {
            return d;
        }

        d = d.toString(); // cast numbers

        // if ( d.length < cutoff ) {
        //     return d;
        if ( d.length < cutoff ) {
            return d;

        }

        var shortened = d.substr(0, cutoff-1);

        // Find the last white space character in the string
        if ( wordbreak ) {
            shortened = shortened.replace(/\s([^\s]*)$/, '');
        }

        // Protect against uncontrolled HTML input - remove this to allow pictures
//         if ( escapeHtml ) {
//             shortened = esc( shortened );
//         }
// console.log(shortened);
        return '<span class=\"show-ellipsis\" title="'+esc(d)+'">'+shortened+'</span><span class=\"no-show\">' + d.substr(cutoff-1) + '</span>';
    };
};

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
search();
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
