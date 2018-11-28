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
			response = $.parseJSON(res);
console.log(response)
			$(function() {
			    $.each(response, function(i, item) {
workLength = item.wordCount
values = item.occurrences
							// var $tr = $('<tr>').append(
			        //      $('<td>').text("Work ID: " + i),
			        //     $('<td>').text(" Document total word count: " + item.wordCount),
			        //     $('<td>').text(", \"" + term + "\", occurs at indexes: " + item.occurrences)
			        // )
							// .appendTo('#results');
			        // console.log($tr.wrap('<p>').html());
			    });
					console.log(values)
refresh(values)
			});

		},
		error: function(err) {
			console.log(JSON.stringify(e));
		}
	});
}

function termOccurrence2(term, searchBy, language, lemmatized, regex) {
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
			response = $.parseJSON(res);
console.log(response)
			$(function() {
			    $.each(response, function(i, item) {
workLength = item.wordCount
values = item.occurrences
							// var $tr = $('<tr>').append(
			        //      $('<td>').text("Work ID: " + i),
			        //     $('<td>').text(" Document total word count: " + item.wordCount),
			        //     $('<td>').text(", \"" + term + "\", occurs at indexes: " + item.occurrences)
			        // )
							// .appendTo('#results');
			        // console.log($tr.wrap('<p>').html());
			    });
					console.log(values)
refresh2(values)
			});

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
