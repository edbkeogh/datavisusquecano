// Contains something of the form:
//   {
//       'materials': {
//	         'Birchbark': ["Palm Leaf; Birchbark; Leather", "Birchbark", "Birchbark; Paper"],
//           ...
//       },
//       'languages': ...
//   }
var possibleParams = {};

// Contains the values selected by the user
//   {
//       'materials': ["Birchbark", "Palm Leaf"],
//       'languages': ...
//   }
var searchData;
let paramTypes = ['languages', 'contexts', 'forms', 'materials'];
let keys = ['id', 'manuscript', 'language', 'geopolitical_context', 'terminus_post_quem', 'terminus_ante_quem', 'form', 'substrate_material'];
let witnessKeys = ['id', 'author', 'terminus_post_quem', 'terminus_ante_quem', 'form', 'substrate_material', 'text'];


/**
 * Takes a value from paramTypes and combines all of the arrays in possibleParams[paramTyp]
 * that match the values in searchData[paramType]. Returns a flattened array.
 */
function prepParams(paramType) {
	let paramSet = new Set();
	searchData[paramType].forEach(function(param) {
		possibleParams[paramType][param].forEach(function(str) {
			paramSet.add(str);
		});
	});
	return [...paramSet].flat();
}

/**
 * Takes the lists of values returned by the server and creates single-valued search
 * parameters that are stored in possibleParams.
 *
 * If responseJSON looks like:
 *     { 'materials': ["Palm Leaf; Birchbark; Leather", "Birchbark", "Birchbark; Paper"], 'languages': ... }
 * then possibleParams will look like:
 *     {
 *         'materials': {
 *             'Palm Leaf': ["Palm Leaf; Birchbark; Leather"],
 *             'Birchbark': ["Palm Leaf; Birchbark; Leather", "Birchbark", "Birchbark; Paper"],
 *             'Leather': ["Palm Leaf; Birchbark; Leather"],
 *             'Paper': ["Birchbark; Paper"]
 *         },
 *         'languages': ...
 *     }
 */
function handleResponse(responseJSON) {
	// Iterate over the different fields
	paramTypes.forEach(function(paramType) {
		let params = {};
		responseJSON[paramType].forEach(function(possibleParam) {
			possibleParam.split("; ").forEach(function(value) {
				params[value] = params[value] || [];
				params[value].push(possibleParam);
			});
		});
		// Add the param lists to the overall collection
		possibleParams[paramType] = params;
	});
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

function removeParam(paramType, val) {
	let index = searchData[paramType].indexOf(val);
	searchData[paramType].splice(index, 1);
	let ul = document.getElementById('selected_' + paramType);
	ul.removeChild(ul.childNodes[index]);
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
	if (searchData['languages'].length < 1) return alert('You must select a language to search');
	let data = {'functionName': 'searchDB'};

	// For each of the values the user selected, combine their arrays of
	// multiple-valued strings (e.g. "Palm Leaf; Birchbark; Leather") into one
	// large array for each paramType
	paramTypes.forEach(function(paramType) {
		data[paramType] = prepParams(paramType);
	});

	if (searchData['startDate']) {
		data['startDate'] = searchData['startDate'];
		data['endDate'] = searchData['endDate'];
	}
	$.ajax({
		type: 'POST',
		url: 'http://s-lib024.lib.uiowa.edu/greekandlatincanons/eurasian_manuscripts/inc/api.php',
		data: data,
		success: function(res) {
			let results = JSON.parse(res);

			// Populate the results table
			let tableBody = document.getElementById('results-table');
			tableBody.innerHTML = '';
			results['manuscripts'].forEach(function(item) {
				let tableRow = "<tr>";

				// Go through each column and add it to the table if the column is in keys
				keys.forEach(function(key) {
					tableRow += "<td>";
					if (key == 'terminus_post_quem' || key == 'terminus_ante_quem') {
						tableRow += (item[key] < 0 ? (-item[key] + ' BCE') : (item[key] + ' CE'));
					} else {
						tableRow += item[key];
					}
					tableRow += "</td>";
				});
				tableRow += "</tr>";
				tableBody.innerHTML += tableRow;
			});

			// Populate the witnesses table
			tableBody = document.getElementById('witness-results-table');
			tableBody.innerHTML = '';
			results['textual_witnesses'].forEach(function(item) {
				let tableRow = "<tr>";

				// Go through each column and add it to the table if the column is in witnessKeys
				witnessKeys.forEach(function(key) {
					tableRow += "<td>";
					if (key == 'terminus_post_quem' || key == 'terminus_ante_quem') {
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
	});
}

$(document).ready(function() {

clearParams();

$.ajax({
  type: 'POST',
  url: 'http://s-lib024.lib.uiowa.edu/greekandlatincanons/eurasian_manuscripts/inc/api.php',
  data: {'functionName': 'getUniqueValues'},
  success: function(res) {
		let results = JSON.parse(res);
		// Build possibleParams
		handleResponse(results);

		paramTypes.forEach(function(paramType) {
			// Add the single-valued parameters to the options lists
			let menu = document.getElementById(paramType);
			menu.innerHTML = '';
			for (let value in possibleParams[paramType]) {
				menu.innerHTML += `<option>${value}</option>`;
			}
			if (menu.innerHTML === '') menu.innerHTML = `<option>N/A</option>`;
		});
	}
});

});
