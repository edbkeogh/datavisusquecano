var searchData;
let paramTypes = ['languages', 'contexts', 'forms', 'materials'];
let keys = ['id', 'manuscript', 'language', 'geopolitical_context', 'terminus_ante_quem', 'terminus_post_quem', 'form', 'substrate_material'];

function clearParams() {
	searchData = {
		'languages': [],
		'contexts': [],
		'forms': [],
		'materials': [],
		'startDate': null,
		'endDate': null
	};
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
	if (!startTag.checkValidity() || !endTag.checkValidity()) {
		console.log("Invalid date entered");
		return;
	}

	let startSelect = document.getElementById('startNegOrPos');
	if (!startSelect.selectedIndex) startSelect.selectedIndex = 0;
	let endSelect = document.getElementById('endNegOrPos');
	if (!endSelect.selectedIndex) endSelect.selectedIndex = 0;

	let start = startSelect.options[startSelect.selectedIndex].value === 'ce' ? parseInt(startTag.value, 10) : -parseInt(startTag.value, 10);
	let end = endSelect.options[endSelect.selectedIndex].value === 'ce' ? parseInt(endTag.value, 10) : -parseInt(endTag.value, 10);

	if (end <= start) {
		console.log("Invalid date range entered");
		return;
	}

	searchData['startDate'] = start;
	searchData['endDate'] = end;

	let ul = document.getElementById('selected_date_range');
	let startText = start < 0 ? -start + " BCE" : start + " CE";
	let endText = end < 0 ? -end + " BCE" : end + " CE";
	ul.innerHTML = `<li>${startText} - ${endText} <button class="remove-button" onclick="removeDateRange()"><u>remove</u></button></li>`;
}

function addSearchParam(selectID) {
	let selectTag = document.getElementById(selectID);
	if (!selectTag.selectedIndex) selectTag.selectedIndex = 0;
	let val = selectTag.options[selectTag.selectedIndex].innerText;
	if (val === "N/A") return;
	if (!searchData[selectTag.id].includes(val)) {
		searchData[selectTag.id].push(val);
		document.getElementById('selected_' + selectTag.id).innerHTML += '<li>' + val + ' <button class="remove-button" onclick="removeParam(\'' + selectID + '\', \'' + val + '\')"><u>remove</u></button></li>';
	}
}

function search() {
	if (searchData['languages'].length < 1) return alert('You must select a language to search');
	let data = {'functionName': 'searchDB'};
	for (let i in paramTypes) {
		if (searchData[paramTypes[i]].length > 0) data[paramTypes[i]] = searchData[paramTypes[i]];
	}
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
			let tableBody = document.getElementById('results-table');
			tableBody.innerHTML = '';
			results.forEach(function(item) {
				let tableRow = "<tr>";
				keys.forEach(function(key) {
					tableRow += "<td>";
					if (key == 'terminus_ante_quem' || key == 'terminus_post_quem') {
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
		for (let paramType in results) {
			if (results[paramType].length < 1) continue;
			let menu = document.getElementById(paramType);
			menu.innerHTML = "";
			for (let i in results[paramType]) {
				let val = results[paramType][i];
				menu.innerHTML += `<option>${val}</option>`;
			}
		}
	}
});

});
