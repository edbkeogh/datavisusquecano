/**
 * Combines the results of the queries into one array.
 * 
 * @param {object[][]} results		A list of containing lists of results from a database search.
 */
function handleResults(results) {
	console.log("Got all results");
	console.log(JSON.stringify(results));
	var newHTML = "<table>"
	results.forEach(function(set) {
		set.forEach (function(result) {
			newHTML += "<tr><td>" + result.author + "</td><td>" + result.author_location + "</td><td>" 
						+ result.birth + "</td><td>" + result.death + "</td><td>" + result.century + "</td><td>" 
						+ result.pleiades_id + "</td><td>" + result.work + "</td><td>" + result.genre1 + "</td></tr>\n";
		});
	});
	document.body.innerHTML += newHTML + "</table>";
}

/**
 * Sends a database search query to the server for the given language and parameters.
 *
 * @param {String} language				The language for the database to search.
 * @param {Any[][]} parameters		The parameters for the search query.
 * @param {object[][]} container	A container to hold results for simultaneous searches.
 * @param {Function} callback			The function to pass the search results to.
 * @param {number} index					0 or 1, defaults to -1 for one language.
																	The index of the container to put the results in.
 */
function sendSearch(language, parameters, container, callback, index=-1) {
	$.ajax({
		type: "POST",
		url: 'https://s-lib024.lib.uiowa.edu/greekandlatincanons/' + language + '/search_function/inc/api.php',
		data: {
			'functionName': 'searchDB',
			'arguments': parameters
		},
		success: function(res) {
			// Only one language is being searched
			if (index === -1) {
				console.log("One language selected");
				container.push(res);
				callback(container);
			}
			// All of the search results have been received
			else if ((index === 1 && container[0]) || (index === 0 && container[1])) {
				console.log("Both databases have been searched");
				if (res !== 'Query failed!<br />')  {
					container[index] = JSON.parse(res);
				}
				// Send the results to the callback
				callback(container);
			}
			// The other language still has not been received from the server
			else {
				console.log("Have only searched the " + language + " database");
				if (res !== 'Query failed!<br />')  {
					container[index] = JSON.parse(res);
				} else {
					// The other language's results will check for this index to be non-null
					container[index] = [];
				}
			}
		},
		error: function(e) {
			console.log(JSON.stringify(e));
		}
	});
}

/**
 * Structures the database search parameters and initiates the post request to the server.
 * One should not input both a non-empty centuries and a non-empty lifeDates.
 *
 * @param {String[]} authors				A list of the author names to search for.
 * @param {number[]} centuries			A list of the centuries to limit the search to (length = 2).
 * @param {number[]} lifeDates			A list of specific years to limit the search to (length = 2).
 * @param {String[]} locations			A list of the location to search for.
 * @param {String[]} works					A list of the work titles to search for.
 * @param {String[]} genres					A list of the genres to search for.
 * @param {String} lang1					The first language to query.
 * @param {String} lang2					The second language to query.
 */
function searchDB(authors, centuries, lifeDates, locations, works, genres, lang1, lang2=null) {
	var parameters = [
		authors,
		centuries,
		lifeDates,
		locations,
		works,
		genres
	]
	var container = Array();
	if (!lang2) {
		sendSearch(lang1, parameters, container, handleResults);
	} else {
		sendSearch(lang1, parameters, container, handleResults, 0);
		sendSearch(lang2, parameters, container, handleResults, 1);
	}
}

searchDB(['aesch', 'ullus'],[],[],[],[],[],"latin","greek");
// searchDB(['aesch'],[],[],[],[],[],"greek");
// searchDB(['ullus'],[],[],[],[],[],"latin");
