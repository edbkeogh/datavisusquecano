// workIds: [workIds]
// k: integer: if not input, defaults to 100 on the server
//				0 < k < 101
// language: 'latin' or 'greek'
// lemmatized: true if searching lemmatized corpus, false otherwise
// removeStopWords: false to include stop words, true otherwise
// frequency: false to get a list of word counts, true otherwise
function topK(workIds, k, language, lemmatized, removeStopWords, frequency) {
	$.ajax({
		type: "POST",
		url: 'https://s-lib024.lib.uiowa.edu/greekandlatincanons/' + language + '/search_function/inc/api.php',
		data: {
			'functionName': 'topKWords',
			'workList': workIds,
			'k': k,
			'lemmatized': lemmatized,
			'removeStopWords': removeStopWords,
			'frequency': frequency
		},
		success: function(res) {
			console.log(JSON.stringify(res));
		},
		error: function(err) {
			console.log(JSON.stringify(e));
		}
	});
}

// term: regex, word
// searchBy: 'genre', 'century', 'location'
// 						[workIds],
// language: 'latin' or 'greek'
// lemmatized: true if searching the lemmatized corpus, false otherwise
// regex: true if regex, false otherwise
function termOccurrence(term, searchBy, language, lemmatized, regex) {
	$.ajax({
		type: "POST",
		url: 'https://s-lib024.lib.uiowa.edu/greekandlatincanons/' + language + '/search_function/inc/api.php',
		data: {
			'functionName': 'termOccurrence',
			'arguments': {
				'term': term,
				'searchBy': searchBy
			},
			'lemmatized': lemmatized,
			'regex': regex
		},
		success: function(res) {
			console.log(JSON.stringify(res));
			var col = [];
console.log(res[0]);
			  for (var i = 0; i < res.length; i++) {
			    for (var key in res[i]) {
			      if (col.indexOf(key) === -1) {
			        col.push(key);
			      }
			    }
			  }
			  //Create a table
			  var table = document.createElement("table");
			  //Create  table rows
			  var tr = table.insertRow(-1);
			  //Create table headers
			  for (var i = 0; i < col.length; i++) {
			    var th = document.createElement("th"); // TABLE HEADER.
			    th.innerHTML = col[i];
			    tr.appendChild(th);
			  }

			  //Add JSON data to table as rows
			  for (var i = 0; i < res.length; i++) {

			    tr = table.insertRow(-1);

			    for (var j = 0; j < col.length; j++) {
			      var tabCell = tr.insertCell(-1);
			      if (j !== 4) {
			        tabCell.appendChild(document.createTextNode(res[i][col[j]]));
			      } else {
			        for (var x = 0; x < res[i].contacts.length; x++) {
			          var firstName = res[i].contacts[x].first_name,
			            lastName = res[i].contacts[x].last_name,
			            position = res[i].contacts[x].position;

			          tabCell.appendChild(document.createTextNode(" " + firstName + " " + lastName + ", " + position));
			        }
			      }
			    }

			  }


			  var divContainer = document.getElementById("showData");
			  divContainer.innerHTML = "";
			  divContainer.appendChild(table);
		},
		error: function(err) {
			console.log(JSON.stringify(e));
		}
	});
}


function request1() {
	topK(
		['L108', 'L897'],
		5,
		'latin',
		false,
		false,
		false
	);
}

function request2() {
	topK(
		['L108', 'L897'],
		5,
		'latin',
		true,
		true,
		false
	);
}

function request3() {
	topK(
		['L108', 'L897'],
		8,
		'latin',
		false,
		false,
		true
	);
}

function request4() {
	termOccurrence(
		'tumulus',
		['L108', 'L897'],
		'latin',
		true,
		false
	);
}
