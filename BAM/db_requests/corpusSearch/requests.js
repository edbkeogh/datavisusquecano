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
		},
		error: function(err) {
			console.log(JSON.stringify(e));
		}
	});
}

// term: regex, word
// workList: [workIds],
// language: 'latin' or 'greek'
// lemmatized: true if searching the lemmatized corpus, false otherwise
// regex: true if regex, false otherwise
// success: a function to handle a successful request
// failure: a function to handle a returned error
function corpusOccurrences(term, workList, language, lemmatized, regex, success, failure) {
	var data = {
		'functionName': 'corpusOccurrences',
		'arguments': {
			'term': term
		},
		'regex': regex,
		'lemmatized': lemmatized
	};
	if (workList) {
		data['arguments']['workList'] = workList;
	}

	$.ajax({
		type: "POST",
		url: 'https://s-lib024.lib.uiowa.edu/greekandlatincanons/' + language + '/search_function/inc/api.php',
		data: data,
		success: success,
		error: failure
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

function handleResults1(results) { console.log("Object X needs to call this function and do Y with the reuslts " + JSON.stringify(results)); }
function handleResults2(results) { console.log(Object.keys($.parseJSON(results)));
var response = $.parseJSON(results)
console.log(response)
  $(function() {
      $.each(response, function(i, item) {
        console.log(workdata)
  // workLength = item.wordCount
  // values = item.occurrences
  var y = document.getElementById("term").value;
  // console.log(item[y])
  // console.log(item)
          var $tr = $('<tr>').append(
               $('<td>').text("Work ID: " + i + ", "),
              $('<td>').text("Document total word count: " + item.wordCount + ","),
              $('<td>').text("\"" + y + "\" , occurs " + item[y] + " times"))
          .appendTo('#results');
        })})
       }

function request5() {
	corpusOccurrences(
		'rex',
		['L108', 'L897'],
		'latin',
		true,
		false,
		handleResults1,
		function(err) { console.log(JSON.stringify(err)); }
	);
}
function request6() {
	corpusOccurrences(
		'rex',
		null,
		'latin',
		true,
		false,
		handleResults2,
		function(err) { console.log(JSON.stringify(err)); }
	);
}
